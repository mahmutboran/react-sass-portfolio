import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.scss"

const Footer = () => {
  const {pathname} = useLocation()
  return (
    <div>
      <footer className={pathname==="/" ? "horizontal" : pathname ==="/contacts" ? "middle" : "vertical"}>
        <div className="social-icons">
          <a href="#twitter">
            <i className="fab fa-twitter fa-2x" />
          </a>
          <a href="#facebook">
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a href="#instagram">
            <i className="fab fa-instagram fa-2x" />
          </a>
          <a href="#github">
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
        <div className="copyright">© Copyright 2023</div>
      </footer>
    </div>
  );
};

export default Footer;
