import React, { useState } from "react";
import "./index.css";
import nature1 from "../../assets/images/Nature-1.jpg";
import nature2 from "../../assets/images/Nature-2.jpg";
import nature3 from "../../assets/images/Nature-3.jpg";
import nature4 from "../../assets/images/Nature-4.jpg";
import nature5 from "../../assets/images/Nature-5.jpg";
import nature6 from "../../assets/images/Nature-6.jpg";
import nature7 from "../../assets/images/Nature-7.jpg";
import nature8 from "../../assets/images/Nature-8.jpg";
import nature9 from "../../assets/images/Nature-9.jpg";
import nature10 from "../../assets/images/Nature-10.jpg";
import nature11 from "../../assets/images/Nature-11.jpg";
import nature12 from "../../assets/images/Nature-12.jpg";
import nature13 from "../../assets/images/Nature-13.jpg";
import nature14 from "../../assets/images/Nature-14.jpg";
import nature15 from "../../assets/images/Nature-15.jpg";

function ReactCarouselPractice() {
  const [currentIndex, setCurrentIndex] = useState(15);
  const [addAnimatedClass, setAnimatedClass] = useState(false);

  const onClickClickMe = () => {
    if (currentIndex <= 1) {
      setAnimatedClass(true);
      setCurrentIndex(15);
      return;
    }
    setAnimatedClass(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const images = [
    { name: "Nature-1", src: nature1 },
    { name: "Nature-2", src: nature2 },
    { name: "Nature-3", src: nature3 },
    { name: "Nature-4", src: nature4 },
    { name: "Nature-5", src: nature5 },
    { name: "Nature-6", src: nature6 },
    { name: "Nature-7", src: nature7 },
    { name: "Nature-8", src: nature8 },
    { name: "Nature-9", src: nature9 },
    { name: "Nature-10", src: nature10 },
    { name: "Nature-11", src: nature11 },
    { name: "Nature-12", src: nature12 },
    { name: "Nature-13", src: nature13 },
    { name: "Nature-14", src: nature14 },
    { name: "Nature-15", src: nature15 },
  ];

  function getImage(name) {
    return new URL(`../../assets/images/${name}.jpg`, import.meta.url).href;
  }
  const onClickCarouselItem = (index) => {
    setAnimatedClass(true);
    setCurrentIndex(index);
  };

  console.log("Current Index:", images);

  return (
    <div className="carousel-wrapper">
      <div
        key={currentIndex}
        className={`background-image Nature-${currentIndex} ${
          addAnimatedClass ? "animation-class" : ""
        }`}
        style={{ backgroundImage: `url(nature${currentIndex}.jpg)} )` }}
      >
        <div className="text-content-wrapper">
          <div className="text-title">React Carousel Practice</div>
          <div className="text-description">
            This is a React Carousel Practice component that demonstrates how to
            create a simple carousel using React. The carousel includes
            navigation buttons and displays images in a sliding format.
          </div>
          <div className="button" onClick={onClickClickMe}>
            Click me {currentIndex}
          </div>
        </div>
      </div>
      <div className="carousel-container">
        {images.map((item, index) => (
          <div
            className="carousel-item"
            key={item.name}
            onClick={() => onClickCarouselItem(index + 1)}
          >
            <img src={item.src} alt="Nature" />
            <div className="carousel-item-text">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactCarouselPractice;
