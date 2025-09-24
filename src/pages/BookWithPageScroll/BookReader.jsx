import React, { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import "./BookReader.css";

export default function BookReader() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollOffset(latest);
  });

  const paragraphs = [
    "Once upon a time, in a faraway land, there was a magical book.",
    "This book could turn its own pages when the reader scrolled.",
    "Inside, it contained countless stories and adventures.",
    "The more the reader scrolled, the more secrets unfolded.",
    "And thus began the greatest story ever told..."
  ];

  // Split scroll progress into chunks (one per page)
  const totalPages = paragraphs.length;
  const pageHeight = 600; // adjust to control how much scroll is needed per page
  const totalScrollNeeded = pageHeight * totalPages;

  // Normalize scroll into 0 → 1
  const progress = Math.min(scrollOffset / totalScrollNeeded, 1);

  return (
    <div style={{ height: `${totalScrollNeeded + 1000}px` }}>
      <div className="book">
        {paragraphs.map((_, i) => {
          // Each page gets a slice of the scroll
          const start = ((i + 1) / totalPages);
          const end = (i / totalPages);
          let localProgress = (progress - start) / (end - start);

          // Clamp between 0 and 1
          localProgress = Math.max(0, Math.min(localProgress, 1));

          // Rotate from 0deg → 180deg
          const rotation = localProgress * 180;

          return (
            <span
              key={i}
              className="page"
              style={{ transform: `rotateY(${rotation}deg)` }}
            ></span>
          );
        })}

        <span className="cover"></span>
        <span className="cover back"></span>
      </div>
    </div>
  );
}