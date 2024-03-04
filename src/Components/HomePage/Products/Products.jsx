import React, { useEffect, useState } from 'react'
import SingleProducts from './SingleProducts';
import { Link } from 'react-router-dom';
import ProductsTitle from './ProductsTitle';

const Products = () => {
  const [products, setProducts] = useState([])


  useEffect(() => {
    fetch('http://localhost:8080/product/api/v1/allproducts')
    .then((res) => res.json())
    .then((data) => setProducts(data.data))
  }, [])
  return (
    <div className='mx-10 grid grid-cols-12'>
      <ProductsTitle title={'Top Rated Products'} />
      {/* this area holds the products */}
      <div className='col-span-12'>
        <div className='flex'>
          {
            products.map((item, i) => <SingleProducts key={i} item={item} />)
          }
        </div>
    </div>
    </div>
  )
}

export default Products
