import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { NavLink } from 'react-router-dom';

const users = [
  {
    name: 'Kawsar Firoz',
    status: 'Available for freelance work',
    imgSrc: 'https://via.placeholder.com/30'
  },
  {
    name: 'Jane Doe',
    status: 'Busy with projects',
    imgSrc: 'https://via.placeholder.com/30'
  },
  {
    name: 'John Smith',
    status: 'Looking for opportunities',
    imgSrc: 'https://via.placeholder.com/30'
  },
  {
    name: 'Alice Johnson',
    status: 'On vacation',
    imgSrc: 'https://via.placeholder.com/30'
  },
  {
    name: 'Michael Brown',
    status: 'Working remotely',
    imgSrc: 'https://via.placeholder.com/30'
  },
  {
    name: 'Emily Davis',
    status: 'In a meeting',
    imgSrc: 'https://via.placeholder.com/30'
  },
  {
    name: 'Kawsar Firoz',
    status: 'Available for freelance work',
    imgSrc: 'https://via.placeholder.com/30'
  },
  {
    name: 'Jane Doe',
    status: 'Busy with projects',
    imgSrc: 'https://via.placeholder.com/30'
  },
  {
    name: 'John Smith',
    status: 'Looking for opportunities',
    imgSrc: 'https://via.placeholder.com/30'
  },
  {
    name: 'Alice Johnson',
    status: 'On vacation',
    imgSrc: 'https://via.placeholder.com/30'
  },
  {
    name: 'Michael Brown',
    status: 'Working remotely',
    imgSrc: 'https://via.placeholder.com/30'
  },
  {
    name: 'Emily Davis',
    status: 'In a meeting',
    imgSrc: 'https://via.placeholder.com/30'
  }
];

// bg-[#0866ff] bg-[#654caa]

const Message = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <div className=''>
      <div className="navbar bg-base-100 md:w-[50%] m-auto w-full ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>user one</a></li>
              <li><a>user one</a></li>
              <li><a>user one</a></li>
              <li><a>user one</a></li>
              <li><a>user one</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Kawsar firoz</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/home">Home</NavLink></li>
          </ul>
        </div>
      </div>
      {/* chat start here */}
      <div className='h-[500px] overflow-y-auto w-full md:w-[60%] m-auto px-5 border-[5px] rounded-[20px]  no_scrollbar'>
      <div className="chat chat-start">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='w-[20px] h-[20px] rounded-full object-cover' />
        <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
      </div>
      
      <div className="chat chat-end flex justify-end items-center">
          <div className="chat-bubble chat-bubble-success">You have been given a great honorYou have been given a great honorYou have been given a great honorYou have been given a great honorYou have been given a great honorYou have been given a great honorYou have been given a great honorYou have been given a great honorYou have been given a great honorYou have been given a great honorYou have been given a great honor.</div>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""  className='w-[20px] h-[20px] rounded-full object-cover'/>
      </div>
      
      <div className="chat chat-start">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='w-[20px] h-[20px] rounded-full object-cover' />
        <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
      </div>
        <div className="chat chat-end flex justify-end items-center">
          <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='w-[20px] h-[20px] rounded-full object-cover' />
        </div>

        <div className="chat chat-start">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='w-[20px] h-[20px] rounded-full object-cover' />
          <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
        </div>
        <div className="chat chat-end flex justify-end items-center">
          <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='w-[20px] h-[20px] rounded-full object-cover' />
        </div>

        <div className="chat chat-start">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='w-[20px] h-[20px] rounded-full object-cover' />
          <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
        </div>
        <div className="chat chat-end flex justify-end items-center">
          <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='w-[20px] h-[20px] rounded-full object-cover' />
        </div>

        <div className="chat chat-start">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='w-[20px] h-[20px] rounded-full object-cover' />
          <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
        </div>
        <div className="chat chat-end flex justify-end items-center">
          <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='w-[20px] h-[20px] rounded-full object-cover' />
        </div>

        <div className="chat chat-start">
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='w-[20px] h-[20px] rounded-full object-cover' />
          <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
        </div>

        <form action="" className='w-full sticky bottom-[0px] h-[70px] bg-white'>
          <label className="input input-bordered flex items-center gap-2 rounded">
            <input type="text" className="grow" placeholder="Search" />
            <span className="badge badge-info">Send</span>
          </label>
        </form>
        
        
    </div>
    {/* chat end here */}
    </div>
   
  );
}
export default Message;
