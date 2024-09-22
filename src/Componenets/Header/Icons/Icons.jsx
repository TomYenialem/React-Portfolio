import React from 'react'
import './Icons.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaT } from "react-icons/fa6";
import { BsQuora } from "react-icons/bs";

export default function Icons() {
  return (
    <div className="icons d-flex ">
      <p>
        <FaLinkedin />
      </p>
      <p>
        <FaFacebookSquare />
      </p>
      <p>
        <FaTwitter />
      </p>
      <p>
        <FaSquareInstagram />
      </p>
      <p>
        {" "}
        <BsQuora />
      </p>
    </div>
  );
}
