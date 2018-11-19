import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="nav">
      <Link className="navLink" to="/">Home</Link>
      <div className="navBreak"></div>
      <Link className="navLink innerNav" to="/about">About</Link>{" "}
      <div className="navBreak"></div>
      <Link className="navLink innerNav" to="/contact">Contact</Link>{" "}
      <div className="navBreak"></div>
      <Link className="navLink" to="/services">Towing Services</Link>
    </nav>
  );
};

export default HeaderNav;
