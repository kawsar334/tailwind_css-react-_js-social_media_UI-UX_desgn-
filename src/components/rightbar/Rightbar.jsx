import React from 'react';
import Notification from '../notification/Notification';
import FriendList from '../friendlist/FriendList';

const Rightbar = ({ openRight }) => {
  return (
    <div className=' p-3 overflow-auto no_scrollbar w-full  '>

      {/* <Notification/> */}

      <div className='card shadow p-3 w-full'>

      <h2 className=" text-xl font-bold mb-1  border-y shadow py-2 rounded px-1 ">Suggested Friends</h2>
         
        <div className='w-full  py-4 px-1 flex justify-start items-start flex-col gap-2'>
          <div className="mb-4">
            <p className="font-medium py-1">kawsar firoz</p>
            <p className='text-[12px] text-[lightgray] '>2 Mutual friend</p>
            <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition-all">
              Add Friend
            </button>
          </div>
          <div className="mb-4">
            <p className="font-medium py-1">kawsar firoz</p>
            <p className='text-[12px] text-[lightgray] '>2 Mutual friend</p>
            <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition-all">
              Add Friend
            </button>
          </div>
          <div className="mb-4">
            <p className="font-medium py-1">kawsar firoz</p>
            <p className='text-[12px] text-[lightgray] '>2 Mutual friend</p>
            <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition-all">
              Add Friend
            </button>
          </div>
     </div>

     {/*  */}

        <h2 className=" text-xl font-bold mb-1  border-y shadow py-2 rounded px-1 ">Suggested Friends</h2>
        <h2 className=" text-xl font-bold mb-1  border-y shadow py-2 rounded px-1 ">Suggested Friends</h2>


     {/*  */}
     
      </div>    
    </div>
  );
};

export default Rightbar;
