import React, { useContext } from 'react';
import styled from 'styled-components';
import { CharactersContext } from 'providers/CharactersProvider';

const StyledButton = styled.button`
  color: black;
`;
const ShowMoreButton = () => {
  const { handleClick } = useContext(CharactersContext);

  return <StyledButton onClick={handleClick}>Show more characters</StyledButton>;
};

export default ShowMoreButton;
