import DynamicBackground from '../../components/DynamicBackground/DynamicBackground'
import './HomePage.css'

import maskOne from '../../assets/black-ink-blots (1).gif';
import maskTwo from '../../assets/black-ink-blots (2).gif';
import maskThree from '../../assets/black-ink-blots (3).gif';
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import PhotoGallery from '../../components/TimelineCarousel/PhotoGallery.jsx';

export default function HomePage() {
  const [scrollHomePageOffset, setScrollHomePageOffset] = useState(0);
  const [show, setShow] = useState(false);
  const [shown, setShown] = useState(false);
  const [retract, setRetract] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change");
  const shift = useTransform(scrollYProgress, [0.8, 1], ["0", "-20px"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollHomePageOffset(latest);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!shown && scrollHomePageOffset>100 && scrollHomePageOffset<1600) {
        setShow(true);
        setShown(true);
      }
      else if (shown && scrollHomePageOffset<=650 && !retract) {
        setRetract(true);
      }
      else if (shown && scrollHomePageOffset<=600 || shown && scrollHomePageOffset===0){
        setShow(false);
      }
      else if (!show && retract && shown) {
        setShow(true);
        setShown(false);
        setRetract(false);
      }
    };
      
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollHomePageOffset]);

  return (
    <div className='homePage-container'>
      <DynamicBackground pageScroll={scrollHomePageOffset}/>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-header">
            <div className="great-leader-image"/>
            <div className="header-title">
              Tư Tưởng <span>Hồ Chí Minh</span>
            </div>
          </div>

          <div id="hero" className={`hero-paragraph ${retract && !show ? 'hidden':''}`} 
                          style={{position: `fixed`, transform:  `translateY(${show ? '0' : '200px'})`}}>
            <div className="stuck-grid">
              <div className="grid-item">Tư Tưởng</div>
              <div className="grid-item"></div>
              <div className="grid-item">Xã Hội</div>
              <div className="grid-item"></div>
              <div className="grid-item">Trí Thức</div>
              <div className="grid-item"></div>
              <div className="grid-item">Văn Hóa</div>
              <div className="grid-item"></div>
              <div className="grid-item">Văn Hóa</div>
              <div className="grid-item"></div>
              <div className="grid-item special">Nền Văn Minh</div>
              <div className="grid-item">Xã Hội</div>
              <div className="grid-item">Trí Thức</div>
              <div className="grid-item">Văn Hóa</div>
              <div className="grid-item">Kinh Tế</div>
              <div className="grid-item">Đoàn Kết</div>
              <div className="grid-item">Tư Tưởng</div>
              <div className="grid-item">Yêu Nước</div>
              <div className="grid-item"></div>
              <div className="grid-item">Đoàn Kết</div>
              <div className="grid-item">Khát Vọng</div>
              <div className="grid-item">Cường Quốc</div>
              <div className="grid-item">Văn Hóa</div>
              <div className="grid-item">Nhân Dân</div>
              <div className="grid-item">Tư Tưởng</div>
              <div className="grid-item">Kinh Tế</div>
              <div className="grid-item">Tư Tưởng</div>
              <div className="grid-item">Tư Tưởng</div>
              <div className="grid-item">Văn Hóa</div>
              <div className="grid-item">Khát Vọng</div>
              <div className="grid-item">Tư Tưởng</div>
              <div className="grid-item">Nhân Dân</div>
              <div className="grid-item">Cường Quốc</div>
              <div className="grid-item">Tư Tưởng</div>
              <div className="grid-item">Tư Tưởng</div>
              <div className="grid-item">Tư Tưởng</div>
              <div className="grid-item">Tư Tưởng</div>
              <div className="grid-item">Cường Quốc</div>
              <div className="grid-item">Tư Tưởng</div>
              <div className="grid-item">Đoàn Kết</div>
              <div className="grid-item">Tư Tưởng</div>
              <div className="grid-item">Cường Quốc</div>
              <div className="grid-item">Cường Quốc</div>
              <div className="grid-item">Cường Quốc</div>
              <div className="grid-item">Cường Quốc</div>
              <div className="grid-item"></div>
              <div className="grid-item">Xã Hội</div>
              <div className="grid-item">Tư Tưởng</div>
              <div className="grid-item">Đoàn Kết</div>
              <div className="grid-item">Ý Chí</div>
            </div>
            <div className={`history-timeline ${show ? 'show' : ''}`} style={{}}>
              <div className="history-timeline-container">
                <PhotoGallery />
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="historical-figure-block" style={{ opacity: `${show ? '1' : '0'}`}}>
        <div className="historical-figure1" style={{maskImage: scrollHomePageOffset > 1000
                                                    ? `url('${maskOne}')`
                                                    : `linear-gradient(to right, transparent, transparent)`}}></div>
        <div className="historical-figure2" style={{maskImage: scrollHomePageOffset > 1500
                                                    ? `url('${maskTwo}')`
                                                    : `linear-gradient(to right, transparent, transparent)`}}></div>
        <div className="historical-figure3" style={{maskImage: scrollHomePageOffset > 2000
                                                    ? `url('${maskThree}')`
                                                    : `linear-gradient(to right, transparent, transparent)`}}></div>
      </div>
      <div className="book-selection-block">

      </div>
    </div>
  )
}
