import React from 'react'
import './Services.css'
import { GrWordpress } from "react-icons/gr";
import { FaCss3 } from "react-icons/fa6";
import { SiSimilarweb } from "react-icons/si";
import { FaArrowsAlt } from "react-icons/fa";
import { useMyContext } from '../Contexts/Context';
import { FaShareNodes } from "react-icons/fa6";
import { DiJavascript } from "react-icons/di";
import { FaDatabase } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
export default function Services() {
  
  const{  useSmoothScroll}=useMyContext()
  return (
    <div className="serices">
      <div className=" container mb-5 serv py-4">
        {useSmoothScroll}
        <div className="text-start">
          <div className="text-secondary">Services i offer to my clients</div>
          <div className="text-white">
            <h1>My Services</h1>
          </div>
        </div>
        <div className="conatiner mt-5">
          <div className="row mb-5">
            <div className="col-md-6 col-lg ">
              <div className="box">
                <div className="text-start">
                  <DiJavascript />
                </div>
                <div className="text-white">
                  <h4>Frontend Development</h4>
                </div>
                <div className="text-secondary">
                  Build responsive, interactive, and modern web interfaces using
                  technologies like React, JavaScript, HTML, and CSS.
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg mb-4 mt-4 mb-lg-0 mt-md-0">
              <div className="box">
                <div className="text-start">
                  <FaShareNodes />
                </div>

                <div className="text-white">
                  <h4>Backend Development</h4>
                </div>
                <div className="text-secondary">
                  Develop robust server-side applications using Node.js,
                  Express, and databases like MySQL, MongoDB, and PostgreSQL.
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg ">
              <div className="box">
                <div className="text-start">
                  <SiSimilarweb />
                </div>
                <div className="text-white">
                  <h4>Full-Stack Web Development</h4>
                </div>
                <div className="text-secondary">
                  Build end-to-end web applications with seamless integration
                  between frontend (React, Angular) and backend (Node.js,
                  Express).
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5 serv-col">
            <div className="col-md-6 col-lg ">
              <div className="box">
                <div className="text-start">
                  <FaDatabase />
                </div>
                <div className="text-white">
                  <h4>Database Management</h4>
                </div>
                <div className="text-secondary">
                  Design, implement, and optimize databases (MySQL, PostgreSQL,
                  MongoDB) to ensure fast data retrieval and smooth operation.
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg mb-4 mt-4 mb-lg-0 mt-md-0">
              <div className="box">
                <div className="text-start">
                  <FaGear />
                </div>

                <div className="text-white">
                  <h4>API Development and Integration</h4>
                </div>
                <div className="text-secondary">
                  Design, develop, and integrate RESTful APIs that allow for
                  seamless communication between different applications or
                  platforms
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg ">
              <div className="box">
                <div className="text-start">
                  <FaCloud />
                </div>
                <div className="text-white">
                  <h4> Cloud Solutions & DevOps</h4>
                </div>
                <div className="text-secondary">
                  Provide cloud hosting solutions (using AWS, Google Cloud,
                  Azure) and manage the deployment process, including server
                  configuration, scaling, and continuous integration.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
