import DynamicBackground from '../../components/DynamicBackground/DynamicBackground'
import './HomePage.css'

import maskOne from '../../assets/black-ink-blots (1).gif';
import maskTwo from '../../assets/black-ink-blots (2).gif';
import maskThree from '../../assets/black-ink-blots (3).gif';
import { useState, useEffect } from "react";
import {useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import PhotoGallery from '../../components/TimelineCarousel/PhotoGallery.jsx';
import BookSelector from "../../components/BookSelection/BookSelector.jsx";
import Hand from '../../components/Handy/Hand.jsx';
import { ArrowUpward, Translate } from '@mui/icons-material';
import ContentDisplay from "../../components/ContentDisplay/ContentDisplay.jsx";
import ScissorLift from '../../components/ExtensionJoint/ScissorLift.jsx';
import WeirdButton from "../../components/ContentDisplay/WeirdButton/WeirdButton.jsx";
import ContentDisplayNew from "../../components/ContentDisplay/ContentDisplayNew.jsx";

export default function HomePage() {
  const [scrollHomePageOffset, setScrollHomePageOffset] = useState(0);
  const [show, setShow] = useState(false);
  const [shown, setShown] = useState(false);
  const [retract, setRetract] = useState(true);
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
      else if (shown && scrollHomePageOffset<=800 && !retract) {
        setRetract(true);
      }
      else if (shown && scrollHomePageOffset<=800 || shown && scrollHomePageOffset===0){
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

        {/*dont mind me just planting this here*/}
        <WeirdButton />

      <DynamicBackground pageScroll={scrollHomePageOffset}/>
      <div className="hero-container">
        <div className="hero-content">
          <div className='extended-joint-container'>
            <ScissorLift toggled={scrollHomePageOffset > 800 ? 0 : 1}/>
          </div>
          <div className='extended-joint-container2'>
            <ScissorLift toggled={scrollHomePageOffset > 800 ? 0 : 1}/>
          </div>
          <svg className={`side-gear ${scrollHomePageOffset > 800 ? 'left-shift' : ''}`} id="side-gear" viewBox="0 0 100 100">
            <defs>
              <radialGradient id="goldGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#fffab7" />
                <stop offset="20%" stopColor="#cdb373" />
                <stop offset="30%" stopColor="#ad8d53" />
                <stop offset="50%" stopColor="#bc9859" />
                <stop offset="70%" stopColor="#795e2b" />
                <stop offset="80%" stopColor="#614818" />
                <stop offset="90%" stopColor="#876a35" />
                <stop offset="100%" stopColor="#736141" />
              </radialGradient>
            </defs>
            <path fill="url(#goldGradient)" d="M44,10 L56,10 L58,22 C61.3,22.6 64.3,23.8 67,25.4 L77,19 L85,27 L79,37 C80.6,39.7 81.8,42.7 82.4,46 L94,48 L94,56 L82,58 C81.4,61.3 80.2,64.3 78.6,67 L85,77 L77,85 L67,79 C64.3,80.6 61.3,81.8 58,82.4 L56,94 L44,94 L42,82 C38.7,81.4 35.7,80.2 33,78.6 L23,85 L15,77 L21,67 C19.4,64.3 18.2,61.3 17.6,58 L6,56 L6,44 L18,42 C18.6,38.7 19.8,35.7 21.4,33 L15,23 L23,15 L33,21 C35.7,19.4 38.7,18.2 42,17.6 L44,6 L44,10 Z M50,34 C41.2,34 34,41.2 34,50 C34,58.8 41.2,66 50,66 C58.8,66 66,58.8 66,50 C66,41.2 58.8,34 50,34 Z"></path>
          </svg>
          <svg className={`side-gear-isometric ${scrollHomePageOffset > 800 ? 'left-shift' : ''}`} id="side-gear" viewBox="0 0 100 100">
            <defs>
              <radialGradient id="goldGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#fffab7" />
                <stop offset="20%" stopColor="#cdb373" />
                <stop offset="30%" stopColor="#ad8d53" />
                <stop offset="50%" stopColor="#bc9859" />
                <stop offset="70%" stopColor="#795e2b" />
                <stop offset="80%" stopColor="#614818" />
                <stop offset="90%" stopColor="#876a35" />
                <stop offset="100%" stopColor="#736141" />
              </radialGradient>
            </defs>
            <path fill="url(#goldGradient)" d="M44,10 L56,10 L58,22 C61.3,22.6 64.3,23.8 67,25.4 L77,19 L85,27 L79,37 C80.6,39.7 81.8,42.7 82.4,46 L94,48 L94,56 L82,58 C81.4,61.3 80.2,64.3 78.6,67 L85,77 L77,85 L67,79 C64.3,80.6 61.3,81.8 58,82.4 L56,94 L44,94 L42,82 C38.7,81.4 35.7,80.2 33,78.6 L23,85 L15,77 L21,67 C19.4,64.3 18.2,61.3 17.6,58 L6,56 L6,44 L18,42 C18.6,38.7 19.8,35.7 21.4,33 L15,23 L23,15 L33,21 C35.7,19.4 38.7,18.2 42,17.6 L44,6 L44,10 Z M50,34 C41.2,34 34,41.2 34,50 C34,58.8 41.2,66 50,66 C58.8,66 66,58.8 66,50 C66,41.2 58.8,34 50,34 Z"></path>
          </svg>
          <div className='film-container' style={{transform: `perspective(0px) rotateZ(-1deg) rotateY(0.002deg) translateX(${scrollHomePageOffset > 800 ? '0': '200px'})`}}>
            <div className="screen">
              <div className="shine"></div>
              {/* <div className="gibberish" aria-hidden>
                <span> - --- ------ -- - -- - ---- - - ------ -- - - -- </span>
                <span> -- ------- --- - -- ----- - --- - - ------------ </span>
                <span> --- ------ -- --- ------- --------- -- - - ----- </span>
                <span> ---- ----- -- - --- ------ - --- ---- - -------- </span>
                <span> ----- ------- - - --- - ----- -- - --- - ----- - </span>
                <span> ------ -- - -- - ---- - - ---------- -- - - ---- </span>
              </div> */}
            </div>
            <div className='film'>
              <div className="effect">
                <div className="grain"></div>
              </div>
            </div>
            <div className="gearbox-container">
              <div className="gearbox">
                <div className="overlay"></div>
                <div className="gear one">
                  <div className="gear-inner">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                </div>
                <div className="gear two">
                  <div className="gear-inner">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                </div>
                <div className="gear three">
                  <div className="gear-inner">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                </div>
                <div className="gear four large">
                  <div className="gear-inner">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-header" style={{transform: `perspective(0px) rotateZ(-1deg) rotateY(0.002deg) translateX(${scrollHomePageOffset > 800 ? '0': '200px'})`}}>
            <div className="great-leader-image" style={{ transform: `translateY(${-scrollHomePageOffset}px)` }}/>
            <div className="header-title" style={{ transform: `translateY(${-scrollHomePageOffset}px) rotateZ(-1deg)` }}>
              Công Cuộc <span>Đổi Mới</span>
            </div>
            <div className={`film-strip ${scrollHomePageOffset > 500 ? 'scroll' : ''}`}></div>
          </div>
        </div>
      </div>
      <div id="hero" className={`hero-paragraph ${(scrollHomePageOffset > 800 && scrollHomePageOffset < 4000) ? '':'hidden'}`} >
            {/* <div className="stuck-grid">
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
            <div className={`history-timeline ${show ? 'show' : ''}`} >
              <div className="history-timeline-container">
                <PhotoGallery />
              </div>
            </div> */}
            <section className="info-line">
              <ul>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
                <li>
                  <div></div>
                </li>
              </ul>
            </section>
          </div>

      <div className={`historical-figure-block-outer ${(scrollHomePageOffset > 800 && scrollHomePageOffset < 4000) ? '' : 'hidden'}`} ></div>
      <div className={`historical-figure-block ${(scrollHomePageOffset > 800 && scrollHomePageOffset < 4000) ? '' : 'hidden'}`} >
        
        <span className='historical-texts1'
          style={{ transform: scrollHomePageOffset > 1400 ? `translateY(105%)` : `translateY(0)` }}>
          <div className="historical-figure1" style={{ maskImage: scrollHomePageOffset > 800
              ? `url('${maskOne}')` : `linear-gradient(to right, transparent, transparent)` }}>
          </div>
          <div className="info-card">
            <div class="corner up left"></div>
            <div class="corner up right"></div>
            <div class="corner bottom left"></div>
            <div class="corner bottom right"></div>
          </div>
          <span className="first-letter">1. Văn hóa – gốc của dân tộc</span><br />
          <span className="historical-details">
            Văn hóa là sức sống tinh thần, phản ánh trí tuệ và tâm hồn Việt Nam.<br />
            Khi đất nước được giải phóng, văn hóa nảy nở, trở thành nền tảng cho xã hội phát triển.<br />
          </span>
        </span>

        <span className='historical-texts2'
          style={{ transform: scrollHomePageOffset > 2600 ? `translateY(105%)` : `translateY(0)`, top: scrollHomePageOffset > 1600 ? `0` : `105%` }}>
          <div className="historical-figure2" style={{
            maskImage: scrollHomePageOffset > 1600
              ? `url('${maskTwo}')` : `linear-gradient(to right, transparent, transparent)` }}>
          </div>
          <div className="info-card">
            <div class="corner up left"></div>
            <div class="corner up right"></div>
            <div class="corner bottom left"></div>
            <div class="corner bottom right"></div>
          </div>
          <span className="first-letter">2. Văn hóa – sức mạnh đổi thay</span><br />
          <span className="historical-details">
            Văn hóa vừa là mục tiêu, vừa là động lực cách mạng.<br />
            Nó khơi dậy lòng yêu nước, nuôi dưỡng nhân cách và khát vọng vươn lên của con người.<br />
          </span>
        </span>
        <span className='historical-texts3'
          style={{ transform: scrollHomePageOffset > 4800 ? `translateY(105%)` : `translateY(0)`, top: scrollHomePageOffset > 2800 ? `-95%` : `10%` }}>
          <div className="historical-figure3" style={{
            maskImage: scrollHomePageOffset > 2800
              ? `url('${maskThree}')` : `linear-gradient(to right, transparent, transparent)`, transform: scrollHomePageOffset > 2300 ? "scale(0.8) translateY(0)" : "scale(0.8) translateY(800px)" }}>
          </div>
          <div className="info-card">
            <div class="corner up left"></div>
            <div class="corner up right"></div>
            <div class="corner bottom left"></div>
            <div class="corner bottom right"></div>
          </div>
          <span className="first-letter">3. Xây dựng văn hóa mới</span><br />
          <span className="historical-details">
            Nền văn hóa Việt phải vừa dân tộc, vừa hiện đại, nhân văn.<br />
            Hướng tới con người toàn diện – có đức, có tài, yêu nước và tự cường.<br /></span>
        </span>

      </div>

        <div className="give-me-some-space">
            <ContentDisplayNew/>
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
