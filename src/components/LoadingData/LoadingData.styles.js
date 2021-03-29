import styled, { keyframes } from 'styled-components';

const move = keyframes`
from{
  transform: translateX(0);
}
  to{
    transform: translateX(70%);
  }
`;
export const StyledLoadingWrapper = styled.div`
  width: ${(props) => (props.size === 'big' ? '80vw' : '100%')};
  height: ${(props) => (props.size === 'big' ? '35vh' : '12vh')};
  margin-top: 5%;
  font-size: ${(props, theme) => (props.size === 'big' ? '25px' : '12px')};
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  animation: ${move} 4s alternate infinite;
  animation-play-state: running;
`;
export const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.light};
  width: 15%;
`;
export const LoadingImage = styled.img`
  height: 100%;
`;
