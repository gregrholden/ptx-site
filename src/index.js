import React from 'react';
import { render } from 'react-dom';
import 'normalize.css';
import App from './App.js';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);