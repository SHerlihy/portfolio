import React from "react";
import Project from "../components/Projects/Project";
import Showcase from "../components/Showcase/Showcase";
import "./home.css";

const Home = ({ data }) => {
  return (
    <div className="home">
      <Showcase />
      <div className="projects-wrap">
        <div className="projects">
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
