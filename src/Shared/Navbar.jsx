import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-900 text-black">
      <div className="mx-auto flex justify-around py-4">
        <div className="flex items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-gray-800 rounded-box w-52"
            >
              <li>
                <a href="#" >
                  Home
                </a>
              </li>
              <li>
                <a href="#" >
                  Destinations
                </a>
              </li>
              <li>
                <a href="#" >
                  Tours
                </a>
              </li>
              <li>
                <a href="#" >
                  Pages
                </a>
              </li>
              <li>
                <a href="#" >
                  News
                </a>
              </li>
              <li>
                <a href="#" >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl ml-4">
            Tevily
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#" >
                Home
              </a>
            </li>
            <li>
              <a href="#" >
                Destinations
              </a>
            </li>
            <li>
              <a href="#" >
                Tours
              </a>
            </li>
            <li>
              <a href="#" >
                Pages
              </a>
            </li>
            <li>
              <a href="#" >
                News
              </a>
            </li>
            <li>
              <Link to="/contact" >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex">
            <div className="search-container">
              <div className="search-box bg-gray-800 p-2 rounded-md">
                <i className="fa-solid fa-magnifying-glass text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
