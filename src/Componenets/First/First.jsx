import React, { useState, useEffect } from "react";
import "./First.css";

function First() {
  const texts = [
    "Fullstack Developer",
    "Frontend Specialist",
    "Backend Expert",
    "Database Architect",
    "MERNStack Developer",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = texts[currentIndex];
    const typingSpeed = isDeleting ? 90 : 100;

    const handleTyping = () => {
      if (!isDeleting && displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 100); // Pause before deleting
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else {
        const nextText = isDeleting
          ? currentWord.substring(0, displayedText.length - 1)
          : currentWord.substring(0, displayedText.length + 1);
        setDisplayedText(nextText);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, texts, currentIndex]);

  // Split the displayed text into words
  const words = displayedText.split(" ");
  const firstWord = words[0] || "";
  const nextWord = words[1] || "";

  return (
    <span className="typewriter">
      <span>{firstWord}</span>
      {nextWord && <span className="highlight"> {nextWord}</span>}
    </span>
  );
}

export default First;
