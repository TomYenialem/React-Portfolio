import React, { useState } from "react";
import "./Porto.css";
import project from "../utility/assets";
import { RiExternalLinkFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";

export default function Porto() {
  const [filters, setFilter] = useState(project);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isHovered, setIsHovered] = useState(Array(filters.length).fill(false));
  const [more, setMore] = useState(false);

  const handleFilterChange = (filterName) => {
    setFilter(
      filterName === "all"
        ? project
        : project.filter((pro) => pro.type === filterName)
    );
    setActiveFilter(filterName);
  };

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
    <div className="bg-dark">

    <div className="container porto text-white" id="Porto">
      <div className="text-white mt-5 pt-4 ">
        <h2 className="fw-bold col-6 re">my recent Portfolio</h2>
        <div className="recent"></div>
      </div>
      <div className="project-list">
        <div className="text-center d-flex justify-content-center mt-5 pt-2">
          <div
            className={`${
              activeFilter === "all" ? "active" : "text-secondary"
            }`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </div>
          <div
            className={`${activeFilter === "js" ? "active" : "text-secondary"}`}
            onClick={() => handleFilterChange("js")}
          >
            JavaScript
          </div>
          <div
            className={`${
              activeFilter === "react" ? "active" : "text-secondary"
            }`}
            onClick={() => handleFilterChange("react")}
          >
            React
          </div>
          <div
            className={`${
              activeFilter === "Full-stack" ? "active" : "text-secondary"
            }`}
            onClick={() => handleFilterChange("Full-stack")}
          >
            Full-stack
          </div>
        </div>
        <div className="container mt-4" id="porofoili-container">
          <div className="row row-cols-1 row-cols-md-3 g-4 css">
            {filters
              .filter((project) => {
                // Display only the first 6 projects initially
                return more || project.id <= 6;
              })
              .map((project, index) => (
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
                        {Object.values(project.made).map((icons) => (
                          <img src={icons} alt="" className="stack-images" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            <div className="more" onClick={() => setMore((prev) => !prev)}>
              <span>
              {more ? <MdOutlineExpandLess /> : <MdExpandMore />}

              </span>
            </div>
            <div className={`more_items ${more ? "show" : ""}`}>
            
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
