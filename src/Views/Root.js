import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import CharacterProviders from 'providers/CharactersProvider';
import CharacterList from 'components/CharacterList/CharacterList';
import Search from 'components/Search/Search';
const Root = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <CharacterProviders>
          <Search></Search>
          <CharacterList />
        </CharacterProviders>
      </ThemeProvider>
    </div>
  );
};

export default Root;
