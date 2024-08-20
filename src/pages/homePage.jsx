import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./homePage.css";
import Menu from "../components/menu_btn/menu";

const HomePage = () => {
  return (
    <>
      {" "}
      <section id="hero">
        <div className="container">
          <video autoPlay muted loop className="h-screen">
            <source src="src\assets\rls_Campus.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
};

export default HomePage;
