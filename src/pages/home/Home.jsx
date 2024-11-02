import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import CreatPost from '../../components/create/CreatPost';
import Post from '../../components/post/Post';
import Strory from '../../components/story/Strory';
import Footer from '../../components/footer/Footer';
import FriendList from '../../components/friendlist/FriendList';
import URL from '../../utils/Utils';
import { useLocation } from 'react-router-dom';
import useFetch from '../../utils/useFetch';
import { toast } from 'react-toastify';
import Skeleton from '../../components/Skeleton';

const Home = () => {
  const location = useLocation();
  const [openPost, setopenPost] = useState(true);
  const [openStory, setopenStory] = useState(false);
  const [openFriendList, setopenFriendList] = useState(false);
  const [posts, setPosts] = useState([]);
  const { data, loading, error } = useFetch(`${URL}/post/posts`)

 
  console.log(data)
  const showNewsFeed = () => {
    setopenPost(true);
    setopenStory(false);
    setopenFriendList(false);
  };

  const showStrory = () => {
    setopenPost(false);
    setopenStory(true);
    setopenFriendList(false);
  };

  const showAddFriend = () => {
    setopenPost(false);
    setopenStory(false);
    setopenFriendList(true);
  };

  useEffect(()=>{
    // if(error){
      toast.success("Failed to fetch posts")
    // }
    // if(data){
      // setPosts(data.posts)
    // }
  },[])

 

  // const RenderSkeleton = () => (
  //   <div className="w-full p-4">
  //     <div className="animate-pulse flex space-x-4">
  //       <div className="flex-1 space-y-4 py-1">
  //         <div className="h-[70px]  bg-gray-200 rounded w-3/4"></div>
  //         <div className="space-y-2">
  //           <div className="h-[70px]  bg-gray-200 rounded"></div>
  //           <div className="h-[70px]  bg-gray-200 rounded w-5/6"></div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="h-max">

      {/* <Navbar /> */}
      {/* <Skeleton /> */}
   
      {loading ? <Skeleton /> :<>
      
        <Navbar />
       <div className="flex justify-between items-start">
        <div className="w-full md:w-[70%] overflow-y-auto h-[100vh] no_scrollbar">
          <div className="w-2/3 m-auto flex justify-center items-center gap-4 my-3">
            <button
              className={`btn btn-sm border-[#1877F2] ml-2 ${openPost ? "bg-[#1877F2] text-[white]" : "bg-[white] text-[#1877F2] hover:bg-[white]"}`}
              onClick={showNewsFeed}
            >
              Newsfeed
            </button>
            <button
              className={`btn btn-sm border-[#1877F2] ml-2 ${openStory ? "bg-[#1877F2] text-[white]" : "bg-[white] text-[#1877F2] hover:bg-[white]"}`}
              onClick={showStrory}
            >
              Story
            </button>
            <button
              className={`btn btn-sm border-[#1877F2] ml-2 ${openFriendList ? "bg-[#1877F2] text-[white]" : "bg-[white] text-[#1877F2] hover:bg-[white]"}`}
              onClick={showAddFriend}
            >
              Add Friend
            </button>
          </div>
          <CreatPost />           
            <div className="w-full my-3 flex justify-start items-start flex-col">
              {openFriendList && <FriendList />}
              {openStory && <Strory posts={data.data} />}
              {openPost && <Post posts={data?.data} />}
            </div>
        </div>
        <div className="md:w-[30%] bg-white hidden md:flex h-screen">
          <Rightbar />
        </div>
      </div>
      </>
      
      }

      <Footer />
    </div>
  );
};
export default Home;
