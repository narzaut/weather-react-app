import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import SearchBar from './SearchBar'
import { Image } from 'antd';
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

