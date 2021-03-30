import React from 'react';
import Search from 'components/Search/Search';
import { StyledAppBar, StyledAppBarText } from './AppBar.styles';
const AppBar = () => {
  return (
    <StyledAppBar>
      <StyledAppBarText>Catalogue from space</StyledAppBarText>
      <Search />
    </StyledAppBar>
  );
};

export default AppBar;
