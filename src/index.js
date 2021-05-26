import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
import './styles/styles.css';
import 'antd/dist/antd.css';
import { WeatherProvider } from './context/GlobalState'

ReactDOM.render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
