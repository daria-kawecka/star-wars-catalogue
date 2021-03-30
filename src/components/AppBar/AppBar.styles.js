import styled from 'styled-components';
import { device } from 'assets/styles/device';

export const StyledAppBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  box-shadow: 0px 0px 10px 2px #e3e111;
  z-index: 1;
  opacity: 1;
  @media ${device.mobileL} {
    height: 10vh;
  }
  @media ${device.mobileLand} {
    height: 8vw;
  }
`;
export const StyledAppBarText = styled.p`
  justify-items: flex-start;
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 35px;
  @media ${device.mobileLand} {
    font-size: 20px;
  }
  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 20px;
  }
  @media ${device.mobileS} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
