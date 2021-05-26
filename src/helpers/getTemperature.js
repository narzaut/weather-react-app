export const getTemperature = (weather) => {
    try{
        const currentTemp = Math.round(weather.main.temp - 273.15)
        const maxTemp = Math.round(weather.main.temp_max - 273)
        const minTemp = Math.round(weather.main.temp_min - 273)
        return {
            current: currentTemp,
            max: maxTemp,
            min: minTemp
        }
    } catch{
        return undefined
    }
}