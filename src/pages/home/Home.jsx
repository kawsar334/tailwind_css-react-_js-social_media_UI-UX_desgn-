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

const Home = () => {
  const location = useLocation();
  const [LoginMessage, setLoginMessage] = useState(location.state?.message || '');
  const [openPost, setopenPost] = useState(true);
  const [openStory, setopenStory] = useState(false);
  const [openFriendList, setopenFriendList] = useState(false);
  const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);
  const { data, loading, error } = useFetch(`${URL}post/posts`)


  // useEffect(() => {
  //   const GetData = async () => {
  //     try {
  //       const response = await fetch(`${URL}post/posts`);
  //       const data = await response.json();
  //       setPosts(data.data);
  //       setLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //       setLoading(false);
  //     }
  //   };
  //   GetData();
  // }, []);

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

  useEffect(() => {
    if (LoginMessage) {
      const timer = setTimeout(() => {
        setLoginMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [LoginMessage]);

  const RenderSkeleton = () => (
    <div className="w-full p-4">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-[70px]  bg-gray-200 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-[70px]  bg-gray-200 rounded"></div>
            <div className="h-[70px]  bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-max">
      <Navbar />
      {LoginMessage && (
        <div className="flex justify-center items-center my-4">
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative max-w-md w-full">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline ml-2">{LoginMessage}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-green-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={() => setLoginMessage('')}
              >
                <title>Close</title>
                <path d="M14.348 5.652a.5.5 0 010 .707L10.707 10l3.641 3.641a.5.5 0 11-.707.707L10 10.707l-3.641 3.641a.5.5 0 01-.707-.707L9.293 10 5.652 6.359a.5.5 0 11.707-.707L10 9.293l3.641-3.641a.5.5 0 01.707 0z" />
              </svg>
            </span>
          </div>
        </div>
      )}
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

          {loading ? (
            <div className="w-full my-3 flex justify-start items-start flex-col">
              {
                
             <RenderSkeleton />
              
              }
            </div>
          ) : (
            <div className="w-full my-3 flex justify-start items-start flex-col">
              {openFriendList && <FriendList />}
              {openStory && <Strory posts={data.data} />}
              {openPost && <Post posts={data.data} />}
            </div>
          )}
        </div>
        <div className="md:w-[30%] bg-white hidden md:flex h-screen">
          <Rightbar />
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Home;
