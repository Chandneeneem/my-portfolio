import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles/theme.css';
import './assets/styles/theme.css'

const rootElement = document.getElementById('app');

if (!rootElement) {
  throw new Error('Root container missing in index.html');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

