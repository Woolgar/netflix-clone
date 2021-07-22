import React, { useEffect, useState } from "react";
import "./assets/css/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <a className="nav__logo" href="http://localhost:3000/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/archive/0/08/20190203185210%21Netflix_2015_logo.svg"
          alt="Netflix logo"
        />
      </a>
      <ul className="nav__menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Tv Shows</a>
        </li>
        <li>
          <a href="/">Movies</a>
        </li>
        <li>
          <a href="/">Latest</a>
        </li>
        <li>
          <a href="/">My List</a>
        </li>
      </ul>
      <img
        className="nav__avatar"
        src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
        alt="avatar"
      />
    </div>
  );
}

export default Nav;
