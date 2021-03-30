import styled, { keyframes } from 'styled-components';
import { device } from 'assets/styles/device';

const transitionName = `pageLeave`;
const appearDuration = 1000;
export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  overflow: -moz-scrollbars-none;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  background-color: #151414;
  &.${transitionName}-leave.${transitionName}-leave-active {
    opacity: 0;
    transition: opacity 1000ms ease-in;
  }

  &.${transitionName}-leave-active {
    opacity: 0;
    transition: all ${appearDuration}ms ease-out;
  }
`;

export const VaderAnim = keyframes`
  from {
    transform:scale(1) translate(0);
  }
  to {
    transform: scale(1) translate(70px);
  }
`;

export const VaderImage = styled.img`
  position: absolute;
  bottom: 0;
  right: -30px;
  height: 55%;
  animation: ${VaderAnim} 1.5s alternate forwards infinite;
  @media ${device.tabletL} {
    height: 40%;
    right: -50px;
  }
  @media ${device.mobileL} {
    height: 35%;
    right: -30px;
  }
  @media ${device.mobileLand} {
    height: 55%;
    right: -60px;
  }
`;
const deathStarAnim = keyframes`
  from {
    transform:scale(1) translateX(0) translateY(0);
  }
  to {
    transform: scale(1.2) translateX(55px) translateY(30px);
  }
`;
export const StarImage = styled.img`
  position: absolute;
  top: 25px;
  left: 45px;
  height: 35%;
  animation: ${deathStarAnim} 3s alternate forwards infinite;
  @media ${device.tabletL} {
    height: 25%;
    left: 30px;
  }
  @media ${device.mobileL} {
    height: 15%;
    left: 10px;
  }
  @media ${device.mobileLand} {
    height: 25%;
    left: 5px;
    top: 5px;
  }
`;

export const LoadingTextProgress = styled.p`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSize.l};
  text-shadow: 0px 0px 15px ${({ theme }) => theme.colors.yellow};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;
