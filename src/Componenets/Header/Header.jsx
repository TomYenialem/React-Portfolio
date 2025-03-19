import React, { useContext, useState } from "react";
import "./Header.css";
import { RiMenu3Fill } from "react-icons/ri";
import img from "../../assets/images/tom-sm.jpg";
import First from "../First/First";
import Icons from "./Icons/Icons";
import logo from "../../assets/images/logo.jpg";
import { useMyContext } from "../Contexts/Context";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const { day, handleToggle } = useMyContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  // Handle toggle when the menu icon is clicked
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // add function

  // Handle closing the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu
  };
  return (
    <div className="header" id="Home">
      <div className="header_wrapper fixed-top">
        <nav className="navbar navbar-expand-md text-white  p-0  ">
          <div className="container ">
            <div className="logo-container">
              <a className="navbar-brand text-white" href="#">
                <img src={logo} className="logo" />
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
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} // Add 'show' class if menu is open
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

      <div className="profile">
        <img src={img} alt="" className="tom-sm" />
      </div>
      <div className="title text-center text-white tom">
        <h1>
          TEMESGEN <span>YENIALME</span>
        </h1>
        <div className="animate_intro">
          <span>Hello I'm</span>
          <p>
            <First />
          </p>
        </div>
        <div className="cv">
          <a href="#Contact">
            <button className="btn ">Contact Me</button>
          </a>
          <a href="/localResume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="btn resume">View Resume</button>
          </a>
        </div>
      </div>
      <div>
        <Icons />
      </div>
      <div className="top">
        <a href="#Home">
          <FaArrowAltCircleUp />
        </a>
      </div>
    </div>
  );
}
