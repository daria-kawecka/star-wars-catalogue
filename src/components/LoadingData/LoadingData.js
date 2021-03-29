import React from 'react';
import star from 'assets/images/iconfinder_bb-8.png';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
from{
  transform: translateX(0);
}
  to{
    transform: translateX(70%);
  }
`;
const StyledLoadingWrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.size === 'big' ? '35vh' : '12vh')};
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  animation: ${move} 2s alternate infinite;
  animation-play-state: running;
  overflow: hidden;
  margin-top: 5%;
  font-size: ${(props, theme) => (props.size === 'big' ? '25px' : '12px')};
`;
const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.light};
  width: 15%;
`;
const LoadingImage = styled.img`
  height: 100%;
`;

const LoadingData = ({ size }) => {
  return (
    <StyledLoadingWrapper size={size}>
      <LoadingImage src={star} alt="bb-8" />
      <LoadingText>BEEP-BOOP-BEEP</LoadingText>
    </StyledLoadingWrapper>
  );
};

export default LoadingData;
