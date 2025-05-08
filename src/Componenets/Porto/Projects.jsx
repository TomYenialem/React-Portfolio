import React, { useState } from "react";
import "./Porto.css";
import { FaLink, FaGithub } from "react-icons/fa";
import abe from "../../assets/images/car4.png";
import chat from "../../assets/images/chat2.png";
import auth from "../../assets/images/auth1.png";
import home from "../../assets/images/furn2.png";
import dash from '../../assets/images/dash4.png'
import face from '../../assets/images/face.png'
import { MdExpandMore, MdOutlineExpandLess } from "react-icons/md";
import projectList from "../utility/assets";
import { RiExternalLinkFill } from "react-icons/ri";


const projects = [
  {
    title: "Hospital Admin Dashboard",
    description:
      "A comprehensive admin dashboard for managing hospital operations, including patient, staff, and resource management. Built using MySQL, TailwindCSS, Node.js, and React.",
    media: dash,
    type: "image",
    link: "https://prodigy-fwd-02-5.onrender.com",
    github: "https://github.com/TomYenialem/PRODIGY_FWD_02.git",
    technologies: ["MySQL", "TailwindCSS", "Node.js", "React"],
    buttonColor: "green",
  },

  {
    title: "Real-Time Chat App",
    description:
      "A messaging app with WebSockets for real-time communication and user authentication.",
    media: chat,
    type: "image",
    link: "https://prodigy-fwd-04-1.onrender.com",
    github: "https://github.com/TomYenialem/PRODIGY_FWD_04.git",
    technologies: ["Socket.io", "Node.js", "React", "MongoDB", "Express.js"],
    buttonColor: "#08194A",
  },
  {
    title: "Authorization and Authentication",
    description:
      "A secure authentication system with JWT and cookie-based authentication.",
    media: auth,
    type: "image",
    link: "https://prodigy-fwd-01-7.onrender.com/",
    github: "https://github.com/TomYenialem/PRODIGY_FWD_01.git",
    technologies: [
      "Express.js",
      "Node.js",
      "React",
      "MongoDB",
      "JWT",
      "Cookies",
    ],
    buttonColor: "#FFD230 ",
  },

  {
    title: "Smart Garage Management System",
    description:
      "A feature-rich garage management system for vehicle service tracking, customer interactions, and inventory management.",
    media: abe,
    type: "image",
    link: "https://mygaragehub.onrender.com",
    github: "https://github.com/TomYenialem/GarageHub.git",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "JWT Authentication",
    ],
    buttonColor: "#EE0D09",
  },
  {
    title: "Smart Facial Recognition App",
    description:
      "A real-time facial expression detection application built with TensorFlow.js and React. Analyzes emotions, age, and gender from webcam feeds with high accuracy.",
    media: face,
    type: "image",
    link: "https://your-facial-recognition-app.demo",
    github: "https://github.com/your-username/webcam-facial-recognition.git",
    technologies: [
      "React 19",
      "TypeScript",
      "TensorFlow.js",
      "face-api.js",
      "Redux Toolkit",
      "Bootstrap 5",
    ],
    buttonColor: "linear-gradient(to right, #48bb78, #3b82f6, #9333ea)",
  },

  {
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce website with product listings, cart, and payment integration.",
    media: home,
    type: "image",
    link: "https://furniturehoemoffice.netlify.app/",
    github: "https://github.com/TomYenialem/Furnicher-Website",
    technologies: ["React", "Redux", "Stripe API", "Firebase", "Express.js"],
    buttonColor: "#6610f2",
  },
];

function Projects() {
  const [more, setMore] = useState(false);
  const [isHovered, setIsHovered] = useState(
    new Array(projectList.length).fill(false)
  );

  const handleMouseEnter = (index) => {
    setIsHovered((prevHover) => {
      const newHover = [...prevHover];
      newHover[index] = true;
      return newHover;
    });
  };

  const handleMouseLeave = (index) => {
    setIsHovered((prevHover) => {
      const newHover = [...prevHover];
      newHover[index] = false;
      return newHover;
    });
  };

  return (
    <div className="container-fluid services mt-5 p-3">
      <h2 className="fw-bold col-6 re text-white mx-5">my recent Project</h2>
      <div className="recent mx-5"></div>

      <div className="container mt-4 mb-3 ">
        {projects.map((project, index) => (
          <div key={index} className="row align-items-center mb-3 mt-4">
            <div className={`col-md-6 ${index % 2 === 0 ? "" : "order-md-2"}`}>
              <div className="card shadow-lg rounded  full_cot">
                {project.type === "video" ? (
                  <video
                    className="card-img-top"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={project.media} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    src={project.media}
                    className="card-img-top project-image"
                    alt={project.title}
                  />
                )}
              </div>
            </div>

            <div
              className={`col-md-6  detail_info${
                index % 2 === 0 ? "" : "order-md-1"
              }`}
            >
              <div className="card p-3 shadow-lg box pro_details">
                <h3 className="card-title" style={{ marginBottom: "10px" }}>
                  {project.title}
                </h3>
                <div className="card-text" style={{ fontSize: "14px" }}>
                  {project.description}
                </div>

                <div className="d-flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn project-btn"
                    style={{
                      background:
                        typeof project.buttonColor === "string" &&
                        project.buttonColor.includes("gradient")
                          ? project.buttonColor
                          : project.buttonColor,
                      color: "#fff",
                    }}
                  >
                    <FaLink className="me-2" /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn ms-2 project-btn-outline"
                    style={{
                      border: `2px solid ${
                        typeof project.buttonColor === "string" &&
                        project.buttonColor.includes("gradient")
                          ? project.buttonColor
                          : project.buttonColor
                      }`,
                      color: "#fff",
                      background: "transparent",
                      position: "relative",
                      overflow: "hidden",
                      zIndex: 1,
                    }}
                  >
                    <FaGithub className="me-2" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div
        className="more"
        onClick={() => setMore((prev) => !prev)}
        style={{ cursor: "pointer", textAlign: "center" }}
      >
        <span>
          {more ? (
            <MdOutlineExpandLess size={24} />
          ) : (
            <MdExpandMore size={24} />
          )}
        </span>
      </div>

      {/* More Items - Hidden when more is false */}
      {more && (
        <div className="project-list">
          <div className="container mt-4" id="porofoili-container">
            <div className="row row-cols-1 row-cols-md-3 g-4 css">
              {projectList.map((project, index) => (
                <div
                  key={index}
                  className={`portofoilio ${isHovered[index] ? "hovered" : ""}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <div id="boxs">
                    <img
                      src={project.image}
                      className="card-img-top"
                      alt={project.title}
                    />
                  </div>
                  <div className="project-name-overlay p-0 m-0">
                    <div className="link-wrapper">
                      <div className="text-center text-white">
                        {project.name}
                      </div>
                      <div className="text-center fs-3 link-icons">
                        <p className="mx-auto git">
                          {project.address && (
                            <a href={project.address} target="_blank">
                              <RiExternalLinkFill />
                            </a>
                          )}
                          {project.address2 && (
                            <a href={project.address2} target="_blank">
                              <FaGithub />
                            </a>
                          )}
                        </p>
                      </div>
                      <div className="stacks">
                        {Object.values(project.made).map((icons, i) => (
                          <img
                            key={i}
                            src={icons}
                            alt=""
                            className="stack-images"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
