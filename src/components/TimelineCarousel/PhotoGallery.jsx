import './PhotoGallery.css'

import { useState, useEffect } from "react";

export default function PhotGallery() {
  const [languageAlternateCount, setLanguageAlternateCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLanguageAlternateCount((prev) => (prev >= 5 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    {languageAlternateCount==0 &&<div class="hero-content-backdrop">
        <h1 id="logo">Công Nghệ với Xã Hội</h1>
    </div>}
    {languageAlternateCount==1 && <div class="hero-content-backdrop">
        <h1 id="logo">テクノロジーと社会</h1>
    </div>}
    {languageAlternateCount==2 && <div class="hero-content-backdrop">
        <h1 id="logo">科技与社会</h1>
    </div>}
    {languageAlternateCount==3 && <div class="hero-content-backdrop">
        <h1 id="logo">Технологии обществом</h1>
    </div>}
    {languageAlternateCount==4 && <div class="hero-content-backdrop">
        <h1 id="logo">Technology with Society</h1>
    </div>}
    {languageAlternateCount==5 && <div class="hero-content-backdrop">
        <h1 id="logo">Technologie Gesellschaft</h1>
    </div>}
    </>
  )
}