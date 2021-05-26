import React, {useState, createContext} from 'react';

export const GlobalContext = createContext();

export const WeatherProvider = (props) => {
  const [weather, setWeather] = useState(undefined)
  const [api, setApi] = useState({
    key : 'd0382771156e90c34e987d43ebbf59d6',
    baseUrl : 'http://api.openweathermap.org/data/2.5/'
  })
  const [scale, setScale] = useState('°C')
  return(
    <GlobalContext.Provider value = {{ weatherState: [weather, setWeather], apiState: [api, setApi], scaleState: [scale, setScale] }}>
      {props.children}
    </GlobalContext.Provider>
  )

}
