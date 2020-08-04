import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator.jsx';
import Title from './components/Title.jsx'

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <div>
    {/* <h1>Calculadora</h1> */}
    <Title text="Calculadora fofa"/>
    <Calculator />
  </div>
  , document.getElementById('root')
);

serviceWorker.unregister();
