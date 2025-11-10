import "./Navbar.css";

import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import {useNavigate} from "react-router-dom";
import { HomeRounded, InfoOutlineRounded, SportsEsportsRounded, TimelineRounded, TvRounded, YouTube } from "@mui/icons-material";

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
      if (scrollAtTop > 0 && scrollAtTop < 4600 && selected!="f") {
        setSelected("f");
      }

      if (scrollAtTop > 5000 && selected!="s")
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
      <label htmlFor="fo">Bối Cảnh Đổi Mới</label>

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
      <label htmlFor="t">Kinh tế Việt Nam</label>

      <input
        className={`${selected === "fi" && 'disabled'}`}
        type="radio"
        id="s"
        name="a"
        checked={selected === "s"}
        onChange={() => {handleSelect("s"); handleScrollTo(3900); }}
      />
      <label htmlFor="s">Phim Tài Liệu</label>

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
        <button className={`nav-button ${selected === "f" ? 'selected' : ''}`} onClick={() => {handleSelect("f"); navigate("/"); window.scrollTo({ top: 0, left: 0, behavior: "smooth" });}}> <HomeRounded /> </button>
        <button className={`nav-button ${selected === "fo" ? 'selected' : ''}`} onClick={() => {handleSelect("fo"); navigate("/gallery"); /*handleScrollTo(1200);*/}}><TimelineRounded /></button>
        <button className={`nav-button ${selected === "t" ? 'selected' : ''}`} onClick={() => {handleSelect("t"); window.open("https://vi.wikipedia.org/wiki/Kinh_t%E1%BA%BF_Vi%E1%BB%87t_Nam,_1976%E2%80%931986", '_blank', 'noopener,noreferrer')} }><InfoOutlineRounded /></button>
        <button className={`nav-button ${selected === "s" ? 'selected' : ''}`} onClick={() => {handleSelect("s"); handleScrollTo(5500);}}><TvRounded /></button>
        <button className={`nav-button ${selected === "fi" ? 'selected' : ''}`} onClick={() => {handleSelect("fi"); navigate("/game-selection");}} ><SportsEsportsRounded/></button>
      </div>
      <div className="top" />
      <div className="front" />
      <div className="shadow" />
    </div>
  );
}
