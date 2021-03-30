import React, { useContext } from 'react';
import { CharactersContext } from 'providers/CharactersProvider';
import { StyledButton } from './ShowMoreButton.styles';

const ShowMoreButton = () => {
  const { handleClick } = useContext(CharactersContext);

  return <StyledButton onClick={handleClick}>Show more characters</StyledButton>;
};

export default ShowMoreButton;
