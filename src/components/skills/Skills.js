import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import appDesign from "../../assets/app-design.png";
import webDesign from "../../assets/website-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
        maxime amet sapiente dignissimos est praesentium officia quod aut minima
        iste.
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img className="skillBarImg" alt="logo" src={UIDesign} />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is demo text, you can write my own content</p>
          </div>
        </div>

        <div className="skillBar">
          <img className="skillBarImg" alt="logo" src={webDesign} />
          <div className="skillBarText">
            <h2>Web Development</h2>
            <p>This is demo text, you can write my own content</p>
          </div>
        </div>
        <div className="skillBar">
          <img className="skillBarImg" alt="logo" src={appDesign} />
          <div className="skillBarText">
            <h2>App Development</h2>
            <p>This is demo text, you can write my own content</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
