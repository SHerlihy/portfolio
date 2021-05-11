import React, { useState } from "react";
import Slide from "../components/Slide/Slide";
import "./multiplayer.css";

const Multiplayer = ({ image, pics, description, descriptions }) => {
  const [carouselPosition, setCarouselPosition] = useState(0);

  const nextSlide = () => {
    if (carouselPosition === pics.length - 1) {
      return setCarouselPosition(0);
    }
    setCarouselPosition((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (carouselPosition === 0) {
      return setCarouselPosition(pics.length - 1);
    }
    setCarouselPosition((prev) => prev - 1);
  };

  return (
    <div className="multiplayer-wrap">
      <div className="main-pic-wrap">
        <img className="main-pic" src={image}></img>
      </div>
      <div className="multiplayer">
        {description.map((e) => {
          return <p className="main-desc">{e}</p>;
        })}
      </div>
      <div className="carousel">
        <button onClick={prevSlide}>
          <i class="fas fa-chevron-circle-left"></i>
        </button>
        <div className="content">
          {pics.map((e, i) => {
            return (
              <Slide
                e={e}
                i={i}
                carouselPosition={carouselPosition}
                descriptions={descriptions}
              />
            );
          })}
        </div>
        <button onClick={nextSlide}>
          <i class="fas fa-chevron-circle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Multiplayer;
