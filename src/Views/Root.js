import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
// import StarfieldAnimation from 'react-starfield-animation';
import BigBangStarField from 'react-big-bang-star-field';
import CharacterProviders from 'providers/CharactersProvider';
import CharacterList from 'components/CharacterList/CharacterList';
import LoadingPage from 'components/LoadingPage/LoadingPage';
import AppBar from 'components/AppBar/AppBar';
const Root = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BigBangStarField
          numStars={260}
          maxStarSpeed={0.35}
          scale={1.5}
          style={{
            position: 'fixed',
            top: '50px',
            left: '0',
            width: '100vw',
            height: '100vh',
            zIndex: '-1',
          }}
          starColor={'255,255, 255'}
        />
        <CharacterProviders>
          <LoadingPage />
          <AppBar />
          <CharacterList />
        </CharacterProviders>
      </ThemeProvider>
    </div>
  );
};

export default Root;
