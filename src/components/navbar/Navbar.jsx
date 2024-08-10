import React from 'react';
import { NavLink, useLocation } from "react-router-dom"

const Navbar = ({ openLeft, setOpenLeft, openRight, setOpenRight, openFeed, setOpenFeed }) => {
  const route = useLocation().pathname;

  return (
    <div className='w-[100%] h-[auto] md:h-[70px] border bg-[#0866ff] m-auto sticky top-[-5px] left-0 flex justify-center items-center z-20'>
      <div className='w-[90%]  flex  items-center flex-col md:flex-row justify-between'>
        <div className='w-[100%] md:w-[50%] flex justify-between items-center m-3'>
          <NavLink to="/" className='text-3xl md:text-5xl mr-2 text-[white]'><i class="fa-brands fa-facebook"></i></NavLink>
          <input type="text" placeholder='Search friend...' className='w-[400px] h-[30px] rounded-[50px] p-2 outline-none border bg-[#0866ff] text-[lightgray] capitalize ' />
        </div>
        <div className='w-[90%] md:w-[40%]  p-[10px]'>
          <ul className='flex justify-center items-center gap-[50px] md:gap-6 '>
            {route === "/" && <li onClick={() => setOpenRight(!openRight)}>
              <NavLink to="#">
                {openRight ? <i class="fa-solid fa-xmark text-2xl text-[crimson]  block md:hidden" ></i> :
                  <i class="fa-regular fa-bell text-2xl text-[white]"></i>}
              </NavLink>
            </li>}
            <li>
              <NavLink to="/message"><i class="fa-regular fa-message text-2xl text-[white]"></i></NavLink>
            </li>
            <li>
              <NavLink to="/profile" >
                <img src="/images/2.jpg" alt="" className='w-[30px] h-[30px] rounded-[50%] object-cover cursor-pointer border-2  md:w-[40px] md:h-[40px] ' />
              </NavLink>
            </li>
            {route === "/" && <li className="menu cursor-pointer " onClick={() => setOpenLeft(!openLeft)}>
              {!openLeft ? <i class="fa-solid fa-bars text-2xl text-[white] block md:hidden"></i> :
                <i class="fa-solid fa-xmark text-2xl text-[crimson]  block md:hidden" ></i>}
            </li>}
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar