import React from 'react'

const SingleHero = (props) => {
  const { image } = props.item;
   return (
    <div>
      <img src={image} alt="" />
    </div>
  )
}

export default SingleHero
