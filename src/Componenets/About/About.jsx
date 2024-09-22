import React, { useState } from 'react'
import proImg from '../../assets/images/tom33.jpg';
import './About.css'
import { useMyContext } from '../Contexts/Context';
import Modal from '../Modal/Modal';

export default function About() {
  const { day, open, handleModal } = useMyContext();
 
  return (
    <div className="aboutt mt-5" id="About">
      <div className="text-center pt-3">
        <div className="text-secondary">Get to know me</div>
        <div className="text-white">
          <h1 className="pt-2">About Me</h1>
        </div>
      </div>
      <div>{open ? <Modal /> : ""}</div>

      <div className={day ? "container mt-5 pt-4 conti" : "container day"}>
        <div className="row pb-5">
          <div className="col-md-5 image-anim pt-2 ">
            <div>
              <img src={proImg} alt="" />
            </div>
          </div>

          <div className="col-md-7 text-star ">
            <div>
              <h2 className="text-color fs-4">Who am i?</h2>
            </div>
            <div>
              <h1 className="text-white fs-2 headers">
                I'm Temesgen Yenialem, Front end <br />
                developer and Web Designer
              </h1>
              <p className="text-secondary mt-4 para">
                I'm a passionate front-end developer eager to create engaging
                and user-friendly web experiences. With a strong foundation in
                HTML, CSS, and JavaScript, I'm constantly exploring new
                technologies and best practices to enhance my skillset. I'm
                excited about the opportunity to contribute to dynamic projects
                and learn from experienced developers.
              </p>
              <hr className="text-secondary mt-4" />
              <div className="row">
                <div className="col-md ">
                  <p className="text-white">
                    {" "}
                    Name:{" "}
                    <span className="text-secondary">Temesgen Yenialem</span>
                  </p>
                  <p className="text-white">
                    Age: <span className="text-secondary">27</span>
                  </p>
                </div>
                <div className="col-md">
                  <p className="text-white">
                    Email:{" "}
                    <span className="text-color">tom21g2008@gmail.com</span>
                  </p>
                  <p className="text-white">
                    From:{" "}
                    <span className="text-secondary">Bahirdar,Ethiopia</span>
                  </p>
                </div>
              </div>
              <div className="text-start mt-4  ">
                <button className="btn btn-outline-dark shadow text-white mx-3">
                  Download Cv
                </button>
                <button
                  onClick={handleModal}
                  className="btn bt text-white me-5"
                >
                  Read-More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
