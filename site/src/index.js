import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// import Home from './components/card-anunciado/index.js'
import Home from './pages/landingpage/index.js'
// import Home from './components/cabecalho_c_pesquisa/index.js'
// import Cadastro from './pages/cadastro/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

