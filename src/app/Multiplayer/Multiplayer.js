import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Slide from "../components/Slide/Slide";
import "./multiplayer.css";

const Multiplayer = ({ image, pics, description, descriptions, repo }) => {
  const viewVertical = useSelector((state) => state.viewVertical);
  const [carouselPosition, setCarouselPosition] = useState(0);

  const leftBtn = useRef(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextSlide = () => {
    leftBtn.current = false;
    if (carouselPosition === pics.length - 1) {
      return setCarouselPosition(0);
    }
    setCarouselPosition((prev) => prev + 1);
  };

  const prevSlide = () => {
    leftBtn.current = true;
    if (carouselPosition === 0) {
      return setCarouselPosition(pics.length - 1);
    }
    setCarouselPosition((prev) => prev - 1);
  };

  const horizontal = () => {
    return (
      <div className="multiplayer-wrap">
        <div className="main-pic-wrap">
          <img className="main-pic" src={image}></img>
        </div>
        <div className="multiplayer">
          {description.map((e) => {
            return <p className="main-desc">{e}</p>;
          })}
          <p className="main-desc">
            To browse the repositories please click <a href={repo[0]}>here</a>{" "}
            for the front-end and <a href={repo[1]}>here</a> for the back-end.
          </p>
        </div>
        <div
          style={viewVertical ? { height: "800px" } : { height: "93hv" }}
          className="carousel"
        >
          {viewVertical && (
            <button onClick={prevSlide}>
              <i class="fas fa-chevron-circle-left"></i>
            </button>
          )}
          <div className="content">
            {pics.map((e, i) => {
              return (
                <Slide
                  e={e}
                  i={i}
                  carouselPosition={carouselPosition}
                  descriptions={descriptions}
                  button={leftBtn.current}
                />
              );
            })}
          </div>
          {viewVertical ? (
            <div className="vert-btn-wrap">
              <button onClick={prevSlide}>
                <i class="fas fa-chevron-circle-left"></i>
              </button>
              <button onClick={nextSlide}>
                <i class="fas fa-chevron-circle-right"></i>
              </button>
            </div>
          ) : (
            <button onClick={nextSlide}>
              <i class="fas fa-chevron-circle-right"></i>
            </button>
          )}
        </div>
      </div>
    );
  };

  const vert = () => {
    return (
      <div className="vert-multiplayer-wrap">
        <img className="vert-main-pic" src={image}></img>
        <div className="vert-multiplayer">
          {description.map((e) => {
            return <p className="vert-main-desc">{e}</p>;
          })}
        </div>
        <div className="vert-carousel">
          <div className="vert-content">
            {pics.map((e, i, arr) => {
              return (
                <Slide
                  e={e}
                  i={i}
                  carouselPosition={carouselPosition}
                  descriptions={descriptions}
                  button={leftBtn.current}
                />
              );
            })}
          </div>
        </div>
        <div className="vert-btn-wrap">
          <button onClick={prevSlide}>
            <i class="fas fa-chevron-circle-left"></i>
          </button>
          <button onClick={nextSlide}>
            <i class="fas fa-chevron-circle-right"></i>
          </button>
        </div>
      </div>
    );
  };

  return viewVertical ? vert() : horizontal();
};

export default Multiplayer;
