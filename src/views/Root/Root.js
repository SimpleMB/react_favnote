import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import Input from '../../components/atoms/Input/Input';

const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1>Hello</h1>
          <Button width="300px">Close / Save</Button>
          <Button secondary>Remove</Button>
          <Input placeholder="login" />
        </>
      </ThemeProvider>
    </div>
  );
};

export default Root;
