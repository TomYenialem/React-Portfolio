import React from 'react'
import './Icons.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaT } from "react-icons/fa6";
import { BsQuora } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Icons() {
  return (
    <div className="icons d-flex ">
      <p>
        <a
          href="https://www.linkedin.com/in/temesgen-yenialem-4a62272b0/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </p>
      <p>
        <a href="https://github.com/TomYenialem">
          <FaGithub />
        </a>
      </p>
      <p>
        <a
          href="https://t.me/Tom21gg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
        </a>
      </p>
      <p>
        <a
          href="https://tinyurl.com/yce2up78"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoLogoWhatsapp />
        </a>
      </p>
      <p>
        <a
          href="https://www.quora.com/profile/ProgrammingNTeck"
          target="_blank"
        >
          <BsQuora />
        </a>
      </p>
    </div>
  );
}
