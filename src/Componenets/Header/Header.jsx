import React, { useContext} from "react";
import "./Header.css";
import { RiMenu3Fill } from "react-icons/ri";
import img from "../../assets/images/tom-sm.jpg";
import First from "../First/First";
import Icons from "./Icons/Icons";
import logo from "../../assets/images/logo.jpg";
import { useMyContext } from "../Contexts/Context";
import { FaArrowAltCircleUp } from "react-icons/fa";


export default function Header() {
  const{day,handleToggle}=useMyContext()
  
  return (
    <div className="header  " id="Home">
      <nav className="navbar navbar-expand-md text-white  p-0  ">
        <div className="container ">
          <div className="">
            <a className="navbar-brand text-white" href="#">
              <img src={logo} alt="" style={{ width: "130px" }} />
            </a>
          </div>

          <div
            className="navbar-toggler p-0 "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="menu">
              <RiMenu3Fill className="text-white fw-bold fs-1 " />
            </span>
          </div>
          <div className="collapse navbar-collapse   " id="collapsibleNavbar">
            <ul className="navbar-nav m-auto  w-100 d-flex justify-content-end  m-auto">
              <li className="nav-item">
                <a
                  className="nav-link text-danger text-hover-danger px-4"
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

      <div className="profile">
        <img src={img} alt="" className="tom-sm" />
      </div>
      <div className="title text-center text-white tom">
        <h1>
          TEMESGEN <span>YENIALME</span>
        </h1>
        <div className=" ">
          <First />
        </div>
        <a href="#Contact">
          <button className="btn px-4 py-2">Contact Me</button>
        </a>
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
