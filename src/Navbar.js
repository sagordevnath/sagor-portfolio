import React, { useState } from 'react';
import logo from "./Assets/images/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
    // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu//
   const [show, setShow] = useState(false);
    return (
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img width='60px' height='60px' src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <Link to="/">
                <li className="nav__items mx__15">Home</li>
              </Link>
              <Link to="/about">
                <li className="nav__items mx__15">About Me</li>
              </Link>
              <Link to="/services">
                <li className="nav__items mx__15">Services</li>
              </Link>
              <Link to="/projects">
                <li className="nav__items mx__15">Projects</li>
              </Link>
              <Link to="/blog">
                <li className="nav__items mx__15">Blog</li>
              </Link>
              <Link to="/contact">
                <li className="nav__items mx__15">Contact</li>
              </Link>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ?(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li className="sideNavbar">
              <Link to="/">Home</Link>
            </li>
            <li className="sideNavbar">
              <Link to="/about">About Me</Link>
            </li>
            <li className="sideNavbar">
              <Link to="/services">Services</Link>
            </li>
            <li className="sideNavbar">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="sideNavbar">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="sideNavbar">
              <Link to="/contact">Contact</Link>
            </li>
              </ul>
          </div>
           ) : null}
        </div>
    );
};

export default Navbar;