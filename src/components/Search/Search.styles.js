import styled from 'styled-components';
import { device } from 'assets/styles/device';

export const StyledInput = styled.input`
  color: ${({ theme }) => theme.colors.grey};
  outline: none;
  border: none;
  padding: 8px 25px;
  font-weight: 700;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.yellow};
  @media ${device.mobileL} {
    padding: 5px 10px;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-weight: 500;
  }
  @media ${device.mobileS} {
    padding: 5px 5px;
    width: 83%;
  }
`;
export const StyledForm = styled.form`
  margin: 5vw;
`;
