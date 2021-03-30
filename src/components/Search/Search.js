import React, { useContext } from 'react';
import { CharactersContext } from 'providers/CharactersProvider';
import { StyledForm, StyledInput } from './Search.styles';

const Search = () => {
  const { handleInputValue, searchPhrase } = useContext(CharactersContext);

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <StyledInput type="text" onChange={handleInputValue} placeholder="JEDI SEARCH" value={searchPhrase} />
    </StyledForm>
  );
};

export default Search;
