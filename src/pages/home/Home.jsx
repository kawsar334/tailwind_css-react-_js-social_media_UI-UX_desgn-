import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Leftbar from '../../components/leftbar/Leftbar';
import Rightbar from '../../components/rightbar/Rightbar';
import CreatPost from '../../components/create/CreatPost';
import Post from '../../components/post/Post';
import Strory from '../../components/story/Strory';
// import { posts } from '../../components/data/data';
import Footer from '../../components/footer/Footer';
import FriendList from '../../components/friendlist/FriendList';
import Message from '../message/Message';

const Home = () => {
  const [openPost, setopenPost] = useState(true);
  const [openStory, setopenStory] = useState(false);
  const [openFriendList, setopenFriendList] = useState(false);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const GetData = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood");
        const data = await response.json();
        setPosts(data.meals);
        setLoading(false); // Data is loaded
      } catch (err) {
        console.log(err);
        setLoading(false); // In case of an error, stop loading
      }
    };
    GetData();
  }, []);

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



  return (
    <div className="h-max">
      <Navbar />

      <div className="flex justify-between items-start">
        <div className="w-full md:w-[70%] overflow-y-auto h-[100vh] no_scrollbar">
          <div className="w-2/3 m-auto flex justify-center items-center gap-4 my-3">
            <button
              className={`btn btn-sm border-[#1877F2] ml-2 ${openPost ? "bg-[#1877F2] text-[white]" : "bg-[white] text-[#1877F2] hover:bg-[white]"
                }`}
              onClick={showNewsFeed}
            >
              Newsfeed
            </button>
            <button
              className={`btn btn-sm border-[#1877F2] ml-2 ${openStory ? "bg-[#1877F2] text-[white]" : "bg-[white] text-[#1877F2] hover:bg-[white]"
                }`}
              onClick={showStrory}
            >
              Story
            </button>
            <button
              className={`btn btn-sm border-[#1877F2] ml-2 ${openFriendList ? "bg-[#1877F2] text-[white]" : "bg-[white] text-[#1877F2] hover:bg-[white]"
                }`}
              onClick={showAddFriend}
            >
              Add Friend
            </button>
          </div>
          <CreatPost />
      



          {/* Loading Spinner */}
          {loading ? (
            <div className="flex justify-center items-center h-96">
              <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="w-full my-3 flex justify-start items-start flex-col">
              {openFriendList && <FriendList />}
              {openStory && <Strory posts={posts} />}
              {openPost && <Post posts={posts} />}
            </div>
          )}
        </div>

        {/* Right section */}
        <div className="md:w-[30%] bg-white hidden md:flex h-screen">
          <Rightbar />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
