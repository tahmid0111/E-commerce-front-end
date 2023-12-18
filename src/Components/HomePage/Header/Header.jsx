import React from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import Brands from './Brands'

const Header = () => {
  return (
    <div className='bg-pink-300 h-[500px]'>

      <Navbar />

      <SearchBar />

      <Brands />

    </div>
  )
}

export default Header
