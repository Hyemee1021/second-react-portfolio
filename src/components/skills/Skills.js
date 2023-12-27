import React from "react";
import "./skills.css";

import { BsBootstrap } from "react-icons/bs";
import { SiRedux } from "react-icons/si";
const Skills = () => {
  return (
    <div id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I can use ExpressJs, React-Redux, Bootstrap , React Bootstrap, tailwind
        css. <br />
        Also, my skillset is still growing...
      </span>

      <div className="skillBars">
        <div className="skillBar">
          {/* <img className="skillBarImg" alt="logo" src={UIDesign} /> */}
          <i class="fa-brands skill-icon fa-square-js"></i>

          <div className="skillBarText">
            <h2> &nbsp; Node.Js</h2>
          </div>
        </div>
        <div className="skillBar">
          {/* <img className="skillBarImg" alt="logo" src={UIDesign} /> */}
          <i className=" skill-icon fa-brands fa-react"></i>
          <div className="skillBarText">
            <h2> &nbsp; React</h2>
          </div>
        </div>
        <div className="skillBar">
          {/* <img className="skillBarImg" alt="logo" src={UIDesign} /> */}
          <SiRedux className=" skill-icon" />

          <div className="skillBarText">
            <h2> &nbsp; React-Redux</h2>
          </div>
        </div>

        <div className="skillBar">
          {/* <img className="skillBarImg" alt="logo" src={UIDesign} /> */}
          <i class="skill-icon fa-brands fa-square-js"> </i>
          <div className="skillBarText">
            <h2> &nbsp; JavaScript</h2>
          </div>
        </div>
        <div className="skillBar">
          {/* <img className="skillBarImg" alt="logo" src={UIDesign} /> */}
          <BsBootstrap className="skill-icon" />

          <div className="skillBarText">
            <h2> &nbsp; Bootstrap</h2>
          </div>
        </div>

        <div className="skillBar">
          {/* <img className="skillBarImg" alt="logo" src={webDesign} /> */}
          <i class=" skill-icon fa-brands fa-css3-alt"></i>
          <div className="skillBarText">
            <h2> &nbsp; css</h2>
          </div>
        </div>
        <div className="skillBar">
          {/* <img className="skillBarImg" alt="logo" src={appDesign} /> */}

          <i class="skill-icon fa-brands fa-html5"></i>
          <div className="skillBarText">
            <h2> &nbsp; HTML</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
