import React from "react";
import "./homePage.css";
import Coursal from "../components/coursal/Coursal";
import ChairmanDesk from "../components/Chairmandesk/ChairmanDesk";

const HomePage = () => {
  return (
    <>
      <section id="hero">
        {" "}
        <div className=" absolute right-20 top-52 ">
          <Coursal />
        </div>
        <ChairmanDesk />
        <div className="container bg-black">
          <video autoPlay muted loop className="h-screen ">
            <source src="src\assets\rls_Campus.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
};

export default HomePage;
