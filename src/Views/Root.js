import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import StarfieldAnimation from 'react-starfield-animation';
import CharacterProviders from 'providers/CharactersProvider';
import CharacterList from 'components/CharacterList/CharacterList';
import AppBar from 'components/AppBar/AppBar';
const Root = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StarfieldAnimation
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            zIndex: '-1',
          }}
        />
        <CharacterProviders>
          <AppBar />
          <CharacterList />
        </CharacterProviders>
      </ThemeProvider>
    </div>
  );
};

export default Root;
