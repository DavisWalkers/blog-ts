import React from 'react';
import { Header } from './common/Header';
import { Main } from './common/Main';
import { Footer } from './common/Footer';
import GlobalStyle from './styles/globalStyles';

export const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
};