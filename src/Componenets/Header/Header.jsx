import React, { useState } from "react";
import "./Header.css";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/images/logo.jpg"; // Make sure to have your logo here

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle closing the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header" id="Home">
      <div className="header_wrapper fixed-top">
        <nav className="navbar navbar-expand-md text-white p-0">
          <div className="container">
            <div>
              <a className="navbar-brand text-white" href="#Home">
                <img src={logo} className="logo" alt="Logo" />
              </a>
            </div>

            {/* Toggle Button */}
            <div
              className="navbar-toggler p-0"
              type="button"
              onClick={toggleMenu} // Toggle menu on button click
            >
              <span className="menu-icon">
                {isMenuOpen ? (
                  <IoMdClose className="text-white fw-bold fs-1" />
                ) : (
                  <RiMenu3Fill className="text-white fw-bold fs-1" />
                )}
              </span>
            </div>

            {/* Use the state to control the collapse behavior */}
            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav m-auto w-100 d-flex justify-content-end">
                <li className="nav-item">
                  <a
                    className="nav-link text-danger text-hover-danger px-4 mb-2"
                    href="#Home"
                    onClick={handleLinkClick} // Close menu when link is clicked
                  >
                    Home
                  </a>
                </li>
                <div className="border-btm"></div>
                <li className="nav-item">
                  <a
                    className="nav-link px-4"
                    href="#About"
                    onClick={handleLinkClick}
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link px-4"
                    href="#Porto"
                    onClick={handleLinkClick}
                  >
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link px-4"
                    href="#Skill"
                    onClick={handleLinkClick}
                  >
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link px-4"
                    href="#Contact"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
