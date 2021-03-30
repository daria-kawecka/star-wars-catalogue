import React from 'react';
import robot from 'assets/images/iconfinder_bb8.png';
import { StyledLoadingWrapper, LoadingImage, LoadingText } from './LoadingData.styles';

const LoadingData = ({ size }) => {
  return (
    <StyledLoadingWrapper size={size}>
      <LoadingImage src={robot} alt="bb-8" />
      <LoadingText>beep-boop-beep</LoadingText>
    </StyledLoadingWrapper>
  );
};

export default LoadingData;
