import React from "react";
import TeamInfo from "./TeamInfo";
import About from "./About";
import ProjectSlider from "./Slider";

const Content = () => {
  return (
    <>
      <div className="w-full m-auto">
        <ProjectSlider />
        <About />
        <TeamInfo />
      </div>
    </>
  );
};

export default Content;
