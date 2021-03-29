import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Quicksand',sans-serif;
    background: #151414;
    overflow-x: hidden;
  }

  a, button {
    font-family: 'Quicksand',sans-serif;
  }
`;
