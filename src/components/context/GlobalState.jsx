import React, {useState, createContext} from 'react';

export const GlobalContext = createContext();

export const WeatherProvider = (props) => {
    const [weather, setWeather] = useState({})
    return(
        <GlobalContext.Provider value = {[weather, setWeather]}>
            {props.children}
        </GlobalContext.Provider>
    )

}
