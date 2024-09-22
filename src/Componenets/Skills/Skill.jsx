import React from 'react'
import './Skill.css'
import { IoLogoHtml5 } from "react-icons/io";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

export default function Skill() {
  return (
    <div className="m-5 pt-5" id='Skill'>
      <div className="row">
        <div className="col-md-5">
          <div className="text-secondary">My skills</div>
          <div className="text-white">
            <h1>Let’s Explore Popular Skills & Experience</h1>
          </div>
          <div className="text-secondary">
            I'm constantly seeking for new technologies and researching upcoming
            new word technologies. Learning is a process, and we eagerly await
            new features.
          </div>
          <button className="bt btn text-white mt-5 mb-5"> Learn More</button>
        </div>
        <div className="col-md-7 ">
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
              <div className="text-center skill mt-4 mb-4 mb-md-0 mt-md-0">
                <div className="logos">
                  <FaCss3 />
                </div>
                <h4>CSS</h4>
              </div>
            </div>
            <div className="col-md">
              <div className="text-center skill">
                <div className="logos">
                  {" "}
                  <IoLogoJavascript />
                </div>
                <h4>Js</h4>
              </div>
            </div>
          </div>
          <div className="row left-skill">
            <div className="col-md">
              <div className="text-center skill ">
                <div className="logos">
                 <FaBootstrap/>
                </div>

                <h4>BOOSTRAP</h4>
              </div>
            </div>
            <div className="col-md">
              <div className="text-center skill mt-4 mb-4 mt-md-0 mb-md-0">
                <div className="logos react">
                 <FaReact/>
                </div>
                <h4>React</h4>
              </div>
            </div>
            <div className="col-md">
              <div className="text-center skill">
                <div className="logos">
                  {" "}
                 <FaNodeJs/>
                </div>
                <h4>Node Js</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
