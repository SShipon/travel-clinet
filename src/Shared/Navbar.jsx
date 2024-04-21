import React, { useState, useEffect, useRef } from 'react';
import travel from '../assets/logo-1.279e19a3.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="py-10">
            <nav className="flex justify-between items-center w-[92%] mx-auto">
                <div className="">
                    <img src={travel} alt="Travel" />
                </div>
                <div
                    className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 ${
                        isMenuOpen ? 'top-[9%]' : 'top-[-100%]'
                    } md:w-auto w-full flex items-center px-5 `}
                    ref={menuRef}
                >
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 ">
                        <li>
                            <Link to="/home" className="hover:text-gray-500">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/destination" className="hover:text-gray-500">
                                Destinations
                            </Link>
                        </li>
                        <li className="relative">
                            <a
                                className="hover:text-gray-500 cursor-pointer"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                Tours
                            </a>
                            {/* Dropdown menu */}
                            {isMenuOpen && (
                                <ul className="absolute top-full left-0 bg-white border border-gray-200 py-2 px-10 lg:block hidden">
                                    <li>
                                        <Link to="/tours/europe">Europe Tours</Link>
                                    </li>
                                    <li>
                                        <Link to="/tours/asia">Asia Tours</Link>
                                    </li>
                                    {/* Add more dropdown items as needed */}
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link to="/page" className="hover:text-gray-500">
                                Pages
                            </Link>
                        </li>
                        <li>
                            <Link to="/news" className="hover:text-gray-500">
                                News
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-500">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <Link to="/login">
                        <button
                            className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
                            onClick={toggleMenu}
                        >
                            Sign in
                        </button>
                    </Link>
                    <div className="md:hidden lg:hidden">
                        <ion-icon
                            name={isMenuOpen ? 'close' : 'menu'}
                            onClick={toggleMenu}
                            className="text-3xl cursor-pointer"
                        ></ion-icon>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
