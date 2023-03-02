import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to="/"
            className="nav__link"
            style={({ isActive }) => {
              return { color: isActive ? "#ff652f" : "inherit" };
            }}
          >
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/about"
            className="nav__link nav__link--active"
            style={({ isActive }) => {
              return { color: isActive ? "#ff652f" : "inherit" };
            }}
          >
            About Me
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/projects"
            className="nav__link"
            style={({ isActive }) => {
              return { color: isActive ? "#ff652f" : "inherit" };
            }}
          >
            My Projects
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/contact"
            className="nav__link"
            style={({ isActive }) => {
              return { color: isActive ? "#ff652f" : "inherit" };
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
