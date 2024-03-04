import React from 'react'

const SingleProducts = (props) => {
  const { _id, title, image, price, discountPrice } = props.item;
  return (
    <div className='basis-1/4'>
      <img src={image} alt="" />
      <h1>{title}</h1>
      <p>{price} <span>{discountPrice&&discountPrice}</span></p>
      <p></p>
      <p>{}</p>
    </div>
  )
}

export default SingleProducts
