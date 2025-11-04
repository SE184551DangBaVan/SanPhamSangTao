import "./Navbar.css";

import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import {useNavigate} from "react-router-dom";
import { HomeRounded, SportsEsportsRounded, TimelineRounded, TvRounded, YouTube } from "@mui/icons-material";

export default function Navbar({selectVal}) {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(selectVal);
  const { scrollY } = useScroll();
  const [scrollAtTop, setScrollAtTop] = useState(0);

  const handleSelect = (value) => {
    setSelected(value);
  };
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollAtTop(latest);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (scrollAtTop < 200 && selected!="f" && selected!="fi" && selected!="s") {
        setSelected("f");
      }

      if (scrollAtTop > 3900 && selected!="s")
        setSelected("s");
    };
      
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollAtTop]);

  const handleScrollTo = (scrollToY) => {
    window.scrollTo({
      top: scrollToY,
      behavior: "smooth"
    });
  };

  return (
    <div className="menu-container" id="shelf" style={{bottom: `${scrollAtTop > 750 ? '10px' : '20px' }`}}>
      <input
        type="radio"
        id="f"
        name="a"
        checked={selected === "f"}
        onChange={() => {handleSelect("f"); handleScrollTo(0);}}
        onClick={() => navigate("/")}
      />
      <label htmlFor="f">Trang chủ</label>
      
      <input
        className={`${selected === "fi" && 'disabled'}`}
        type="radio"
        id="fo"
        name="a"
        checked={selected === "fo"}
        onChange={() => { handleSelect("fo"); }}
      />
      <label htmlFor="fo">Tư tưởng Về VH</label>

      <input
        type="radio"
        id="t"
        name="a"
        checked={selected === "t"}
        onChange={() => handleSelect("t") }
        onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://www.youtube.com/watch?v=8E940gAAxpo";
                }}
      />
      <label htmlFor="t">Hồ Chí Minh</label>

      <input
        className={`${selected === "fi" && 'disabled'}`}
        type="radio"
        id="s"
        name="a"
        checked={selected === "s"}
        onChange={() => {handleSelect("s"); handleScrollTo(3900); }}
      />
      <label htmlFor="s">Sách</label>

      <input
        type="radio"
        id="fi"
        name="a"
        checked={selected === "fi"}
        onChange={() => handleSelect("fi")}
        onClick={() => navigate("/game-selection")}
      />
      <label htmlFor="fi">Trò chơi</label>
      
      <div className="menu-border"></div>
      <div className="nav-button-container">
        <button class={`nav-button ${selected === "f" ? 'selected' : ''}`} onClick={() => {handleSelect("f"); navigate("/"); window.scrollTo({ top: 0, left: 0, behavior: "smooth" });}}> <HomeRounded /> </button>
        <button class={`nav-button ${selected === "fo" ? 'selected' : ''}`} onClick={() => {handleSelect("fo"); navigate("/"); /*handleScrollTo(1200);*/}}><TimelineRounded /></button>
        <button class={`nav-button`}><YouTube /></button>
        <button class={`nav-button ${selected === "s" ? 'selected' : ''}`} onClick={() => {handleSelect("s"); handleScrollTo(3900);}}><TvRounded /></button>
        <button class={`nav-button ${selected === "fi" ? 'selected' : ''}`} onClick={() => {handleSelect("fi"); navigate("/game-selection");}}><SportsEsportsRounded/></button>
      </div>
      <div class="top" />
      <div class="front" />
      <div class="shadow" />
    </div>
  );
}
