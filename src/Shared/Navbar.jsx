import React, { useState } from 'react';
import travel from '../assets/logo-1.279e19a3.png'
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const navItems = <>
    <li ><Link className="hover:text-gray-500"  to="/">Home</Link></li>
    <li ><Link className="hover:text-gray-500"  to="/destinations">Destinations</Link></li>
    <li ><Link className="hover:text-gray-500"  to="/tours">Tours</Link></li>
    <li ><Link className="hover:text-gray-500"  to="/pages">Pages</Link></li>
    <li ><Link className="hover:text-gray-500"  to="/news">News</Link></li>
    <li ><Link className="hover:text-gray-500"  to="/contact">Contact</Link></li>
  </>

    return (
      <header className="bg-white py-10">
        <nav className="flex justify-between items-center w-[92%] mx-auto fixed">
          <div className="">
            <img src={travel} alt="" srcset="" />
          </div>
          <div
            className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 ${
              isMenuOpen ? 'top-[9%]' : 'top-[-100%]'
            } md:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 ">
              <Link to="/home">
                <a className="hover:text-gray-500">Home</a>
              </Link>
              <li>
                <a className="hover:text-gray-500">Destinations</a>
              </li>
              <li>
                <a className="hover:text-gray-500">Tours</a>
              </li>
              <Link to="/page">
                <a className="hover:text-gray-500">Pages</a>
              </Link>
              <li>
                <a className="hover:text-gray-500">News</a>
              </li>
              <Link to="/contact">
                <a className="hover:text-gray-500"> Contact</a>
              </Link>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button
              className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
              onClick={toggleMenu}
            >
              Sign in
            </button>

            <ion-icon
              name={isMenuOpen ? 'close' : 'menu'}
              onClick={toggleMenu}
              className="text-3xl cursor-pointer  
                   "
            ></ion-icon>
          </div>
        </nav>
      </header>
    );
};

export default Navbar;
