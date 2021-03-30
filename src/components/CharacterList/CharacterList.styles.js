import styled from 'styled-components';

export const StyledCharacterList = styled.ul`
  padding: 15px 0px;
  width: 100%;
  margin: 10vh auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: default;
`;
export const ListHeader = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.yellow};
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
`;
