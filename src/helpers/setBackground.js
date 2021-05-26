import { isDay } from './getTime'
export const setBackground = (weather) => {
  if (weather != undefined){
    if (isDay(weather)){
      return 'app day'
    } else if (!isDay(weather)){
      return 'app night'
    }
  } else{
    return 'app'
  }

  
}