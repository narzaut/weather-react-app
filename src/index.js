import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import WeatherApp from "./components/WeatherApp"
import './index.css';
import {WeatherProvider} from '../src/components/context/GlobalState'
ReactDOM.render(
  <React.StrictMode>
    <WeatherProvider>
      <WeatherApp />
    </WeatherProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
