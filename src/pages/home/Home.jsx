import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar';
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import CreatPost from '../../components/create/CreatPost'
import Post from '../../components/post/Post'
import Strory from '../../components/story/Strory'
import { posts } from '../../components/data/data'

const Home = () => {
  const [openLeft, setOpenLeft ] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [openFeed, setOpenFeed] = useState(false);
  //  {openLeft, setOpenLeft , openRight, setOpenRight , openFeed , setOpenFeed}
 
  return (
    <div className='relative h-screen'>
      <Navbar openLeft={openLeft} setOpenLeft={setOpenLeft} openRight={openRight} setOpenRight={setOpenRight} openFeed={openFeed} setOpenFeed={setOpenFeed} />
      <div className='w-full bg-[white] flex justify-center gap-3'>
       <Leftbar openLeft={openLeft} />
        <div className='no_scrollbar w-full md:w-[100px] lg:w-[50%] bg-[white] h-[calc(100vh-70px)] overflow-y-auto'>
          <Strory />
          <CreatPost />
          <Post  posts ={posts}/>
        </div>
         <Rightbar openRight={openRight }/>
      </div>
    </div>
  )
}

export default Home