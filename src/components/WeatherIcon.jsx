import { WiNightFog, WiDayFog, WiNightClear, WiNightAltCloudy, WiNightAltRainMix, WiDayCloudy, WiDayRainMix, WiDaySunny } from "weather-icons-react";
import { getTime } from '../helpers/getTime'

const WeatherIcon = (props) => {
    //CONDITIONAL RENDERING
    if (getTime(props.weather) > 6 && getTime(props.weather) < 21){
      switch (props.weather.weather[0].main) {
        case 'Rain':
        case 'Thunderstorm':
        case 'Drizzle':
          return <WiDayRainMix size = {props.size} color = {props.color}/>
        case 'Clear':
          return <WiDaySunny size = {props.size} color = {props.color}/>
        case 'Clouds':
          return <WiDayCloudy size = {props.size} color = {props.color}/>
          case 'Mist':
          case 'Fog':
          case 'Haze':
          return <WiDayFog size = {props.size} color = {props.color}/>
      }
    }else {
      switch (props.weather.weather[0].main) {
        case 'Rain':
        case 'Thunderstorm':
        case 'Drizzle':
          return <WiNightAltRainMix size = {props.size} color = {props.color}/>
        case 'Clear':
          return <WiNightClear size = {props.size} color = {props.color}/>
        case 'Clouds':
          return <WiNightAltCloudy size = {props.size} color = {props.color}/>
        case 'Mist':
        case 'Fog':
        case 'Haze':
          return <WiNightFog size = {props.size} color = {props.color}/>
        }    
    }
    return <WiDayCloudy size = {props.size} color = {props.color}/>
}

export default WeatherIcon