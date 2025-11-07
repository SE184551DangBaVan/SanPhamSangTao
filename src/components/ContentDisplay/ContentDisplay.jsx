import React from 'react'
import "./ContentDisplay.css"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import {useGSAP} from "@gsap/react";

import boiCanhTruocDoiMoi from "../../assets/boi-canh-truoc-doi-moi.jpg";
import quanHeVietNamHoaKy from "../../assets/binh-thuong-hoa-quan-he-viet-nam-hoa-ky.png"
import daiHoiVI from "../../assets/dai-hoi-VI.png"
import giaNhapAsean from "../../assets/gia-nhap-asean-1995.png"
import nguyenVanLinh from "../../assets/nguyen-van-linh.png"
gsap.registerPlugin(ScrollTrigger, SplitText);

// Optimization? what is that? :troll:

const ContentDisplay = () => {

    const HIGHLIGHT_COLOR = "#FFD700";
    const [isLoading, setIsLoading] = React.useState(true);

    document.fonts.ready.then(() => setIsLoading(false));

    const contentPageToggleAction= "play reset play reset"

    let contentPage1 = [];

    useGSAP(() => {
        if(!isLoading){
            contentPage1 = Array.from(document.querySelectorAll("#content-page-1 p"));

            const timeline1 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#content-page-1",
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: true,
                    toggleActions: contentPageToggleAction,
                }
            })

            const textSplitTitlePage1 = new SplitText("#content-page-1 h2", {
                type: "chars, lines",
            })

            timeline1.fromTo(textSplitTitlePage1.chars, { y: "6rem" }, {
                y: 0,
                stagger: {
                    amount: 0.8,
                    from: "left",
                },
                duration: 0.4,
            })
                .to("#content-page-1 h2", {
                    fontSize: "2.3rem",
                    top: "2rem",
                    left: "2.5rem",
                    x:0,
                    y:0,
                    xPercent: 0,
                    yPercent: 0,
                    duration: 0.8,
                }, "+=0.8")
                .to("#content-page-1 h2 span", {
                    display: "inline",
                    duration: 0.8,
                }, "<");

            contentPage1.forEach((p, index)=>{
                let textSplit = SplitText.create(p, {
                    type: "words, lines",
                })
                timeline1.from(textSplit.words,{
                    yPercent: "random([25,-25])",
                    duration: 0.2,
                    opacity: 0,
                    stagger: 0.08,
                }, index === 0 ? "+=0.1" : "+=0.3")
                timeline1.to(p.querySelectorAll("span"), {
                    duration: 0.3,
                    color: HIGHLIGHT_COLOR, // SỬ DỤNG HẰNG SỐ
                    fontSize: "+=0.45rem",
                    ease: "power2.out"
                }, "+=0.15")
            })

            timeline1.from("#content-page-1 .image-container",{
                opacity: 0,
                rotate: 360,
                x: 500,
                duration: 0.6,
                ease: "power2.out"
            },"-=1")

            timeline1.to("#content-page-1 .image-container",{
                maskSize: 500,
                duration: 0.8,
                ease: "power2.inOut"
            }, "+=0.15")
            const tsDescPage1 = new SplitText("#content-page-1 .image-description",{
                type: "lines",
            })
            timeline1.fromTo(tsDescPage1.lines,
                {
                    y: 100
                },
                {
                    y: 0,
                    ease: "power2.out",
                    stagger: 0.15,
                    duration: 0.4,
                },
                "-=0.3"
            );

            // ------------------------------------------------------------------- END OF PAGE 1 -------------------------------------------------------------------//
            // ------------------------------------------------------------------ START OF PAGE 2 ------------------------------------------------------------------//

            const tsTitlePage2Top = new SplitText("#title #top-title", {
                type: "chars",
            })
            const tsTitlePage2Bottom = new SplitText("#title #bottom-title", {
                type: "chars",
            })

            const timeline2 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#content-page-2",
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: true,
                    toggleActions: contentPageToggleAction,
                }
            })

            timeline2.from(tsTitlePage2Top.chars,{
                yPercent: 150,
                duration: 0.45,
                stagger:{
                    amount: 0.8,
                    from: "left",
                }
            })
            timeline2.from(tsTitlePage2Bottom.chars,{
                yPercent: -150,
                duration: 0.45,
                stagger:{
                    amount: 0.8,
                    from: "left",
                }
            })
            const topMid = Math.ceil(tsTitlePage2Top.chars.length / 2);
            const topFirstHalf = tsTitlePage2Top.chars.slice(0, topMid);
            const topSecondHalf = tsTitlePage2Top.chars.slice(topMid);

            const bottomMid = Math.ceil(tsTitlePage2Bottom.chars.length / 2);
            const bottomFirstHalf = tsTitlePage2Bottom.chars.slice(0, bottomMid);
            const bottomSecondHalf = tsTitlePage2Bottom.chars.slice(bottomMid);

            timeline2.to(topFirstHalf, {
                opacity: 0,
                x: i => -50 - i * 36.8,
                stagger: {
                    each: 0.05,
                    from: "start",
                },
                duration: 0.6,
            }, "+=0.75")
                .to(topSecondHalf, {
                    opacity: 0,
                    x: i => 50 + (bottomSecondHalf.length - i) * 36.8,
                    stagger: {
                        each: 0.05,
                        from: "end",
                    },
                    duration: 0.6,
                }, "<")
                .to(bottomFirstHalf, {
                    opacity: 0,
                    x: i => -50 - i * 36.8,
                    stagger: {
                        each: 0.05,
                        from: "start",
                    },
                    duration: 0.6,
                }, "<")
                .to(bottomSecondHalf, {
                    opacity: 0,
                    x: i => 50 + (bottomSecondHalf.length - i) * 36.8,
                    stagger: {
                        each: 0.05,
                        from: "end",
                    },
                    duration: 0.6,
                }, "<");

            const tsSmallerTitle = new SplitText("#title-small", {
                type: "chars",
            })
            const smallerMid = Math.ceil(tsSmallerTitle.chars.length / 2);
            const smallerFirstHalf = tsSmallerTitle.chars.slice(0, smallerMid);
            const smallerSecondHalf = tsSmallerTitle.chars.slice(smallerMid);

            timeline2.from(smallerSecondHalf, {
                opacity: 0,
                x: i => -50 - i * 36.8,
                stagger: {
                    each: 0.05,
                    from: "end",
                },
                duration: 0.15,
            }, "+=0.25")
                .from(smallerFirstHalf, {
                    opacity: 0,
                    x: i => 50 + (bottomSecondHalf.length - i) * 36.8,
                    stagger: {
                        each: 0.05,
                        from: "start",
                    },
                    duration: 0.15,
                }, "<")

            const tsDescPage2_1 = new SplitText("#dai-hoi-VI-desc", {
                type: "lines",
            });
            const tsDescPage2_2 = new SplitText("#nguyen-van-linh-desc", {
                type: "lines",
            });

            timeline2.from("#dai-hoi-VI-img",{
                x: -1000,
                duration: 0.6,
                ease: "power2.out",
            }, "+=0.5")
                .from("#nguyen-van-linh-img",{
                    x: 1000,
                    duration: 0.6,
                    ease: "power2.out",
                })
                .to("#dai-hoi-VI-img",{
                    maskSize: 500,
                    duration: 2,
                    ease: "power2.in",
                })
                .to("#nguyen-van-linh-img",{
                    maskSize: 2000,
                    duration: 2,
                    ease: "power2.in",
                }, "<")



            timeline2.from(tsDescPage2_1.lines, {
                yPercent: -200,
                stagger: 0.2,
                duration: 0.6,
                ease: "power2.out",
            }, "+=0.5");

            timeline2.from(tsDescPage2_2.lines, {
                yPercent: -150,
                stagger: 0.2,
                duration: 0.6,
                ease: "power2.out",
            }, "<");

            // ------------------------------------------------------------------- END OF PAGE 2 -------------------------------------------------------------------//
            // ------------------------------------------------------------------ START OF PAGE 3 ------------------------------------------------------------------//

            const timeline3 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#content-page-3",
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: true,
                    toggleActions: contentPageToggleAction,
                }
            })

            const textSplitTitlePage3 = new SplitText("#content-page-3 h2", {
                type: "chars, lines",
            })

            timeline3.fromTo(textSplitTitlePage3.chars, { y: "6rem" }, {
                y: 0,
                stagger: {
                    amount: 0.8,
                    from: "left",
                },
                duration: 0.4,
            })
                .to("#content-page-3 h2", {
                    fontSize: "2.3rem",
                    top: "2rem",
                    left: "2.5rem",
                    x:0,
                    y:0,
                    xPercent: 0,
                    yPercent: 0,
                    duration: 0.8,
                }, "+=0.8");

            const contentPage3Paragraphs = Array.from(document.querySelectorAll("#content-page-3 p"));

            contentPage3Paragraphs.forEach((p, index)=>{
                let textSplit = SplitText.create(p, {
                    type: "lines",
                })
                timeline3.from(textSplit.lines,{
                    yPercent: 100,
                    duration: 0.3,
                    opacity: 0,
                    stagger: 0.1,
                }, index === 0 ? "+=0.2" : "+=0.25")
                timeline3.to(p.querySelectorAll("span"), {
                    duration: 0.3,
                    color: HIGHLIGHT_COLOR, // SỬ DỤNG HẰNG SỐ
                    fontSize: "+=0.45rem", // Consistent with page 1 and 4
                    ease: "power2.out"
                }, "+=0.15")
            })

            // ------------------------------------------------------------------- END OF PAGE 3 -------------------------------------------------------------------//
            // ------------------------------------------------------------------ START OF PAGE 4 ------------------------------------------------------------------//

            const timeline4 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#content-page-4",
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: true,
                    toggleActions: contentPageToggleAction,
                }
            })

            const textSplitTitlePage4 = new SplitText("#content-page-4 h2", {
                type: "chars, lines",
            })

            timeline4.fromTo(textSplitTitlePage4.chars, { y: "6rem" }, {
                y: 0,
                stagger: {
                    amount: 0.8,
                    from: "left",
                },
                duration: 0.4,
            })
                .to("#content-page-4 h2", {
                    fontSize: "2.3rem",
                    top: "2rem",
                    left: "2.5rem",
                    x:0,
                    y:0,
                    xPercent: 0,
                    yPercent: 0,
                    duration: 0.8,
                }, "+=0.8");

            const contentPage4Paragraphs = Array.from(document.querySelectorAll("#content-page-4 p"));

            contentPage4Paragraphs.forEach((p, index)=>{
                let textSplit = SplitText.create(p, {
                    type: "lines",
                })
                timeline4.from(textSplit.lines,{
                    yPercent: 100,
                    duration: 0.3,
                    opacity: 0,
                    stagger: 0.1,
                }, index === 0 ? "+=0.2" : "+=0.25")
                timeline4.to(p.querySelectorAll("span"), {
                    duration: 0.3,
                    color: HIGHLIGHT_COLOR, // SỬ DỤNG HẰNG SỐ
                    fontSize: "+=0.45rem",
                    ease: "power2.out"
                }, "+=0.15")
            })

            // ------------------------------------------------------------------- END OF PAGE 4  -------------------------------------------------------------------//
            // ------------------------------------------------------------------ START OF PAGE 5 (Lĩnh vực Kinh tế) ------------------------------------------------------------------//

            const timeline5 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#content-page-5",
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: true,
                    toggleActions: contentPageToggleAction,
                }
            })

            // 1. Main Title Animation (Center Minimize)
            const textSplitMainTitlePage5 = new SplitText("#content-page-5 h2.main-title-page", {
                type: "chars, lines",
            })

            timeline5.fromTo(textSplitMainTitlePage5.chars, { y: "6rem" }, {
                y: 0,
                stagger: {
                    amount: 0.8,
                    from: "left",
                },
                duration: 0.4,
            })
                // Move and minimize the title to the top center
                .to("#content-page-5 h2.main-title-page", {
                    fontSize: "2.3rem",
                    top: "2rem",
                    left: "50%",
                    x: 0,
                    y: 0,
                    xPercent: -50, // Center horizontally
                    yPercent: 0,
                    textAlign: "center",
                    duration: 0.8,
                }, "+=0.8");

            // 2. Sub-Title Animation (Move from Left)
            const textSplitSubTitlePage5 = new SplitText("#content-page-5 h3.sub-title", {
                type: "chars, lines",
            })

            timeline5.from(textSplitSubTitlePage5.chars, {
                xPercent: -150,
                opacity: 0,
                stagger: 0.05,
                duration: 0.5,
            }, "-=0.2"); // Starts shortly after main title minimizes

            // 3. Content Reveal (SplitText by Lines)
            const contentPage5Paragraphs = Array.from(document.querySelectorAll("#content-page-5 p"));

            contentPage5Paragraphs.forEach((p, index)=>{
                let textSplit = SplitText.create(p, {
                    type: "lines",
                })
                timeline5.from(textSplit.lines,{
                    yPercent: 100,
                    duration: 0.3,
                    opacity: 0,
                    stagger: 0.1,
                }, index === 0 ? "+=0.2" : "+=0.25")
                timeline5.to(p.querySelectorAll("span"), {
                    duration: 0.3,
                    color: HIGHLIGHT_COLOR,
                    fontSize: "+=0.45rem",
                    ease: "power2.out"
                }, "+=0.15")
            })

            // ------------------------------------------------------------------- END OF PAGE 5 -------------------------------------------------------------------//
            // ------------------------------------------------------------------ START OF PAGE 6 (Nông nghiệp) ------------------------------------------------------------------//

            const timeline6 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#content-page-6",
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: true,
                    toggleActions: contentPageToggleAction,
                }
            })

            // 1. Main Title Animation (Quick Fade In to Top Center)
            timeline6.fromTo("#content-page-6 h2.main-title-small", { opacity: 0 }, {
                opacity: 1,
                duration: 0.2,
            }, 0); // Start immediately

            // 2. Sub-Title Animation (Move from Left)
            const textSplitSubTitlePage6 = new SplitText("#content-page-6 h3.sub-title", {
                type: "chars, lines",
            })

            timeline6.from(textSplitSubTitlePage6.chars, {
                xPercent: -150,
                opacity: 0,
                stagger: 0.05,
                duration: 0.5,
            }, "+=0.1");

            // 3. Content Reveal (SplitText by Lines)
            const contentPage6Paragraphs = Array.from(document.querySelectorAll("#content-page-6 p"));

            contentPage6Paragraphs.forEach((p, index)=>{
                let textSplit = SplitText.create(p, {
                    type: "lines",
                })
                timeline6.from(textSplit.lines,{
                    yPercent: 100,
                    duration: 0.3,
                    opacity: 0,
                    stagger: 0.1,
                }, index === 0 ? "+=0.2" : "+=0.25")
                timeline6.to(p.querySelectorAll("span"), {
                    duration: 0.3,
                    color: HIGHLIGHT_COLOR,
                    fontSize: "+=0.45rem",
                    ease: "power2.out"
                }, "+=0.15")
            })

            // ------------------------------------------------------------------- END OF PAGE 6 -------------------------------------------------------------------//
            // ------------------------------------------------------------------ START OF PAGE 7 (Công nghiệp) ------------------------------------------------------------------//

            const timeline7 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#content-page-7",
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: true,
                    toggleActions: contentPageToggleAction,
                }
            })

            // 1. Main Title Animation (Quick Fade In to Top Center)
            timeline7.fromTo("#content-page-7 h2.main-title-small", { opacity: 0 }, {
                opacity: 1,
                duration: 0.2,
            }, 0);

            // 2. Sub-Title Animation (Move from Left)
            const textSplitSubTitlePage7 = new SplitText("#content-page-7 h3.sub-title", {
                type: "chars, lines",
            })

            timeline7.from(textSplitSubTitlePage7.chars, {
                xPercent: -150,
                opacity: 0,
                stagger: 0.05,
                duration: 0.5,
            }, "+=0.1");

            // 3. Content Reveal (SplitText by Lines)
            const contentPage7Paragraphs = Array.from(document.querySelectorAll("#content-page-7 p"));

            contentPage7Paragraphs.forEach((p, index)=>{
                let textSplit = SplitText.create(p, {
                    type: "lines",
                })
                timeline7.from(textSplit.lines,{
                    yPercent: 100,
                    duration: 0.3,
                    opacity: 0,
                    stagger: 0.1,
                }, index === 0 ? "+=0.2" : "+=0.25")
                timeline7.to(p.querySelectorAll("span"), {
                    duration: 0.3,
                    color: HIGHLIGHT_COLOR,
                    fontSize: "+=0.45rem",
                    ease: "power2.out"
                }, "+=0.15")
            })

            // ------------------------------------------------------------------- END OF PAGE 7 -------------------------------------------------------------------//
            // ------------------------------------------------------------------ START OF PAGE 8 (Đối ngoại) ------------------------------------------------------------------//

            const timeline8 = gsap.timeline({
                scrollTrigger: {
                    trigger: "#content-page-8",
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: true,
                    toggleActions: contentPageToggleAction,
                }
            })

            // 1. Main Title Animation (Quick Fade In to Top Center)
            timeline8.fromTo("#content-page-8 h2.main-title-small", { opacity: 0 }, {
                opacity: 1,
                duration: 0.2,
            }, 0);

            // 2. Sub-Title Animation (Move from Left)
            const textSplitSubTitlePage8 = new SplitText("#content-page-8 h3.sub-title", {
                type: "chars, lines",
            })

            timeline8.from(textSplitSubTitlePage8.chars, {
                xPercent: -150,
                opacity: 0,
                stagger: 0.05,
                duration: 0.5,
            }, "+=0.1");

            // 3. Content Reveal (SplitText by Lines)
            const contentPage8Paragraphs = Array.from(document.querySelectorAll("#content-page-8 p"));

            contentPage8Paragraphs.forEach((p, index)=>{
                let textSplit = SplitText.create(p, {
                    type: "lines",
                })
                timeline8.from(textSplit.lines,{
                    yPercent: 100,
                    duration: 0.3,
                    opacity: 0,
                    stagger: 0.1,
                }, index === 0 ? "+=0.2" : "+=0.25")
                timeline8.to(p.querySelectorAll("span"), {
                    duration: 0.3,
                    color: HIGHLIGHT_COLOR,
                    fontSize: "+=0.45rem",
                    ease: "power2.out"
                }, "+=0.15")
            })

            // ------------------------------------------------------------------- END OF PAGE 8 -------------------------------------------------------------------//

            return () => {
                timeline1?.kill();
                timeline2?.kill();
                timeline3?.kill();
                timeline4?.kill();
                timeline5?.kill();
                timeline6?.kill();
                timeline7?.kill();
                timeline8?.kill();
            };
        }
    }, [isLoading])

    return (
        <>
            <div className="content-display">

                <div id="content-page-1" className="content-page">
                    <div className="board-frame">
                        <h2 style={{
                            position:"absolute",
                            top: "calc(50%)",
                            left: "calc(50%)",
                            transform: "translateY(calc(-50%)) translateX(-50%)",
                            textWrap: "nowrap",
                            width: "auto",
                            fontSize:"4rem",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}> Bối cảnh trước Đổi mới (1975 – 1986)
                        </h2>

                        <p
                            style={{
                                marginTop:"5rem",
                            }}
                        >Sau khi thống nhất đất nước năm 1975, Việt Nam bước vào<br/> thời kỳ quá độ lên Chủ nghĩa xã hội. <span style={{display:"inline-block"}}>Tuy nhiên:</span></p>
                        <br/>
                        <p>Kinh tế vận hành theo <span>cơ chế bao cấp.</span></p>

                        <p>Sản xuất nông nghiệp <span>lạc hậu.</span></p>

                        <p>Công nghiệp <span>yếu.</span></p>

                        <p>Lạm phát lên tới <span>774%</span> năm 1986.</p>

                        <p>Quan hệ quốc tế bị <span>bao vây, cấm vận.</span></p>

                        <p>Đời sống nhân dân <span>khó khăn.</span></p>

                        <div className="content-visual">
                            <div className="image-container">
                                <img src={boiCanhTruocDoiMoi} alt="boi-canh-truoc-doi-moi"/>
                            </div>
                            <p className={"image-description"}>Trưng bày "Cuộc sống Hà Nội thời bao cấp" (1975-1986)</p>
                        </div>
                    </div>
                </div>

                <div id="content-page-2" className="content-page">
                    <div className="board-frame">
                        <h2 id={"title"} style={{
                            textAlign: "center",
                            position:"absolute",
                            top: "calc(50%)",
                            left: "calc(50%)",
                            transform: "translateY(calc(-50%)) translateX(-50%)",
                            textWrap: "nowrap",
                            width: "auto",
                            fontSize:"4rem",
                        }}> <span id="top-title" style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",}}>Đại hội VI (1986):</span>
                            <br/>
                            <span id="bottom-title" style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",}}>Bước ngoặt lịch sử toàn diện</span>
                        </h2>

                        <h2 id="title-small"
                            style={{
                                textAlign: "center",
                                position:"absolute",
                                top: "0",
                                left: "calc(50%)",
                                transform: "translateX(-50%)",
                                textWrap: "nowrap",
                                width: "auto",
                            }}
                        >
                            Đại hội VI (1986): Bước ngoặt lịch sử toàn diện
                        </h2>

                        <div className="content-visual" style={{
                            position:"absolute",
                            left: "2%",
                            top: "calc(4.3rem)",
                            width: "45%",
                            height:"65%",
                        }}>
                            <div id={"dai-hoi-VI-img"} className="image-container" style={{
                                width: "100%",
                                height: "90%",
                                maskImage: "url(\"/star-mask.png\")",
                                maskPosition: "center",
                                maskSize: "50%",
                                maskRepeat: "no-repeat",
                            }}>
                                <img src={daiHoiVI} alt={"dai-hoi-VI"} style={{
                                    width: "100%",
                                    height: "auto",
                                }}/>
                            </div>
                            <p id={"dai-hoi-VI-desc"} style={{
                                position:"relative",
                                textAlign: "center",
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                            }} ><span>Đại hội VI <br/> </span>
                                <span>Thời gian: 15 – 18/12/1986 <br/> </span>
                                <span>Tổng Bí thư: Đồng chí Nguyễn Văn Linh (thay thế đồng chí Trường Chinh) <br/> </span></p>
                        </div>

                        <div className="content-visual" style={{
                            position:"absolute",
                            right: "2%",
                            top: "calc(8% + 4.3rem)",
                            width: "45%",
                            height:"auto",
                        }}>
                            <div id={"nguyen-van-linh-img"} className="image-container" style={{
                                width: "100%",
                                height: "100%",
                                maskImage: "url(\"/communist-mask.png\")",
                                maskPosition: "center",
                                maskSize: "50%",
                                maskRepeat: "no-repeat",
                            }}>
                                <img src={nguyenVanLinh} alt={"dai-hoi-VI"} style={{
                                    width: "100%",
                                    height: "auto",
                                }}/>
                            </div>
                            <p id={"nguyen-van-linh-desc"} style={{
                                position:"relative",
                                textAlign: "center",
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                            }} >Đồng chí Nguyễn Văn Linh</p>
                        </div>



                    </div>
                </div>

                <div id="content-page-3" className="content-page">
                    <div className="board-frame">
                        <h2 style={{
                            position:"absolute",
                            top: "calc(50%)",
                            left: "calc(50%)",
                            transform: "translateY(calc(-50%)) translateX(-50%)",
                            textWrap: "nowrap",
                            width: "auto",
                            fontSize:"4rem",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}>1. Bối cảnh Lịch sử (Tại sao phải Đổi Mới?)
                        </h2>

                        <p style={{
                            marginTop:"5rem",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}>
                            Trước Đại hội VI, Việt Nam lâm vào một cuộc <span>khủng hoảng kinh tế – xã hội trầm trọng.</span>
                        </p>

                        <p style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}>
                            <span>Cơ chế cũ sụp đổ:</span> Mô hình kế hoạch hóa tập trung, quan liêu, bao cấp <br/> bộc lộ sự trì trệ. Sản xuất đình trệ, hàng hóa khan hiếm.
                        </p>

                        <p style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}>
                            <span>Lạm phát phi mã:</span> Đỉnh điểm 1986, lạm phát lên tới <span>774,7%</span>. <br/> Cuộc cải cách "giá – lương – tiền" năm 1985 thất bại.
                        </p>

                        <p style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}>
                            <span>Bao vây, cấm vận:</span> Việt Nam bị cô lập về chính trị và cấm vận về kinh tế, <br/> đặc biệt từ phía Hoa Kỳ và các nước đồng minh.
                        </p>

                        <p style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}>
                            <span>Bài học từ thực tiễn:</span> Các mô hình <span>"khoán chui"</span> tự phát nảy sinh <br/> (như ở Vĩnh Phúc) chứng minh tính hiệu quả, đòi hỏi Đảng phải thay đổi.
                        </p>
                    </div>
                </div>

                <div id="content-page-4" className="content-page">
                    <div className="board-frame">
                        <h2 style={{
                            position:"absolute",
                            top: "calc(50%)",
                            left: "calc(50%)",
                            transform: "translateY(calc(-50%)) translateX(-50%)",
                            textWrap: "nowrap",
                            width: "auto",
                            fontSize:"4rem",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}>2. Tinh thần của Đại hội
                        </h2>

                        <p style={{
                            marginTop:"5rem",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}>
                            Phương châm <span style={{display:"inline-block"}}>“Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật”</span> <br/> không chỉ là một khẩu hiệu.
                        </p>

                        <p style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}>
                            Đó là sự thừa nhận dũng cảm những sai lầm trong tư duy kinh tế, đặc biệt là: <span style={{display:"inline-block"}}>"bệnh chủ quan, duy ý chí," nóng vội</span> <br/> và đề ra quyết tâm sửa chữa.
                        </p>

                    </div>
                </div>

                {/* --- START OF NEW CONTENT SECTION: NỘI DUNG ĐỔI MỚI TRỌNG TÂM --- */}

                {/* Content Page 5: 1. Lĩnh vực Kinh tế */}
                <div id="content-page-5" className="content-page">
                    <div className="board-frame">
                        {/* Big title, center positioned before minimizing */}
                        <h2 className="main-title-page" style={{
                            position:"absolute",
                            top: "calc(50%)",
                            left: "calc(50%)",
                            transform: "translateY(calc(-50%)) translateX(-50%)",
                            textWrap: "nowrap",
                            width: "auto",
                            fontSize:"4rem",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}>Nội dung Đổi mới trọng tâm
                        </h2>
                        {/* Minimized title (Top Center) - Needs to be visible on subsequent pages (6, 7, 8) */}
                        <h2 className="main-title-small" style={{
                            textAlign: "center",
                            position:"absolute",
                            top: "1rem",
                            left: "50%",
                            transform: "translateX(-50%)",
                            textWrap: "nowrap",
                            width: "auto",
                            fontSize: "2.3rem",
                            opacity: 0, // Hidden initially, will be revealed and used by other pages
                        }}>Nội dung Đổi mới trọng tâm
                        </h2>

                        {/* Sub-Title */}
                        <h3 className="sub-title" style={{
                            position:"absolute",
                            top: "5rem",
                            left: "2.5rem",
                            fontSize:"2.3rem",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}>1. Lĩnh vực Kinh tế
                        </h3>

                        <p style={{ marginTop:"8rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                            Chuyển đổi cốt lõi: Chuyển từ "cơ chế tập trung quan liêu bao cấp" sang <span style={{display:"inline-block", textAlign:"center"}}>"kinh tế hàng hoá nhiều thành phần, vận hành theo cơ chế thị trường, có sự quản lý của Nhà nước".</span>
                        </p>

                        <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                            Ba chương trình kinh tế lớn: Đại hội VI đề ra 3 mục tiêu trọng tâm:
                            <br/> 1. Lương thực – thực phẩm
                            <br/> 2. Hàng tiêu dùng
                            <br/> 3. Hàng xuất khẩu
                        </p>

                        <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                            Luật pháp hóa: Ngay sau Đại hội, <span>Luật Đầu tư nước ngoài tại Việt Nam</span> (1987) đã được ban hành. <br/> Đây là văn bản pháp lý quan trọng nhất, mở đường cho dòng vốn FDI vào Việt Nam.
                        </p>

                    </div>
                </div>

                {/* Content Page 6: 2. Nông nghiệp */}
                <div id="content-page-6" className="content-page">
                    <div className="board-frame">
                        {/* Minimized title (Top Center, must be present for GSAP fade-in) */}
                        <h2 className="main-title-small" style={{
                            textAlign: "center",
                            position:"absolute",
                            top: "1rem",
                            left: "50%",
                            transform: "translateX(-50%)",
                            textWrap: "nowrap",
                            width: "auto",
                            fontSize: "2.3rem",
                            opacity: 0,
                        }}>Nội dung Đổi mới trọng tâm
                        </h2>

                        {/* Sub-Title */}
                        <h3 className="sub-title" style={{
                            position:"absolute",
                            top: "5rem",
                            left: "2.5rem",
                            fontSize:"2.3rem",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}>2. Nông nghiệp
                        </h3>

                        <p style={{ marginTop:"8rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                            <span>Nghị quyết 10 của Bộ Chính trị (Khoán 10)</span> ban hành tháng 4/1988, <br/> là bước đi cụ thể hóa tinh thần Đại hội VI.
                        </p>

                        <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                            Nội dung chính: Giao quyền sử dụng ruộng đất <span>ổn định và lâu dài</span> cho hộ gia đình. <br/> Nông dân được <span>tự chủ sản xuất</span> và <span>toàn quyền sở hữu</span>, tự do buôn bán sản phẩm dư thừa.
                        </p>

                        <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                            Tác động: Tạo ra động lực "bung ra" cho sản xuất. <br/> Hộ nông dân trở thành <span>đơn vị kinh tế tự chủ</span>, chấm dứt tình trạng <span style={{display:"inline-block"}}>"cha chung không ai khóc"</span> <br/> của hợp tác xã kiểu cũ.
                        </p>

                    </div>
                </div>

                {/* Content Page 7: 3. Công nghiệp và DNNN */}
                <div id="content-page-7" className="content-page">
                    <div className="board-frame">
                        {/* Minimized title (Top Center, must be present for GSAP fade-in) */}
                        <h2 className="main-title-small" style={{
                            textAlign: "center",
                            position:"absolute",
                            top: "1rem",
                            left: "50%",
                            transform: "translateX(-50%)",
                            textWrap: "nowrap",
                            width: "auto",
                            fontSize: "2.3rem",
                            opacity: 0,
                        }}>Nội dung Đổi mới trọng tâm
                        </h2>

                        {/* Sub-Title */}
                        <h3 className="sub-title" style={{
                            position:"absolute",
                            top: "6rem",
                            left: "2.5rem",
                            fontSize:"2.1rem",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}>3. Công nghiệp và Doanh nghiệp Nhà nước
                        </h3>

                        <p style={{ marginTop:"9rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                            Sắp xếp lại: <span>Xóa bỏ sự bao cấp</span> của nhà nước. <br/> Các DNNN phải <span>tự hạch toán kinh doanh, tự chủ tài chính.</span> <br/> Nhiều doanh nghiệp không thích nghi đã phải giải thể/sáp nhập.
                        </p>

                        <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                            Khuyến khích tư nhân: Lần đầu tiên, kinh tế tư nhân, kinh tế cá thể <br/> được <span>thừa nhận là</span> một thành phần kinh tế <span>có ích</span> và được <span>khuyến khích phát triển.</span>
                        </p>

                    </div>
                </div>

                {/* Content Page 8: 4. Đối ngoại */}
                <div id="content-page-8" className="content-page">
                    <div className="board-frame">
                        {/* Minimized title (Top Center, must be present for GSAP fade-in) */}
                        <h2 className="main-title-small" style={{
                            textAlign: "center",
                            position:"absolute",
                            top: "2rem",
                            left: "50%",
                            transform: "translateX(-50%)",
                            textWrap: "nowrap",
                            width: "auto",
                            fontSize: "2.3rem",
                            opacity: 0,
                        }}>Nội dung Đổi mới trọng tâm (Mở rộng)
                        </h2>

                        {/* Sub-Title */}
                        <h3 className="sub-title" style={{
                            position:"absolute",
                            top: "5rem",
                            left: "2.5rem",
                            fontSize:"2.3rem",
                            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        }}>4. Đối ngoại
                        </h3>

                        <p style={{ marginTop:"8rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                            Thay đổi tư duy: Chuyển từ tư duy <span>đối đầu</span> (với các nước XHCN) sang <span>đối thoại.</span>
                        </p>

                        <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                            Phương châm mới: Đại hội VI đưa ra chủ trương <span style={{display:"inline-block" , textAlign:"center", width:"100%"}}>"đa phương hoá, đa dạng hoá quan hệ đối ngoại"</span> <br/> và <br/> <span style={{display:"inline-block", textAlign:"center", width:"100%"}}>"Việt Nam muốn là bạn với tất cả các nước trong cộng đồng thế giới, phấn đấu vì hòa bình, độc lập và phát triển."</span>
                        </p>

                    </div>
                </div>

                {/* --- END OF NEW CONTENT SECTION --- */}

            </div>
        </>
    )
}

export default ContentDisplay