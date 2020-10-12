import React, { useEffect, useState } from "react";
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
        src="https://lh3.googleusercontent.com/proxy/ZoUsPwXApM59GHzXcWehhB4aKyrBVxLgJNwHalVciTGs-vQq-HmcowQzEaOZaZvmnW10Sd3t0B_nDST0R7AkOtyTputidJJ776Hp9Hkbp1GGgDsOrSM"
        alt="Netflix Logo"
        className="nav_logo"
      />
      <img
        src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        alt="Netflix Avatar"
        className="nav_avatar"
      />
    </div>
  );
}

export default Nav;
