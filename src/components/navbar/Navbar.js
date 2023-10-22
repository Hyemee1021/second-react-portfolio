import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo192.png";
import { Link } from "react-scroll";
import { MdContactSupport } from "react-icons/md";
import menu from "../../assets/menu.png";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" srcset="" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          duration={500}
          smooth={true}
          offset={-100}
          spy={true}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="skills"
          duration={500}
          smooth={true}
          offset={-70}
          spy={true}
        >
          About
        </Link>
        <Link
          className="desktopMenuListItem"
          activeClass="active"
          to="works"
          duration={500}
          smooth={true}
          offset={-100}
          spy={true}
        >
          Portfolio
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <div className="desktopMenuImg">
          <MdContactSupport />
        </div>
        Contact me
      </button>

      <img
        src={menu}
        alt="menu"
        srcset=""
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          duration={500}
          smooth={true}
          offset={-100}
          spy={true}
          className="listItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          className="listItem"
          onClick={() => setShowMenu(false)}
          activeClass="active"
          to="skills"
          duration={500}
          smooth={true}
          offset={-70}
          spy={true}
        >
          About
        </Link>
        <Link
          className="listItem"
          onClick={() => setShowMenu(false)}
          activeClass="active"
          to="works"
          duration={500}
          smooth={true}
          offset={-100}
          spy={true}
        >
          Portfolio
        </Link>
        <Link
          className="listItem"
          onClick={() => setShowMenu(false)}
          activeClass="active"
          to="contact"
          duration={500}
          smooth={true}
          offset={-100}
          spy={true}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
