import React, { useEffect, useState } from 'react';

const Alert = ({ type, message, clearMessage }) => {
    const [typeMessage, setTypeMessage] = useState(type === 'success' ? 'Success!' : 'Error!')
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                clearMessage(); 
                setTypeMessage(" ")
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [message, clearMessage]);

    if (!message) return null; 

    const bgColor = type === 'success' ? 'bg-green-100 border-green-400 text-green-700' : 'bg-red-100 border-red-400 text-red-700';
    const iconColor = type === 'success' ? 'text-green-500' : 'text-red-500';

    return (
        <div className={`flex justify-center items-center my-4 ${typeMessage === " " ?"hidden":"flex"}`}>
            <div className={`border px-4 py-3 rounded relative max-w-md w-full ${bgColor}`}>
                <strong className="font-bold">{typeMessage}</strong>
                <span className="block sm:inline ml-2">{message}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <svg
                    className={`fill-current h-6 w-6 ${iconColor}`}
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    onClick={clearMessage}
                    >
                    <title>Close</title>
                    <path d="M14.348 5.652a.5.5 0 010 .707L10.707 10l3.641 3.641a.5.5 0 11-.707.707L10 10.707l-3.641 3.641a.5.5 0 01-.707-.707L9.293 10 5.652 6.359a.5.5 0 11.707-.707L10 9.293l3.641-3.641a.5.5 0 01.707 0z" />
                    </svg>
                    </span>
            </div>
        </div>
                
    );
};

export default Alert;
