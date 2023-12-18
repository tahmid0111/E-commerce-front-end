import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// importing react-icons
import { HiHeart } from "react-icons/hi2";
import { FaCartShopping , FaUserTie } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className='grid grid-cols-12 mx-5'>

      <div className='col-span-4 mx-auto'>
        <Link to='/'>
          <img src="logo.png" alt="logo" className='w-[150px]' />
        </Link>
      </div>

      <div className='col-span-8'>
        <ul className='flex float-right'>

          <li className='px-10 pt-14 group'>
              <NavLink to='/favourates' className='flex'>
                <HiHeart className='text-3xl group-hover:text-white duration-300' />  
                <span className='text-xl pl-3 font-bold'>Favourates</span>
              </NavLink>
          </li>

          <li className='px-10 pt-14 group'>
              <NavLink to='/favourates' className='flex'>
                <FaCartShopping className='text-3xl group-hover:text-white duration-300' />  
                <span className='text-xl pl-3 font-bold'>Cart</span>
              </NavLink>
          </li>

          <li className='px-10 pt-14 group'>
              <NavLink to='/favourates' className='flex'>
                <FaUserTie  className='text-3xl group-hover:text-white duration-300' />  
                <span className='text-xl pl-3 font-bold'>My Profile</span>
              </NavLink>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Navbar
