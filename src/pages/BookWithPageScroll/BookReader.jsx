import React, { useState, useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import "./BookReader.css";

import Image1 from '../../assets/HoChiMinhLockedIn.jpg'
import Image2 from '../../assets/ho-chi-minh-portrait-lance-bourne.jpg'
import { RecordVoiceOver, SearchOutlined } from "@mui/icons-material";
import Hand from '../../components/Handy/Hand';

export default function BookReader() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const { scrollY } = useScroll();
  
  const [isMagnifyOn, setIsMagnifyOn] = useState(false);
  const [isMagnifying, setIsMagnifying] = useState(false);
  const [magPos, setMagPos] = useState({ x: 0, y: 0 });
  const magnifyRef = useRef(null);
  
  const [isSpeechOn, setIsSpeechOn] = useState(false);
  
  const [handsOff, setHandsOff] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollOffset(latest);
  });

  //Book-Contents
  const paragraphs = [
    <p className="article-content"><span className="first-letter">L</span>orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>,
    <p className="article-content"><span className="first-letter">T</span>his book could turn its own pages when the reader scrolled.</p>,
    <p className="article-content"><span className="first-letter">I</span>nside, it contained countless stories and adventures.</p>,
    <p className="article-content"><span className="first-letter">T</span>he more the reader scrolled, the more secrets unfolded.</p>,
    <p className="article-content"><span className="first-letter">A</span>nd thus began the greatest story ever told...</p>
  ];
  //Book Images (If none needed leave a '')
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isMagnifying && magnifyRef.current) {
          setMagPos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", () => setIsMagnifying(false));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", () => setIsMagnifying(false));
    };
  }, [isMagnifying]);

  const handleMouseDown = () => {
    setIsMagnifying(true);
  };

  const SIZE = 200; // magnifier diameter
  const SCALE = 1.4; // zoom level

  return (
    <div className='book-reading-container' style={{ height: `${totalScrollNeeded + 1000}px`, scrollBehavior: 'smooth' }} onMouseLeave={() => setHandsOff(false)} onMouseEnter={() => setHandsOff(true)}>

      <div className="hand-canvas-book">
        <div className="tool-bar">
          <button className={`magnifying-glass-toggle ${isMagnifyOn ? 'active' : ''} tool-set`} onClick={() => setIsMagnifyOn(!isMagnifyOn)}>
            <SearchOutlined />
          </button>
          <button className={`speech-toggle ${isSpeechOn ? 'active' : ''} tool-set`} onClick={() => setIsSpeechOn(!isSpeechOn)}>
            <RecordVoiceOver />
          </button>
          {isMagnifyOn && <button id="magnify" onMouseDown={handleMouseDown}/>}
        </div>
        <Hand toggle={handsOff} />
      </div>

      {isMagnifyOn && <div
  className="magnifier-wrapper"
  style={{
    left: isMagnifying ? `${magPos.x - SIZE / 2 - 100}px` : "0px",
    top: isMagnifying ? `${magPos.y - SIZE / 2 - 100}px` : "30%",
  }}
  ref={magnifyRef}
>
  <div
    className="magnifying-glass"
    style={{
      width: `${SIZE}px`,
      height: `${SIZE}px`,
      transform: isMagnifying ? "scale(1)" : "scale(0.9)",
    }}
  >
    <div
      className="magnified-content"
      style={{
        transform: `scale(${SCALE}) ${
          isMagnifying
            ? `translate(${(-magPos.x + 900 / SCALE)}px, ${(-magPos.y + 600 / SCALE)}px)`
            : `translate(350px,30px)`
        }`,
      }}
    >
      <div className="book-clone">
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
                        <div className="page-images" style={{ backgroundImage: `url('${images[i]}')` }}></div>
                        {paragraphs[i]}
                      </article>
                    </span>
                    <span className="page-back"></span>
                  </span>
                );
              })}
            <span className="cover" style={{ backgroundColor: `rgb(105, 20, 20)` }}></span>
            <span className="cover back" style={{ backgroundColor: `rgb(105, 20, 20)` }}></span>
          </div>
        </div>
    </div>
  </div>
  <div className="magnify-handle" />
</div>}

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
                  <div className="page-images" style={{ backgroundImage: `url('${images[i]}')` }}></div>
                  {paragraphs[i]}
                </article>
              </span>
              <span className="page-back"></span>
            </span>
          );
        })}
        <span className="cover" style={{ backgroundColor: `rgb(105, 20, 20)` }}></span>
        <span className="cover back" style={{ backgroundColor: `rgb(105, 20, 20)` }}></span>
      </div>
    </div>
  );
}