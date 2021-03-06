import React, { useEffect } from "react";
import About from "../components/About/About";
import Project from "../components/Projects/Project";
import Showcase from "../components/Showcase/Showcase";
import "./home.css";
import { useSelector } from "react-redux";

const Home = ({ data }) => {
  const viewVertical = useSelector((state) => state.viewVertical);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-test="component-home" className="home">
      <Showcase />
      <About />
      <div className="projects-wrap">
        <div className={viewVertical ? "vert-projects" : "projects"}>
          {Object.keys(data).map((e, i) => {
            return (
              <Project
                key={data[e]["title"]}
                address={`${e}`}
                image={data[e]["image"]}
                pics={data[e]["pics"]}
                title={data[e]["title"]}
                description={data[e]["description"]}
                idx={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
