import React from 'react'
import Footer from '../Components/Shared/Footer'

const Layout = (props) => {
  return (
    <>

      {props.children}

      <Footer />
      
    </>
  )
}

export default Layout
