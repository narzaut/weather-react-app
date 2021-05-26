import { isDay } from './getTime'
export const setBackground = (weather) => {
  if (weather != undefined){
    if (isDay(weather)){
      return 'day'
    } else if (!isDay(weather)){
      return 'night'
    }
  }
}