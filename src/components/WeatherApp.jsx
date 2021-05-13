import React, {useContext} from 'react'
import WeatherInfo from './WeatherInfo'
import SearchBar from './SearchBar'
import {getTime} from './WeatherIcon'
import {GlobalContext} from './context/GlobalState'
function App() { 
  
  const [weather, setWeather] = useContext(GlobalContext)
  function setBackground (weather){
    if (weather.main != 'undefined') {
      if (getTime(weather) > 6 && getTime(weather) < 21){
        return 'app day'
      }
      return 'app night'
    }
    return 'app day'
  }

  return (
      <div className={setBackground(weather)}>
        <main>
          <SearchBar />
          <WeatherInfo />
        </main>
      </div>
  );
}
export default App;