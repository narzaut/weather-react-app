import React, { useContext } from 'react'
import WeatherView from './components/WeatherView'
import HomeScreen from './components/HomeScreen'
import { GlobalContext } from './context/GlobalState'
import { setBackground } from './helpers/setBackground'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Settings } from './components/Settings'
function App() { 
  const { weatherState } = useContext(GlobalContext)
  const [weather, setWeather] = weatherState

  return (
    <Router>
      <div className={ setBackground(weather) }>
        <main>
          <Settings />
          <Switch>
            <Route path='/' exact component={ HomeScreen } />
            <Route path='/weather' component={ WeatherView } />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;