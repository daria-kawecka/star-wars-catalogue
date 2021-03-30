import React from 'react';
import yoda from 'assets/images/yoda.png';
import { ErrorWrapper, ErrorImage, ErrorText } from './ErrorSearch.styles';

const ErrorSearch = () => {
  return (
    <ErrorWrapper>
      <ErrorImage src={yoda} alt="yoda" />
      <ErrorText>There nothing here is</ErrorText>
    </ErrorWrapper>
  );
};

export default ErrorSearch;
