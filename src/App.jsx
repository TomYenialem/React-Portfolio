import "./App.css";
import About from "./Componenets/About/About";
import Contact from "./Componenets/Contacts/Contact";
import Header from "./Componenets/Header/Header";
// import Porto from "./Componenets/Porto/Porto";
import Projects from "./Componenets/Porto/Projects";
import Services from "./Componenets/Services/Services";
import Skill from "./Componenets/Skills/Skill";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

// Wrapper for Scroll-Based Animation
function SectionWrapper({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" }); // Trigger animation when 100px before viewport

  return (
    <motion.div
      ref={ref}
      initial={{ y: 100, opacity: 0 }} // Start below the viewport
      animate={isInView ? { y: 0, opacity: 1 } : {}} // Slide up and fade in
      transition={{
        duration: 0.8, // Faster transition
        ease: [0.42, 0, 0.58, 1], // Smooth cubic-bezier for natural motion
      }}
      style={{
        marginBottom: "50px", // Add spacing between sections
      }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <SectionWrapper>
        {/* <Porto /> */}
      <Projects/>
      </SectionWrapper>
      <SectionWrapper>
        <Services />
      </SectionWrapper>
      <SectionWrapper>
        <Skill />
      </SectionWrapper>
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
    </div>
  );
}

export default App;
