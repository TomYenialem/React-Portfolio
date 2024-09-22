import React, { useState } from "react";
import "./Test.css";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

export default function () {
  const [testtimoni,   settesttimoni] = useState(0);
  const right = () => {
  settesttimoni((prevIndex) => (prevIndex + 1) % test.length);
  };
  const left = () => {
     settesttimoni((prevIndex) =>(prevIndex - 1 + test.length) % test.length);
};
  
  const test = [
    {
      message: `Temesgen did an outstanding job on our e-commerce platform. The product pages are well-structured and visually engaging, with clear calls to action`,

      messanger: "Mr Amsalu",
      job: "Bussines Owner",
    },
    {
      message: `The website has helped us establish a strong online presence. The integration of social media and email marketing has been particularly effective in driving traffic and conversions`,

      messanger: "Mr Gebru",
      job: "Compnay Manager",
    },
    {
      message: `The e-commerce website you developed has exceeded our expectations. The clean design and intuitive navigation have made it easy for customers to find and purchase our products.
              `,

      messanger: "Mr Mulalem",
      job: "Bussines Owner",
    },
  ];
  return (
    <div className="test">
      <div className="mt-5  testimoni">
        <h5 className="mb-4">
          Client <span className="text-color">Feedback</span>
        </h5>
        <div className="d-flex justify-content-end arrows">
          <div className="text-color">
            <FaArrowAltCircleLeft onClick={()=>left()} />
          </div>
          <div className="text-color">
            <FaArrowAltCircleRight onClick={()=>right()} />
          </div>
        </div>
        <div className="messages mt-4">
          <div className="text-secondary ">
            <p className=" message">{test[testtimoni].message}</p>
            <div className="text-color qoute">
              <FaQuoteLeft />
            </div>
            <div className="text-white fs-5">{test[testtimoni].messanger}</div>
            <div className="text-secondary">{test[testtimoni].job}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
