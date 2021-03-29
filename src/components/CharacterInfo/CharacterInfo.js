import React, { useState, useContext, useEffect } from 'react';
import { CharactersContext } from 'providers/CharactersProvider';
import { calculateAge } from 'data/calculateAge';
import LoadingData from '../LoadingData/LoadingData';
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
    setCharacterInfo(...filteredCharacters.filter((character) => character.name === name));
    setIsDataReceived(true);
    if (isDataReceived) {
      getData(characterInfo.films);
    }
  }, [isDataReceived]);

  return (
    <div>
      <p>{characterInfo.height} cm</p>
      {calculateAge(characterInfo.birth_year)}
      {isLoaded ? movieInfo.map((title, index) => <p key={index}>{title}</p>) : <LoadingData size="small" />}
    </div>
  );
};

export default CharacterInfo;
