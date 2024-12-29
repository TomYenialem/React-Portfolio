import React, { useState } from "react";
import "./Porto.css";
import project from "../../assets/images/assets";
import { BiLink } from "react-icons/bi";

export default function Porto() {
  const [filters, setFilter] = useState(project);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isHovered, setIsHovered] = useState(Array(filters.length).fill(false));
 let x=project.forEach((pro) => console.log(pro.made.one))
 

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
    <div className="container porto text-white" id="Porto">
      <div className="text-white mt-5 pt-4 ">
        <h2 className="fw-bold col-6 re">my recent Portfolio</h2>
        <div className="recent"></div>
      </div>
      <div className=" project-list ">
        <div className="text-center d-flex justify-content-center mt-5 pt-2">
          <div
            className={` ${
              activeFilter === "all" ? "active" : "text-secondary"
            }`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </div>
          <div
            className={` ${
              activeFilter === "js" ? "active" : "text-secondary"
            }`}
            onClick={() => handleFilterChange("js")}
          >
            JavaScript
          </div>
          <div
            className={` ${
              activeFilter === "react" ? "active" : "text-secondary"
            }`}
            onClick={() => handleFilterChange("react")}
          >
            React
          </div>
          <div
            className={` ${
              activeFilter === "next" ? "active" : "text-secondary"
            }`}
            onClick={() => handleFilterChange("next")}
          >
            NextJs
          </div>
        </div>
        <div className="container mt-4">
          <div className="row row-cols-1 row-cols-md-3 g-4 cc">
            {filters.map((project, index) => (
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
                <div className="project-name-overlay p-0 m-0 ">
                  <div className="link-wrapper">
                    <div className="text-center text-white">{project.name}</div>
                    <div className="text-center fs-3  link-icons">
                      <p className="mx-auto">
                        <a href={project.address} target="_blank">
                          <BiLink />
                        </a>
                      </p>
                      </div>
                      <div className="stacks">
                      {Object.values(project.made).map((icons)=>(
                        <img src={icons} alt=""  className="stack-images"/>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
