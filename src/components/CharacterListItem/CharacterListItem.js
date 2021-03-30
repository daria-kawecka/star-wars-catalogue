import React, { useState } from 'react';
import { StyledListElement, Text, TextNumber, GenderText, ListButton } from './CharacterListItem.styles';
import CharacterInfo from 'components/CharacterInfo/CharacterInfo';

const CharacterListItem = ({ number, characterData: { name, gender, birth_year } }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <StyledListElement>
      <TextNumber>{number + 1}</TextNumber>
      <Text>name: {name}</Text>
      <GenderText gender={gender}>gender: {gender}</GenderText>
      <Text>birth year: {birth_year}</Text>
      <ListButton onClick={handleClick}>More info...</ListButton>
      {isClicked && <CharacterInfo name={name}></CharacterInfo>}
    </StyledListElement>
  );
};

export default CharacterListItem;
