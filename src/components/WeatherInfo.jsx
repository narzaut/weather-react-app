import React, {useState} from 'react'
import { useContext } from 'react'
import { GlobalContext } from './context/GlobalState'
import WeatherIcon from './WeatherIcon'


const dateBuilder = (date) => {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const weekdays = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
    const dateString = weekdays[date.getDay() - 1] + ' ' + date.getDate() + ' de ' + months[date.getMonth()] + ' del ' + date.getFullYear()
    return dateString
}

const capitalize = (string) => {
  return string && string[0].toUpperCase() + string.slice(1);
}

const WeatherInfo = (props) => {
    const currentDate = new Date();
    const [error, setError] = useState('La localidad ingresada es incorrecta\nIntente nuevamente.');
    const [weather, setWeather] = useContext(GlobalContext)
    return ((typeof weather.main !== 'undefined') ? (
        <div className = 'weatherInfo'>
          <div className='location-box'>
            <div className='location'>{weather.name + ', ' + weather.sys.country}</div>
            <div className='date'>{dateBuilder(currentDate)}</div>
          </div> 
          <div className = 'weather-box'>
            <div className = 'currentTemp'>
              <span>{Math.round(weather.main.temp - 273)} °C</span>
            </div>
            <div className='weatherIcon'><WeatherIcon size={175} color= '#FFF' weather = {weather}/></div>
            <div className='maxMinTemp'>
              <div className = 'minTemp'>
                <span>Min {Math.round(weather.main.temp_min- 273)}°C</span>
              </div>
              <div> / </div>
              <div className = 'maxTemp'>
                <span>Max {Math.round(weather.main.temp_max - 273)}°C</span>
              </div>
            </div> 
            <div className = 'weather'>
              {capitalize(weather.weather[0].description)}
            </div>
          </div>
        </div>
      ):(<div className='error'>{error}</div>))
}

export default WeatherInfo