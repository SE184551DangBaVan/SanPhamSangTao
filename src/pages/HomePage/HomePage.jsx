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
                                                    : `linear-gradient(to right, transparent, transparent)`}}></div>
                                                    <span className='historical-texts1' 
                                                    style={{transform: scrollHomePageOffset > 1000 ? "translateY(0)" : "translateY(400px)"}}><span className="first-letter">1. Nhận thức chung về văn hóa</span><br/>

Định nghĩa văn hóa: Văn hóa là toàn bộ những sáng tạo và phát minh của loài người (ngôn ngữ, chữ viết, đạo đức, pháp luật, khoa học, tôn giáo, văn học, nghệ thuật, công cụ sinh hoạt…), nhằm đáp ứng nhu cầu sinh tồn và phát triển.<br/>

Quan hệ của văn hóa với các lĩnh vực khác:<br/>

Chính trị: Chính trị giải phóng thì văn hóa mới được giải phóng; chính trị mở đường cho văn hóa phát triển.<br/>

Kinh tế: Kinh tế là nền tảng vật chất để xây dựng và phát triển văn hóa.<br/>

Xã hội: Giải phóng xã hội tạo điều kiện cho văn hóa phát triển.<br/>

Bản sắc dân tộc và tiếp thu tinh hoa nhân loại: Văn hóa dân tộc có giá trị to lớn, vừa giữ gìn truyền thống vừa tiếp thu văn hóa tiến bộ của nhân loại.</span>
<div className='historical-texts1-upperlayer' style={{maskImage: scrollHomePageOffset > 1100
                                                    ? `url('${maskOne}')`
                                                    : `linear-gradient(to right, transparent, transparent)`}}><span className="first-letter">1. Nhận thức chung về văn hóa</span><br/>

Định nghĩa văn hóa: Văn hóa là toàn bộ những sáng tạo và phát minh của loài người (ngôn ngữ, chữ viết, đạo đức, pháp luật, khoa học, tôn giáo, văn học, nghệ thuật, công cụ sinh hoạt…), nhằm đáp ứng nhu cầu sinh tồn và phát triển.<br/>

Quan hệ của văn hóa với các lĩnh vực khác:<br/>

Chính trị: Chính trị giải phóng thì văn hóa mới được giải phóng; chính trị mở đường cho văn hóa phát triển.<br/>

Kinh tế: Kinh tế là nền tảng vật chất để xây dựng và phát triển văn hóa.<br/>

Xã hội: Giải phóng xã hội tạo điều kiện cho văn hóa phát triển.<br/>

Bản sắc dân tộc và tiếp thu tinh hoa nhân loại: Văn hóa dân tộc có giá trị to lớn, vừa giữ gìn truyền thống vừa tiếp thu văn hóa tiến bộ của nhân loại.</div>
        <div className="historical-figure2" style={{maskImage: scrollHomePageOffset > 1800
                                                    ? `url('${maskTwo}')`
                                                    : `linear-gradient(to right, transparent, transparent)`}}></div>
                                                    <span className='historical-texts2'
                                                    style={{transform: scrollHomePageOffset >  1700 ? "translateY(0)" : "translateY(400px)"}}><span className="first-letter">2. Vai trò của văn hóa</span><br/>

Mục tiêu và động lực của cách mạng: Văn hóa vừa là mục tiêu cần đạt tới, vừa là động lực thúc đẩy sự nghiệp cách mạng.<br/>

Văn hóa là một mặt trận: Đấu tranh trên lĩnh vực văn hóa - tư tưởng, phản ánh tính chất quyết liệt, độc lập và gắn bó với chính trị, kinh tế, xã hội.<br/>

Phục vụ quần chúng nhân dân: Mọi hoạt động văn hóa phải gắn bó với đời sống thực tiễn, phản ánh tư tưởng và khát vọng của nhân dân, vì nhân dân và do nhân dân.<br/></span>
<div className='historical-texts2-upperlayer' style={{maskImage: scrollHomePageOffset > 1800
                                                    ? `url('${maskTwo}')`
                                                    : `linear-gradient(to right, transparent, transparent)`}}><span className="first-letter">2. Vai trò của văn hóa</span><br/>

Mục tiêu và động lực của cách mạng: Văn hóa vừa là mục tiêu cần đạt tới, vừa là động lực thúc đẩy sự nghiệp cách mạng.<br/>

Văn hóa là một mặt trận: Đấu tranh trên lĩnh vực văn hóa - tư tưởng, phản ánh tính chất quyết liệt, độc lập và gắn bó với chính trị, kinh tế, xã hội.<br/>

Phục vụ quần chúng nhân dân: Mọi hoạt động văn hóa phải gắn bó với đời sống thực tiễn, phản ánh tư tưởng và khát vọng của nhân dân, vì nhân dân và do nhân dân.<br/></div>
        <div className="historical-figure3" style={{maskImage: scrollHomePageOffset > 2300
                                                    ? `url('${maskThree}')`
                                                    : `linear-gradient(to right, transparent, transparent)`}}></div>
                                                    <span className='historical-texts3'
                                                    style={{transform: scrollHomePageOffset > 2200 ?  "translateY(0)" : "translateY(400px)"}}><span className="first-letter">3. Quan điểm về xây dựng nền văn hóa mới</span><br/>

Trước Cách mạng Tháng Tám 1945: Xây dựng nền văn hóa dân tộc với năm nội dung cơ bản.<br/>

Kháng chiến chống Pháp: Hình thành nền văn hóa dân tộc, khoa học, đại chúng.<br/>

Thời kỳ xây dựng CNXH: Phát triển nền văn hóa có nội dung xã hội chủ nghĩa và tính dân tộc.<br/>

Nền văn hóa mới Việt Nam:<br/>

Toàn diện, giữ gìn cốt cách văn hóa dân tộc.<br/>

Bảo đảm tính khoa học, tiến bộ và nhân văn.</span>
<div className='historical-texts3-upperlayer' style={{maskImage: scrollHomePageOffset > 2300
                                                    ? `url('${maskThree}')`
                                                    : `linear-gradient(to right, transparent, transparent)`}}><span className="first-letter">3. Quan điểm về xây dựng nền văn hóa mới</span><br/>

Trước Cách mạng Tháng Tám 1945: Xây dựng nền văn hóa dân tộc với năm nội dung cơ bản.<br/>

Kháng chiến chống Pháp: Hình thành nền văn hóa dân tộc, khoa học, đại chúng.<br/>

Thời kỳ xây dựng CNXH: Phát triển nền văn hóa có nội dung xã hội chủ nghĩa và tính dân tộc.<br/>

Nền văn hóa mới Việt Nam:<br/>

Toàn diện, giữ gìn cốt cách văn hóa dân tộc.<br/>

Bảo đảm tính khoa học, tiến bộ và nhân văn.</div>
      </div>
      <div className="book-selection-block" onMouseEnter={() => setHandsOff(true)} onMouseLeave={() => setHandsOff(false)}>
        <BookSelector/>
        <Hand toggle={handsOff} />
      </div>

      <div className="home-page-progress-indicator">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`mouse ${scrollHomePageOffset + 800 >= document.documentElement.scrollHeight && 'end'}`}>
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
