import React, { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import "./BookReader.css";

import Image1 from '../../assets/HoChiMinhLockedIn.jpg'
import Image2 from '../../assets/ho-chi-minh-portrait-lance-bourne.jpg'
import { SearchOutlined } from "@mui/icons-material";
import Hand from '../../components/Handy/Hand';

export default function BookReader() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const { scrollY } = useScroll();
  
  const [handsOff, setHandsOff] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollOffset(latest);
  });

  const paragraphs = [
    <p className="article-content"><span className="first-letter">L</span>orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>,
    <p className="article-content"><span className="first-letter">T</span>his book could turn its own pages when the reader scrolled.</p>,
    <p className="article-content"><span className="first-letter">I</span>nside, it contained countless stories and adventures.</p>,
    <p className="article-content"><span className="first-letter">T</span>he more the reader scrolled, the more secrets unfolded.</p>,
    <p className="article-content"><span className="first-letter">A</span>nd thus began the greatest story ever told...</p>
  ];
  const images = [
    Image1,
    Image1,
    Image2,
    Image1,
    Image1,
  ];

  // Split scroll progress into chunks (one per page)
  const totalPages = paragraphs.length;
  const pageHeight = 600; // adjust to control how much scroll is needed per page
  const totalScrollNeeded = pageHeight * totalPages;

  // Normalize scroll into 0 → 1
  const progress = Math.min(scrollOffset / totalScrollNeeded, 1);

  return (
    <div className='book-reading-container' style={{ height: `${totalScrollNeeded + 1000}px`, scrollBehavior: 'smooth' }} onMouseLeave={() => setHandsOff(false)} onMouseEnter={() => setHandsOff(true)}>
      
      <div className="hand-canvas-book">
        <div className="tool-bar">
          <button id="magnify"><SearchOutlined /> </button>
        </div>
        <Hand toggle={handsOff} />
      </div>
      <div className="book">
        {paragraphs.map((_, i) => {
          const start = ((i + 1) / totalPages);
          const end = (i / totalPages);
          let localProgress = (progress - start) / (end - start);
          localProgress = Math.max(0, Math.min(localProgress, 1));

          const rotation = localProgress * 180;

          return (
            <span
              key={i}
              className="page"
              style={{ transform: `rotateY(${rotation}deg)`, zIndex: `calc(99 + ${i})` }}
            >
              <span className="page-front">
                <article className="content">
                  <div className="page-images" style={{backgroundImage: `url('${images[i]}')`}}></div>
                  {paragraphs[i]}
                </article>
              </span>
              <span className="page-back"></span>
            </span>
          );
        })}
        <span className="cover" style={{backgroundColor: `rgb(105, 20, 20)`}}></span>
        <span className="cover back" style={{backgroundColor: `rgb(105, 20, 20)`}}></span>
      </div>
    </div>
  );
}