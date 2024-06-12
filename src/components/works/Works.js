import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/project1.png";
import Portfolio2 from "../../assets/project2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/trello.png";
import Portfolio5 from "../../assets/project5.png";
import Portfolio7 from "../../assets/project7.png";
import Portfolio6 from "../../assets/portfolio-6.png";
const Works = () => {
  return (
    <div id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">Stay tune for new projects...</span>
      <div className="worksImgs">
        <a
          className="MyProjects overlay5"
          href="https://medical-center-frontend-delta.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Portfolio7} alt="" className="worksImg" />
          <div className="text-overlay5 ">
            Mongodb, NodeJS, React ,React-bootstrap, HTML
          </div>
        </a>
        <a
          className="MyProjects overlay5"
          href="https://tour-manager-frontend.vercel.app/home"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Portfolio5} alt="" className="worksImg" />
          <div className="text-overlay5 ">
            Mongodb, NodeJS, React ,React-bootstrap, HTML
          </div>
        </a>
        <a
          className="MyProjects overlay1"
          href="https://react-movie-mate-git-main-hyemee1021.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Portfolio1} alt="first project" className="worksImg" />
          <div className="text-overlay1">React ,Tailwind, HTML </div>
        </a>

        <a
          className="MyProjects overlay2"
          href="https://transaction-client-seven.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Portfolio2} alt="" className="worksImg" />
          <div className="text-overlay2">
            Mongodb, NodeJS, React ,React-bootstrap, HTML
          </div>
        </a>

        <a
          className="MyProjects overlay3"
          href="https://fullstack-library3-client.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Portfolio3} alt="" className="worksImg" />
          <div className="text-overlay3 ">
            Mongodb, NodeJS, React ,React-bootstrap, HTML
          </div>
        </a>
      </div>
      {/* <button className="workBtn">See more</button> */}
    </div>
  );
};

export default Works;
