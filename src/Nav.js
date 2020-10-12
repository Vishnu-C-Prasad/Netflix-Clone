import React, { useEffect, useState } from "react";
import NetflixLogo from "./Netflix_logo.png";
import NetflixAvatar from "./Netflix_Avatar.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_dark"}`}>
      <img
        src={NetflixLogo}
        alt="Netflix Logo"
        className="nav_logo"
      />
      <img
        src={NetflixAvatar}
        alt="Netflix Avatar"
        className="nav_avatar"
      />
    </div>
  );
}

export default Nav;
