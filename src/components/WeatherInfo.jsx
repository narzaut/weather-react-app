import React, {useState} from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { dateBuilder } from '../helpers/dateBuilder'
import { capitalize } from '../helpers/capitalize'
import WeatherIcon from './WeatherIcon'
import { celsiusToFahrenheit } from '../helpers/celsiusToFahr'
import { getTemperature } from '../helpers/getTemperature'

export const WeatherInfo = (props) => {
  const currentDate = new Date();
  const [error, setError] = useState('La localidad ingresada es incorrecta.');
  const { weatherState, scaleState } = useContext(GlobalContext)
  const [weather, setWeather] = weatherState
	const [scale, setScale] = scaleState

  //Returns an object with current, max, and min temperature
  const temperature = getTemperature(weather)

  try {
    return (
  <div className = 'weather-info'>
    <div className='location-box'>
      <div className='location'>{ weather.name + ', ' + weather.sys.country }</div>
      <div className='date'>{ dateBuilder(currentDate) }</div>
    </div> 
    <div className = 'weather-box'>
      <div className = 'currentTemp'>
        <span>{ scale == '°F' ? celsiusToFahrenheit(temperature.current) : temperature.current } { scale }</span>
      </div>
      <div style={{ opacity: '80%' }}>
        <WeatherIcon size={ 175 } color= '#FFF' weather = { weather }/>
      </div>
      <div className='maxMinTemp'>
        <div className = 'minTemp'>
          <span>Min { scale == '°F' ? celsiusToFahrenheit(temperature.min) : temperature.min } { scale }</span>
        </div>
        <div> / </div>
        <div className = 'maxTemp'>
          <span>Max { scale == '°F' ? celsiusToFahrenheit(temperature.max) : temperature.max } { scale }</span>
        </div>
      </div> 
      <div className = 'weather'>
        { capitalize(weather.weather[0].description) }
      </div>
    </div>
  </div>)
  } catch{
    return <div className='error'>{ error }</div>
  }
}

export default WeatherInfo