import React from 'react'
import './Services.css'
import { GrWordpress } from "react-icons/gr";
import { FaCss3 } from "react-icons/fa6";
import { SiSimilarweb } from "react-icons/si";
import { FaArrowsAlt } from "react-icons/fa";
import { useMyContext } from '../Contexts/Context';
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
                  <GrWordpress />
                </div>
                <div className="text-white  ">
                  <h4> Front-End Development </h4>
                </div>
                <div className="text-secondary">
                  Build dynamic and interactive web applications using popular
                  JavaScript frameworks.
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg mb-4 mt-4 mb-lg-0 mt-md-0">
              <div className="box">
                <div className="text-start">
                  <FaCss3 />
                </div>

                <div className="text-white">
                  <h4> Web Accessibility Development</h4>
                </div>
                <div className="text-secondary">
                  Ensure websites are accessible to people with disabilities by
                  following WCAG guidelines.
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg ">
              <div className="box">
                <div className="text-start">
                  <SiSimilarweb />
                </div>
                <div className="text-white">
                  <h4>PWA evelopment</h4>
                </div>
                <div className="text-secondary">
                  Create web applications that offer native-like experiences on
                  mobile devices.and mprove performance
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5 serv-col">
            <div className="col-md-6 col-lg ">
              <div className="box">
                <div className="text-start">
                  <GrWordpress />
                </div>
                <div className="text-white  ">
                  <h4>Web Development</h4>
                </div>
                <div className="text-secondary">
                  Create visually appealing and user-friendly websites that
                  adapt seamlessly to different screen sizes and devices.
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg mb-4 mt-4 mb-lg-0 mt-md-0">
              <div className="box">
                <div className="text-start">
                  <FaCss3 />
                </div>

                <div className="text-white">
                  <h4>E-commerce Website Development</h4>
                </div>
                <div className="text-secondary">
                  Build robust online stores with features like product
                  catalogs, shopping carts, secure checkout, and inventory
                  management.
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg ">
              <div className="box">
                <div className="text-start">
                  <FaArrowsAlt />
                </div>
                <div className="text-white">
                  <h4>UI and UX Design</h4>
                </div>
                <div className="text-secondary">
                  Design intuitive and visually pleasing user interfaces.
                  Conduct user research and usability testing to enhance user
                  experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
