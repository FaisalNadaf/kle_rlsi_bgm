import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./homePage.css";

const HomePage = () => {
  return (
    <>
      {" "}
      <Header />
      <section id="hero">
        <div className="container">
          <video autoPlay muted loop className="h-screen">
            <source src="src\assets\rls_Campus.mp4" type="video/mp4" />
          </video>
          <header>
            <nav>
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
            </nav>
          </header>
        </div>
      </section>
    </>
  );
};

export default HomePage;
