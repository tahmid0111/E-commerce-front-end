import React from 'react'

const SingleProducts = (props) => {
  const { _id, title, image } = props.item;
  return (
    <div>
      <h1>{_id}</h1>
      <h1>{title}</h1>
      <img src={image} alt="" />
    </div>
  )
}

export default SingleProducts
