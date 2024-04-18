import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    
    return (
      <div className="navbar container mx-auto">
        <div className="navbar-start">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Destintions</a>
              </li>
              <li>
                <a>Tours</a>
              </li>
              <li>
                <a>Pages</a>
              </li>
              <li>
                <a>News</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Tevily</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Destintions</a>
            </li>
            <li>
              <a>Tours</a>
            </li>
            <li>
              <a>Pages</a>
            </li>
            <li>
              <a>News</a>
            </li>
            <li>
              <Link to="contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex">
            <div className="search-container">
              <div className="search-box">
                <i class="fa-solid fa-magnifying-glass "></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;