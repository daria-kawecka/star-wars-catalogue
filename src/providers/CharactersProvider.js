import React, { useEffect, useState } from 'react';
import CharacterAPI from 'data/CharacterAPI';
import axios from 'axios';

export const CharactersContext = React.createContext({
  filteredCharacters: [],
  counter: 10,
  handleClick: () => {},
  handleSearch: () => {},
});

const CharacterProviders = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [counter, setCounter] = useState(10);
  //get data:
  const getData = async (apiArr) => {
    await axios
      .all(apiArr.map((l) => axios.get(l)))
      .then(
        axios.spread(function (...res) {
          res.map((r) => setCharacters((prev) => [...prev, ...r.data.results]));
        })
      )
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData(CharacterAPI);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchPhrase, characters]);

  //HANDLERS:
  //fetch data instead of button:
  const handleScroll = () => {
    if (window.scrollY + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
      setCounter((prev) => prev + 5);
    }
  };
  //fetch data with button:
  const handleClick = () => {
    setCounter((prev) => prev + 5);
  };
  //search character by name:
  const handleInputValue = (e) => {
    setSearchPhrase(e.target.value);
  };
  const handleSearch = () => {
    setFilteredCharacters(
      characters.filter((character) => {
        if (
          character.name.toLowerCase().includes(searchPhrase.toLowerCase()) &&
          character.name.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1
        ) {
          return character;
        }
      })
    );
  };

  return (
    <CharactersContext.Provider value={{ filteredCharacters, counter, handleClick, handleScroll, handleInputValue }}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharacterProviders;
