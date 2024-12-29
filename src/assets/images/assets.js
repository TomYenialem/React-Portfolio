import logo from "./logo.jpg";

import react from "./react.png";
import js from "./js.png";
import link from "./link.png";
import head from "./head.jpg";
import head2 from "./head2.jpg";

import netflix from "./nett.png";
import ul from "./mm.jpeg";
import snake from "./snake.jpeg";
import snake2 from "./snake2.webp";

import node from './programing.png'
import react2 from './physics.png'
import mysql from './mysql.png'
import firebase from './fire.png'
import js2 from './js-file.png'
import css3 from './css.png'
import amazone from './amazon.jpeg'
import qa from './qaa.jpeg'
import gemini2 from './ai.jpeg'
import chat from './chat.jpg'
import mongo from './mngo.jpeg'
import furn from './furn.jpeg'

const image = {
  logo,

  react,
  js,
  head,
  head2,
  ul,
};

export const project = [
  {
    image: netflix,
    type: "js",
    id: 1,
    name: " Netflix clone",
    made: {
      one: react2,
      two: css3,
    },
    link: link,
    address: "https://cosmic-lolly-netfix.netlify.app/",
  },

  {
    image: qa,
    type: "js",
    id: 2,
    name: "Question & Answer Platform",
    made: {
      one: react2,
      two: node,
      three: mysql,
    },
    link: link,
    address: "https://nokiasnakegames.netlify.app/",
  },
  {
    image: gemini2,
    type: "react",
    id: 4,
    name: "Gemini-clone",
    made: {
      one: react,
      two: css3,
    },
    link: link,
    address: "https://my-echo.netlify.app/",
  },
  {
    image: chat,
    type: "Js",
    id: 3,
    name: "Electronics-Ecommercie",
    made: {
      one: node,
      two: react,
      three: mongo,
    },
    link: link,
    address: "https://electronicsshoopp.netlify.app/",
  },
  {
    image: amazone,
    type: "react",
    id: 5,
    name: "Amazone clone",
    made: {
      one: react2,
      two: firebase,
      three: css3,
    },
    link: link,
    address: "https://amazon-jalebi-e6dd11.netlify.app/",
  },
  {
    image: furn,
    type: "next",
    id: 6,
    name: "Utility Blogs",
    made: {
     
      two: mysql,
      three: react,
    },
    link: link,
    address: "https://utilityblogs1.netlify.app",
  },
];
export default project;
