import React, { useState } from "react";
import "./menu.css";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
    document.documentElement.toggleAttribute("menu-open", !menuOpen);
  };

  return (
    <>
      <header className="absolute">
        <div className="header-side-content ">
          <button
            className="button  "
            id="menu-button"
            onClick={handleMenuToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <div id="menu-container" className={`${menuOpen ? "open" : ""} `} >
        <ul className="unstyled">
          <ul>
            <li>
              <a href="#">AboutUs</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Faculty</a>
            </li>
            <li>
              <a href="#">Academy Alliances</a>
            </li>
            <li>
              <a href="#">Placementes</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default Menu;
