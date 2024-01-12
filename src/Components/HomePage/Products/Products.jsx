import React, { useEffect, useState } from 'react'
import SingleProducts from './SingleProducts';

const Products = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    fetch('http://localhost:8080/product/api/v1/allproducts')
    .then((res) => res.json())
    .then((data) => setProducts(data.data))
  }, [])
  return (
    <div>
      {
        products.map((item, i) => <SingleProducts key={i} item={item} />)
      }
    </div>
  )
}

export default Products
