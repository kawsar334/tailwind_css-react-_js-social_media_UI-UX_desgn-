import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-blue-600">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
                <p className="mt-4 text-gray-600">Oops! The page you are looking for doesn't exist.</p>
                <NavLink
                    to="/"
                    className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    Go to Home
                </NavLink>
            </div>
        </div>
    );
};

export default NotFound;
