import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo192.png";
import { Link } from "react-scroll";
import { MdContactSupport } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" srcset="" className="logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
        <Link className="desktopMenuListItem">Client</Link>
      </div>
      <button className="desktopMenuBtn">
        <div className="desktopMenuImg">
          <MdContactSupport />
        </div>
        Contact me
      </button>
    </nav>
  );
};

export default Navbar;
