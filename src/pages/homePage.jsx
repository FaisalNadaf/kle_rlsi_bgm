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
        <div className="absolute w-[70%] mx-[15%] top-0 shadow-2xl rounded-xl ">
          <Header />
        </div>
        <div className="container">
          <video autoPlay muted loop className="h-screen">
            <source src="src\assets\rls_Campus.mp4" type="video/mp4" />
          </video>
          <Menu />
        </div>
      </section>
    </>
  );
};

export default HomePage;
