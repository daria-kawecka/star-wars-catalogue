import React, { useState, useContext, useEffect } from 'react';
import { CharactersContext } from 'providers/CharactersProvider';
import { InfoText } from './CharacterInfo.styles';
import { calculateAge } from 'data/calculateAge';
import LoadingData from 'components/LoadingData/LoadingData';
import axios from 'axios';

const CharacterInfo = ({ name }) => {
  const { filteredCharacters } = useContext(CharactersContext);
  const [isDataReceived, setIsDataReceived] = useState(false);
  const [characterInfo, setCharacterInfo] = useState('');
  const [movieInfo, setMovieInfo] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getData = (apiArr) => {
    axios.all(apiArr.map((arr) => axios.get(arr))).then(
      axios.spread(function (...res) {
        res.map((r) => {
          setMovieInfo((prev) => [...prev, r.data.title]);
          setIsLoaded(true);
        });
      })
    );
  };

  useEffect(() => {
    setCharacterInfo(...filteredCharacters.filter(filterInfo));
    function filterInfo(character) {
      if (character.name === name) {
        return character;
      }
    }

    setIsDataReceived(true);
    if (isDataReceived) {
      getData(characterInfo.films);
    }
    return () => setIsDataReceived(false);
  }, [isDataReceived]);

  return (
    <div>
      <InfoText>{characterInfo.height} cm</InfoText>
      <InfoText>{calculateAge(characterInfo.birth_year)}</InfoText>
      {isLoaded ? movieInfo.map((title, index) => <InfoText key={index}>{title}</InfoText>) : <LoadingData size="small" />}
    </div>
  );
};

export default CharacterInfo;
