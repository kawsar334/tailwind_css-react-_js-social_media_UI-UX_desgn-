import React, { useState } from 'react';

const FriendList = () => {
    // Sample list of friends
    const [friends, setFriends] = useState([
        { id: 1, name: 'John Doe', mutualFriends: 2, avatar: 'https://via.placeholder.com/150', isFriend: false },
        { id: 2, name: 'Jane Smith', mutualFriends: 4, avatar: 'https://via.placeholder.com/150', isFriend: true },
        { id: 3, name: 'Michael Jordan', mutualFriends: 3, avatar: 'https://via.placeholder.com/150', isFriend: false },
        { id: 4, name: 'Emily Davis', mutualFriends: 1, avatar: 'https://via.placeholder.com/150', isFriend: false },
        { id: 5, name: 'David Beckham', mutualFriends: 5, avatar: 'https://via.placeholder.com/150', isFriend: true },
        { id: 6, name: 'John Doe', mutualFriends: 2, avatar: 'https://via.placeholder.com/150', isFriend: false },
        { id: 7, name: 'Jane Smith', mutualFriends: 4, avatar: 'https://via.placeholder.com/150', isFriend: true },
        { id: 8, name: 'Michael Jordan', mutualFriends: 3, avatar: 'https://via.placeholder.com/150', isFriend: false },
        { id: 9, name: 'Emily Davis', mutualFriends: 1, avatar: 'https://via.placeholder.com/150', isFriend: false },
        { id: 10, name: 'David Beckham', mutualFriends: 5, avatar: 'https://via.placeholder.com/150', isFriend: true },
        { id: 11, name: 'John Doe', mutualFriends: 2, avatar: 'https://via.placeholder.com/150', isFriend: false },
        { id: 12, name: 'Jane Smith', mutualFriends: 4, avatar: 'https://via.placeholder.com/150', isFriend: true },
        { id: 13, name: 'Michael Jordan', mutualFriends: 3, avatar: 'https://via.placeholder.com/150', isFriend: false },
        { id: 14, name: 'Emily Davis', mutualFriends: 1, avatar: 'https://via.placeholder.com/150', isFriend: false },
        { id: 15, name: 'David Beckham', mutualFriends: 5, avatar: 'https://via.placeholder.com/150', isFriend: true },
        { id: 16, name: 'John Doe', mutualFriends: 2, avatar: 'https://via.placeholder.com/150', isFriend: false },
        { id: 17, name: 'Jane Smith', mutualFriends: 4, avatar: 'https://via.placeholder.com/150', isFriend: true },
        { id: 18, name: 'Michael Jordan', mutualFriends: 3, avatar: 'https://via.placeholder.com/150', isFriend: false },
        { id: 19, name: 'Emily Davis', mutualFriends: 1, avatar: 'https://via.placeholder.com/150', isFriend: false },
        { id: 20, name: 'David Beckham', mutualFriends: 5, avatar: 'https://via.placeholder.com/150', isFriend: true },
    ]);

    // Toggle Add/Remove Friend status
    const toggleFriendStatus = (id) => {
        setFriends((prevFriends) =>
            prevFriends.map((friend) =>
                friend.id === id ? { ...friend, isFriend: !friend.isFriend } : friend
            )
        );
    };

    return (
        <div className="container mx-auto p-4 my-5">
            <h2 className="text-2xl font-bold mb-6 text-center">Friend List</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {friends.map((friend) => (
                    <div key={friend.id} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
                        <img
                            src={friend.avatar}
                            alt={friend.name}
                            className="w-24 h-24 rounded-full mb-4"
                        />
                        <h3 className="text-lg font-semibold">{friend.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">
                            {friend.mutualFriends} mutual friend
                            {friend.mutualFriends > 1 ? 's' : ''}
                        </p>

                        <div className="flex space-x-2 flex-col gap-3 justify-start items-center">
                            <button
                                onClick={() => toggleFriendStatus(friend.id)}
                                className="px-7 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
                            >
                                Add Friend
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default FriendList;
