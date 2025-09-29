import DynamicBackground from '../../components/DynamicBackground/DynamicBackground'
import './HomePage.css'

import maskOne from '../../assets/black-ink-blots (1).gif';
import maskTwo from '../../assets/black-ink-blots (2).gif';
import maskThree from '../../assets/black-ink-blots (3).gif';
import coverOne from '../../assets/cong-nhan-khu-cong-nghiep-420221204194047.jpg';
import coverTwo from '../../assets/double-exposure-portrait-oil-refinery-worker-with-hardhat_66608507.jpg';
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import PhotoGallery from '../../components/TimelineCarousel/PhotoGallery.jsx';

export default function HomePage() {
  const [scrollHomePageOffset, setScrollHomePageOffset] = useState(0);
  const [show, setShow] = useState(false);
  const [shown, setShown] = useState(false);
  const [retract, setRetract] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  const navigate = useNavigate();

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
      
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-header">
            
            <div className="header-title">
              <DynamicBackground pageScroll={scrollHomePageOffset}/>
              <div className="great-leader-image"/>
              <div className="great-leader-image after" style={{transform: `translate(350px, ${10 + scrollHomePageOffset*0.4}px)`}}/>
              <span className='primary-title'>AI</span>
            </div>
          </div>

          <div id="hero" className={`hero-paragraph ${retract && !show ? 'hidden':''}`} 
                          style={{position: `fixed`, transform:  `translateY(${show ? '0' : '120vh'})`}}>
            <div className="stuck-grid">
              <div className="grid-item">Toàn cầu hóa</div>
              <div className="grid-item"></div>
              <div className="grid-item">AI</div>
              <div className="grid-item"></div>
              <div className="grid-item">Kinh tế số</div>
              <div className="grid-item"></div>
              <div className="grid-item">Doanh nhân</div>
              <div className="grid-item"></div>
              <div className="grid-item">Lao động số</div>
              <div className="grid-item"></div>
              <div className="grid-item special">Trí thức trẻ</div>
              <div className="grid-item">Bất bình đẳng</div>
              <div className="grid-item">Cơ hội</div>
              <div className="grid-item">Tăng trưởng</div>
              <div className="grid-item">Đào tạo</div>
              <div className="grid-item">Công nhân</div>
              <div className="grid-item">Nông dân</div>
              <div className="grid-item"></div>
              <div className="grid-item">Phân hóa</div>
              <div className="grid-item">Đoàn kết</div>
              <div className="grid-item">Công bằng</div>
              <div className="grid-item">Hội nhập</div>
              <div className="grid-item">Văn minh</div>
              <div className="grid-item">Cách mạng 4.0</div>
              <div className="grid-item">Đoàn kết</div>
              <div className="grid-item">Công bằng</div>
              <div className="grid-item">Toàn cầu hóa</div>
              <div className="grid-item">AI</div>
              <div className="grid-item">Kinh tế số</div>
              <div className="grid-item">Doanh nhân</div>
              <div className="grid-item">Lao động số</div>
              <div className="grid-item">Trí thức trẻ</div>
              <div className="grid-item">Bất bình đẳng</div>
              <div className="grid-item">Cơ hội</div>
              <div className="grid-item">Tăng trưởng</div>
              <div className="grid-item">Đào tạo</div>
              <div className="grid-item">Công nhân</div>
              <div className="grid-item">Nông dân</div>
              <div className="grid-item">Phân hóa</div>
              <div className="grid-item">Đoàn kết</div>
              <div className="grid-item">Công bằng</div>
              <div className="grid-item">Hội nhập</div>
              <div className="grid-item">Văn minh</div>
              <div className="grid-item">Cách mạng 4.0</div>
              <div className="grid-item"></div>
              <div className="grid-item">Toàn cầu hóa</div>
              <div className="grid-item">AI</div>
              <div className="grid-item">Đoàn kết</div>
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
        <div className="book-selection-block-title">Lựa Chọn Sách</div>
        <div class="book-selection-block-container">
          <div class="book-selection-block-book" onClick={() =>  navigate("/doc-sach")}>
            <div class="book-selection-block-front">
              <div class="book-selection-block-cover" style={{backgroundImage: `url(${coverOne})`}}>
                <p class="book-selection-block-num-up">Cơ cấu xã hội - giai cấp ở Việt Nam thời kỳ quá độ lên chủ nghĩa xã hội</p>
                <p class="book-selection-block-num-down">Phân Tích Cơ Cấu Giai Cấp Xã Hội Việt Nam Hiện Nay</p>
                <p class="author">Báo Đồng Khởi</p>
              </div>
            </div>
            <div class="book-selection-block-left-side">
              <h2>
                <span>Cơ cấu xã hội</span>
                <span>Việt Nam</span>
              </h2>
            </div>
          </div>
          <h1 className='book-selection-count'><span>B</span><span>o</span><span>o</span><span>k</span> <span>1</span></h1>
        </div>
        <div class="book-selection-block-container">
          <div class="book-selection-block-book" onClick={() =>  navigate("/doc-sach-2")}>
            <div class="book-selection-block-front">
              <div class="book-selection-block-cover" style={{backgroundImage: `url(${coverTwo})`}}>
                <p class="book-selection-block-num-up">Liên minh giai cấp, tầng lớp ở VN thời kỳ quá độ lên chủ nghĩa XH</p>
                <p class="book-selection-block-num-down">Liên minh giai cấp</p>
                <p class="author">Báo Thanh Niên</p>
              </div>
            </div>
            <div class="book-selection-block-left-side">
              <h2>
                <span>Liên minh</span>
                <span>Giai cấp</span>
              </h2>
            </div>
          </div>
          <h1 className='book-selection-count'><span>B</span><span>o</span><span>o</span><span>k</span> <span>2</span></h1>
        </div>

        <div class="book-selection-block-container">
          <div class="book-selection-block-book" onClick={() =>  navigate("/doc-sach-2")}>
            <div class="book-selection-block-front">
              <div class="book-selection-block-cover" style={{backgroundImage: `url(${coverTwo})`}}>
                <p class="book-selection-block-num-up">Liên minh giai cấp, tầng lớp ở VN thời kỳ quá độ lên chủ nghĩa XH</p>
                <p class="book-selection-block-num-down">Liên minh giai cấp</p>
                <p class="author">Báo Thanh Niên</p>
              </div>
            </div>
            <div class="book-selection-block-left-side">
              <h2>
                <span>Liên minh</span>
                <span>Giai cấp</span>
              </h2>
            </div>
          </div>
          <h1 className='book-selection-count'><span>B</span><span>o</span><span>o</span><span>k</span> <span>3</span></h1>
        </div>
        
      </div>
    </div>
  )
}
