import React, { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { Toaster, toast } from "react-hot-toast";
import { PulseLoader } from "react-spinners";
import emailjs from "emailjs-com";




import "./Contact.css";


export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formDatas, setFormDatas] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDatas((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { name, email, message } = formDatas;
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    emailjs
      .send(
        "service_nqr4hfc",
        "template_95aal98",
        formDatas,
        "xXUu-FTDm5gGgN99T"
      )
      .then(
        (response) => {
          toast.success("Message sent successfully!");
          setFormDatas({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
          console.log(error);
          setLoading(false);
        }
      );
  };

  const styles = {
    backgroundColor: "#1c1917",
    border: "none",
    outline: "none",
    color: "white",
    boxShadow: "0px 0px 10px #0f172a",
  };

  return (
    <div className="mb-5 pt-5" id="Contact">
      <div className="text-center">
        <div className="text-secondary">Feel free to contact me anytime</div>
        <div className="text-white">
          <h1>Get in Touch</h1>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5 gap-5">
          <div className="col-md-7">
            <h2 className="pb-4 text-white">Message Me</h2>
            <div className="row">
              <div className="col-md custom-input">
                <input
                  type="email"
                  className="form-control custom-color"
                  id="email"
                  placeholder="Enter email"
                  style={styles}
                  name="email"
                  required
                  value={formDatas.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md mt-4 mt-md-0">
                <input
                  type="text"
                  className="form-control custom-color"
                  id="name"
                  placeholder="Enter Your Name"
                  style={styles}
                  name="name"
                  value={formDatas.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <textarea
                className="form-control custom-color mt-3 "
                rows="5"
                id="comment"
                name="message"
                placeholder="Message"
                style={styles}
                value={formDatas.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                className="btn mt-3 bt text-white message_btn"
                onClick={handleSubmit}
              >
                {loading ? (
                  <PulseLoader size={10} color="white" />
                ) : (
                  "Message Me"
                )}
              </button>
            </div>
            <Toaster position="top-right" />
          </div>

          <div className="col-md-4">
            <h2 className="text-white">Contact info</h2>
            <div className="text-secondary">
              Always available for work if the right project comes
              along. Feel free to reach out to me!
            </div>
            <div className="row mt-4">
              <div className="lef col-2">
                <div className="conatct-icons">
                  <div>
                    <MdOutlineDriveFileRenameOutline />
                  </div>
                  <div>
                    <FaLocationDot />
                  </div>
                  <div>
                    <FaPhone />
                  </div>
                  <div>
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
                    <div className="text-secondary">Addis Abeba, Ethiopia</div>
                  </div>
                  <div className="text-white">
                    <h5>Call Me</h5>
                    <div className="text-secondary">+251923685549</div>
                  </div>
                  <div className="text-white">
                    <h5>Email Me</h5>
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
