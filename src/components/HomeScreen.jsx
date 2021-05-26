import React from 'react'
import SearchBar from './SearchBar'
import { Image } from 'antd';
import logo from '../assets/app-logo.png'
const HomeScreen = (props) => {
    return (
      <div className = 'home-screen'>
        <Image
          width={ 200 }
          src={logo}
          preview={ false }
        />
        <div className='app-title'>
          <h1>Weather App</h1>
        </div>
        <SearchBar />
      </div>
    )
}

export default HomeScreen

