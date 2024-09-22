import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import './Contact.css'

export default function Contact() {
  const styles = {
    backgroundColor: "#1c1917",
    border: "none",
    outline: "none",
    color: "white",
    boxShadow: "0px 0px 10px #0f172a",
  };
  return (
    <div className='mb-5 pt-5' id='Contact'>
      <div className="text-center">
        <div className="text-secondary">Feel free to contact me anytimes</div>
        <div className="text-white">
          <h1>Get in Touch</h1>
        </div>
      </div>
      <div className="container ">
        <div className="row mt-5 gap-5">
          <div className="col-md-7 ">
            <h2 className="pb-4 text-white">Message Me</h2>
            <div className="row ">
              <div className="col-md custom-input">
                <input
                  type="email"
                  className="form-control custom-color"
                  id="email"
                  placeholder="Enter email"
                  style={styles}
                />
              </div>
              <div className="col-md mt-4 mt-md-0">
                <input
                  type="email"
                  class="form-control custom-color"
                  id="email"
                  placeholder="Enter email"
                  style={styles}
                />
              </div>
            </div>
            <div className="mb-4 mt-4">
              <input
                type="email"
                class="form-control custom-color"
                id="email"
                placeholder="subject"
                style={styles}
              />
            </div>
            <div>
              <textarea
                class="form-control custom-color"
                rows="5"
                id="comment"
                name="text"
                placeholder="Message"
                style={styles}
              ></textarea>
              <div className="btn mt-3 bt text-white">Message Me</div>
            </div>
          </div>

          <div className="col-md-4">
            <h2 className="text-white">Contact info</h2>
            <div className="text-secondary">
              Always available for freelance work if the right project comes
              along, Feel free to contact me!
            </div>
            <div className="row mt-4">
              <div className="lef col-2">
                <div className="conatct-icons ">
                  <div>
                    {" "}
                    <MdOutlineDriveFileRenameOutline />
                  </div>
                  <div>
                    {" "}
                    <FaLocationDot />
                  </div>
                  <div>
                    {" "}
                    <FaPhone />
                  </div>
                  <div>
                    {" "}
                    <MdMarkEmailRead />
                  </div>
                </div>
              </div>
              <div className="rig col-8">
                <div className="right-words">
                  <div className="text-white">
                    <h5>Name</h5>
                    <div className="text-secondary">Temesgen Yenialem</div>
                  </div>
                  <div className="text-white">
                    <h5>Location</h5>
                    <div className="text-secondary">Bahirdar,Ethiopia</div>
                  </div>
                  <div className="text-white">
                    <h5>Call Me</h5>
                    <div className="text-secondary">+251923685549</div>
                  </div>
                  <div className="text-white">
                    <h5>Emial Me</h5>
                    <div className="text-secondary">tom21g2008@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
