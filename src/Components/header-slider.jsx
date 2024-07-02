import React, { useState } from "react";
import "../style/components/header-slide.css";

import img1 from "../Image/img/header-slider/lineage 1.jpg";
import img2 from "../Image/img/header-slider/lineage 2.jpg";

export default function HeaderSlider() {
  const [currentImage, setCurrentImage] = useState(1);

  const images = [
    {
      img: img1,
      text: "Welcome to Sale-Net, your one-stop online store connecting the whole world with ancient Uzbekistan.",
      align: "flex-end",
    },
    {
      img: img2,
      text: "A piece of the East for a long memory",
      align: "center",
    },
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };
  return (
    <header
      className="header-slider"
      style={{
        background: `url('${images[currentImage].img}') no-repeat center center`,
        backgroundSize: "cover",
        alignItems: images[currentImage].align,
      }}
    >
      <div className="header-content">
        <div>{images[currentImage].text}</div>
        <button>SHOP</button>
        <div className="prev-view">
          <span
            style={{
              backgroundColor: currentImage === 0 ? "#fff" : "transparent",
            }}
          ></span>
          <span
            style={{
              backgroundColor: currentImage === 1 ? "#fff" : "transparent",
            }}
          ></span>
        </div>
      </div>
      <div className="prev-buttons">
        <button onClick={prevImage}>{`<`}</button>
        <button onClick={nextImage}>{`>`}</button>
      </div>
    </header>
  );
}
