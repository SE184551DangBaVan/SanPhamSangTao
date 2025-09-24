import "./Navbar.css";

import { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [selected, setSelected] = useState("f");
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
      if (scrollAtTop < 200 && selected!="f") {
        setSelected("f");
      }

      if (scrollAtTop > 450 && scrollAtTop < 780)
        setSelected("fo");
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
      />
      <label htmlFor="f">Trang chủ</label>

      
      <input
        type="radio"
        id="fo"
        name="a"
        checked={selected === "fo"}
        onChange={() => { handleSelect("fo"); handleScrollTo(600); }}
      />
      <label htmlFor="fo">Bối Cảnh Lịch Sử</label>

      <input
        type="radio"
        id="t"
        name="a"
        checked={selected === "t"}
        onChange={() => handleSelect("t")}
      />
      <label htmlFor="t">Hồ Chí Minh</label>

      <input
        type="radio"
        id="s"
        name="a"
        checked={selected === "s"}
        onChange={() => handleSelect("s")}
      />
      <label htmlFor="s">Tài Liệu</label>

      <input
        type="radio"
        id="fi"
        name="a"
        checked={selected === "fi"}
        onChange={() => handleSelect("fi")}
      />
      <label htmlFor="fi">Trò chơi</label>

      <div className="menu-border"></div>
    </div>
  );
}
