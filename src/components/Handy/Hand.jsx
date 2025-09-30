import React, { useState, useEffect } from "react";
import "./Hand.css";

export default function Hand({ toggle }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [grab, setGrab] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".book-selection-block");
    if (!container) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      setPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseDown = () => setGrab(true);
    const handleMouseUp = () => setGrab(false);

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseup", handleMouseUp);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mousedown", handleMouseDown);
      container.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  if (!toggle) return null; // hidden on toggle, got it?

  return (
    <div
      className={`hand-container ${grab ? "grab" : ""}`}
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-340%, -330%) rotateZ(-50deg)",
      }}
    >
      <div className="hand">
        <div className="finger"></div>
        <div className="finger"></div>
        <div className="finger"></div>
        <div className="finger"></div>
        <div className="thumb"></div>
      </div>
      <div className="hand-top"></div>
    </div>
  );
}