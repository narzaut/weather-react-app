import React, {useState, useContext} from 'react'
import { GlobalContext } from './context/GlobalState';

export const api = {
    key : 'd0382771156e90c34e987d43ebbf59d6',
    baseUrl : 'http://api.openweathermap.org/data/2.5/'
}  

const SearchBar = (props) => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useContext(GlobalContext)

    const search = evt => {
        if (evt.key === 'Enter') {
          fetch(api.baseUrl + 'weather?q=' + query + '&appid=' + api.key + '&lang=es')
            .then(res => res.json())
            .then(result => {
              setWeather(result)
              setQuery('')
            })
        }
    }
    return (
        <div className = 'flex-container'>
            <div className = 'search-box'>
                <input className = 'search-bar'id='locationInput' type="text" placeholder='Ingrese la localidad' onChange={e => setQuery(e.target.value)} value={query} onKeyPress = {search}/>
            </div>
        </div>
    )
}

export default SearchBar

