import React from "react";
import Dropdown from "./Dropdown";
import Menu from "./menu_btn/menu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="shadow-xl rounded-xl  mt-2 ">
      {/* <Link to={"/"}> */}
      <img
        className="w-[100%] "
        src="src\assets\teachers\logo-header1-removebg-preview.png"
      />
      {/* </Link> */}
      {/* <Dropdown /> */}
    </div>
  );
};

export default Header;
