import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/project1.png";
import Portfolio2 from "../../assets/project2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";
const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <span className="worksDesc">
        Here are my projects I have worked on. Stay tune for new projects...
      </span>
      <div className="worksImgs">
        <a
          className="MyProjects overlay1"
          href="https://react-movie-mate-git-main-hyemee1021.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Portfolio1} alt="first project" className="worksImg" />
          <div className="text-overlay1"> React ,Tailwind, HTML </div>
        </a>

        <a
          className="MyProjects overlay2"
          href="https://transaction-client-seven.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Portfolio2} alt="" className="worksImg" />
          <div className="text-overlay2">
            NodeJS, React ,React-bootrap, HTML
          </div>
        </a>

        <img src={Portfolio3} alt="" className="worksImg" />
        <img src={Portfolio4} alt="" className="worksImg" />
        <img src={Portfolio5} alt="" className="worksImg" />
        <img src={Portfolio6} alt="" className="worksImg" />
      </div>
      {/* <button className="workBtn">See more</button> */}
    </section>
  );
};

export default Works;
