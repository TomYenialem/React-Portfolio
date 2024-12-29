import React from "react";
import modalImg from "../../assets/images/bl.jpg";
import "./Modal.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaSquarePhone } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";
import { useMyContext } from "../Contexts/Context";
import Test from "../Testimoni/Test";

export default function Modal() {
  const { deleteModal } = useMyContext();
  return (
    <div className="  overlay-modal col-sm-12 col-md-12  ">
      <div className="container modal-1">
        <div className="modals p-5 text-white">
          <div className="close" onClick={deleteModal}>
            X
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 left-modal mb-5 ">
              <div className="mode-image">
                <img src={modalImg} alt="" />
                <div className="mt-3">
                  <div className="fs-3">
                    Temesgen <span className="text-color">Yenialem</span>{" "}
                  </div>
                  <div className="">Full stack developer</div>
                </div>
              </div>

              <div className="details mt-5">
                <p>
                  <span>
                    <IoPersonSharp />
                  </span>
                  Temesgen Yenialem
                </p>
                <p>
                  <span>
                    <FaSquarePhone />
                  </span>
                  +251923685549
                </p>
                <p>
                  <span>
                    <MdMarkEmailRead />
                  </span>
                  tom21g2008@gmail.com
                </p>
                <p>
                  <span>
                    <FaLocationDot />
                  </span>
                  Bahirdar,Ethiopia
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 modal-container ">
              <div className="py-4 px-3 right-modal">
                <h5 className="mb-4">
                  About <span className="text-color"> Me</span>
                </h5>
                <p className="mb-5 text-secondary">
                  From a young age, I've been fascinated by how things work,
                  particularly the invisible code that makes the digital world
                  come alive. <br />
                  This curiosity led me to the world of web development, where I
                  discovered a passion for building engaging and user-friendly
                  experiences. As a full-stack web developer, I'm driven by a
                  desire to create seamless and impactful digital solutions. My
                  journey has equipped me with a solid understanding of
                  front-end technologies like HTML, CSS, and JavaScript,
                  enabling me to craft intuitive and visually appealing user
                  interfaces.
                  <br /> I'm equally comfortable working with back-end
                  technologies, allowing me to build robust and scalable
                  applications. I'm a passionate and results-oriented individual
                  who is always eager to learn and stay updated with the latest
                  industry trends. I believe in the power of collaboration and
                  am excited to contribute my skills to innovative projects that
                  make a real difference."
                </p>
                <div className="quality">
                  <h5>
                    Quality <span className="text-color">Services</span>
                  </h5>
                  <p className="text-secondary">
                    <span className="text-color">
                      <GoTriangleRight />
                    </span>
                    Custom Website Development
                  </p>
                  <p className="text-secondary">
                    <span className="text-color">
                      <GoTriangleRight />
                    </span>
                    Web Application Development
                  </p>
                  <p className="text-secondary">
                    <span className="text-color">
                      <GoTriangleRight />
                    </span>
                    E-commerce Solutions
                  </p>
                  <p className="text-secondary">
                    <span className="text-color">
                      <GoTriangleRight />
                    </span>
                    API Development & Integration
                  </p>
                </div>
                <p className="text-secondary">
                  <span className="text-color">
                    <GoTriangleRight />
                  </span>
                  Database Design & Management (SQL, NoSQL)
                </p>
                <p className="text-secondary">
                  <span className="text-color">
                    <GoTriangleRight />
                  </span>
                  UI/UX Design & Prototyping
                </p>
                <div className="programming-skill">
                  <h5 className="mb-4">
                    Programming<span className="text-color">Skills</span>
                  </h5>
                  <div className="d-flex justify-content-between text-secondary">
                    <p>HTML</p>
                    <div>95%</div>
                  </div>

                  <div class="progress" style={{ height: "3px" }}>
                    <div
                      class="progress-bar bg-danger fs-5"
                      style={{ width: "95%" }}
                    >
                      <span></span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between text-secondary">
                    <p>CSS (including Bootstrap, Material UI,taliwind)</p>
                    <div>90%</div>
                  </div>

                  <div class="progress" style={{ height: "3px" }}>
                    <div
                      class="progress-bar bg-danger fs-5"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <div className="d-flex justify-content-between text-secondary">
                    <p>JavaScript (including React.js)</p>
                    <div>90%</div>
                  </div>

                  <div class="progress" style={{ height: "3px" }}>
                    <div
                      class="progress-bar bg-danger fs-5"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <div className="d-flex justify-content-between text-secondary">
                    <p>Node.js (with Express.js)</p>
                    <div>90%</div>
                  </div>

                  <div class="progress" style={{ height: "3px" }}>
                    <div
                      class="progress-bar bg-danger fs-5"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <div className="d-flex justify-content-between text-secondary">
                    <p>SQL (MySQL, PostgreSQL)</p>
                    <div>85%</div>
                  </div>
                  
                  <div class="progress" style={{ height: "3px" }}>
                    <div
                      class="progress-bar bg-danger fs-5"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div className="language mt-5">
                  <h5 className="mb-4">
                    Programming<span className="text-color">Skills</span>
                  </h5>
                  <div className="lang d-flex justify-content-around">
                    <div class="progres">
                      <div className="text-center my-4 mb-5 pt-3">85%</div>
                      <div className="text-secondary text-center">English</div>
                    </div>
                    <div class="progres circle">
                      <div className="text-center my-4 mb-5 pt-3 ">100%</div>
                      <div className="text-secondary mt-5 text-center">
                        Amharic
                      </div>
                    </div>
                  </div>
                </div>
                <div className="education mt-5 text-start">
                  <h5 className="mb-4">
                    Education <span className="text-color">Timeline</span>
                  </h5>
                  <div className="educat">
                    <div className="d-flex justify-content-around">
                      <p className="text-secondary">2023-2024</p>

                      <div className="text-white">
                        <h6>Evangadi Bootcamp</h6>
                        <div className="text-secondary">
                          Full stack development
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-around">
                      <p className="text-secondary"> 2008-2016</p>
                      <div className="text-white">
                        <h6>Arbaminch Univeristy</h6>
                        <div className="text-secondary">
                          Computer Engineering
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-around">
                      <p className="text-secondary">2018-2020</p>
                      <div>
                        <h6>gyms website trainers</h6>
                        <div className="text-secondary">Web Development</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="work mt-5 text-start">
                  <h5 className="mb-4">
                    Work <span className="text-color">Timeline</span>
                  </h5>
                  <div className="educat">
                    <div className="d-flex justify-content-around">
                      <p className="text-secondary"> 2022-now</p>
                      <div className="text-white">
                        <h6>MSA bussines Group</h6>
                        <div className="text-secondary">Electrcian</div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-around">
                      <p className="text-secondary">2021-2022</p>

                      <div className="text-white">
                        <h6>MSA bussines Group</h6>
                        <div className="text-secondary">SCADA Devloper</div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-around">
                      <p className="text-secondary">2022-2023</p>

                      <div className="text-white">
                        <h6>TOP bussines Group</h6>
                        <div className="text-secondary">Web Trainer</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testemoinies">
                  <Test />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
