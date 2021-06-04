import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleEnhance } from "../../../actions";
import "./slide.css";

const Slide = ({ e, i, carouselPosition, descriptions, button }) => {
  const dispatch = useDispatch();
  const viewVertical = useSelector((state) => state.viewVertical);
  const enhance = useSelector((state) => state.enhance);

  const enhancePic = () => {
    dispatch(toggleEnhance());
  };

  const motion = (btn) => {
    return btn ? leftBtnHandler() : rightBtnHandler();
  };

  const rightBtnHandler = () => {
    if (carouselPosition === i) {
      return "in-right";
    }
    return "out-left";
  };

  const leftBtnHandler = () => {
    if (carouselPosition === i) {
      return "in-left";
    }
    return "out-right";
  };

  const horizImgClasses = () => {
    return `${enhance ? "slide-enhance" : "slide-reduce"} ${
      i % 2 === 1 ? "pic-right" : "pic-left"
    }`;
  };

  const slideImg = () => {
    let attributes = { className: "slide-enhance" };
    if (!viewVertical) {
      attributes["onMouseEnter"] = enhancePic;
      attributes["onMouseLeave"] = enhancePic;
      attributes["className"] = horizImgClasses();
    }
    console.log(attributes);
    return <img data-test="slide-image" src={e} {...attributes} />;
  };

  const slideContent = () => {
    return (
      <div className="wrapper">
        {slideImg()}
        <div className="sub-desc">
          {descriptions[i].map((e) => {
            return <p data-test="slide-description">{e}</p>;
          })}
        </div>
      </div>
    );
  };

  return (
    <div
      data-test="component-slide"
      key={e}
      style={{ animation: `${motion(button)} 0.3s ease-in forwards` }}
      className={`slide`}
    >
      {slideContent()}
    </div>
  );
};

export default Slide;
