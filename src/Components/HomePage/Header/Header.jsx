import React from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import Brands from './Brands'

import AnimatedCursor from "react-animated-cursor"


const Header = () => {
  return (
    <div className='bg-pink-300'>

      <Navbar />

      <SearchBar />

      <Brands />

    </div>
  )
}

export default Header
