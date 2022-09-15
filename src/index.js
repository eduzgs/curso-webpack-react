import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/global.scss';// no me funcionan los estilos, quizas estoy fallando en el
// webpack.config,js, no carga el global.scss ):

ReactDOM.render( <App /> ,document.getElementById('app'));