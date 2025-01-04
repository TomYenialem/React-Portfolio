import logo from '../../assets/images/logo.jpg';

import react from "../../assets/images/react.png";


import netflix from "../../assets/images/nett.webp";



import node from '../../assets/images/programing.png'

import mysql from '../../assets/images/mysql.png'
import firebase from '../../assets/images/fire.png'

import css3 from '../../assets/images/css.png'
import amazone from '../../assets/images/amazon.jpeg'
import qa from '../../assets/images/qaa.jpeg'
import gemini2 from '../../assets/images/ai.jpeg'
import chat from '../../assets/images/chat.jpg'
import mongo from '../../assets/images/mngo.jpeg'
import furn from '../../assets/images/furn.jpeg'
import soket from '../../assets/images/sokett.png'


const image = {
  logo,
  react,

};

export const project = [
  {
    image: netflix,
    type: "react",
    id: 1,
    name: "Netflix clone",
    made: {
      one: react,
      two: css3,
    },
 
    address: "https://cosmic-lolly-netfix.netlify.app/",
    address2: "https://github.com/TomYenialem/Netflix-clone",
  },

  {
    image: qa,
    type: "Full-stack",
    id: 2,
    name: "Question & Answer Platform",
    made: {
      one: react,
      two: node,
      three: mysql,
    },

    address: "https://nokiasnakegames.netlify.app/",
    address2: "https://github.com/TomYenialem/Q-A-platform",
  },
  {
    image: gemini2,
    type: "js",
    id: 4,
    name: "Gemini-clone",
    made: {
      one: react,
      two: css3,
    },
   
    address: "https://my-echo.netlify.app/",
  },
  {
    image: chat,
    type: "Full-stack",
    id: 3,
    name: "real-time chat app",
    made: {
      one: node,
      two: react,
      three: mongo,
      four: soket,
    },
   

    // address: "https://electronicsshoopp.netlify.app/",
    address2: "https://github.com/TomYenialem/real-time-chat-app",
  },
  {
    image: amazone,
    type: "react",
    id: 5,
    name: "Amazone clone",
    made: {
      one: react,
      two: firebase,
      three: node,
    },
  
    address: "https://amazon-jalebi-e6dd11.netlify.app/",
    address2: "https://github.com/TomYenialem/Amazone-clone",
  },
  {
    image: furn,
    type: "Full-stack",
    id: 6,
    name: "full-stack furniture website",
    made: {
      one: node,
      two: firebase,
      three: react,
    },

    address: "https://furniturehoemoffice.netlify.app/",
    address2: "https://github.com/TomYenialem/Furnicher-Website",
  },
];
export default project;
