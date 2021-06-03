import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCurrentPage, toggleShowPics } from "../../../actions/index";
import { BrowserRouter, Link } from "react-router-dom";
import "./project.css";

const Project = ({ address, image, title, description, idx }) => {
  const dispatch = useDispatch();
  const viewVertical = useSelector((state) => state.viewVertical);
  const showPics = useSelector((state) => state.showPics[title]);

  const changePage = (page) => {
    dispatch(changeCurrentPage(page));
  };

  const briefDesc = () => {
    return `${description[0].substring(0, 200)}...`;
  };

  const overlayPics = () => {
    dispatch(toggleShowPics(title));
  };

  const vertical = () => {
    return (
      <div data-test="component-project" className={`vert-project`}>
        <BrowserRouter>
          <Link
            className="unstyle-link vert-title"
            onClick={() => changePage(address)}
            to={`/${address}`}
          >
            {title}
          </Link>
          <img
            onMouseEnter={overlayPics}
            onMouseLeave={overlayPics}
            className={`vert-pic`}
            src={image}
          ></img>
          <div className="vert-content">
            <p>
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
        </BrowserRouter>
      </div>
    );
  };

  const elements = (odd) => {
    const side = odd ? "odd" : "even";

    return (
      <div
        data-test="component-project"
        className={`project ${side} ${!showPics && `normal`}`}
      >
        <img
          onMouseEnter={overlayPics}
          onMouseLeave={overlayPics}
          className={`pic ${showPics ? "enhance" : "reduce"}`}
          src={image}
        ></img>
        {!showPics && (
          <div className={`${side}-content content-wrap`}>
            <div className="content">
              <BrowserRouter>
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
              </BrowserRouter>
            </div>
          </div>
        )}
      </div>
    );
  };

  return viewVertical ? vertical() : elements(idx % 2);
};

export default Project;
