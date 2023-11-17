import React from "react";
import bg from "../../assets/portfolio.png";
import image from "../../assets/image.png";
import { Link } from "react-scroll";
import "./intro.css";

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
          I am passinate
          <br />I am a passionate web developer in coding. I love to keep
          learning new things, and I am a team player.
        </p>
        <Link>
          <button className="btn">
            <i class="fa-solid fa-download"> Resume</i>
          </button>
        </Link>
      </div>
      <img src={bg} className="bg" alt="portfolio-pic" />
    </section>
  );
};

export default Intro;
