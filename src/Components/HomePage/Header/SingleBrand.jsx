import React from 'react'

const SingleBrand = (props) => {
    const { _id, BrandName, BrandImg } = props.item
  return (
    <div className='col-span-3 px-5'>

      <div className='relative border-4 overflow-hidden rounded-lg'>

        <img src={BrandImg} alt="" className='opacity-80 hover:scale-125 duration-200' />

        <h1 className='absolute bottom-0 left-[30%] text-center text-xl text-white font-bold bg-black w-[100px] py-2 rounded-t-xl'>{BrandName}</h1>
        
      </div>

    </div>
  )
}

export default SingleBrand
