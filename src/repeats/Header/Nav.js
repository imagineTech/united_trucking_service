import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <navcont>
      <info className="info">
        <div className="infoLeft"></div>
        <img className="logo" src="" alt="United Truck Service Logo"></img>
        <div className="infoRight"></div>
      </info>
      <nav className="nav">
        <Link className="navLink" to="/">HOME</Link>
        <div className="navBreak"></div>
        <Link className="navLink innerNav" to="/about">ABOUT</Link>{" "}
        <div className="navBreak"></div>
        <Link className="navLink innerNav" to="/contact">CONTACT</Link>{" "}
        <div className="navBreak"></div>
        <Link className="navLink" to="/services">TOWING SERVICES</Link>
      </nav>
    </navcont>
  );
};

export default HeaderNav;
