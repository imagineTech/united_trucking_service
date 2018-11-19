import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";

const HeaderNav = () => {
  return (
    <navcont>
      <info className="info">
        <div className="infoLeft">
          <div className="sales">SALES, PARTS & SANDBLASTING</div>
          <div className="phoneNumber">(908) 361-0376</div>
        </div>
        <img className="logo" src="" alt="United Truck Service Logo"></img>
        <div className="infoRight">
        <div className="towing">TOWING</div>
        <div className="phoneNumber">(908) 224-0060</div>
        </div>
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
