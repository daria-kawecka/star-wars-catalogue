import styled from 'styled-components';
export const StyledListElement = styled.li`
  color: ${({ theme }) => theme.colors.light};
  width: 35%;
  padding: 35px;
  list-style: none;
  text-decoration: none;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  &:nth-last-of-type(1) {
    border-bottom: none;
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
`;
export const GenderText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${(props) => (props.gender === 'male' ? '#325dde' : props.gender === 'female' ? 'pink' : '#888888')};
`;

export const ListButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.s};
  outline: none;
  padding: 5px 10px;
  margin-top: 2%;
  background-color: ${({ theme }) => theme.colors.yellowWithOpacity};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s ease-in;
  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
  }
`;
