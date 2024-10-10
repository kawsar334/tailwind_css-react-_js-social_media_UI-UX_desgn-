import React from 'react';
import { NavLink, useLocation } from "react-router-dom"

const Navbar = ({ openLeft, setOpenLeft, openRight, setOpenRight, openFeed, setOpenFeed }) => {
  const route = useLocation().pathname;

  return (
    <div class="navbar bg-base-100 sticky top-0 left-0  z-30 shadow px-5">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  ">
            <li className='my-2  '><NavLink className="hover:text-[white] text-[#1877F2] py-3"  to="/home">Homepage</NavLink></li>
            <li className='my-2  '><NavLink className="hover:text-[white] text-[#1877F2] py-3" to="/login">Login</NavLink></li>
            <li className='my-2  '><NavLink className="hover:text-[white] text-[#1877F2] py-3" to="/register">Register</NavLink></li>
            <li className='my-2  '><NavLink className="hover:text-[white] text-[#1877F2] py-3" to="/profile/:id">profile</NavLink></li>
            <li className='my-2  '><NavLink className="hover:text-[white] text-[#1877F2] py-3" to="/notification/:id">Noification</NavLink></li>
            <li className='my-2  '><NavLink className="hover:text-[white] text-[#1877F2] py-3" to="/">Logout</NavLink></li>

          </ul>
        </div>
      </div>
      <div class="navbar-start text-[#1877F2]">
        <NavLink to="/home" class="btn btn-ghost btn-circle text-3xl  ">Facebook</NavLink>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button class="btn btn-ghost btn-circle">
          <NavLink to="/notifications/:id" class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            
          </NavLink>
        </button>

        <NavLink
          to="/profile/:id"
         
          rel="noopener noreferrer"
          className="flex items-center space-x-3 btn btn-ghost btn-circle"
        >
     
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            className="w-[40px] h-[40px] rounded-full"
          />
      
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar