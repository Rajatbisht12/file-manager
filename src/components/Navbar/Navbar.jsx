import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-menu">
        <ul className="nav-links">
          <Link to="/home">
            <li>Home</li>
          </Link>
          <Link>
            <li>About</li>
          </Link>
          <Link>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
