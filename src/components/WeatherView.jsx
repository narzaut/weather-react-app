import React from 'react'
import SearchBar from './SearchBar'
import { WeatherInfo } from './WeatherInfo'

const WeatherView = (props) => {
    return (
      <>
        <SearchBar />
        <WeatherInfo />
    	</>
    )
}

export default WeatherView

