import React, { useState } from 'react';
import { StyledListElement, Text, GenderText, ListButton } from './CharacterListItem.styles';
import CharacterInfo from '../CharacterInfo/CharacterInfo';

const CharacterListItem = ({ characterData, characterData: { name, gender, birth_year } }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <StyledListElement>
      <Text>name: {name}</Text>
      <GenderText gender={gender}>gender: {gender}</GenderText>
      <Text>birth year: {birth_year}</Text>
      <ListButton onClick={handleClick}>More info...</ListButton>
      {isClicked && <CharacterInfo name={name}></CharacterInfo>}
    </StyledListElement>
  );
};

export default CharacterListItem;
