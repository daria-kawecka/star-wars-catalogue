import React, { useEffect, useState } from 'react';
import CharacterAPI from 'data/CharacterAPI';
import axios from 'axios';

export const CharactersContext = React.createContext({
  filteredCharacters: [],
  counter: 10,
  isReady: false,
  searchPhrase: '',
  loadingProgres: 0,
  searchError: false,
  handleClick: () => {},
  handleInputValue: () => {},
});

const CharacterProviders = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [searchError, setSearchError] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
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
          setIsReady(true);
        })
      )
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getData(CharacterAPI);
    window.addEventListener('scroll', handleScroll);
    //loading page:
    const interval = setInterval(() => {
      setLoadingProgress((prevState) => {
        if (prevState === 100) {
          clearInterval(interval);
          return 100;
        }
        const numProgress = parseInt(Math.random() * 15, 10);
        return Math.min(prevState + numProgress, 100);
      });
    }, 150);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  //search engine:
  useEffect(() => {
    handleSearch();
    if (!filteredCharacters.length) setSearchError(true);
  }, [searchPhrase, characters]);
  useEffect(() => {
    if (!filteredCharacters.length) setSearchError(true);
  }, [searchPhrase, filteredCharacters.length]);

  //HANDLERS:
  //fetch data instead of button:
  const handleScroll = () => {
    if (window.scrollY + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
      setCounter((prev) => prev + 5);
    }
  };
  //or... fetch data with button:
  const handleClick = () => {
    setCounter((prev) => prev + 5);
    setSearchPhrase('');
  };
  //search character by name:
  const handleInputValue = (e) => {
    setSearchPhrase(e.target.value);
  };
  const handleSearch = () => {
    setFilteredCharacters(characters.filter(searchChar));
    function searchChar(character) {
      if (character.name.toLowerCase().includes(searchPhrase.toLowerCase())) {
        setSearchError(false);
        return character;
      }
    }
  };

  return (
    <CharactersContext.Provider
      value={{ filteredCharacters, counter, isReady, searchPhrase, loadingProgress, searchError, handleClick, handleInputValue }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharacterProviders;
