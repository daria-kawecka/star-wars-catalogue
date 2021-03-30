import styled from 'styled-components';
import { device } from '../../assets/styles/device';

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px;
`;
export const ErrorText = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.m}
  @media ${device.mobileS} {
    font-size: ${({ theme }) => theme.fontSize.s}
  }
  };
`;
export const ErrorImage = styled.img`
  height: 100%;
  @media ${device.mobileS} {
    width: 65%;
  }
`;
