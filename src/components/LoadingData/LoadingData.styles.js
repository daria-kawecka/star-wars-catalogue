import styled, { keyframes } from 'styled-components';
import { device } from 'assets/styles/device';

const move = keyframes`
from{
  transform: translateX(0);
}
  to{
    transform: translateX(100%);
  }
`;
export const StyledLoadingWrapper = styled.div`
  width: ${(props) => (props.size === 'big' ? '80vw' : '100%')};
  height: ${(props) => (props.size === 'big' ? '35vh' : '12vh')};
  margin-top: ${(props) => (props.size === 'big' ? '15%' : '5%')};
  font-size: ${(props, theme) => (props.size === 'big' ? '25px' : '12px')};
  position: relative;
  right: 25px;
  top: 0;
  display: flex;
  justify-content: flex-start;
  animation: ${move} 4s alternate infinite;
  animation-play-state: running;
  @media ${device.tablet} {
    margin-top: ${(props) => (props.size === 'big' ? '25%' : '5%')};
    height: ${(props) => (props.size === 'big' ? '45vh' : '15vh')};
  }
  @media ${device.mobileLand} {
    height: ${(props) => (props.size === 'big' ? '35vh' : '25vh')};
  }
  @media ${device.mobileL} {
    height: ${(props) => (props.size === 'big' ? '38vh' : '15vh')};
    width: ${(props) => (props.size === 'big' ? '70vw' : '80%')};
    margin-top: ${(props) => (props.size === 'big' ? '35%' : '5%')};
  }
`;
export const LoadingText = styled.p`
  color: ${({ theme }) => theme.colors.light};
  text-transform: uppercase;
  position: absolute;
  left: 20%;
  top: 0;
  @media ${device.tabletL} {
    left: ${(props) => (props.size === 'small' ? '40%' : '45%')};
    width: ${(props) => (props.size === 'small' ? '35%' : '40%')};
    top: 5%;
  }
  @media ${device.mobileLand} {
    font-size: ${(props) => (props.size === 'small' ? '13px' : '20px')};
    width: 35%;
    left: ${(props) => (props.size === 'small' ? '45%' : '30%')};
  }
  @media ${device.mobileL} {
    font-size: ${(props) => (props.size === 'small' ? '10px' : '25px')};
    width: ${(props) => (props.size === 'small' ? '50%' : '30%')};
    left: ${(props) => (props.size === 'small' ? '43%' : '65%')};
  }
  @media ${device.mobileS} {
    font-size: ${(props) => (props.size === 'small' ? '8px' : '16px')};
    left: ${(props) => (props.size === 'small' ? '45%' : '65%')};
  }
`;
export const LoadingImage = styled.img`
  height: 100%;
  position: absolute;
  left: ${(props) => (props.size === 'small' ? '0px' : '-70px')};
  top: 0;
  @media ${device.tabletL} {
    left: ${(props) => (props.size === 'small' ? '0px' : '-50px')};
  }
  @media ${device.mobileLand} {
    left: ${(props) => (props.size === 'small' ? '30px' : '0px')};
  }
  @media ${device.mobileS} {
    left: 0px;
    height: ${(props) => (props.size === 'small' ? '100%' : '90%')};
  }
`;
