import React, { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLetter, resetAdWord } from "../../../actions";
import "./showcase.css";

const Showcase = () => {
  const dispatch = useDispatch();
  const adWord = useSelector((state) => state.adWord);

  const word = useRef(0);

  const index = useRef(0);

  const scrollWords = useCallback(() => {
    const sellWords = [
      "React_",
      "CSS_",
      "HTML_",
      "Mobile_First_",
      "Javascript_",
      "UX/UI_",
      "SASS_",
      "Accessability_",
      "React_Hooks_",
    ];

    if (sellWords[sellWords.length - 1] === adWord) {
      word.current = 0;
      index.current = 0;
      return dispatch(resetAdWord());
    }
    if (adWord === sellWords[word.current]) {
      word.current = word.current + 1;
      index.current = 0;
      return dispatch(resetAdWord());
    }
    dispatch(addLetter(sellWords[word.current][index.current]));
    index.current = index.current + 1;
  }, [adWord]);

  useEffect(() => {
    setTimeout(() => scrollWords(), 500);
  }, [adWord, scrollWords]);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        dispatch(resetAdWord());
      }, 500);
    };
  }, []);

  return (
    <div data-test="component-showcase" className="showcase">
      <img className="show-pic" src="images/stars.jpg"></img>
      <h1 className="site-name">Steves Sites</h1>
      <p data-test="showcase-sellwords" className="sell-words">
        {adWord}
      </p>
    </div>
  );
};

export default Showcase;
