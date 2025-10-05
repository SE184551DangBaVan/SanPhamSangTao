import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import './BookMain.css'

import React, { useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import {useNavigate} from "react-router-dom";
import UserBookGuide from '../../components/UserBookGuide/UserBookGuide';
import { DirectionsRun, HomeFilled } from '@mui/icons-material';

export default function BookMain() {
    const navigate = useNavigate();

    const [scrollPageOffset, setScrollPageOffset] = useState(0);
    const { scrollY } = useScroll();
    
    const [scrollStartToggle, setScrollStartToggle] = useState(false);
    const [scrollEndToggle, setScrollEndToggle] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrollPageOffset(latest);
    });
    
    useEffect(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            left: 0,
            behavior: "smooth",
        });
    }, [scrollEndToggle]);

    useEffect(() => {
        window.scrollTo({ top: 0, right: 0, behavior: "smooth" });
    }, [scrollStartToggle]);

    return (
        <>
        <UserBookGuide bookScrollProgress={scrollPageOffset}/>
        <button className='home-button' onClick={() => navigate("/")}>
            <HomeFilled className='home-button-icons'/>
            <span className='home-button-text'>
                Trang chủ
            </span>
            <DirectionsRun className='home-button-icons'/>
        </button>
        <header className="header">
            <div className="header-container">
                <div className="header-texture"></div>
                <div className="header-title">
                <h1 className="masthead">HCM Cultural Preservation</h1>
                <div className="tagline">All cutural inheritance that connects us</div>
                </div>
                
                <nav className="nav" id="mainNav">
                <a className={`nav-item ${scrollPageOffset <= 0 && 'disabled'}`} onClick={() => setScrollStartToggle(!scrollStartToggle) }><KeyboardDoubleArrowLeftIcon/> Đến trang đầu</a>
                <a className={`nav-item ${scrollPageOffset <= 0 && 'disabled'}`} onClick={() => window.scrollTo({ top: scrollPageOffset-600, right: 0, behavior: "smooth" })}><ArrowCircleLeftIcon/> Trang trước</a>
                <a className={`nav-item ${scrollPageOffset+1000 >= document.documentElement.scrollHeight && 'disabled'}`} onClick={() => window.scrollTo({ top: scrollPageOffset+600, right: 0, behavior: "smooth" })}>Trang tiếp <ArrowCircleRightIcon/></a>
                <a className={`nav-item ${scrollPageOffset+1000 >= document.documentElement.scrollHeight && 'disabled'}`} onClick={() => setScrollEndToggle(!scrollEndToggle)}>Đến trang cuối <KeyboardDoubleArrowRightIcon/></a>
                </nav>
                
                <div className="ink-blot ink-blot-1"></div>
                <div className="ink-blot ink-blot-2"></div>
                <div className="header-introduction">
                    <div className="header-content">
                        Ho Chi Minh’s ideology stands at the crossroads of pragmatism, humanism, and revolutionary vision. From his deep respect for culture and ethics to his mastery of political language and collective leadership, these books reveal how he fused Eastern traditions with Western thought to create a living philosophy. His ideas were not abstract dogma, but a practical guide for liberation, renewal, and human dignity—an enduring legacy that continues to shape Vietnam’s path today.
                    </div>
                </div>
                <div className="header-shadow"></div>
            </div>

        </header>
        <main className='book-container' style={{right: `calc(-50% + ${scrollPageOffset/2}px)`}}>
            <article className="content">
                <h2 className="article-title">Digital Newspapers Experience Renaissance in Modern Age</h2>
                <div className="article-meta">
                    <span>By Jonathan Pressman</span>
                    <span>Print & Digital Correspondent</span>
                </div>
                <div className="article-content">
                    <p><span className="first-letter">H</span>he tactile feel of newsprint may be fading into memory, but the spirit of traditional journalism is finding new life online as digital newspapers embrace vintage aesthetics while utilizing cutting-edge technology. Across the industry, news organizations are reimagining their digital presence with designs that evoke the golden age of print journalism.</p>
                    <p>"We've found that readers respond positively to familiar newspaper design elements," explains Maria Gutenberg, design director at The Metropolitan Journal. "The serif typography, column layouts, and even subtle paper textures create an immediate sense of credibility and permanence in an era of fleeting digital content."</p>
                    <p>Industry research indicates that websites incorporating traditional newspaper design elements see longer average visit durations and higher subscription conversion rates. The blend of nostalgia with modern functionality appears to bridge the gap between generations of news consumers.</p>
                    <p>"It's not just aesthetic appeal," notes typographer Samuel Mergenthaler. "The classic newspaper layout evolved over centuries to optimize readability and information hierarchy. Those principles remain valuable in digital environments."</p>
                </div>
            </article>

            <article className="content">
                <h2 className="article-title">Typography Choices Signal Editorial Character</h2>
                <div className="article-meta">
                    <span>By Eleanor Linotype</span>
                    <span>Design Editor</span>
                </div>
                <div className="article-content">
                    <p><span className="first-letter">C</span>s digital news portals compete for reader attention, their typographic choices have become increasingly significant branding elements. The persistence of serif typefaces in digital news environments speaks to their enduring association with journalistic authority.</p>
                    <p>"Every font family carries cultural associations," says typography historian Richard Caslon. "The newspaper serif conveys a sense of tradition and craftsmanship that sans-serif fonts, despite their technical advantages on screens, simply cannot replicate."</p>
                    <p>The trend extends beyond typography to interactive elements as well. Hover effects that mimic the look of highlighted text or folded paper corners create subtle but meaningful connections to the physical reading experience.</p>
                    <p>"These design touches aren't merely decorative," explains UX researcher Beatrice Garamond. "They form part of an environmental psychology that helps readers mentally transition into a more focused, contemplative reading state—similar to what happens when we unfold a physical newspaper."</p>
                </div>
            </article>

            <article className="content">
                <h2 className="article-title">Digital Newspapers Experience Renaissance in Modern Age</h2>
                <div className="article-meta">
                    <span>By Jonathan Pressman</span>
                    <span>Print & Digital Correspondent</span>
                </div>
                <div className="article-content">
                    <p><span className="first-letter">M</span>he tactile feel of newsprint may be fading into memory, but the spirit of traditional journalism is finding new life online as digital newspapers embrace vintage aesthetics while utilizing cutting-edge technology. Across the industry, news organizations are reimagining their digital presence with designs that evoke the golden age of print journalism.</p>
                    <p>"We've found that readers respond positively to familiar newspaper design elements," explains Maria Gutenberg, design director at The Metropolitan Journal. "The serif typography, column layouts, and even subtle paper textures create an immediate sense of credibility and permanence in an era of fleeting digital content."</p>
                    <p>Industry research indicates that websites incorporating traditional newspaper design elements see longer average visit durations and higher subscription conversion rates. The blend of nostalgia with modern functionality appears to bridge the gap between generations of news consumers.</p>
                    <p>"It's not just aesthetic appeal," notes typographer Samuel Mergenthaler. "The classic newspaper layout evolved over centuries to optimize readability and information hierarchy. Those principles remain valuable in digital environments."</p>
                </div>
            </article>
        </main>
        </>
    )
}
