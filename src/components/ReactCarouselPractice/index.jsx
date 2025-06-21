import React, { useState } from "react";
import "./index.css";

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
    { name: "Nature-1", src: "src/assets/Images/Nature-1.jpg" },
    { name: "Nature-2", src: "src/assets/Images/Nature-2.jpg" },
    { name: "Nature-3", src: "src/assets/Images/Nature-3.jpg" },
    { name: "Nature-4", src: "src/assets/Images/Nature-4.jpg" },
    { name: "Nature-5", src: "src/assets/Images/Nature-5.jpg" },
    { name: "Nature-6", src: "src/assets/Images/Nature-6.jpg" },
    { name: "Nature-7", src: "src/assets/Images/Nature-7.jpg" },
    { name: "Nature-8", src: "src/assets/Images/Nature-8.jpg" },
    { name: "Nature-9", src: "src/assets/Images/Nature-9.jpg" },
    { name: "Nature-10", src: "src/assets/Images/Nature-10.jpg" },
    { name: "Nature-11", src: "src/assets/Images/Nature-11.jpg" },
    { name: "Nature-12", src: "src/assets/Images/Nature-12.jpg" },
    { name: "Nature-13", src: "src/assets/Images/Nature-13.jpg" },
    { name: "Nature-14", src: "src/assets/Images/Nature-14.jpg" },
    { name: "Nature-15", src: "src/assets/Images/Nature-15.jpg" },
  ];

  const onClickCarouselItem = (index) => {
    setAnimatedClass(true);
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-wrapper">
      <div
        key={currentIndex}
        className={`background-image Nature-${currentIndex} ${
          addAnimatedClass ? "animation-class" : ""
        }`}
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
            <img src={item.src} alt="Nature" />;
            <div className="carousel-item-text">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReactCarouselPractice;
