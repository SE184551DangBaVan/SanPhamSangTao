import DynamicBackground from '../../components/DynamicBackground/DynamicBackground'
import './HomePage.css'

import maskOne from '../../assets/black-ink-blots (1).gif';
import maskTwo from '../../assets/black-ink-blots (2).gif';
import maskThree from '../../assets/black-ink-blots (3).gif';
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import PhotoGallery from '../../components/TimelineCarousel/PhotoGallery.jsx';
import BookSelector from "../../components/BookSelection/BookSelector.jsx";
import Hand from '../../components/Handy/Hand.jsx';
import { ArrowUpward, Translate } from '@mui/icons-material';

export default function HomePage() {
  const [scrollHomePageOffset, setScrollHomePageOffset] = useState(0);
  const [show, setShow] = useState(false);
  const [shown, setShown] = useState(false);
  const [retract, setRetract] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  
  const [handsOff, setHandsOff] = useState(false);

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
                          style={{position: `fixed`, transform:  `translateY(${show ? '0' : '100vh'})`}}>
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
        <div className="historical-figure1" style={{maskImage: scrollHomePageOffset > 1100
                                                    ? `url('${maskOne}')`
                                                    : `linear-gradient(to right, transparent, transparent)`, transform: scrollHomePageOffset > 1100 ? "scale(0.5) translateY(0)" : "scale(0.5) translateY(800px)"}}></div>
                                                    <span className='historical-texts1' 
                                                    style={{transform: scrollHomePageOffset > 1100 ? "translateY(0)" : "translateY(400px)"}}><span className="first-letter">1. Văn hóa – gốc của dân tộc</span><br/>
Văn hóa là sức sống tinh thần, phản ánh trí tuệ và tâm hồn Việt Nam.<br/>
Khi đất nước được giải phóng, văn hóa nảy nở, trở thành nền tảng cho xã hội phát triển.<br/></span>
<div className='historical-texts1-upperlayer' style={{maskImage: scrollHomePageOffset > 1100
                                                    ? `url('${maskOne}')`
                                                    : `linear-gradient(to right, transparent, transparent)`}}><span className="first-letter">1. Văn hóa – gốc của dân tộc</span><br/>
Văn hóa là sức sống tinh thần, phản ánh trí tuệ và tâm hồn Việt Nam.<br/>
Khi đất nước được giải phóng, văn hóa nảy nở, trở thành nền tảng cho xã hội phát triển.<br/></div>
        <div className="historical-figure2" style={{maskImage: scrollHomePageOffset > 1800
                                                    ? `url('${maskTwo}')`
                                                    : `linear-gradient(to right, transparent, transparent)`, transform: scrollHomePageOffset >  1800 ? "scale(0.8) translateY(0)" : "scale(0.8) translateY(800px)"}}></div>
                                                    <span className='historical-texts2'
                                                    style={{transform: scrollHomePageOffset >  1800 ? "translateY(0)" : "translateY(400px)"}}><span className="first-letter">2. Văn hóa – sức mạnh đổi thay</span><br/>
Văn hóa vừa là mục tiêu, vừa là động lực cách mạng.<br/>
Nó khơi dậy lòng yêu nước, nuôi dưỡng nhân cách và khát vọng vươn lên của con người.<br/></span>
<div className='historical-texts2-upperlayer' style={{maskImage: scrollHomePageOffset > 1800
                                                    ? `url('${maskTwo}')`
                                                    : `linear-gradient(to right, transparent, transparent)`}}><span className="first-letter">2. Văn hóa – sức mạnh đổi thay</span><br/>
Văn hóa vừa là mục tiêu, vừa là động lực cách mạng.<br/>
Nó khơi dậy lòng yêu nước, nuôi dưỡng nhân cách và khát vọng vươn lên của con người.<br/></div>
        <div className="historical-figure3" style={{maskImage: scrollHomePageOffset > 2300
                                                    ? `url('${maskThree}')`
                                                    : `linear-gradient(to right, transparent, transparent)`, transform: scrollHomePageOffset > 2300 ?  "scale(0.8) translateY(0)" : "scale(0.8) translateY(800px)"}}></div>
                                                    <span className='historical-texts3'
                                                    style={{transform: scrollHomePageOffset > 2300 ?  "translateY(0)" : "translateY(400px)"}}><span className="first-letter">3. Xây dựng văn hóa mới</span><br/>
Nền văn hóa Việt phải vừa dân tộc, vừa hiện đại, nhân văn.<br/>
Hướng tới con người toàn diện – có đức, có tài, yêu nước và tự cường.<br/></span>
<div className='historical-texts3-upperlayer' style={{maskImage: scrollHomePageOffset > 2300
                                                    ? `url('${maskThree}')`
                                                    : `linear-gradient(to right, transparent, transparent)`}}
                                                    ><span className="first-letter">3. Xây dựng văn hóa mới</span><br/>
Nền văn hóa Việt phải vừa dân tộc, vừa hiện đại, nhân văn.<br/>
Hướng tới con người toàn diện – có đức, có tài, yêu nước và tự cường.<br/></div>
      </div>
      <div className="book-selection-block" onMouseEnter={() => setHandsOff(true)} onMouseLeave={() => setHandsOff(false)}>
        <BookSelector/>
        <Hand toggle={handsOff} />
      </div>

      <div className="home-page-progress-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`mouse ${scrollHomePageOffset != 0 && scrollHomePageOffset + 800 >= document.documentElement.scrollHeight && 'end'}`}>
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 3m0 4a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-4a4 4 0 0 1 -4 -4z" />
          <path d="M12 7l0 4" />

          <path d="M8 26l4 4l4 -4">
            <animateTransform attributeType="XML" attributeName="transform" type="translate" values="0 -10; 0 15; 0 -10" dur="1s" repeatCount="indefinite" />
          </path>
        </svg>
        <div className='back-to-top-button' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ArrowUpward/>
          <span>Nhảy Đến Đầu Trang</span>
        </div>
      </div>
    </div>
  )
}
