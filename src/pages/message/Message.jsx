import React, { useState } from 'react';

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
    <div className='messenger w-full h-[100vh]'>
      <div className="wrapper w-full  md:w-[80%] h-full bg-[#654caa] m-auto flex justify-center items-center rounded  relative">
        <div className={`left  bg-[#271c46] w-[100%] h-full   md:w-[30%] md:h-[90%] p-3 ${openMenu ? "flex" : "hidden"} md:flex flex-col justify-start items-start gap-3  absolute left-[0px] top-[90px] md:top-0 z-10 right-[100px] md:relative overflow-y-scroll`}>
          <div className='hidden md:flex justify-start items-center p-4 gap-2 border-b border-[rgba(255,255,255,0.1)] w-full cursor-pointer' onClick={() => setOpenMenu(!openMenu)}>
            <img
              src="https://via.placeholder.com/30"
              alt="User Profile"
              className='w-[40px] h-[40px] rounded-[50%] mb-4 object-cover'
            />
            <div className='flex flex-col gap-0 items-start justify-start'>
              <span className='m-0 text-2xl text-white'>Kawsar Firoz</span>
              <span className='text-[12px] mt-[0px] text-[#555]'>Available for freelancer work</span>
            </div>
          </div>
          <div className='flex justify-center items-center gap-6 -300 w-full'>
            <button className='text-white text-2xl' onClick={() => setOpenMenu(!openMenu)}><i class="fa-solid fa-user-group"></i></button>
            <button className='text-white text-2xl' onClick={() => setOpenMenu(!openMenu)}><i className="fa-solid fa-gears"></i></button>
            <button className='text-white text-2xl' onClick={() => setOpenMenu(!openMenu)}><i class="fa-regular fa-message"></i></button>
            <button className='text-white text-2xl' onClick={() => setOpenMenu(!openMenu)}><i className="fa-solid fa-gears"></i></button>

          </div>
          <div className='w-full'>
            <input
              type="text"
              placeholder='Search a User'
              className='w-full border-b outline-none bg-transparent border-[rgba(255,255,255,0.1)] p-2'
            />
          </div>
          <ul className='w-full flex flex-col gap-1'>
            {users.map((user, index) => (
              <li key={index} className='bg-[rgb(0,0,0,0.1)] w-full p-2' onClick={() => setOpenMenu(!openMenu)}>
                <div className='flex justify-start items-center gap-2 w-full cursor-pointer'>
                  <img
                    src={user.imgSrc}
                    alt="User Profile"
                    className='w-[40px] h-[40px] rounded-[50%] mb-4 object-cover'
                  />
                  <div className='flex flex-col gap-0 items-start justify-start'>
                    <span className='m-0 text-[14px] text-white'>{user.name}</span>
                    <span className='text-[12px] mt-[0px] text-[#555]'>{user.status}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="right bg-[#e5e5ff] w-full md:w-[60%]  h-full md:h-[90%] relative ">
          <div className="top bg-[#0e091c] h-[15%] relative">
            <div className='flex justify-start items-center p-4 gap-2 border-b border-[rgba(255,255,255,0.1)] w-full cursor-pointer '>
              <img
                src="https://via.placeholder.com/30"
                alt="User Profile"
                className='w-[40px] h-[40px] rounded-[50%] mb-4 object-cover'
              />
              <div className='flex flex-col gap-0 items-start justify-start'>
                <span className='m-0 text-[20px] text-[purple]'>Kawsar Firoz</span>
                <span className='text-[12px] mt-[0px] text-[#555]'>Available for freelancer work</span>
              </div>
            </div>
            {openMenu ? <i class="fa-solid fa-xmark text-2xl text-[crimson] block md:hidden absolute right-[10px] top-[10px] cursor-pointer" onClick={() => setOpenMenu(!openMenu)}></i> :
              <i class="fa-solid fa-bars text-2xl text-[white] block md:hidden absolute right-[10px] top-[10px] cursor-pointer" onClick={() => setOpenMenu(!openMenu)}></i>}
          </div>
          <div className="middle w-full h-[70%] bg-[white] flex  flex-col gap-2   overflow-y-auto">
            <div className="incoming w-[100%] h-auto  text-right flex justify-start items-end  my-1 ">
              <img
                src="https://via.placeholder.com/30"
                alt="User Profile"
                className='w-[25px] h-[25px] rounded-[50%] mb-4 object-cover mr-2'
              />
              <div className='flex justify-start items-start w-[70%] gap-1 flex-col bg-white rounded-[20px] '>
                <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <span className='text-[13px] text-[lightgray]'>5min ago .</span>
              </div>
            </div>
            <div className="incoming w-[100%] h-auto   text-right flex flex-row-reverse justify-start items-start   my-1 ">
              <img
                src="https://via.placeholder.com/30"
                alt="User Profile"
                className='w-[25px] h-[25px] rounded-[50%] mb-4 object-cover mr-2'
              />
              <div className='flex justify-start items-start w-[70%] bg-[#0866ff] text-white p-2 gap-1 flex-col  rounded-[20px] '>
                <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit</p>
                <span className='text-[13px] text-[lightgray]'>5min ago .</span>
              </div>
            </div>
          </div>
          <div className="bottom sticky bottom-0 left-0  h-[15%] bg-[white] flex justify-end items-end  shadow">
            <input type='text' placeholder="Enter Your Message" className='p-2 h-[40px]  border w-[90%] outline-none' />
            <button className='p-2 h-[40px] border w-[10%] bg-red-400 cursor-pointer'>send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Message;
