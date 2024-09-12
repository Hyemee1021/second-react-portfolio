import React from "react";
import bg from "../../assets/profile-photo.png";
import image from "../../assets/image.png";
import { Link } from "react-scroll";
import "./intro.css";
import HyeMeePark from "../../assets/hyemeePark_frontend.pdf";

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
          Frontend-Developer
        </span>
        <p className="introPara">
          <br />
          Experienced web developer with a solid foundation in frontend
          development and a growing understanding of backend concepts. Committed
          to delivering high-quality user experiences and overcoming challenges
          with precision and creativity
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
