import React, { useState, useEffect, useRef } from "react";
import "./ScissorLift.css";

/**
 * ScissorLift props:
 *  - links (number) : how many X-pairs (stacked). Default 6.
 *  - speed (number) : transition duration seconds. Default 0.5
 */
export default function ScissorLift({ links = 6, speed = 0.3, toggled }) {
  const [t, setT] = useState(toggled); // 0 retracted -> 1 extended
  
  useEffect(() => {
    setT(toggled);
  }, [toggled]);

  // test manual activation
  //const extend = () => setT(1);
  //const retract = () => setT(0);

  // Render 'links' elements
  const items = Array.from({ length: links }).map((_, idx) => {
    // stagger each row visually (optional)
    return (
      <div key={idx} className="scissor-row" style={{ ["--i"]: idx }}>
        <div className="bar left" />
        <div className="bar right" />
        <div className="pivot" />
      </div>
    );
  });

  return (
    <div
      className="scissor-wrap"
      aria-hidden="false"
      style={{
        // expose t and speed to CSS
        ["--t"]: t,
        ["--speed"]: `${speed}s`,
      }}
    >

      <div className="scissor-stage" role="img" aria-label="Scissor lift">
        <div className="scissor" style={{ ["--links"]: links }}>
          {items}
        </div>
        <div className="platform top"></div>
        <div className="platform bottom"></div>
      </div>
    </div>
  );
}
