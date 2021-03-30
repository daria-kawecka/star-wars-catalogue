import React from 'react';
import robot from 'assets/images/iconfinder_bb8.png';
import { StyledLoadingWrapper, LoadingImage, LoadingText } from './LoadingData.styles';

const LoadingData = ({ size }) => {
  return (
    <StyledLoadingWrapper size={size}>
      <LoadingImage size={size} src={robot} alt="bb-8" />
      <LoadingText size={size}>beep-boop-beep</LoadingText>
    </StyledLoadingWrapper>
  );
};

export default LoadingData;
