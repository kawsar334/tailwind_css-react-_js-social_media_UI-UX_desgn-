import React, { useState } from 'react';
import { posts } from '../../components/data/data.js';
import Navbar from "../../components/navbar/Navbar";
import CreatPost from '../../components/create/CreatPost'
import Footer from '../../components/footer/Footer.jsx';


const Profile = () => {
  const user = {
    name: 'kawsar firoz',
    avatar: 'https://via.placeholder.com/150',
    about: 'This is a brief about section where you can talk about yourself.',
    posts: [
      { id: 1, content: 'Hello, world!', time: 'Just now' },
      { id: 2, content: 'This is my first post!', time: '2 hours ago' },
      { id: 3, content: 'Loving the new features in this app!', time: '1 day ago' },
      { id: 4, content: 'Had a great day at the park!', time: '3 days ago' },
      { id: 5, content: 'Learning React is fun!', time: '1 week ago' },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 flex flex-col">
        {/*Header */}
        <div className="flex items-center mb-6 bg-gray-200 p-4 rounded-lg shadow-md">
          <img src={user.avatar} alt="User Avatar" className="w-32 h-32 rounded-full mr-4" />
          <div>
            <h1 className="text-2xl font-semibold">{user.name}</h1>
            <p className="text-gray-700"> web developer </p>
          </div>
        </div>

        {/* About  */}
        <div className="mb-6 rounded-lg bg-white shadow-md p-4">
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-gray-700"><b>Country:</b> Bangladesh</p>
          <p className="text-gray-700"><b>city:</b> Feni</p>
          <p className="text-gray-700 underline cursor-pointer">See more.</p>
        </div>

   

        {/* timeline */}
        <div className="rounded-lg bg-white shadow-md p-4 ">
          <h2 className="text-xl font-semibold mb-4">Timeline</h2>
          <CreatPost />
          {posts.map((item) => (
            <div className='w-full border p-5 rounded-[10px] my-3'>
              <div className='w-full flex items-start flex-col gap-3 cursor-pointer '>
                <h1 className='text-3xl font-semibold '>{item?.title || "Not Found "}</h1>
                {item?.img && <img src={item?.img} alt="" className='w-[100%] h-[300px] object-cover rounded-[10px]' />}
                <p className='text-[#555]'>{item.desc}</p>
                <div className='flex justify-between gap-5 w-full'>
                  <button className='btn '>likes</button>
                  <button className='btn '>comments</button>
                  <button className='btn '>share</button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
