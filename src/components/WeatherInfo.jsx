import React, {useState} from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { dateBuilder } from '../helpers/dateBuilder'
import { capitalize } from '../helpers/capitalize'
import WeatherIcon from './WeatherIcon'

export const WeatherInfo = (props) => {
  const currentDate = new Date();
  const [error, setError] = useState('La localidad ingresada es incorrecta\nIntente nuevamente.');
  const { weatherState, scaleState } = useContext(GlobalContext)
  const [weather, setWeather] = weatherState
	const [scale, setScale] = scaleState
 
    try {
      return (
    <div className = 'weatherInfo'>
      <div className='location-box'>
        <div className='location'>{ weather.name + ', ' + weather.sys.country }</div>
        <div className='date'>{ dateBuilder(currentDate) }</div>
      </div> 
      <div className = 'weather-box'>
        <div className = 'currentTemp'>
          <span>{ scale == '°F' ? Math.round( (weather.main.temp-273.15) * 9/5 + 32) : Math.round(weather.main.temp - 273.15    ) } { scale }</span>
        </div>
        <div className='weatherIcon'>
          <WeatherIcon size={ 175 } color= '#FFF' weather = { weather }/>
        </div>
        <div className='maxMinTemp'>
          <div className = 'minTemp'>
            <span>Min { scale == '°F' ? Math.round( (weather.main.temp-273.15) * 9/5 + 32) : Math.round(weather.main.temp - 273) } { scale }</span>
          </div>
          <div> / </div>
          <div className = 'maxTemp'>
            <span>Max { scale == '°F' ? Math.round( (weather.main.temp-273.15) * 9/5 + 32) : Math.round(weather.main.temp - 273) } { scale }</span>
          </div>
        </div> 
        <div className = 'weather'>
          { capitalize(weather.weather[0].description) }
        </div>
      </div>
    </div>)
   } catch{
    return <div className='error'>{ error}</div>
   }

  }

export default WeatherInfo