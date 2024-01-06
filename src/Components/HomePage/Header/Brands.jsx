import React, { useEffect, useState } from 'react'
import SingleBrand from './SingleBrand';

const Brands = () => {
  const  [brands, setBrands] = useState([])


  useEffect(() => {

    fetch("http://localhost:8080/product/api/v1/allbrand")
    .then((res) => res.json())
    .then((data) => setBrands(data.data));

  }, [])
  return (
    <div className='grid grid-cols-12 px-5 my-10 bg-pink-300'>
      {
        brands.slice(0, 4).map((item, i) => <SingleBrand key={i} item={item} />)
      }
    </div>
  )
}

export default Brands
