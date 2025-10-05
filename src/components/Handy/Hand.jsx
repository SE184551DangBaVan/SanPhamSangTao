import React, { useState, useEffect } from "react";
import "./Hand.css";

export default function Hand({ toggle }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [grab, setGrab] = useState(false);
  const [ponder, setPonder] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".book-selection-block");
    const readerblock = document.querySelector(".hand-canvas-book");
    if (!container && !readerblock ) return;
    
    const handleMouseDown = () => setGrab(true);
    const handleMouseUp = () => setGrab(false);
    
    if(container) {
      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect();
          setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
      };

      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mousedown", handleMouseDown);
      container.addEventListener("mouseup", handleMouseUp);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mousedown", handleMouseDown);
        container.removeEventListener("mouseup", handleMouseUp);
        
      };
    }

    else if (readerblock) {
      const handleBookMouseMove = (e) => {
        const bookRect = readerblock.getBoundingClientRect();
        setPos({
          x: e.clientX - bookRect.left,
          y: e.clientY - bookRect.top,
        });
      };

      readerblock.addEventListener("mousemove", handleBookMouseMove);
      readerblock.addEventListener("mousedown", handleMouseDown);
      readerblock.addEventListener("mouseup", handleMouseUp);

      return () => {
        readerblock.removeEventListener("mousemove", handleBookMouseMove);
        readerblock.removeEventListener("mousedown", handleMouseDown);
        readerblock.removeEventListener("mouseup", handleMouseUp);
      };
    }
    
  }, []);

  useEffect(() => {
    const ponderingBlocks = document.querySelectorAll(".book, .tool-set");
    if (!ponderingBlocks.length) return;

    const handleMousePonder = () => setPonder(true);
    const handleMouseNormal = () => setPonder(false);

    ponderingBlocks.forEach(block => {
      block.addEventListener("mouseenter", handleMousePonder);
      block.addEventListener("mouseleave", handleMouseNormal);
      block.addEventListener("mousedown", handleMouseNormal);
    });

    return () => {
      ponderingBlocks.forEach(block => {
        block.removeEventListener("mouseenter", handleMousePonder);
        block.removeEventListener("mouseleave", handleMouseNormal);
        block.removeEventListener("mousedown", handleMouseNormal);
      });
      
    }
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
        <div className={`finger ${(ponder && !grab) ? "pondering" : ""}`}></div>
        <div className={`finger ${(ponder && !grab) ? "pondering" : ""}`}></div>
        <div className={`finger ${(ponder && !grab) ? "pondering" : ""}`}></div>
        <div className={`finger ${(ponder && !grab) ? "pondering" : ""}`}></div>
        <div className={`thumb ${(ponder && !grab) ? "pondering" : ""}`}></div>
      </div>
      <div className="hand-top"></div>
    </div>
  );
}