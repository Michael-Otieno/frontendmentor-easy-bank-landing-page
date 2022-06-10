import hamburgerIcon from "../../images/icon-hamburger.svg";
import closeIcon from "../../images/icon-close.svg";
import logo from "../../images/logo.svg";
import "./Navbar.css";

import { useState } from "react";

export default function Navbar() {
  const [navExpanded, setNavExpand] = useState(false);

  function toggleNav() {
    setNavExpand((prevState) => !prevState);
  }
  return (
    <nav className="nav-menu">
      <a className="logo">
        <img src={logo} alt="logo" />
      </a>
      <button className="hamburger" onClick={toggleNav}>
        <img
          src={navExpanded ? closeIcon : hamburgerIcon}
          alt="hamburger icon"
        />
      </button>
      <div className={navExpanded ? "nav-links " : "nav-links expand-menu"}>
        <ul className="nav-list">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/contact">Blog</a>
          </li>
          <li>
            <a href="/contact">Careers</a>
          </li>
        </ul>
        <button 
        className="nav-request-btn"
        >Request Invite
        </button>
      </div>
    </nav>
  );
}
