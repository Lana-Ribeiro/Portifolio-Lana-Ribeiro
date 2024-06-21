import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Supondo que você tenha uma função React.createElement que seja compatível
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(React.createElement(App));
}
