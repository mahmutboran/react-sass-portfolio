import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Footer.scss";

const Footer = ({ show, setShow }) => {
  const { pathname } = useLocation();
  console.log(pathname)
  useEffect(() => {
    if (
      pathname !== "/" &&
      pathname !== "/contact" &&
      pathname !== "/about" &&
      pathname !== "/home"
    ) {
      setShow(!show);
    }
  }, []);

  return (
    <div>
      <footer
        className={
          pathname === "/"
            ? "horizontal"
            : pathname === "/contact"
            ? "middle"
            : "vertical"
        }
      >
        <div className="social-icons">
          <a href="#twitter" rel="noopener noreferrer" target="true">
            <i className="fab fa-twitter fa-2x" />
          </a>
          <a href="#facebook" rel="noopener noreferrer" target="true">
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a href="#instagram" rel="noopener noreferrer" target="true">
            <i className="fab fa-instagram fa-2x" />
          </a>
          <a href="#github" rel="noopener noreferrer" target="true">
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
        <div className="copyright">© Copyright 2023</div>
      </footer>
    </div>
  );
};

export default Footer;
