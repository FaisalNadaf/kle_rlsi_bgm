import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div class="loader-container ">
      <svg viewBox="0 0 500 200">
        <text x="50%" y="50%" dy=".32em" text-anchor="middle" class="text-body">
          KLE RLS BCA
        </text>
        {/* <text
          x="50%"
          y="50%"
          dy=".32em"
          dx="1.5555em"
          text-anchor="middle"
          class="text-body"
        >
          .
        </text> */}
      </svg>
    </div>
  );
};

export default Loader;
