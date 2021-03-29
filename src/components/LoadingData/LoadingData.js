import React from 'react';
import star from 'assets/images/iconfinder_bb-8.png';
import { StyledLoadingWrapper, LoadingImage, LoadingText } from './LoadingData.styles';

const LoadingData = ({ size }) => {
  return (
    <StyledLoadingWrapper size={size}>
      <LoadingImage src={star} alt="bb-8" />
      <LoadingText>BEEP-BOOP-BEEP</LoadingText>
    </StyledLoadingWrapper>
  );
};

export default LoadingData;
