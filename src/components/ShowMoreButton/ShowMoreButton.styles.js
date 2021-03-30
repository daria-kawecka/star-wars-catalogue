import styled from 'styled-components';
import { device } from 'assets/styles/device';

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.grey};
  outline: none;
  border: none;
  padding: 8px 25px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.yellow};
  margin-top: 2%;
  transition: all 0.4s linear;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.dark};
    background-color: ${({ theme }) => theme.colors.light};
  }
  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.s};
    padding: 8px 15px;
  } ;
`;
