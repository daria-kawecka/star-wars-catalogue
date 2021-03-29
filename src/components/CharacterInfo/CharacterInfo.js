import React, { useState, useContext, useEffect } from 'react';
import { CharactersContext } from 'providers/CharactersProvider';
import axios from 'axios';

const CharacterInfo = ({ name }) => {
  const { filteredCharacters } = useContext(CharactersContext);
  const [isDataReceived, setIsDataReceived] = useState(false);
  const [characterInfo, setCharacterInfo] = useState('');
  const [movieInfo, setMovieInfo] = useState([]);

  const getData = (apiArr) => {
    axios.all(apiArr.map((l) => axios.get(l))).then(
      axios.spread(function (...res) {
        res.map((r) => {
          setMovieInfo((prev) => [...prev, r.data.title]);
        });
      })
    );
  };
  useEffect(() => {
    setCharacterInfo(...filteredCharacters.filter((character) => character.name === name));
    setIsDataReceived(true);
  }, []);

  useEffect(() => {
    console.log(isDataReceived);
    if (isDataReceived) {
      getData(characterInfo.films);
    }
  }, [isDataReceived]);

  return (
    <div>
      <p>{characterInfo.height} cm</p>
      {movieInfo.map((title, index) => (
        <p key={index}>{title}</p>
      ))}
    </div>
  );
};

export default CharacterInfo;
