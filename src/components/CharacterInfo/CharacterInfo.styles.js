import styled from 'styled-components';
import { device } from 'assets/styles/device';

export const InfoText = styled.p`
  padding: 3px;
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSize.s};
  transition: all 0.6s linear;
  &:hover {
    transform: scale(1.1);
  }
  @media ${device.mobileM} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
