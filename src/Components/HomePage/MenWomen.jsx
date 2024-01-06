import React from 'react'

const MenWomen = () => {
  return (
    <div className='grid grid-cols-12 mx-5 pb-20'>

      <div className="col-span-6 mr-5">
        <div className="men-world relative group">
          <img src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="men" className='w-full h-[400px] brightness-90 group-hover:brightness-100 duration-200' />
          <div className='absolute top-[40%] left-[35%] border-white border-dashed border-2 p-3 group-hover:p-4 duration-300 bg-yellow-500'>
            <p className='text-xl font-bold text-white'>Men Collection</p>
          </div>
        </div>
      </div>
      <div className="col-span-6">
      <div className="women-world relative group">
          <img src="https://images.unsplash.com/photo-1591035897819-f4bdf739f446?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="women" className='w-full h-[400px] brightness-90 group-hover:brightness-100 duration-200' />
          <div className='absolute top-[40%] left-[35%] border-white border-dashed border-2 p-3 group-hover:p-4 duration-300 bg-sky-500'>
            <p className='text-xl font-bold text-white'>Women Collection</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MenWomen
