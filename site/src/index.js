import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import Home from './pages/landingpage/index.js'
import Cadastro from './pages/cadastro/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cadastro />
  </React.StrictMode>
);

