import React, { useContext } from 'react';
import styled from 'styled-components';
import { CharactersContext } from '../../providers/CharactersProvider';

const StyledInput = styled.input`
  color: blue;
`;
const StyledForm = styled.form``;

const Search = () => {
  const { handleInputValue } = useContext(CharactersContext);

  return (
    <StyledForm>
      <StyledInput onChange={handleInputValue} placeholder="JEDI SEARCH"></StyledInput>
    </StyledForm>
  );
};

export default Search;
