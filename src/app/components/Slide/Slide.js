import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./slide.css";

const Slide = ({ e, i, carouselPosition, descriptions }) => {
  const viewVertical = useSelector((state) => state.viewVertical);

  const [enhance, setEnhance] = useState(false);

  const enhancePic = () => {
    setEnhance((prev) => !prev);
  };

  const styled = {
    position: "absolute",
    width: "100%",
    display: "flex",
    left: `${(i - carouselPosition) * 100}%`,
  };

  console.log(descriptions[i]);

  const horiz = () => {
    return (
      <div key={e} style={styled}>
        <div className="wrapper">
          <img
            onMouseEnter={enhancePic}
            onMouseLeave={enhancePic}
            className={`${enhance ? "slide-enhance" : "slide-reduce"} 
          ${i % 2 === 1 ? "pic-right" : "pic-left"}`}
            src={e}
          />
          <div className="sub-desc">
            {descriptions[i].map((e) => {
              return <p>{e}</p>;
            })}
          </div>
        </div>
      </div>
    );
  };

  const vert = () => {
    return (
      <div key={e} style={styled}>
        <div className="wrapper">
          <img className={"slide-enhance"} src={e} />
          <div className="sub-desc">
            {descriptions[i].map((e) => {
              return <p>{e}</p>;
            })}
          </div>
        </div>
      </div>
    );
  };

  return viewVertical ? vert() : horiz();
};

export default Slide;
