import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Notification = () => {
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'John Doe liked your post', time: '2 minutes ago', isRead: false },
        { id: 2, message: 'Jane Smith commented on your photo', time: '5 minutes ago', isRead: false },
        { id: 3, message: 'David Beckham sent you a friend request', time: '10 minutes ago', isRead: true },
        { id: 4, message: 'Michael Jordan shared your post', time: '20 minutes ago', isRead: false },
        { id: 5, message: 'Emily Davis mentioned you in a comment', time: '30 minutes ago', isRead: true },
        { id: 6, message: 'Jane Smith shared your profile', time: '45 minutes ago', isRead: false },
        { id: 7, message: 'John Doe replied to your comment', time: '1 hour ago', isRead: true },
    ]);

    const markAsRead = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notification) =>
                notification.id === id ? { ...notification, isRead: true } : notification
            )
        );
    };

    const markAsUnread = (id) => {
        setNotifications((prevNotifications) =>
            prevNotifications.map((notification) =>
                notification.id === id ? { ...notification, isRead: false } : notification
            )
        );
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4 flex flex-row justify-between">
                {/* Left Sidebar - User Profile */}
                <div className="w-1/4 md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md hidden md:flex flex-col justify-start items-start   gap-2 ">
                    <h2 className="text-lg font-semibold mb-4">User Profile</h2>
                    <div className="flex items-center mb-4">
                        <img
                            src="https://www.w3schools.com/howto/img_avatar.png"
                            alt="User Avatar"
                            className="w-16 h-16 rounded-full mr-4"
                        />
                        <div>
                            <h3 className="font-semibold">Your Name</h3>
                            <p className="text-sm text-gray-500">Your Email</p>
                        </div>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all">
                        Edit Profile
                    </button>
                </div>

                {/* Notification List */}
                <div className="md:w-1/2 rounded-lg shadow-md p-4 w-full ">
                    <div className="flex justify-end mb-4">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition-all"
                            onClick={() =>
                                setNotifications(notifications.map((notification) => ({ ...notification, isRead: true })))
                            }
                        >
                            Mark All as Read
                        </button>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
                            onClick={() =>
                                setNotifications(notifications.map((notification) => ({ ...notification, isRead: false })))
                            }
                        >
                            Mark All as Unread
                        </button>
                    </div>
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className={`flex justify-between items-center p-3 mb-3 rounded-lg ${notification.isRead ? 'bg-gray-100' : 'bg-blue-50'
                                }`}
                        >
                            <div>
                                <p className={`font-medium ${notification.isRead ? 'text-gray-700' : 'text-black'}`}>
                                    {notification.message}
                                </p>
                                <p className="text-xs text-gray-500">{notification.time}</p>
                            </div>
                            <div>
                                {notification.isRead ? (
                                    <button
                                        className="text-blue-500 hover:text-blue-700 text-sm"
                                        onClick={() => markAsUnread(notification.id)}
                                    >
                                        Mark as Unread
                                    </button>
                                ) : (
                                    <button
                                        className="text-blue-500 hover:text-blue-700 text-sm"
                                        onClick={() => markAsRead(notification.id)}
                                    >
                                        Mark as Read
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Sidebar - Add Friends */}
                <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md hidden lg:flex flex-col justify-start items-start   gap-2">
                    <h2 className="text-lg font-semibold mb-4">Add Friends</h2>
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
                    <div className="mb-4">
                        <p className="font-medium py-1">kawsar firoz</p>
                        <p className='text-[12px] text-[lightgray] '>2 Mutual friend</p>
                        <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition-all">
                            Add Friend
                        </button>
                    </div>
                  
                    
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Notification;
