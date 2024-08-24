import React, { useEffect } from "react";
import gsap from "gsap";

const MagButton = ({ bg, h, w, p, txt }) => {
  useEffect(() => {
    const magneto = document.querySelector(".magneto");
    const magnetoText = document.querySelector(".magneto .text");
    const dbgr = document.querySelector("#debugger");

    const activateMagneto = (event) => {
      let boundBox = magneto.getBoundingClientRect();
      const magnetoStrength = 40;
      const magnetoTextStrength = 80;
      const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
      const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

      dbgr.innerHTML =
        "cursorX :" +
        event.clientX +
        "<br> boxLeft :" +
        Math.ceil(boundBox.left) +
        "<br> cursorInsideButton :" +
        Math.ceil(event.clientX - boundBox.left) +
        "<br> relativeToTotalWidth :" +
        ((event.clientX - boundBox.left) / magneto.offsetWidth).toFixed(2) +
        "<br> shifted :" +
        ((event.clientX - boundBox.left) / magneto.offsetWidth - 0.5).toFixed(
          2
        );

      gsap.to(magneto, {
        duration: 1,
        x: newX * magnetoStrength,
        y: newY * magnetoStrength,
        ease: "Power4.easeOut",
      });

      gsap.to(magnetoText, {
        duration: 1,
        x: newX * magnetoTextStrength,
        y: newY * magnetoTextStrength,
        ease: "Power4.easeOut",
      });
    };

    const resetMagneto = () => {
      gsap.to(magneto, {
        duration: 1,
        x: 0,
        y: 0,
        ease: "Power4.easeOut",
      });

      gsap.to(magnetoText, {
        duration: 1,
        x: 0,
        y: 0,
        ease: "Power4.easeOut",
      });
    };

    magneto.addEventListener("mousemove", activateMagneto);
    magneto.addEventListener("mouseleave", resetMagneto);

    return () => {
      magneto.removeEventListener("mousemove", activateMagneto);
      magneto.removeEventListener("mouseleave", resetMagneto);
    };
  }, []);

  return (
    <div className="">
      <button className="magneto">
        <span className="text">{txt}</span>
      </button>
      <div id="debugger"></div>

      <style jsx>{`
        #debugger {
          display: none;
          position: absolute;
          left: 0;
          bottom: 0;
          background-color: var(--gray-100);
          color: white;
          padding: 2rem;
          width: 20rem;
        }
        .magneto {
          min-height: ${h}rem;
          min-width: ${w}rem;
          border-radius: ${p}px;
          border: none;
          background-color: ${bg};
          cursor: pointer;
          color: black;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default MagButton;
