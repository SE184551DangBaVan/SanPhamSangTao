import DynamicBackground from '../../components/DynamicBackground/DynamicBackground'
import './HomePage.css'

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import TimelineCarousel from '../../components/TimelineCarousel/TimelineCarousel.jsx';

export default function HomePage() {
  const [scrollHomePageOffset, setScrollHomePageOffset] = useState(0);
  const [show, setShow] = useState(false);
  const [shown, setShown] = useState(false);
  const [retract, setRetract] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change");
  const opacityShift = useTransform(scrollYProgress, [0.3, 0.5], ["0", "0.8"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollHomePageOffset(latest);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (scrollHomePageOffset>500 && scrollHomePageOffset<780) {
        setShow(true);
        setShown(true);
      }
      else if (shown && scrollHomePageOffset<500 && !retract) {
        setRetract(true);
      }
      else if (shown && scrollHomePageOffset<400 || shown && scrollHomePageOffset===0){
        setShow(false);
      }
      else if (!show && retract) {
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
            <div className="great-leader-image" style={{transform: `translateY(${-scrollHomePageOffset/2}px)`}}/>
            <div className="header-title">
              Tư Tưởng <span>Hồ Chí Minh</span>
            </div>
          </div>

          <div id="hero" className={`hero-paragraph ${retract ? 'hidden':''}`} style={{position: `${show ? 'fixed' : 'absolute'}`, 
                                                  transform:  `translateY(${show ? '0px' : '200px'})`}}>
            <div className={`hr-pg-left ${show ? 'show' : ''}`}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </div>
            <div className={`history-timeline ${show ? 'show' : ''}`}>
              <div className="history-timeline-container" style={{left: `${100 - scrollHomePageOffset/10}%`}}>
                <TimelineCarousel />
              </div>
            </div>
            <div className={`hr-pg-right ${show ? 'show' : ''}`}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            </div>

          </div>
        </div>
      </div>

      <div className="book-selection-block">
        
      </div>
    </div>
  )
}
