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
                    fontColor: "#ffffff",
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
                    duration: 3,
                    ease: "power2.in",
                })
                .to("#nguyen-van-linh-img",{
                    maskSize: 2000,
                    duration: 3,
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

            return () => timeline1?.kill();
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
                    >Sau khi thống nhất đất nước năm 1975, Việt Nam bước vào<br/> thời kỳ <b>quá độ lên Chủ nghĩa xã hội</b>. <span style={{display:"inline-block"}}>Tuy nhiên:</span></p>
                        <br/>
                    <p>Kinh tế vận hành theo <span><b>cơ chế bao cấp.</b></span></p>

                    <p>Sản xuất nông nghiệp <span><b>lạc hậu.</b></span></p>

                    <p>Công nghiệp <span><b>yếu.</b></span></p>

                    <p>Lạm phát lên tới <span><b>774%</b></span> năm 1986.</p>

                    <p>Quan hệ quốc tế bị <span><b>bao vây, cấm vận.</b></span></p>

                    <p>Đời sống nhân dân <span><b>khó khăn.</b></span></p>

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
                            width: "90%",
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
                        }} >Nguyễn Văn Linh</p>
                    </div>



                </div>
            </div>

        </div>
    </>
  )
}

export default ContentDisplay
