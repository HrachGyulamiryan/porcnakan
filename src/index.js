import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// 1in <React.StrictMode></React.StrictMode> => Poxarinel => <BrowserRouter></BrowserRouter>_ow;
import { BrowserRouter } from 'react-router-dom'; // Stacum;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);