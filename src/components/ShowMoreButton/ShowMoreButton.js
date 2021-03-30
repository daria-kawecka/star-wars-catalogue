import React, { useContext } from 'react';
import styled from 'styled-components';
import { CharactersContext } from 'providers/CharactersProvider';

const StyledButton = styled.button`
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
`;
const ShowMoreButton = () => {
  const { handleClick } = useContext(CharactersContext);

  return <StyledButton onClick={handleClick}>Show more characters</StyledButton>;
};

export default ShowMoreButton;
