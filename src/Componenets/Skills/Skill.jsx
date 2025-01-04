import React, { useState } from "react";
import "./Skill.css";
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";


export default function Skill() {
  const [showText, setShowText] = useState(false);
  const fullText = `As a Full-Stack Web Developer, I bring a comprehensive set of skills
    to the table, enabling me to tackle both frontend and backend
    challenges. My expertise spans across various technologies, allowing
    me to create responsive, dynamic, and user-friendly web
    applications. I specialize in frontend development with HTML5, CSS3,
    and JavaScript, using React to build engaging and interactive user
    interfaces. On the backend, I leverage Node.js to design scalable
    server-side solutions and utilize both SQL and MongoDB for efficient
    database management. I am driven by a passion for continuous
    learning and strive to stay ahead of industry trends, ensuring that
    I deliver modern, high-performance solutions that meet both user and
    business needs.`;

  // Truncate the text to the first 140 characters
  const truncatedText = fullText.slice(0, 140) + "...";

  const handleToggleText = () => {
    setShowText((prev) => !prev);
  };

  return (
    <div className="m-5 pt-5" id="Skill">
      <div className="row">
        <div className="col-md-5">
          <div className="text-secondary">My skills</div>
          <div className="text-white">
            <h1>Let’s Explore Popular Skills & Experience</h1>
          </div>
          <div className="text-secondary text-container">
            <p className={`toggle-text ${showText ? "expanded" : "collapsed"}`}>
              {showText ? fullText : truncatedText}
            </p>
          </div>
          <button
            className="bt btn text-white mt-2 mb-5"
            onClick={handleToggleText}
          >
            {!showText ? "Read More" : "Read Less"}
          </button>
        </div>
        <div className="col-md-7">
          <div className="row left-skill mb-5">
            <div className="col-md">
              <div className="text-center skill">
                <div className="logos">
                  <IoLogoHtml5 />
                </div>
                <h4>HTML</h4>
              </div>
            </div>
            <div className="col-md">
              <div className="text-center skill mt-4 mb-4 mt-md-0 mb-md-0">
                <div className="logos">
                  <FaCss3 />
                </div>
                <h4>CSS</h4>
              </div>
            </div>

            <div className="col-md">
              <div className="text-center skill mt-4 mb-4 mb-md-0 mt-md-0">
                <div className="logos">
                  <FaBootstrap />
                </div>
                <h4>Bootstrap</h4>
              </div>
            </div>
          </div>

          <div className="row left-skill mb-5">
            <div className="col-md">
              <div className="text-center skill">
                <div className="logos">
                  <IoLogoJavascript />
                </div>
                <h4>JS</h4>
              </div>
            </div>
            <div className="col-md">
              <div className="text-center skill mt-4 mb-4 mt-md-0 mb-md-0">
                <div className="logos react">
                  <FaReact />
                </div>
                <h4>React</h4>
              </div>
            </div>

            <div className="col-md">
              <div className="text-center skill mt-4 mb-4 mb-md-0 mt-md-0">
                <div className="logos">
                  <FaGithub />
                </div>
                <h4>Git</h4>
              </div>
            </div>
          </div>
          <div className="row left-skill">
            <div className="col-md">
              <div className="text-center skill">
                <div className="logos">
                  <DiMongodb />
                </div>
                <h4>Mongodb</h4>
              </div>
            </div>
            <div className="col-md">
              <div className="text-center skill">
                <div className="logos">
                  <SiMysql />
                </div>
                <h4>Mysql</h4>
              </div>
            </div>
            <div className="col-md">
              <div className="text-center skill">
                <div className="logos">
                  <FaNodeJs />
                </div>
                <h4>Node.js</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
