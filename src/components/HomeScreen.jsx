import React from 'react'
import SearchBar from './SearchBar'
import { Image } from 'antd';
const HomeScreen = (props) => {
    return (
      <>
      <div className = 'home-screen'>
        <Image
          width={ 200 }
          src="https://images-na.ssl-images-amazon.com/images/I/61nuuPxUvaL.png"
          preview={ false }
        />
        <h2>Weather App</h2>
        <SearchBar />
      </div>
      </>
    )
}

export default HomeScreen

