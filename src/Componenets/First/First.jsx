import React, { useState, useEffect } from "react";
import './First.css'


function First() {
  const texts = ["FrontEnd Developer", "UX/UI designer", "Web designer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-texts">
      <h3 className="txt">{texts[currentIndex]}</h3>
    </div>
  );
}

export default First;
