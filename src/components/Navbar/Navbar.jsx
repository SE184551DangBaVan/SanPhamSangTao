import "./Navbar.css";

import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export default function Navbar({selectVal}) {
  const [selected, setSelected] = useState(selectVal);
  const { scrollY } = useScroll();
  const [scrollAtTop, setScrollAtTop] = useState(0);

  const navigate = useNavigate();

  const handleSelect = (value) => {
    setSelected(value);
  };
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollAtTop(latest);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (scrollAtTop < 200 && selected!="f" && selected!="s") {
        setSelected("f");
      }

      if (scrollAtTop > 450 && scrollAtTop < 3500)
        setSelected("fo");

      if (scrollAtTop > 3500 && scrollAtTop < 4500)
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
    <div className="menu-container">
      <input
        type="radio"
        id="f"
        name="a"
        checked={selected === "f"}
        onChange={() => {handleSelect("f"); handleScrollTo(0);}}
        onClick={() => { if(selected != "f") navigate("/"); else {console.log("Stop it.")}}}
      />
      <label htmlFor="f">Trang chủ</label>

      
      <input
        type="radio"
        id="fo"
        name="a"
        checked={selected === "fo"}
        onChange={() => { handleSelect("fo"); handleScrollTo(800); }}
      />
      <label htmlFor="fo">Bối Cảnh</label>

      <input
        type="radio"
        id="t"
        name="a"
        checked={selected === "t"}
        onChange={() => handleSelect("t")}
      />
      <label htmlFor="t"><span className='nav-logo'><h1>4</h1> <span>Nhóm</span> </span></label>

      <input
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
        onClick={() => {window.location.href = 'https://nhatdang1102.github.io/MLN131_Game/';}}
      />
      <label htmlFor="fi">Trò chơi</label>

      <div className="menu-border"></div>
    </div>
  );
}
