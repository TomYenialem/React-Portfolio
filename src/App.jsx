import "./App.css";
import About from "./Componenets/About/About";
import Contact from "./Componenets/Contacts/Contact";
import Header from "./Componenets/Header/Header";
import Porto from "./Componenets/Porto/Porto";

import Services from "./Componenets/Services/Services";
import Skill from "./Componenets/Skills/Skill";



function App() {
  return (
    <>
      <Header />
      <About />
      <Porto/>
      <Services />
      <Skill/>
      <Contact/>
    </>
  );
}

export default App;
