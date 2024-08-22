import React from "react";
import "./facultyCard.css";

const FacultyCard = ({ e }) => {
  return (
    <li>
      <figure className="rounded-xl shadow-xl">
        <img src={e.img} alt="image not found" className="rounded-xl " />
        <figcaption>
          <main>
            <h3 className="text-xl font-bold">{e.name}</h3>
          </main>

          <footer>
            <div>
              <p className="font-semibold">{e.profession}</p>
            </div>

            {/* <img src="icons/icon-arrow-right-color.svg" alt="Icon" /> */}
          </footer>
        </figcaption>
      </figure>
    </li>
  );
};

export default FacultyCard;
