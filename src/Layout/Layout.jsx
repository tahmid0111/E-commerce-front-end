import React from 'react'
import Footer from '../Components/Shared/Footer'
import Navbar from '../Components/Shared/Navbar'

const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
