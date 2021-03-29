import React, { useContext } from 'react';
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
  const { characters } = useContext(CharactersContext);
  const { counter } = useContext(CharactersContext);
  console.log(counter);
  return (
    <StyledCharacterList>
      <ListHeader>A long time ago in a galaxy far, far away...</ListHeader>
      {characters.slice(0, counter).map((character, index) => (
        <CharacterListItem key={index} characterData={character} />
      ))}
      <ShowMoreButton />
    </StyledCharacterList>
  );
};

export default CharacterList;
