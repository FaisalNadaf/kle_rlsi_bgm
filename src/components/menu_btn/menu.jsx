import React, { useState } from "react";
import "./menu.css";
import { Link } from "react-router-dom";

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
            className="button hover:shadow rounded-full bg-transparent hover:shadow-white "
            id="menu-button"
            onClick={handleMenuToggle}
          >
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
          </button>
        </div>
      </header>
      <div id="menu-container" className={`${menuOpen ? "open" : ""} `}>
        <ul className="unstyled">
          <ul>
            <li>
              <Link to="/" onClick={handleMenuToggle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" onClick={handleMenuToggle}>
                AboutUs
              </Link>
            </li>

            <li>
              <Link to="/gallery" onClick={handleMenuToggle}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/faculty" onClick={handleMenuToggle}>
                Faculty
              </Link>
            </li>
            <li>
              <Link to="/academyAlliances" onClick={handleMenuToggle}>
                Academy Alliances
              </Link>
            </li>
            <li>
              <Link to="/placementes" onClick={handleMenuToggle}>
                Placementes
              </Link>
            </li>
            <li>
              <Link to="/contactUs" onClick={handleMenuToggle}>
                Contact Us
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default Menu;
