import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__item">
            <NavLink to="/about" className="nav__link nav__link--active">
              About Me
            </NavLink>
          </li>
          <li className="nav__item">
            <Link to="/projects" className="nav__link">
              My Projects
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
