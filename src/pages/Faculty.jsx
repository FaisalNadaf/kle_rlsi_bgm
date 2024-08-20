import React from "react";
import FacultyCard from "../components/facultyCard/facultyCard";
import { Colors, faculty } from "../../constant";
import "../components/facultyCard/facultyCard.css";

const Faculty = () => {
  return (
    <div className="bg-[#D3D9D4] pt-48">
      <div className="text-4xl font-medium px-20">Faculty Members</div>
      <ul className="gallery px-20 py-10">
        {faculty.map((e) => {
          return <FacultyCard e={e} />;
        })}{" "}
      </ul>
    </div>
  );
};

export default Faculty;
