import React, { useEffect, useState } from 'react';
import { useData } from 'data/useData';
import CharacterAPI from 'data/CharacterAPI';
import axios from 'axios';

export const CharactersContext = React.createContext({
  characters: [],
  counter: 10,
  handleClick: () => {},
});

const CharacterProviders = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [counter, setCounter] = useState(10);
  const handleClick = () => {
    setCounter((prev) => prev + 10);
  };
  const getData = async (apiArr) => {
    await axios.all(apiArr.map((l) => axios.get(l))).then(
      axios.spread(function (...res) {
        res.map((r) => setCharacters((prev) => [...prev, ...r.data.results]));
      })
    );
  };
  useEffect(() => {
    getData(CharacterAPI);
    console.log(characters);
  }, []);

  return <CharactersContext.Provider value={{ characters, counter, handleClick }}>{children}</CharactersContext.Provider>;
};

export default CharacterProviders;
