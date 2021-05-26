export const getTime = (weather) => {
  let d = new Date()
  let localTime = d.getTime()
  let localOffset = d.getTimezoneOffset() * 60000
  let utc = localTime + localOffset
  var dt = utc + (1000 * weather.timezone)
  let date = new Date(dt)
  return {hours: date.getHours(), minutes:date.getMinutes()}
}

const getSunriseTime = (weather) => {
  const sunriseDate = weather.sys != undefined ? new Date(weather.sys.sunrise*1000) : ''
  const sunriseTime = weather.sys != undefined ? {
    hours: sunriseDate.getHours(),
    minutes: sunriseDate.getMinutes()
  } : ''
  return sunriseTime
}

const getSunsetTime = (weather) => {
  const sunsetDate = weather.sys != undefined ? new Date(weather.sys.sunset*1000) : ''
  const sunsetTime = weather.sys != undefined ? {
    hours: sunsetDate.getHours(),
    minutes: sunsetDate.getMinutes()
  } : ''
  return sunsetTime
}

export const isDay = (weather) => {
  const sunriseTime = getSunriseTime(weather)
  const sunsetTime = getSunsetTime(weather)
  const currentTime = getTime(weather)
  if (weather != undefined){
    if (("" + currentTime.hours + currentTime.minutes) > ("" + sunriseTime.hours + sunriseTime.minutes) ||
    ("" + currentTime.hours + currentTime.minutes) < ("" + sunsetTime.hours + sunsetTime.minutes)) {
      return true
    }
  }
  return false
}