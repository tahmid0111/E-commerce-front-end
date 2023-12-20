import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// importing react-icons
import { HiHeart } from "react-icons/hi2";
import { FaAlignJustify , FaCartShopping , FaUserTie } from "react-icons/fa6";

const Navbar = () => {
  
  return (
    <div className='grid grid-cols-12 mx-5'>

      <div className='col-span-4 mx-auto'>
        <Link to='/'>
          <img src="logo.png" alt="logo" className='w-[100px] md:w-[100px] lg:w-[150px]' />
        </Link>
      </div>

      <div className='col-span-8 hidden md:block'>
        <ul className='flex float-right'>

          <li className='md:px-5 lg:px-10 pt-14 group'>
              <NavLink to='/favourates' className='flex'>
                <HiHeart className='md:text-2xl lg:text-3xl group-hover:text-white duration-300' />  
                <span className='md:text-lg lg:text-xl pl-3 font-bold'>Favourates</span>
              </NavLink>
          </li>

          <li className='md:px-5 lg:px-10 pt-14 group'>
              <NavLink to='/cart' className='flex'>
                <FaCartShopping className='md:text-2xl lg:text-3xl group-hover:text-white duration-300' />  
                <span className='md:text-lg lg:text-xl pl-3 font-bold'>Cart</span>
              </NavLink>
          </li>

          <li className='md:px-5 lg:px-10 pt-14 group'>
              <NavLink to='/profile' className='flex'>
                <FaUserTie  className='md:text-2xl lg:text-3xl group-hover:text-white duration-300' />  
                <span className='md:text-lg lg:text-xl pl-3 font-bold'>My Profile</span>
              </NavLink>
          </li>

        </ul>
      </div>

      <div className="col-span-8 responsive-navbar md:hidden">
        <div className="dropdown dropdown-left float-right pt-7 pr-10">
          <div tabIndex={0} role="button" className="btn m-1">
            <FaAlignJustify />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mt-5">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/favourates'>Favourates</Link></li>
            <li><Link to='/cart'>Cart</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar
