import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const ManualCarousel = () => {
    const content = [
        {
            title: "Add Friends",
            description: "Connect with people from around the world!",
            image: "https://i.pinimg.com/736x/e6/47/8f/e6478f27f771bad537e36682145fe80e.jpg",
        },
        {
            title: "Meet Awesome People",
            description: "Explore communities and enjoy yourself.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkngQmR57RS2cDTTtix704J-nzb_S-O8gUCQ&s",
        },
        {
            title: "Chat with Friends",
            description: "Stay in touch with your friends and loved ones.",
            image: "https://img.freepik.com/premium-vector/chat-vector-icon_676179-133.jpg",
        },
        {
            title: "Share Your Moments",
            description: "Post your photos and stories to share with your friends.",
            image: "https://img.freepik.com/free-vector/coding-concept-illustration_114360-939.jpg?size=626&ext=jpg",
        },
        {
            title: "Discover New Interests",
            description: "Find new hobbies and connect with like-minded people.",
            image: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1728432000&semt=ais_hybrid",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [showContent, setShowContent] = useState(false);
    const [progress, setProgress] = useState(0);
    const touchStartRef = useRef(0);
    const touchEndRef = useRef(0);

    // Automatically slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length);
        }, 3000);

        return () => clearInterval(interval); // Clean up on unmount
    }, [content.length]);

    // Delay to show content and progress bar logic
    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(progressInterval);
                    setShowContent(true);
                    return 100;
                }
                return prevProgress + 10;
            });
        }, 100);

        return () => clearInterval(progressInterval); // Clean up
    }, []);

    // Handle swipe start
    const handleTouchStart = (e) => {
        touchStartRef.current = e.targetTouches[0].clientX;
    };

    // Handle swipe end and navigate based on swipe direction
    const handleTouchEnd = () => {
        const swipeDistance = touchStartRef.current - touchEndRef.current;
        if (swipeDistance > 50) {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length);
        } else if (swipeDistance < -50) {
            setCurrentSlide((prevSlide) => (prevSlide - 1 + content.length) % content.length);
        }
    };

    // Handle touch move
    const handleTouchMove = (e) => {
        touchEndRef.current = e.targetTouches[0].clientX;
    };

    // Handle indicator button click
    const handleIndicatorClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-[white] p-4">
            {!showContent ? (
                <div className="w-full max-w-lg bg-white p-4 rounded-lg shadow-lg text-center transition-all duration-500 ease-in-out">
                    <p className="text-lg font-bold mb-2">Loading...</p>
                    <div className="w-full bg-gray-300 rounded-full h-2.5 mb-4">
                        <div className="bg-[crimson] h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>
            ) : (
                <>
                    {/* Carousel Content */}
                    <div
                        className="w-full max-w-lg bg-white p-8 rounded-lg  text-center transition-all duration-500 ease-in-out"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <img src={content[currentSlide].image} alt={content[currentSlide].title} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h2 className="text-2xl font-bold mb-2">{content[currentSlide].title}</h2>
                        <p className="text-gray-700">{content[currentSlide].description}</p>
                    </div>

                    {/* Circle Indicators */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {content.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleIndicatorClick(index)}
                                className={`w-4 h-4 rounded-full ${index === currentSlide ? "bg-teal-500" : "bg-gray-400"}`}
                            />
                        ))}
                    </div>

                    {/* Join Now Button */}
                    <div className="my-5">
                        <NavLink to="/home" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all">
                            Join Now
                        </NavLink>
                    </div>
                </>
            )}
        </div>
    );
};

export default ManualCarousel;


// import React, { useState, useEffect } from "react";

// const SliderWithProgress = () => {
//     const content = [
//         "Slide 1: Welcome to our site!",
//         "Slide 2: Check out our latest updates.",
//         "Slide 3: Don't miss out on our offers!",
//         "Slide 4: Thank you for visiting!"
//     ];

//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [progress, setProgress] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setProgress((prevProgress) => {
//                 if (prevProgress < 100) {
//                     return prevProgress + 2; // Increase progress bar
//                 } else {
//                     setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length); // Move to next slide
//                     return 0; // Reset progress bar
//                 }
//             });
//         }, 100); // Update every 100ms

//         return () => clearInterval(interval); // Clean up on unmount
//     }, [currentSlide]);

//     return (
//         <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
//             {/* Slider Content */}
//             <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 text-center text-lg font-semibold">
//                 <p>{content[currentSlide]}</p>
//             </div>

//             {/* Progress Bar */}
//             <div className="w-full max-w-lg mt-4 bg-gray-300 rounded-full h-2">
//                 <div
//                     className="bg-teal-500 h-2 rounded-full transition-all duration-100"
//                     style={{ width: `${progress}%` }}
//                 ></div>
//             </div>
//         </div>
//     );
// };

// export default SliderWithProgress;
