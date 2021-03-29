import React, { useState, useContext, useEffect } from 'react';
import { CharactersContext } from 'providers/CharactersProvider';
import axios from 'axios';

const CharacterInfo = ({ name }) => {
  const { characters } = useContext(CharactersContext);
  const [characterInfo, setInfo] = useState('');
  const [movieInfo, setMovieInfo] = useState();

  const getData = async (apiURL) => {
    await axios
      .get(apiURL)
      .then((resp) => {
        setMovieInfo((prev) => [...prev, resp.data.title]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setInfo(...characters.filter((character) => character.name === name));
  }, []);

  useEffect(() => {
    characterInfo.films ? characterInfo.films.map((film) => getData(film)) : setMovieInfo(' ');
  }, [characterInfo.films]);

  return (
    <div>
      <p>{characterInfo.height} cm</p>
      {movieInfo && [...movieInfo].map((title, index) => <p key={index}>{title}</p>)}
    </div>
  );
};

export default CharacterInfo;
