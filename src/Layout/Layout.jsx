import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import img1 from '../image/logo.png'



const Layout = () => {
  return (
    <div>
      <ul className='flex justify-around items-center p-4 text-[#FFFFFF]'>
        <li>
          <img src={img1} alt="Logo" className="w-[100px] " />
        </li>
        <li className="text-white hover:text-gray-500 transition duration-300">
          <Link to="/">Services</Link>
        </li>
        <li  className="text-white hover:text-gray-500 transition duration-300">
          <Link to="CaseStudies">Case Studies</Link>
        </li>
        <li  className="text-white hover:text-gray-500 transition duration-300">
          <Link to="AboutUs">About Us</Link>
        </li>
        <li  className="text-white hover:text-gray-500 transition duration-300">
          <Link to="Blog">Blog</Link>
        </li>
      </ul>

      <div className="p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
