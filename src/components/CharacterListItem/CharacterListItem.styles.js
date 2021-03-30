import styled from 'styled-components';
import { device } from 'assets/styles/device';

export const StyledListElement = styled.li`
  color: ${({ theme }) => theme.colors.light};
  width: 35vw;
  padding: 35px;
  list-style: none;
  text-decoration: none;
  margin: 30px 0px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 15px;
  box-shadow: 0 0 1px 2px #efc34a, 0 0 12px 7px #e3e111;
  position: relative;
  top: 0;
  overflow: hidden;
  @media ${device.tablet} {
    width: 45vw;
  }
  @media ${device.mobileL} {
    width: 60vw;
    padding: 20px;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: 15px;
  transition: all 0.6s linear;
  &:hover {
    transform: scale(1.05);
  }
  @media ${device.mobileL} {
    font-size: 18px;
    padding: 5px;
  }
`;
export const GenderText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${(props) => (props.gender === 'male' ? '#3355cd' : props.gender === 'female' ? 'pink' : '#888888')};
  transition: all 0.6s linear;
  &:hover {
    transform: scale(1.1);
  }
  @media ${device.mobileL} {
    font-size: 18px;
    padding: 5px;
  }
`;
export const TextNumber = styled.p`
  color: ${({ theme }) => theme.colors.yellowWithOpacity};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: left;
  position: absolute;
  top: 15px;
  left: 25px;
  @media ${device.mobileL} {
    top: 10px;
    left: 15px;
  }
  @media ${device.mobileM} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
export const ListButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.s};
  outline: none;
  padding: 5px 10px;
  margin-top: 2%;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s ease-in;
  &:hover {
    background-color: ${({ theme }) => theme.colors.yellowWithOpacity};
  }
  @media ${device.mobileM} {
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 5px 8px;
    margin: 2% 0 4% 0;
  }
`;
