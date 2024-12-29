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
  const [show, setShow] = useState(true);
  return (
    <div className="header" id="Home">
      <div className="header_wrapper fixed-top">
        <nav className="navbar navbar-expand-md text-white  p-0  ">
          <div className="container ">
            <div className="">
              <a className="navbar-brand text-white" href="#">
                <img src={logo} className="logo"/>
              </a>
            </div>

            <div
              className="navbar-toggler p-0 "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="menu" onClick={() => setShow((prev) => !prev)}>
                {show ? (
                  <RiMenu3Fill className="text-white fw-bold fs-1 " />
                ) : (
                  <IoMdClose className="text-white fw-bold fs-1" />
                )}
              </span>
            </div>
            <div
              className="collapse navbar-collapse top  "
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav m-auto  w-100 d-flex justify-content-end  m-auto">
                <li className="nav-item">
                  <a
                    className="nav-link text-danger text-hover-danger px-4 mb-2"
                    href="#Home"
                  >
                    Home
                  </a>
                </li>
                <div className="border-btm"></div>
                <li className="nav-item">
                  <a className="nav-link px-4" href="#About">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  px-4" href="#Porto">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  px-4" href="#Skill">
                    skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  px-4" href="#Contact">
                    Contacts
                  </a>
                </li>
                {/* <div onClick={handleToggle}>
                {day ? <FaToggleOn /> : <FaToggleOff />}
              </div> */}
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
          <a href="#Contact">
            <button className="btn resume">Download cv</button>
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
