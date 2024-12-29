import logo from "./logo.jpg";
import html from "./html.png";
import css from "./css.png";
import boot from "./boot.png";
import react from "./react.png";
import js from "./js.png";
import link from "./link.png";
import head from "./head.jpg";
import head2 from "./head2.jpg";
import coffee from "./coffe.jpg";
import feed from "./feed.jpg";
import gemini from "./gem.jpg";
import netflix from "./net.png";
import ul from "./mm.jpeg";
import snake from "./snake.jpeg";
import snake2 from "./snake2.webp";
import { FaNode, FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import node from './programing.png'
import react2 from './physics.png'
import mysql from './mysql.png'
import firebase from './fire.png'
import js2 from './js-file.png'
import css3 from './css.png'
import amazone from './amazon.jpeg'
import qa from './qa.jpg'
import gemini2 from './ai.jpeg'

const image = {
  logo,
  html,
  css,
  react,
  boot,
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
    image: head2,
    type: "Js",
    id: 3,
    name: "Electronics-Ecommercie",
    made: {
      one: html,
      two: css,
      three: js,
    },
    link: link,
    address: "https://electronicsshoopp.netlify.app/",
  },
  {
    image: gemini2,
    type: "react",
    id: 4,
    name: "Gemini-clone",
    made: {
      one: react,
      two: css,
    },
    link: link,
    address: "https://my-echo.netlify.app/",
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
    image: ul,
    type: "next",
    id: 6,
    name: "Utility Blogs",
    made: {
      one: html,
      two: mysql,
      three: react,
    },
    link: link,
    address: "https://utilityblogs1.netlify.app",
  },
];
export default project;
