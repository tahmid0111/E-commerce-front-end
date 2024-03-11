import React from 'react'
import MenWomen from '../Components/HomePage/MenWomen'
import Products from '../Components/HomePage/Products/Products'
import Brands from '../Components/HomePage/Brands/Brands'
import Hero from '../Components/HomePage/Hero/Hero'
import Layout from '../Layout/Layout'
// import SingleHero from '../Components/HomePage/Hero/SingleHero'

const HomePage = () => {
  return (
    <Layout>

      <Hero />

      <Brands />

      {/* <MenWomen /> */}

      <Products />

    </Layout>
  )
}

export default HomePage
