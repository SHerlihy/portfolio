import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCurrentPage } from "../../../actions/index";
import { Link } from "react-router-dom";
import "./project.css";

const Project = ({ address, image, pics, title, description, idx }) => {
  const [showPics, setShowPics] = useState(false);

  const dispatch = useDispatch();

  const changePage = (page) => {
    dispatch(changeCurrentPage(page));
  };

  const briefDesc = () => {
    return `${description[0].substring(0, 200)}...`;
  };

  const overlayPics = () => {
    setShowPics((prev) => !prev);
  };

  const elements = (odd) => {
    const side = odd ? "odd" : "even";

    return (
      <div className={`project ${side} ${!showPics && `normal`}`}>
        <img
          onMouseEnter={overlayPics}
          onMouseLeave={overlayPics}
          className={`pic ${showPics ? "enhance" : "reduce"}`}
          src={image}
        ></img>
        {!showPics && (
          <div className={`${side}-content content-wrap`}>
            <div className="content">
              <Link
                className="unstyle-link"
                onClick={() => changePage(address)}
                to={`/${address}`}
              >
                {title}
              </Link>
              <p className="proj-desc">
                {briefDesc()}
                <Link
                  className="unstyle-link"
                  onClick={() => changePage(address)}
                  to={`/${address}`}
                >
                  more
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  return elements(idx % 2);
};

export default Project;
