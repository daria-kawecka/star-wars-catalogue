import styled from 'styled-components';

export const StyledAppBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};
  box-shadow: 0px 0px 10px 2px #e3e111;
`;
export const StyledAppBarText = styled.p`
  justify-items: flex-start;
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 35px;
`;
