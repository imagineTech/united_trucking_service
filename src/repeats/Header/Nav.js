import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="nav">
      <Link className="navLink" to="/">Home</Link> <Link to="/about">About</Link>{" "}
      <Link className="navLink" to="/contact">Contact</Link>{" "}
      <Link className="navLink" to="/services">Towing Services</Link>
    </nav>
  );
};

export default HeaderNav;
