import React from "react";
import bg from "../../assets/portfolio.png";
import { Link } from "react-scroll";
import "./intro.css";
import { GrStatusGood } from "react-icons/gr";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm
          <span className="introName"> Hyemee</span>
          <br />
          MERN Full Stack developer
        </span>
        <p className="introPara">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
          odit architecto nam consectetur dolores placeat omnis voluptate amet!
          Sequi, dolorem?
        </p>
        <Link>
          <button className="btn">
            <GrStatusGood />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} className="bg" alt="portfolio-pic" />
    </section>
  );
};

export default Intro;
