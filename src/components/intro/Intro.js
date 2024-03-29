import React from "react";
import bg from "../../assets/profile-photo.png";
import image from "../../assets/image.png";
import { Link } from "react-scroll";
import "./intro.css";
import HyeMeePark from "../../assets/hyemee_Park.pdf";

const Intro = () => {
  const handleDownloadClick = () => {
    // You can use JavaScript to trigger the download
    window.open(HyeMeePark, "_blank");
  };
  return (
    <div id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm
          <span className="introName"> Hyemee</span>
          <br />
          MERN Full Stack developer
        </span>
        <p className="introPara">
          <br />I am a passionate web developer. Some traits of my strong points
          that I am proud of are persistance and diligence. <br /> Also, I am
          sure I will be a member who makes a harmony with other team members
          and get things done!!
        </p>
        <Link>
          <button className="btn" onClick={handleDownloadClick}>
            <i class="fa-solid fa-download"> Resume</i>
          </button>
        </Link>
      </div>
      <div className="picture">
        <img src={bg} className="bg" alt="portfolio-pic" />
      </div>
    </div>
  );
};

export default Intro;
