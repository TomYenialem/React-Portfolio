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
    <div className="overlay-modal col-sm-12 col-md-12">
      <div className="container modal-1">
        <div className="modals p-5 text-white">
          <div className="close" onClick={deleteModal}>
            X
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 left-modal mb-5">
              <div className="mode-image">
                <img src={modalImg} alt="" />
                <div className="mt-3">
                  <div className="fs-3">
                    Temesgen <span className="text-color">Yenialem</span>
                  </div>
                  <div className="">Full Stack Developer</div>
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
                  Bahirdar, Ethiopia
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-7 modal-container">
              <div className="py-4 px-3 right-modal">
                <h5 className="mb-4">
                  About <span className="text-color">Me</span>
                </h5>
                <p className="mb-5 text-secondary">
                  <p>
                    From a young age, I’ve been captivated by the intricate
                    systems that power the digital world. This curiosity led me
                    to web development, where I found my passion for crafting
                    dynamic, user-friendly digital experiences. As a{" "}
                    <strong>full-stack web developer</strong>, I specialize in
                    building seamless, efficient, and scalable applications.
                  </p>

                  <p>
                    My expertise spans <strong>front-end technologies</strong>{" "}
                    like <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
                    <strong>JavaScript</strong>, allowing me to create
                    responsive, visually engaging user interfaces. I am equally
                    proficient in <strong>back-end development</strong>, with
                    hands-on experience in technologies such as{" "}
                    <strong>Node.js</strong>, <strong>Express</strong>,{" "}
                    <strong>Databases (SQL/NoSQL)</strong>, and{" "}
                    <strong>API development</strong>, enabling me to design
                    robust, data-driven solutions.
                  </p>

                  <p>
                    I am passionate about continuous learning and thrive in
                    fast-paced, collaborative environments. Driven by results
                    and a commitment to staying ahead of industry trends, I am
                    excited to apply my skills to projects that push the
                    boundaries of innovation and make a tangible impact.
                  </p>
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
                    Full-stack Web App Development
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
                  Database Design & Management (SQL, NoSQL,monngoos)
                </p>
                <p className="text-secondary">
                  <span className="text-color">
                    <GoTriangleRight />
                  </span>
                  UI/UX Design & Prototyping
                </p>
                <div className="programming-skill">
                  <h5 className="mb-4">
                    Programming <span className="text-color">Skills</span>
                  </h5>
                  <div className="quality">
                    <p className="text-secondary">
                      <span className="text-color">
                        <GoTriangleRight />
                      </span>
                      HTML
                    </p>
                    <p className="text-secondary">
                      <span className="text-color">
                        <GoTriangleRight />
                      </span>
                      CSS (including Bootstrap, Material UI, Tailwind)
                    </p>
                    <p className="text-secondary">
                      <span className="text-color">
                        <GoTriangleRight />
                      </span>
                      JavaScript (including React.js,Next.js)
                    </p>
                    <p className="text-secondary">
                      <span className="text-color">
                        <GoTriangleRight />
                      </span>
                      Node.js (with Express.js)
                    </p>
                    <p className="text-secondary">
                      <span className="text-color">
                        <GoTriangleRight />
                      </span>
                      SQL (MySQL, PostgreSQL)
                    </p>
                    <p className="text-secondary">
                      <span className="text-color">
                        <GoTriangleRight />
                      </span>
                      MongoDB
                    </p>
                    <p className="text-secondary">
                      <span className="text-color">
                        <GoTriangleRight />
                      </span>
                      Git (Version Control)
                    </p>
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
                          Full Stack Development
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-around">
                      <p className="text-secondary">2008-2016</p>
                      <div className="text-white">
                        <h6>Arbaminch University</h6>
                        <div className="text-secondary">
                          Computer Engineering
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-around">
                      <p className="text-secondary">2018-2020</p>
                      <div>
                        <h6>Gym Website Trainers</h6>
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
                      <p className="text-secondary">2022-now</p>
                      <div className="text-white">
                        <h6>MSA Business Group</h6>
                        <div className="text-secondary">Electrician</div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-around">
                      <p className="text-secondary">2021-2022</p>

                      <div className="text-white">
                        <h6>MSA Business Group</h6>
                        <div className="text-secondary">SCADA Developer</div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-around">
                      <p className="text-secondary">2022-2023</p>

                      <div className="text-white">
                        <h6>TOP Business Group</h6>
                        <div className="text-secondary">Web Trainer</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonials">
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
