import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CharactersContext } from '../../providers/CharactersProvider';
import ShowMoreButton from '../ShowMoreButton/ShowMoreButton';
import CharacterListItem from '../CharacterListItem/CharacterListItem';

const StyledCharacterList = styled.ul`
  padding: 15px 0px;
  width: 35%;
  margin: 15px auto;
  border-radius: 15px;
  cursor: default;
`;
const ListHeader = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.yellow};
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`;
const CharacterList = () => {
  const { filteredCharacters, counter } = useContext(CharactersContext);
  const [offset, setOffset] = useState(0);

  return (
    <StyledCharacterList>
      <ListHeader>A long time ago in a galaxy far, far away...</ListHeader>
      {filteredCharacters.length
        ? filteredCharacters.slice(0, counter).map((character, index) => {
            return <CharacterListItem key={index} number={index} characterData={character} />;
          })
        : 'ładowanie'}
      <ShowMoreButton />
    </StyledCharacterList>
  );
};

export default CharacterList;
