import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <nav className="nav">
      <Link to="/">Home</Link> <Link to="/about">About</Link>{" "}
      <Link to="/contact">Contact</Link>{" "}
      <Link to="/services">Towing Services</Link>
    </nav>
  );
};

export default HeaderNav;
