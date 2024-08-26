import React from "react";

const ChairmanDesk = () => {
  return (
    <div className=" w-1/5 text-center bg-[#ffffff9d] mx-16 rounded absolute left-10 top-52">
      <span className="text-2xl font-bold">Chairman Desk </span>{" "}
      <div className="w-full flex items-center justify-center ">
        <img
          src="src\assets\homepageimgs\Mrkore1.jpg "
          alt=""
          className="h-full bg-origin-content w-44 rounded shadow-lg"
        />
      </div>
      <div className="w-full m-0 text-lg font-medium">Dr. Prabhakar Kore, </div>
      <div className="w-full text-lg font-medium">Chairman, K.L.E. Society</div>
      <span className="text-start text-md font-normal px-4 py-2">
        A little over nine decades, the region of Karnataka, witnessed the rise
        of a new phenomenon, the K.L.E. Society, Belgaum.
        <a
          className="text-blue-500"
          href="https://en.wikipedia.org/wiki/Prabhakar_Kore"
        >
          more...
        </a>
      </span>
    </div>
  );
};

export default ChairmanDesk;
