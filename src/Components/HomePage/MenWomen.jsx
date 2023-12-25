import React from 'react'

const MenWomen = () => {
  return (
    <div className='grid grid-cols-12 mx-5'>

      <div className="col-span-6 w-full">
        <div className="men-world">
          <img src="men.jpg" alt="men" className='w-full h-[400px] opacity-80' />
        </div>
      </div>
      <div className="col-span-6">
        <div className="women-world">
          <img src="women.jpg" alt="women" className='w-full h-[400px] opacity-80' />
        </div>
      </div>

    </div>
  )
}

export default MenWomen
