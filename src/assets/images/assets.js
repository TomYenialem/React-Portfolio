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
import ai from "./aa.jpg";
import ul from "./mm.jpeg";
import snake from "./snake.jpeg";
import snake2 from "./snake2.webp";

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
    image: ai,
    type: "js",
    id: 1,
    name: " Ai Landing Page ",
    // made: {
    //   one: react,
    //   two: boot,
    // },
    link: link,
    address: "https://charming-salamander-6bf3c5.netlify.app/",
  },

  {
    image: snake2,
    type: "js",
    id: 2,
    name: " Nokia Snake Game",
    // made: {
    //   one: html,
    //   two: css,
    //   three: js,
    // },
    link: link,
    address: "https://nokiasnakegames.netlify.app/",
  },
  {
    image: head2,
    type: "Js",
    id: 3,
    name: "Electronics-Ecommercie",
    // made: {
    //   one: html,
    //   two: css,
    //   three: js,
    // },
    link: link,
    address: "https://electronicsshoopp.netlify.app/",
  },
  {
    image: gemini,
    type: "react",
    id: 4,
    name: "Gemini-clone",
    // made: {
    //   one: react,
    //   two: css,
    // },
    link: link,
    address: "https://my-echo.netlify.app/",
  },
  {
    image: coffee,
    type: "react",
    id: 5,
    name: "Coffee House",
    // made: {
    //   one: css,
    //   two: react,
    // },
    link: link,
    address: "https://coffeehouse11.netlify.app/",
  },
  {
    image: ul,
    type: "next",
    id: 6,
    name: "Utility Blogs",
    // made: {
    //   one: html,
    //   two: css,
    //   three: react,
    // },
    link: link,
    address: "https://utilityblogs1.netlify.app",
  },
];
export default project;
