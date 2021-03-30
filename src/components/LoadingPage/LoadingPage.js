import React, { useContext } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import BigBangStarField from 'react-big-bang-star-field';
import { LoadingWrapper, LoadingTextProgress, VaderImage, StarImage } from './LoadingPage.styles';
import vader from 'assets/images/darth-vader.png';
import star from 'assets/images/death-star.png';
import { CharactersContext } from '../../providers/CharactersProvider';

const LoadingPage = () => {
  const { loadingProgress, isReady } = useContext(CharactersContext);
  return (
    <>
      <CSSTransitionGroup transitionName="pageLeave" transitionLeave={true} transitionLeaveTimeout={500}>
        {loadingProgress < 100 || isReady === false ? (
          <LoadingWrapper>
            <BigBangStarField
              numStars={250}
              maxStarSpeed={0.35}
              scale={1.5}
              style={{
                position: 'absolute',
                width: '100vw',
                height: '100vh',
              }}
              starColor={'255,255, 255'}
            />
            <LoadingTextProgress>{loadingProgress} %</LoadingTextProgress>
            <VaderImage src={vader} alt="darth-vader" />
            <StarImage src={star} alt="death-star" />
          </LoadingWrapper>
        ) : null}
      </CSSTransitionGroup>
    </>
  );
};

export default LoadingPage;
