import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import history from './services/history';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
  );
}

export default App;
