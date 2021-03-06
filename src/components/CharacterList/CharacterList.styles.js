import styled from 'styled-components';
import { device } from 'assets/styles/device';

export const StyledCharacterList = styled.ul`
  padding: 15px 0px;
  width: 100%;
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;
  z-index: 200;
  @media ${device.mobileLand} {
    margin-top: 12vw;
  }
`;
export const ListHeader = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.yellow};
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  @media ${device.tablet} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 25px;
  }
`;
