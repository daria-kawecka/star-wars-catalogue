import React, { useContext } from 'react';
import styled from 'styled-components';
import { CharactersContext } from 'providers/CharactersProvider';

const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.grey};
  outline: none;
  border: none;
  padding: 8px 25px;
  font-weight: 700;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.yellow};
`;
const StyledForm = styled.form`
  margin: 5vw;
`;

const Search = () => {
  const { handleInputValue } = useContext(CharactersContext);

  return (
    <StyledForm>
      <StyledInput onChange={handleInputValue} placeholder="JEDI SEARCH"></StyledInput>
    </StyledForm>
  );
};

export default Search;
