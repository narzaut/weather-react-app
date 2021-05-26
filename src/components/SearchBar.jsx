import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { useHistory} from 'react-router-dom'
import { Input } from 'antd'

const SearchBar = (props) => {
  const { Search } = Input
  const { weatherState, apiState } = useContext(GlobalContext)
  const [weather, setWeather] = weatherState
  const [api, setApi] = apiState
  const [query, setQuery] = useState('');
  let history = useHistory();

  const onSearch = evt => {
    fetch(api.baseUrl + 'weather?q=' + query + '&appid=' + api.key + '&lang=es')
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('') 
        history.push("/weather");
      });
  }
  return (
    <div className = 'flex-container'>
      <div style={{marginBottom: '2rem'}}>
        <Search id='locationInput' type="text" placeholder='Ingrese la localidad' onSearch={onSearch} onChange={e => setQuery(e.target.value)} value={ query } enterButton />
      </div>

    </div>
  )
}

export default SearchBar

