import React, { useState } from 'react';
import { posts } from '../../components/data/data.js';
import Navbar from "../../components/navbar/Navbar";
import CreatPost from '../../components/create/CreatPost'
const ProfilePage = () => {
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [openFeed, setOpenFeed] = useState(false);
  const userId = 103
  const userPosts = posts.filter(post => post.userId === userId);

  return (
    <div className='w-full '>
      <Navbar openLeft={openLeft} setOpenLeft={setOpenLeft} openRight={openRight} setOpenRight={setOpenRight} openFeed={openFeed} setOpenFeed={setOpenFeed} />
      <div className='w-[100%] md:w-[80%] m-auto bg-[] flex flex-col items-start gap-4  shadow-md p-6 rounded-md '>

        <div className=' w-[100%] md:w-[80%]  rounded flex justify-center items-start flex-col m-auto p-6 shadow '>
          <img
            src="https://via.placeholder.com/150"
            alt="User Profile"
            className='w-[150px] h-[150px] rounded-full mb-4'
          />
          <h2 className='text-2xl font-bold mb-2'>User Name</h2>
          <p className='text-gray-600'>User description goes here. This is a brief bio of the user.</p>
          <p className='text-gray-600'><b>city:</b> Feni town</p>
          <p className='text-gray-600'><b>country:</b>Bangladesh</p>
          <p className='text-gray-600'>User description goes here. This is a brief bio of the user.</p>
        </div>
        <div className="w-[100%] md:w-[80%] m-auto bg-[] flex flex-col justify-start items-start gap-4   p-3 rounded-md shadow ">
          <CreatPost />
        </div>
        <div className='w-[100%] md:w-[100%] m-auto bg-[] flex flex-col items-center gap-4   p-6 rounded-md'>
          <h3 className='text-xl font-semibold mb-4'>User Posts</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {userPosts.map(post => (
              <div key={post.id} className='bg-white p-4 rounded shadow '>
                <img
                  src={post.img}
                  alt={post.title}
                  className='w-full h-[200px] object-cover rounded mb-4'
                />
                <h4 className='text-lg font-bold'>{post.title}</h4>
                <p className='text-sm text-gray-700'>{post.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
