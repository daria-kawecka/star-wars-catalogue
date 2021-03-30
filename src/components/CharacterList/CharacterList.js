import React, { useContext } from 'react';
import { StyledCharacterList, ListHeader } from './CharacterList.styles';
import { CharactersContext } from 'providers/CharactersProvider';
import ShowMoreButton from 'components/ShowMoreButton/ShowMoreButton';
import CharacterListItem from 'components/CharacterListItem/CharacterListItem';
import LoadingData from 'components/LoadingData/LoadingData';

const CharacterList = () => {
  const { filteredCharacters, counter, isReady } = useContext(CharactersContext);
  return (
    <>
      {isReady ? (
        <StyledCharacterList>
          <ListHeader>A long time ago in a galaxy far, far away...</ListHeader>
          {filteredCharacters.slice(0, counter).map((character, index) => {
            return <CharacterListItem key={index} number={index} characterData={character} />;
          })}
          <ShowMoreButton />
        </StyledCharacterList>
      ) : (
        <LoadingData size="big" />
      )}
    </>
  );
};

export default CharacterList;
