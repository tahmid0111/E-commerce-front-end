import React from 'react'
import Header from '../Components/HomePage/Header/Header'
import MenWomen from '../Components/HomePage/MenWomen'
import Products from '../Components/HomePage/Products/Products'
import Brands from '../Components/HomePage/Header/Brands'
import Hero from '../Components/HomePage/Hero/Hero'
// import SingleHero from '../Components/HomePage/Hero/SingleHero'

const HomePage = () => {
  return (
    <div>
      
      <Header />

      <Hero />

      {/* <SingleHero /> */}

      <MenWomen />

      <Brands />

      <Products />

    </div>
  )
}

export default HomePage
