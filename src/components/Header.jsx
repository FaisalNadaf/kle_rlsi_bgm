import React from "react";
import Dropdown from "./Dropdown";
import Menu from "./menu_btn/menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      {/* <Link to={"/"}> */}
        <img
          className="w-[100%] sticky bottom-0"
          src="src\assets\teachers\logo-header1-removebg-preview.png"
        />
      {/* </Link> */}
      {/* <Dropdown /> */}
    </div>
  );
};

export default Header;
