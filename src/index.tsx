/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import HttpService from './services/HttpService';
import UserService from './services/UserService';

import { ThemeProvider } from './context/ThemeContext';

import store from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store';

const renderApp = () =>
  ReactDOM.render(
    <ThemeProvider initialTheme="dark">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>,

    document.getElementById('root')
  );

renderApp();

// HttpService.configure();
// UserService.initKeycloak(renderApp);
