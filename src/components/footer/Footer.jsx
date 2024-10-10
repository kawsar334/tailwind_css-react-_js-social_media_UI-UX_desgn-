import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-4">
                {/* Top Section: Links */}
                <div className="flex flex-col md:flex-row justify-between text-sm">
                    <div className="flex flex-wrap mb-4 md:mb-0">
                        <a href="#about" className="mr-4 hover:underline">
                            About
                        </a>
                        <a href="#help" className="mr-4 hover:underline">
                            Help
                        </a>
                        <a href="#terms" className="mr-4 hover:underline">
                            Terms
                        </a>
                        <a href="#privacy" className="mr-4 hover:underline">
                            Privacy
                        </a>
                        <a href="#adChoices" className="mr-4 hover:underline">
                            Ad Choices
                        </a>
                        <a href="#cookies" className="mr-4 hover:underline">
                            Cookies
                        </a>
                        <a href="#more" className="hover:underline">
                            More
                        </a>
                    </div>

                    {/* Language Selector */}
                    <div className="text-gray-400">
                        <span className="mr-2">English (US)</span>
                        <span className="cursor-pointer hover:underline">· Change</span>
                    </div>
                </div>

                {/* Bottom Section: Social Icons */}
                <div className="flex justify-between items-center mt-6">
                    <p className="text-sm text-gray-400">© 2024 Facebook, Inc.</p>
                    <div className="flex space-x-4">
                        <a
                            href="#facebook"
                            className="text-gray-400 hover:text-white"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="#instagram"
                            className="text-gray-400 hover:text-white"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="#twitter"
                            className="text-gray-400 hover:text-white"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="#linkedin"
                            className="text-gray-400 hover:text-white"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
