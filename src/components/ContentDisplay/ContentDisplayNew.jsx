import React, {useState} from 'react'
import gsap from "gsap"
import {SplitText} from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import "./ContentDisplay.css"

import boiCanhTruocDoiMoi from "../../assets/boi-canh-truoc-doi-moi.jpg";
import quanHeVietNamHoaKy from "../../assets/binh-thuong-hoa-quan-he-viet-nam-hoa-ky.png"
import daiHoiVI from "../../assets/dai-hoi-VI.png"
import giaNhapAsean from "../../assets/gia-nhap-asean-1995.png"
import nguyenVanLinh from "../../assets/nguyen-van-linh.png"

gsap.registerPlugin(ScrollTrigger, SplitText);

const TOGGLE_MARKERS = false;
const HIGHLIGHT_COLOR = "#FFD700";
const MAX_PAGE_ID = 21; // UPDATED: Changed from 20 to 21 to include the new page
const contentPageToggleAction= "play reset play reset"

// I really did optimize it

const ContentPage1 = () => {
    const containerRef = React.useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: TOGGLE_MARKERS,
                    toggleActions: contentPageToggleAction,
                }
            });

            const textSplitTitle = new SplitText("#content-page-1 h2", {
                type: "chars, lines",
            });

            tl.fromTo(textSplitTitle.chars, { y: "6rem" }, {
                y: 0,
                stagger: { amount: 0.8, from: "left" },
                duration: 0.4,
            })
                .to("#content-page-1 h2", {
                    fontSize: "2.3rem",
                    top: "2rem",
                    left: "2.5rem",
                    x: 0, y: 0,
                    xPercent: 0, yPercent: 0,
                    duration: 0.8,
                }, "+=0.8")
                .to("#content-page-1 h2 span", {
                    display: "inline",
                    duration: 0.8,
                }, "<");

            const paragraphs = containerRef.current.querySelectorAll("p");
            paragraphs.forEach((p, index) => {
                let textSplit = SplitText.create(p, { type: "words, lines" });
                tl.from(textSplit.words, {
                    yPercent: "random([25,-25])",
                    duration: 0.2,
                    opacity: 0,
                    stagger: 0.08,
                }, index === 0 ? "+=0.1" : "+=0.3")
                    .to(p.querySelectorAll("span"), {
                        duration: 0.3,
                        color: HIGHLIGHT_COLOR,
                        fontSize: "+=0.45rem",
                        ease: "power2.out"
                    }, "+=0.15");
            });

            tl.from(".image-container", {
                opacity: 0,
                rotate: 360,
                x: 500,
                duration: 0.6,
                ease: "power2.out"
            }, "-=1")
                .to(".image-container", {
                    maskSize: 500,
                    duration: 0.8,
                    ease: "power2.inOut"
                }, "+=0.15");

            const tsDesc = new SplitText(".image-description", { type: "lines" });
            tl.fromTo(tsDesc.lines, { y: 100 }, {
                y: 0,
                ease: "power2.out",
                stagger: 0.15,
                duration: 0.4,
            }, "-=0.3");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div id="content-page-1" className="content-page" ref={containerRef}>
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
                }}>Bối cảnh trước Đổi mới (1975 – 1986)</h2>

                <p style={{ marginTop:"5rem" }}>
                    Sau khi thống nhất đất nước năm 1975, Việt Nam bước vào<br/> thời kỳ quá độ lên Chủ nghĩa xã hội. <span style={{display:"inline-block"}}>Tuy nhiên:</span>
                </p>
                <br/>
                <p>Kinh tế vận hành theo <span>cơ chế bao cấp.</span></p>
                <p>Sản xuất nông nghiệp <span>lạc hậu.</span></p>
                <p>Công nghiệp <span>yếu.</span></p>
                <p>Lạm phát lên tới <span>774%</span> năm 1986.</p>
                <p>Quan hệ quốc tế bị <span>bao vây, cấm vận.</span></p>
                <p style={{marginBottom: '0'}}>Đời sống nhân dân <span>khó khăn.</span></p>

                <div className="content-visual">
                    <div className="image-container">
                        <img src={boiCanhTruocDoiMoi} alt="boi-canh-truoc-doi-moi"/>
                    </div>
                    <p className="image-description">Trưng bày "Cuộc sống Hà Nội thời bao cấp" (1975-1986)</p>
                </div>
            </div>
        </div>
    );
};

const ContentPage2 = () => {
    const containerRef = React.useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: TOGGLE_MARKERS,
                    toggleActions: contentPageToggleAction,
                }
            });

            const tsTop = new SplitText("#top-title", { type: "chars" });
            const tsBottom = new SplitText("#bottom-title", { type: "chars" });

            tl.from(tsTop.chars, {
                yPercent: 150,
                duration: 0.45,
                stagger: { amount: 0.8, from: "left" }
            })
                .from(tsBottom.chars, {
                    yPercent: -150,
                    duration: 0.45,
                    stagger: { amount: 0.8, from: "left" }
                });

            const topMid = Math.ceil(tsTop.chars.length / 2);
            const topFirstHalf = tsTop.chars.slice(0, topMid);
            const topSecondHalf = tsTop.chars.slice(topMid);

            const bottomMid = Math.ceil(tsBottom.chars.length / 2);
            const bottomFirstHalf = tsBottom.chars.slice(0, bottomMid);
            const bottomSecondHalf = tsBottom.chars.slice(bottomMid);

            tl.to(topFirstHalf, {
                opacity: 0,
                x: i => -50 - i * 36.8,
                stagger: { each: 0.05, from: "start" },
                duration: 0.6,
            }, "+=0.75")
                .to(topSecondHalf, {
                    opacity: 0,
                    x: i => 50 + (bottomSecondHalf.length - i) * 36.8,
                    stagger: { each: 0.05, from: "end" },
                    duration: 0.6,
                }, "<")
                .to(bottomFirstHalf, {
                    opacity: 0,
                    x: i => -50 - i * 36.8,
                    stagger: { each: 0.05, from: "start" },
                    duration: 0.6,
                }, "<")
                .to(bottomSecondHalf, {
                    opacity: 0,
                    x: i => 50 + (bottomSecondHalf.length - i) * 36.8,
                    stagger: { each: 0.05, from: "end" },
                    duration: 0.6,
                }, "<");

            const tsSmaller = new SplitText("#title-small", { type: "chars" });
            const smallerMid = Math.ceil(tsSmaller.chars.length / 2);
            const smallerFirstHalf = tsSmaller.chars.slice(0, smallerMid);
            const smallerSecondHalf = tsSmaller.chars.slice(smallerMid);

            tl.from(smallerSecondHalf, {
                opacity: 0,
                x: i => -50 - i * 36.8,
                stagger: { each: 0.05, from: "end" },
                duration: 0.15,
            }, "+=0.25")
                .from(smallerFirstHalf, {
                    opacity: 0,
                    x: i => 50 + (bottomSecondHalf.length - i) * 36.8,
                    stagger: { each: 0.05, from: "start" },
                    duration: 0.15,
                }, "<");

            const tsDesc1 = new SplitText("#dai-hoi-VI-desc", { type: "lines" });
            const tsDesc2 = new SplitText("#nguyen-van-linh-desc", { type: "lines" });

            tl.from("#dai-hoi-VI-img", {
                x: -1000,
                duration: 0.6,
                ease: "power2.out",
            }, "+=0.5")
                .from("#nguyen-van-linh-img", {
                    x: 1000,
                    duration: 0.6,
                    ease: "power2.out",
                })
                .to("#dai-hoi-VI-img", {
                    maskSize: 500,
                    duration: 1,
                    ease: "power2.in",
                })
                .to("#nguyen-van-linh-img", {
                    maskSize: 2000,
                    duration: 1,
                    ease: "power2.in",
                }, "<")
                .from(tsDesc1.lines, {
                    yPercent: -200,
                    stagger: 0.2,
                    duration: 0.6,
                    ease: "power2.out",
                }, "+=0.5")
                .from(tsDesc2.lines, {
                    yPercent: -150,
                    stagger: 0.2,
                    duration: 0.6,
                    ease: "power2.out",
                }, "<");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div id="content-page-2" className="content-page" ref={containerRef}>
            <div className="board-frame">
                <h2 id="title" style={{
                    textAlign: "center",
                    position:"absolute",
                    top: "calc(50%)",
                    left: "calc(50%)",
                    transform: "translateY(calc(-50%)) translateX(-50%)",
                    textWrap: "nowrap",
                    width: "auto",
                    fontSize:"4rem",
                }}>
                    <span id="top-title" style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}>Đại hội VI (1986):</span>
                    <br/>
                    <span id="bottom-title" style={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}>Bước ngoặt lịch sử toàn diện</span>
                </h2>

                <h2 id="title-small" style={{
                    textAlign: "center",
                    position:"absolute",
                    top: "0",
                    left: "calc(50%)",
                    transform: "translateX(-50%)",
                    textWrap: "nowrap",
                    width: "auto",
                }}>
                    Đại hội VI (1986): Bước ngoặt lịch sử toàn diện
                </h2>

                <div className="content-visual" style={{
                    position:"absolute",
                    left: "2%",
                    top: "calc(4.3rem)",
                    width: "45%",
                    height:"65%",
                }}>
                    <div id="dai-hoi-VI-img" className="image-container" style={{
                        width: "100%",
                        height: "90%",
                        maskImage: "url(\"/star-mask.png\")",
                        maskPosition: "center",
                        maskSize: "50%",
                        maskRepeat: "no-repeat",
                    }}>
                        <img src={daiHoiVI} alt="dai-hoi-VI" style={{ width: "100%", height: "auto" }}/>
                    </div>
                    <p id="dai-hoi-VI-desc" style={{
                        position:"relative",
                        textAlign: "center",
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    }}>
                        <span>Đại hội VI <br/> </span>
                        <span>Thời gian: 15 – 18/12/1986 <br/> </span>
                        <span>Tổng Bí thư: Đồng chí Nguyễn Văn Linh (thay thế đồng chí Trường Chinh) <br/> </span>
                    </p>
                </div>

                <div className="content-visual" style={{
                    position:"absolute",
                    right: "2%",
                    top: "calc(8% + 4.3rem)",
                    width: "45%",
                    height:"auto",
                }}>
                    <div id="nguyen-van-linh-img" className="image-container" style={{
                        width: "100%",
                        height: "100%",
                        maskImage: "url(\"/communist-mask.png\")",
                        maskPosition: "center",
                        maskSize: "50%",
                        maskRepeat: "no-repeat",
                    }}>
                        <img src={nguyenVanLinh} alt="nguyen-van-linh" style={{ width: "100%", height: "auto" }}/>
                    </div>
                    <p id="nguyen-van-linh-desc" style={{
                        position:"relative",
                        textAlign: "center",
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    }}>Đồng chí Nguyễn Văn Linh</p>
                </div>
            </div>
        </div>
    );
};


const animateStandardPage = (containerRef, pageId) => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                pin: true,
                markers: TOGGLE_MARKERS,
                toggleActions: contentPageToggleAction,
            }
        });

        const textSplitTitle = new SplitText(`#content-page-${pageId} h2`, {
            type: "chars, lines",
        });

        tl.fromTo(textSplitTitle.chars, { y: "6rem" }, {
            y: 0,
            stagger: { amount: 0.8, from: "left" },
            duration: 0.4,
        })
            .to(`#content-page-${pageId} h2`, {
                fontSize: "2.3rem",
                top: "2rem",
                left: "2.5rem",
                x: 0, y: 0,
                xPercent: 0, yPercent: 0,
                duration: 0.8,
            }, "+=0.8");

        const paragraphs = containerRef.current.querySelectorAll("p");
        paragraphs.forEach((p, index) => {
            let textSplit = SplitText.create(p, { type: "lines" });
            tl.from(textSplit.lines, {
                yPercent: 100,
                duration: 0.3,
                opacity: 0,
                stagger: 0.1,
            }, index === 0 ? "+=0.2" : "+=0.25")
                .to(p.querySelectorAll("span"), {
                    duration: 0.3,
                    color: HIGHLIGHT_COLOR,
                    fontSize: "+=0.45rem",
                    ease: "power2.out"
                }, "+=0.15");
        });
    }, containerRef);

    return () => ctx.revert();
};

const animateTitlePage = (containerRef, pageId, isSubSection = true) => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                pin: true,
                markers: TOGGLE_MARKERS,
                toggleActions: contentPageToggleAction,
            }
        });

        const mainTitle = `#content-page-${pageId} h2.main-title-small`;
        const subTitle = `#content-page-${pageId} h3.sub-title`;

        if (document.querySelector(mainTitle)) {
            tl.fromTo(mainTitle, {
                opacity: 0,
                xPercent: (isSubSection ? -50 : 0),
                y: -50,
            }, {
                opacity: 1,
                y: 0,
                duration: 0.3,
            }, 0);
        }


        if (document.querySelector(subTitle)) {
            const textSplitSubTitle = new SplitText(subTitle, {
                type: "chars, lines",
            });

            tl.from(textSplitSubTitle.chars, {
                xPercent: -150,
                opacity: 0,
                stagger: 0.05,
                duration: 0.5,
            }, "+=0.1");
        }

        const contentParagraphs = Array.from(document.querySelectorAll(`#content-page-${pageId} p`));

        contentParagraphs.forEach((p, index)=>{
            let textSplit = SplitText.create(p, {
                type: "lines",
            })
            tl.from(textSplit.lines,{
                yPercent: 100,
                duration: 0.3,
                opacity: 0,
                stagger: 0.1,
            }, index === 0 ? "+=0.2" : "+=0.25")
            tl.to(p.querySelectorAll("span"), {
                duration: 0.3,
                color: HIGHLIGHT_COLOR,
                fontSize: "+=0.45rem",
                ease: "power2.out"
            }, "+=0.15")
        })
    }, containerRef);

    return () => ctx.revert();
};


const ContentPage3 = () => {
    const containerRef = React.useRef(null);
    useGSAP(() => animateStandardPage(containerRef, 3), []);

    return (
        <div id="content-page-3" className="content-page" ref={containerRef}>
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
                }}>1. Bối cảnh Lịch sử (Tại sao phải Đổi Mới?)</h2>

                <p style={{ marginTop:"5rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Trước Đại hội VI, Việt Nam lâm vào một cuộc <span>khủng hoảng kinh tế – xã hội trầm trọng.</span>
                </p>
                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    <span>Cơ chế cũ sụp đổ:</span> Mô hình kế hoạch hóa tập trung, quan liêu, bao cấp <br/> bộc lộ sự trì trệ. Sản xuất đình trệ, hàng hóa khan hiếm.
                </p>
                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    <span>Lạm phát phi mã:</span> Đỉnh điểm 1986, lạm phát lên tới <span>774,7%</span>. <br/> Cuộc cải cách "giá – lương – tiền" năm 1985 thất bại.
                </p>
                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    <span>Bao vây, cấm vận:</span> Việt Nam bị cô lập về chính trị và cấm vận về kinh tế, <br/> đặc biệt từ phía Hoa Kỳ và các nước đồng minh.
                </p>
                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    <span>Bài học từ thực tiễn:</span> Các mô hình <span>"khoán chui"</span> tự phát nảy sinh <br/> (như ở Vĩnh Phúc) chứng minh tính hiệu quả, đòi hỏi Đảng phải thay đổi.
                </p>
            </div>
        </div>
    );
};

const ContentPage4 = () => {
    const containerRef = React.useRef(null);
    useGSAP(() => animateStandardPage(containerRef, 4), []);

    return (
        <div id="content-page-4" className="content-page" ref={containerRef}>
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
                }}>2. Tinh thần của Đại hội</h2>

                <p style={{ marginTop:"5rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Phương châm <span style={{display:"inline-block"}}>"Nhìn thẳng vào sự thật, đánh giá đúng sự thật, nói rõ sự thật"</span> <br/> không chỉ là một khẩu hiệu.
                </p>
                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Đó là sự thừa nhận dũng cảm những sai lầm trong tư duy kinh tế, đặc biệt là: <span style={{display:"inline-block"}}>"bệnh chủ quan, duy ý chí," nóng vội</span> <br/> và đề ra quyết tâm sửa chữa.
                </p>
            </div>
        </div>
    );
};

const ContentPage5 = () => {
    const containerRef = React.useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: TOGGLE_MARKERS,
                    toggleActions: contentPageToggleAction,
                }
            });

            const textSplitTitle = new SplitText("#content-page-5 h2.main-title-page", {
                type: "chars, lines",
            });

            tl.fromTo(textSplitTitle.chars, { y: "6rem" }, {
                y: 0,
                stagger: { amount: 0.8, from: "left" },
                duration: 0.4,
            })
                .to("#content-page-5 h2.main-title-page", {
                    fontSize: "2.3rem",
                    top: "1rem",
                    left: "50%",
                    x: 0, y: 0,
                    xPercent: -50,
                    yPercent: 0,
                    textAlign: "center",
                    duration: 0.8,
                }, "+=0.8");

            const textSplitSubTitle = new SplitText("#content-page-5 h3.sub-title", {
                type: "chars, lines",
            });

            tl.from(textSplitSubTitle.chars, {
                xPercent: -150,
                opacity: 0,
                stagger: 0.05,
                duration: 0.5,
            }, "-=0.2");

            const paragraphs = containerRef.current.querySelectorAll("p");
            paragraphs.forEach((p, index) => {
                let textSplit = SplitText.create(p, { type: "lines" });
                tl.from(textSplit.lines, {
                    yPercent: 100,
                    duration: 0.3,
                    opacity: 0,
                    stagger: 0.1,
                }, index === 0 ? "+=0.2" : "+=0.25")
                    .to(p.querySelectorAll("span"), {
                        duration: 0.3,
                        color: HIGHLIGHT_COLOR,
                        fontSize: "+=0.45rem",
                        ease: "power2.out"
                    }, "+=0.15");
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div id="content-page-5" className="content-page" ref={containerRef}>
            <div className="board-frame">
                <h2 className="main-title-page" style={{
                    position:"absolute",
                    top: "calc(50%)",
                    left: "calc(50%)",
                    transform: "translateY(calc(-50%)) translateX(-50%)",
                    textWrap: "nowrap",
                    width: "auto",
                    fontSize:"4rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}>Nội dung Đổi mới trọng tâm</h2>

                <h3 className="sub-title" style={{
                    position:"absolute",
                    top: "5rem",
                    left: "2.5rem",
                    fontSize:"2.3rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}>1. Lĩnh vực Kinh tế</h3>

                <p style={{ marginTop:"8rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Chuyển đổi cốt lõi: Chuyển từ "cơ chế tập trung quan liêu bao cấp" sang <span style={{display:"inline-block", textAlign:"center"}}>"kinh tế hàng hoá nhiều thành phần, vận hành theo cơ chế thị trường, có sự quản lý của Nhà nước".</span>
                </p>
                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Ba chương trình kinh tế lớn: Đại hội VI đề ra 3 mục tiêu trọng tâm:
                    <br/> 1. <span>Lương thực – thực phẩm</span>
                    <br/> 2. <span>Hàng tiêu dùng</span>
                    <br/> 3. <span>Hàng xuất khẩu</span>
                </p>
                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Luật pháp hóa: Ngay sau Đại hội, <span>Luật Đầu tư nước ngoài tại Việt Nam</span> (1987) đã được ban hành. <br/> Đây là văn bản pháp lý quan trọng nhất, mở đường cho dòng vốn <span>FDI</span> vào Việt Nam.
                </p>
            </div>
        </div>
    );
};

const ContentPage6 = () =>{
    const containerRef = React.useRef(null);
    useGSAP(() => animateTitlePage(containerRef, 6), []);

    return(
        <div id="content-page-6" className="content-page" ref={containerRef}>
            <div className="board-frame">
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
    )
}


const ContentPage7 = ()=>{
    const containerRef = React.useRef(null);
    useGSAP(() => animateTitlePage(containerRef, 7), []);

    return(
        <div id="content-page-7" className="content-page" ref={containerRef}>
            <div className="board-frame">
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
    )
}

const ContentPage8 = () =>{
    const containerRef = React.useRef(null);
    useGSAP(() => animateTitlePage(containerRef, 8), []);

    return(
        <div id="content-page-8" className="content-page" ref={containerRef}>
            <div className="board-frame">
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

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", marginBottom:"0" }}>
                    Phương châm mới: Đại hội VI đưa ra chủ trương <span style={{display:"inline-block" , textAlign:"center", width:"100%"}}>"đa phương hoá, đa dạng hoá quan hệ đối ngoại"</span> <br/> và <br/> <span style={{display:"inline-block", textAlign:"center", width:"100%"}}>"Việt Nam muốn là bạn với tất cả các nước trong cộng đồng thế giới, phấn đấu vì hòa bình, độc lập và phát triển."</span>
                </p>

            </div>
        </div>
    )
}

const ContentPage9 = () =>{
    const containerRef = React.useRef(null);
    useGSAP(() => animateTitlePage(containerRef, 9), []);

    return(
        <div id="content-page-9" className="content-page" ref={containerRef}>
            <div className="board-frame">
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

                <h3 className="sub-title" style={{
                    position:"absolute",
                    top: "5rem",
                    left: "2.5rem",
                    fontSize:"2.3rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}>5. Lĩnh vực Chính sách Xã hội
                </h3>

                <p style={{ marginTop:"8rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Đại hội VI đề ra các chính sách xã hội quan trọng nhằm <span>ổn định và cải thiện đời sống nhân dân:</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - <span>Kế hoạch hóa dân số</span> và giải quyết việc làm.
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Thực hiện <span>công bằng xã hội</span>, đảm bảo <span>an toàn xã hội.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Chăm lo <span>giáo dục, văn hóa, sức khỏe</span> nhân dân.
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Thực hiện các chính sách <span>bảo trợ xã hội.</span>
                </p>

            </div>
        </div>
    )
}

const ContentPage10 = () =>{
    const containerRef = React.useRef(null);
    useGSAP(() => animateTitlePage(containerRef, 10), []);

    return(
        <div id="content-page-10" className="content-page" ref={containerRef}>
            <div className="board-frame">
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

                <h3 className="sub-title" style={{
                    position:"absolute",
                    top: "5rem",
                    left: "2.5rem",
                    fontSize:"2.3rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}>6. Đổi mới sự lãnh đạo của Đảng
                </h3>

                <p style={{ marginTop:"8rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Đại hội VI nhấn mạnh việc đổi mới sự lãnh đạo của Đảng để <span>thực hiện công cuộc đổi mới:</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Phải <span>đổi mới tư duy</span>, trước hết là tư duy kinh tế.
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Đổi mới công tác <span>cán bộ</span> và <span>phong cách làm việc.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Giữ vững <span>nguyên tắc tổ chức</span> và <span>sinh hoạt Đảng.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Tăng cường sự <span>đoàn kết, nhất trí</span> trong Đảng.
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Thực hiện phương châm <span>"Dân biết, dân bàn, dân làm, dân kiểm tra".</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Tăng cường <span>hiệu lực quản lý của Nhà nước</span> để huy động quần chúng.
                </p>

            </div>
        </div>
    )
}

const ContentPage11 = () =>{
    const containerRef = React.useRef(null);
    useGSAP(() => animateTitlePage(containerRef, 11), []);

    return(
        <div id="content-page-11" className="content-page" ref={containerRef}>
            <div className="board-frame">
                {/* Minimized title */}
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

                <h3 className="sub-title" style={{
                    position:"absolute",
                    top: "5rem",
                    left: "2.5rem",
                    fontSize:"2.3rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}>7. Cụ thể hóa đường lối Đại hội VI
                </h3>

                <p style={{ marginTop:"7.5rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Ngay sau Đại hội, Hội nghị Trung ương 2 (tháng 4/1987) đã đề ra <span style={{display:"inline-block"}}>các giải pháp cấp bách</span> nhằm <br/> giải quyết rối ren trong phân phối, lưu thông, tập trung vào <span style={{display:"inline-block"}}>"4 giảm":</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    1. <span>Giảm bội chi ngân sách.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    2. <span>Giảm nhịp độ tăng giá.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    3. <span>Giảm lạm phát.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    4. <span>Giảm khó khăn đời sống.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Đồng thời, trao <span>quyền tự chủ cho doanh nghiệp quốc doanh</span> (tháng 11/1987) và thực hiện <span>cơ chế một giá.</span>
                </p>

            </div>
        </div>
    )
}

const ContentPage12 = () => {
    const containerRef = React.useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: TOGGLE_MARKERS,
                    toggleActions: contentPageToggleAction,
                }
            });

            const textSplitTitle = new SplitText("#content-page-12 h2.main-title-page", {
                type: "chars, lines",
            });

            tl.fromTo(textSplitTitle.chars, { y: "6rem", opacity: 0 }, {
                y: 0,
                opacity: 1,
                stagger: { amount: 0.8, from: "left" },
                duration: 0.4,
            })

                .to("#content-page-12 h2.main-title-page", {
                    fontSize: "2.3rem",
                    lineHeight: "2.3rem",
                    top: "1rem",
                    left: "50%",
                    x: 0, y: 0,
                    xPercent: -50,
                    yPercent: 0,
                    textAlign: "left",
                    duration: 0.8,
                }, "+=0.8");

            gsap.set("#content-page-12 p.description", {
                xPercent: -50,
            })

            const tsDesc = new SplitText("#content-page-12 p.description", { type: "lines" });
            tl.from(tsDesc.lines, {
                yPercent: 100,
                duration: 0.3,
                opacity: 0,
                stagger: 0.1,
            }, "-=0.2")

                .to("#content-page-12 p.description span", {
                    duration: 0.3,
                    color: HIGHLIGHT_COLOR,
                    fontSize: "+=0.45rem",
                    ease: "power2.out"
                }, "+=0.15");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div id="content-page-12" className="content-page" ref={containerRef}>
            <div className="board-frame">
                <h2 className="main-title-page" style={{
                    position:"absolute",
                    top: "calc(50%)",
                    left: "calc(50%)",
                    transform: "translateY(calc(-50%)) translateX(-50%)",
                    textWrap: "nowrap",
                    width: "auto",
                    fontSize:"4rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    textAlign: "center",
                }}>Đại hội VII (1991) và <br/> Cương lĩnh xây dựng đất nước</h2>

                <p className="description" style={{
                    position:"absolute",
                    top:"8rem",
                    left: "50%",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    width: "80%",
                    fontSize: "1.7rem",
                    textAlign: "center",
                }}>
                    Đại hội VII họp tại Hà Nội (từ 24 – 27/6/1991) đã <br/> bầu đồng chí <span>Đỗ Mười</span> làm Tổng Bí thư. <br/> Đại hội có ý nghĩa lịch sử khi thông qua <span>hai văn kiện quan trọng</span>.
                </p>
            </div>
        </div>
    );
};

const ContentPage13 = () =>{
    const containerRef = React.useRef(null);
    useGSAP(() => {
        gsap.from("#content-page-13 .main-title-small", {
            yPercent: -100,
            opacity: 0,
            duration: 0.2,
        })
        animateTitlePage(containerRef, 13, false)
    }, []);



    return(
        <div id="content-page-13" className="content-page" ref={containerRef}>
            <div className="board-frame">
                <h2 className="main-title-small" style={{
                    textAlign: "left",
                    position:"absolute",
                    top: "1rem",
                    left: "2.5rem",
                    textWrap: "nowrap",
                    width: "auto",
                    fontSize: "2.3rem",
                }}>1. Cương lĩnh 1991
                </h2>

                <h3 className="sub-title" style={{
                    position:"absolute",
                    top: "5rem",
                    left: "2.5rem",
                    fontSize:"2.3rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}>5 Bài học lớn của Cách mạng Việt Nam
                </h3>

                <p style={{ marginTop:"8rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Cương lĩnh đúc kết <span>5 bài học kinh nghiệm lớn</span> của cách mạng Việt Nam:
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Nắm vững ngọn cờ <span>độc lập dân tộc và Chủ nghĩa xã hội (CNXH).</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Sự nghiệp cách mạng là <span>của dân, do dân, vì dân.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - <span>Tăng cường đoàn kết</span>, nhất trí trong Đảng và nhân dân.
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - <span>Kết hợp sức mạnh dân tộc</span> với <span>sức mạnh thời đại.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - <span>Sự lãnh đạo đúng đắn của Đảng</span> là nhân tố đảm bảo thắng lợi.
                </p>

            </div>
        </div>
    )
}

const ContentPage14 = () =>{
    const containerRef = React.useRef(null);
    useGSAP(() => animateTitlePage(containerRef, 14, false), []);

    return(
        <div id="content-page-14" className="content-page" ref={containerRef}>
            <div className="board-frame">
                {/* Minimized title - Giữ lại để định vị trang */}
                <h2 className="main-title-small" style={{
                    textAlign: "left",
                    position:"absolute",
                    top: "1rem",
                    left: "2.5rem",
                    textWrap: "nowrap",
                    width: "auto",
                    fontSize: "2.3rem",
                }}>1. Cương lĩnh 1991
                </h2>

                <h3 className="sub-title" style={{
                    position:"absolute",
                    top: "5rem",
                    left: "2.5rem",
                    fontSize:"2.3rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}>6 Đặc trưng cơ bản của xã hội XHCN
                </h3>

                <p style={{ marginTop:"8rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Cương lĩnh xác định <span>6 đặc trưng cơ bản</span> của xã hội XHCN mà Việt Nam xây dựng:
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Chính trị: Do <span>nhân dân lao động làm chủ.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Kinh tế: Có <span>nền kinh tế phát triển cao.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Văn hóa: Có <span>nền văn hóa tiên tiến</span>, đậm đà bản sắc dân tộc.
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Xã hội: Con người được <span>giải phóng, ấm no, tự do.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Đoàn kết Dân tộc: Các dân tộc <span>bình đẳng, đoàn kết.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Quan hệ Quốc tế: Quan hệ <span>hữu nghị, hợp tác</span> với các nước.
                </p>

            </div>
        </div>
    )
}

const ContentPage15 = () =>{
    const containerRef = React.useRef(null);
    useGSAP(() => animateTitlePage(containerRef, 15, false), []); // isSubSection = false

    return(
        <div id="content-page-15" className="content-page" ref={containerRef}>
            <div className="board-frame">
                <h2 className="main-title-small" style={{
                    textAlign: "left",
                    position:"absolute",
                    top: "1rem",
                    left: "2.5rem",
                    textWrap: "nowrap",
                    width: "auto",
                    fontSize: "2.3rem",
                }}>1. Cương lĩnh 1991
                </h2>

                <h3 className="sub-title" style={{
                    position:"absolute",
                    top: "5rem",
                    left: "2.5rem",
                    fontSize:"2.3rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}>7 Phương hướng Phát triển
                </h3>

                <p style={{ marginTop:"8rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Cương lĩnh đề ra <span>7 Phương hướng Phát triển</span> cơ bản, trong đó nhấn mạnh:
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - <span>CNH gắn liền với phát triển nông nghiệp.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - <span>Phát triển nền kinh tế hàng hóa nhiều thành phần.</span>
                </p>

            </div>
        </div>
    )
}

const ContentPage16 = () =>{
    const containerRef = React.useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: TOGGLE_MARKERS,
                    toggleActions: contentPageToggleAction,
                }
            });

            tl.from("#content-page-16 .main-title-small", {
                yPercent: -100,
                opacity: 0,
                duration: 0.2,
            }, 0);

            const subTitle1 = "#content-page-16 #sub-title-1";
            const content1 = "#content-page-16 #content-1 p";
            const textSplitSubTitle1 = new SplitText(subTitle1, { type: "chars" });

            tl.from(textSplitSubTitle1.chars, {
                xPercent: -150,
                opacity: 0,
                stagger: 0.05,
                duration: 0.5,
            }, 0.2);

            const content1Paragraphs = document.querySelectorAll(content1);
            content1Paragraphs.forEach((p, index) => {
                let textSplit = SplitText.create(p, { type: "lines" });
                tl.from(textSplit.lines, {
                    yPercent: 100,
                    duration: 0.3,
                    opacity: 0,
                    stagger: 0.1,
                }, index === 0 ? "+=0.2" : "+=0.25")
                tl.to(p.querySelectorAll("span"), {
                    duration: 0.3,
                    color: HIGHLIGHT_COLOR,
                    fontSize: "+=0.45rem",
                    ease: "power2.out"
                }, "+=0.15")
            });

            const subTitle2 = "#content-page-16 #sub-title-2";
            const content2 = "#content-page-16 #content-2 p";
            const textSplitSubTitle2 = new SplitText(subTitle2, { type: "chars" });

            tl.from(textSplitSubTitle2.chars, {
                xPercent: -150,
                opacity: 0,
                stagger: 0.05,
                duration: 0.5,
            }, "+=0.5");

            const content2Paragraphs = document.querySelectorAll(content2);
            content2Paragraphs.forEach((p, index) => {
                let textSplit = SplitText.create(p, { type: "lines" });
                tl.from(textSplit.lines, {
                    yPercent: 100,
                    duration: 0.3,
                    opacity: 0,
                    stagger: 0.1,
                }, index === 0 ? "+=0.2" : "+=0.25")
                tl.to(p.querySelectorAll("span"), {
                    duration: 0.3,
                    color: HIGHLIGHT_COLOR,
                    fontSize: "+=0.45rem",
                    ease: "power2.out"
                }, "+=0.15")
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return(
        <div id="content-page-16" className="content-page" ref={containerRef}>
            <div className="board-frame">
                <h2 className="main-title-small" style={{
                    textAlign: "left",
                    position:"absolute",
                    top: "1rem",
                    left: "2.5rem",
                    textWrap: "nowrap",
                    width: "auto",
                    fontSize: "2.3rem",
                }}>2. Chiến lược đến năm 2000
                </h2>

                <h3 id="sub-title-1" className="sub-title" style={{
                    marginTop: '5rem',
                    fontSize:"2.3rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}>Mục tiêu tổng quát và Động lực chính
                </h3>

                <div id="content-1">
                    <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                        Mục tiêu tổng quát là đến năm 2000 <span>thoát khỏi khủng hoảng, ổn định kinh tế - xã hội</span>, <br/> và đưa <span>GDP năm 2000 gấp hai lần năm 1990.</span>
                    </p>

                    <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                        Động lực chính là <span>"vì con người, do con người"</span>, giải phóng sức sản xuất.
                    </p>
                </div>


                <h3 id="sub-title-2" className="sub-title" style={{
                    marginTop: '2rem',
                    fontSize:"2.3rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}>Cụ thể hóa đường lối Đại hội VII
                </h3>

                <div id="content-2">
                    <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                        <span>Hội nghị Trung ương 5 (tháng 6/1993):</span> Tiếp tục coi <span>nông nghiệp là mặt trận hàng đầu</span> <br/> và đề ra 3 mục tiêu chủ yếu để phát triển nông thôn mới, phát huy dân chủ, và giữ vững ổn định chính trị.
                    </p>

                    <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                        <span>Hội nghị Trung ương 7 (tháng 7/1994):</span> Bàn về <span>phát triển công nghiệp, công nghệ</span> <br/> và xây dựng giai cấp công nhân, với mục tiêu lâu dài là cải biến nước ta thành nước <span>công nghiệp hiện đại.</span>
                    </p>
                </div>

            </div>
        </div>
    )
}


const ContentPage17 = () => {
    const containerRef = React.useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: TOGGLE_MARKERS,
                    toggleActions: contentPageToggleAction,
                }
            });

            // Big Title Animation
            const textSplitTitle = new SplitText("#content-page-17 h2.main-title-page", {
                type: "chars, lines",
            });

            tl.fromTo(textSplitTitle.chars, { yPercent: 300, }, {
                yPercent: 0,
                stagger: { amount: 0.8, from: "left" },
                duration: 0.8,
            })
                .to("#content-page-17 h2.main-title-page", {
                    fontSize: "2.3rem",
                    lineHeight: "2.6rem",
                    top: "1rem",
                    left: "50%",
                    x: 0, y: 0,
                    xPercent: -50,
                    yPercent: 0,
                    textAlign: "center",
                    duration: 0.8,
                    textWrap: "nowrap",
                }, "+=0.8")
                .to("#content-page-17 h2.main-title-page br", { display: "none", duration: 0.8 }, "<");


            const textSplitSubTitle = new SplitText("#content-page-17 h3.sub-title", {
                type: "chars, lines",
            });

            tl.from(textSplitSubTitle.chars, {
                xPercent: -150,
                opacity: 0,
                stagger: 0.05,
                duration: 0.5,
            }, "-=0.2");

            const paragraphs = containerRef.current.querySelectorAll("p");
            paragraphs.forEach((p, index) => {
                let textSplit = SplitText.create(p, { type: "lines" });
                tl.from(textSplit.lines, {
                    yPercent: 100,
                    duration: 0.3,
                    opacity: 0,
                    stagger: 0.1,
                }, index === 0 ? "+=0.2" : "+=0.25")
                    .to(p.querySelectorAll("span"), {
                        duration: 0.3,
                        color: HIGHLIGHT_COLOR,
                        fontSize: "+=0.45rem",
                        ease: "power2.out"
                    }, "+=0.15");
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div id="content-page-17" className="content-page" ref={containerRef}>
            <div className="board-frame">
                <h2 className="main-title-page" style={{
                    position:"absolute",
                    top: "calc(50%)",
                    left: "calc(50%)",
                    transform: "translateY(calc(-50%)) translateX(-50%)",
                    textWrap: "wrap",
                    width: "80%",
                    fontSize:"4rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    textAlign: "center",
                }}>
                    Thành tựu giai đoạn 1986 – 1996 <br/> (Thập kỷ "Lột xác")
                </h2>

                <h3 className="sub-title" style={{
                    position:"absolute",
                    top: "7rem",
                    left: "2.5rem",
                    fontSize:"2.3rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}>1. Kinh tế – Xã hội
                </h3>

                <p style={{ marginTop:"10rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    <span>Nông nghiệp (Thành tựu ngoạn mục):</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Năm 1989: Chỉ 1 năm sau Khoán 10, Việt Nam từ một nước phải nhập khẩu lương thực <br/> đã sản xuất được <span>18,9 triệu tấn thóc</span>, không chỉ đủ ăn mà còn <span>xuất khẩu 1,4 triệu tấn gạo</span>, <br/> trở thành <span>nước xuất khẩu gạo thứ 3 thế giới.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Đến 1996, sản lượng lương thực đạt <span>29,3 triệu tấn.</span>
                </p>

            </div>
        </div>
    );
};

const ContentPage18 = () =>{
    const containerRef = React.useRef(null);
    useGSAP(() => animateTitlePage(containerRef, 18), []);

    return(
        <div id="content-page-18" className="content-page" ref={containerRef}>
            <div className="board-frame">
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
                }}>Thành tựu giai đoạn 1986 – 1996
                </h2>

                <h3 className="sub-title" style={{
                    position:"absolute",
                    top: "5rem",
                    left: "2.5rem",
                    fontSize:"2.3rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}>1. Kinh tế – Xã hội
                </h3>

                <p style={{ marginTop:"8rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    <span>Kiềm chế lạm phát (Thắng lợi vĩ đại):</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Từ <span>774,7% (1986)</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Xuống còn <span>67,1% (1990)</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    - Và chỉ còn <span>12,7% (1995).</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Điều này có nghĩa là đồng tiền Việt Nam đã <span>ổn định trở lại</span>, <br/> tạo <span>niềm tin</span> cho người dân và nhà đầu tư.
                </p>

            </div>
        </div>
    )
}

const ContentPage19 = () =>{
    const containerRef = React.useRef(null);
    useGSAP(() => animateTitlePage(containerRef, 19), []);

    return(
        <div id="content-page-19" className="content-page" ref={containerRef}>
            <div className="board-frame">
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
                }}>Thành tựu giai đoạn 1986 – 1996
                </h2>

                <h3 className="sub-title" style={{
                    position:"absolute",
                    top: "5rem",
                    left: "2.5rem",
                    fontSize:"2.3rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}>1. Kinh tế – Xã hội
                </h3>

                <p style={{ marginTop:"8rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    <span>Thu hút FDI:</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Từ 1988 (sau Luật Đầu tư) đến 1996, Việt Nam đã thu hút được <span>27,2 tỷ USD vốn đăng ký</span>, <br/> tạo ra hàng loạt <span>khu công nghiệp, khu chế xuất</span> (Tân Thuận, Linh Trung...) <br/> và <span>thay đổi bộ mặt cơ sở hạ tầng.</span>
                </p>

            </div>
        </div>
    )
}

const ContentPage20 = () =>{
    const containerRef = React.useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: TOGGLE_MARKERS,
                    toggleActions: contentPageToggleAction,
                }
            });

            tl.from("#content-page-20 .main-title-small",{
                yPercent: -200,
                opacity: 0,
                duration: 0.4,
            })

            tl.from("#content-page-20 .sub-title p",{
                yPercent: 200,
                duration: 0.4,
            })

            tl.from("#page-20-first-image .image-container",{
                y: -200,
                x: -300,
                rotate: -360,
                opacity: 0,
                duration: 0.5,
            }, "+=0.5")
            tl.from("#page-20-second-image .image-container",{
                y: -500,
                x: 600,
                rotate: 500,
                opacity: 0,
                duration: 0.5,
            })

            tl.to("#page-20-first-image .image-container",{
                maskSize: "400%",
                duration: 1,
                ease: "power2.in",
            }, "+=0.5")
            tl.to("#page-20-second-image .image-container",{
                maskSize: "400%",
                duration: 1,
                ease: "power2.in",
            }, "<")

            tl.from("#page-20-first-image .image-description p",{
                yPercent: 200,
                duration: 0.3,
            }, "+=0.5")
            tl.from("#page-20-second-image .image-description p",{
                yPercent: 200,
                duration: 0.3,
            })
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return(
        <div id="content-page-20" className="content-page" ref={containerRef}>
            <div className="board-frame">
                <h2 className="main-title-small" style={{
                    textAlign: "center",
                    position:"absolute",
                    top: "1rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    textWrap: "nowrap",
                    width: "auto",
                    fontSize: "2.3rem",
                    opacity: 1,
                }}>Thành tựu giai đoạn 1986 – 1996
                </h2>

                <div className="sub-title" style={{
                    position:"absolute",
                    top: "5rem",
                    left: "2.5rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}> <p style={{fontSize:"2.3rem", margin: 0, padding: 0,}}>2. Đối ngoại – Hội nhập</p>
                </div>

                <div className="content-visual" id={"page-20-first-image"} style={{
                    position: "absolute",
                    top: "9rem",
                    left: "3%",
                    width: "45%",
                    height: "65%",
                }}>
                    <div className="image-container"
                         style={{
                             maskImage: "url(\"/star-mask.png\")",
                             maskPosition: "center",
                             maskSize: "50%",
                             maskRepeat: "no-repeat",
                             width: "100%",
                             height: "90%",
                         }}>
                        <img src={giaNhapAsean} alt="gia-nhap-asean-1995" style={{
                            width: "auto",
                            height: "100%",
                        }}/>
                    </div>
                    <div className="image-description" style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        flexDirection: "column",
                        textAlign: "center",
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    }}>
                        <p>Gia nhập ASEAN 1995</p>
                    </div>
                </div>

                <div className="content-visual" id={"page-20-second-image"}
                     style={{
                         position: "absolute",
                         top: "9rem",
                         right: "5%",
                     }}>
                    <div className="image-container"
                         style={{
                             maskImage: "url(\"/star-mask.png\")",
                             maskPosition: "center",
                             maskSize: "50%",
                             maskRepeat: "no-repeat",
                             width: "100%",
                             height: "90%",
                         }}>
                        <img src={quanHeVietNamHoaKy} alt="quan-he-viet-nam-hoa-ky" style={{
                            width: "90%",
                            height: "auto",
                        }}/>
                    </div>
                    <div className="image-description" style={{
                        position: "relative",
                        textAlign: "center",
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    }}>
                        <p>Bình thường hóa quan hệ Việt Nam – Hoa Kỳ (1995)</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

const ContentPage21 = () =>{
    const containerRef = React.useRef(null);
    useGSAP(() => animateTitlePage(containerRef, 21), []);

    return(
        <div id="content-page-21" className="content-page" ref={containerRef}>
            <div className="board-frame">
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
                }}>Thành tựu giai đoạn 1986 – 1996
                </h2>

                <h3 className="sub-title" style={{
                    position:"absolute",
                    top: "5rem",
                    left: "2.5rem",
                    fontSize:"2.3rem",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}>2. Đối ngoại – Hội nhập
                </h3>

                <p style={{ marginTop:"8rem", clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Tháng 2/1994: <span>Hoa Kỳ dỡ bỏ lệnh cấm vận kinh tế.</span>
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Đây là kết quả của nỗ lực <span>ngoại giao bền bỉ</span> (đặc biệt là trong vấn đề MIA - tìm kiếm quân nhân mất tích) <br/> và là cánh cửa quyết định để Việt Nam <span>bình thường hóa quan hệ</span> với các tổ chức tài chính quốc tế <br/> <span>(WB, IMF)</span> <br/> và sau đó là với chính Hoa Kỳ.
                </p>

                <p style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}>
                    Ý nghĩa: Trong 10 năm, Việt Nam đã <span>phá vỡ hoàn toàn thế bị bao vây, cô lập</span> <br/> về chính trị và cấm vận về kinh tế, tạo ra một <span>môi trường quốc tế thuận lợi</span> chưa từng có cho phát triển.
                </p>

            </div>
        </div>
    )
}

const ContentPage22 = () => {
    const containerRef = React.useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    pin: true,
                    markers: TOGGLE_MARKERS,
                    toggleActions: contentPageToggleAction,
                }
            });

            const textSplitTitle = new SplitText("#content-page-22 h2", {
                type: "chars, lines",
            });

            tl.fromTo(textSplitTitle.chars, {
                y: "6rem",
                opacity: 0,
                scale: 0.5,
                rotationX: -90,
            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                rotationX: 0,
                stagger: { amount: 1, from: "left" },
                duration: 0.8,
                ease: "back.out(1.4)"
            });

            tl.to("#content-page-22 h2", {
                textShadow: `0 0 30px ${HIGHLIGHT_COLOR}80, 0 0 60px ${HIGHLIGHT_COLOR}40`,
                duration: 1,
                ease: "power2.inOut",
                yoyo: true,
                repeat: 1
            });

            const textSplitSubTitle = new SplitText("#content-page-22 h3", {
                type: "chars, words",
            });

            tl.from(textSplitSubTitle.chars, {
                y: 80,
                opacity: 0,
                scale: 0.8,
                stagger: 0.2,
                duration: 0.8,
                ease: "back.out(1.2)"
            }, "-=1.5");

            tl.to(".board-frame", {
                scale: 1.15,
                duration: 0.6,
                ease: "power2.inOut",
                yoyo: true,
                repeat: 1
            }, "+=0.3");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div id="content-page-22" className="content-page" ref={containerRef}>
            <div className="board-frame" style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
            }}>
                <h2 style={{
                    fontSize: "6rem",
                    color: HIGHLIGHT_COLOR,
                    paddingBottom: "2rem",
                    textWrap: "nowrap",
                    clipPath: "polygon(0 -25%, 100% -25%, 100% 100%, 0% 100%)",
                }}>Cảm Ơn</h2>
                <h3 style={{
                    fontSize: "3rem",
                    color: "#fff",
                    textWrap: "nowrap",
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}>Đã theo dõi!</h3>
            </div>
        </div>
    );
};


const ContentDisplayNew = () => {

    const [currentPageId, setCurrentPageId] = useState(0);
    const [jumpInput, setJumpInput] = useState(1);
    const [firstChanged, setFirstChanged] = useState(false);

    const jumpToPage = (id) => {
        if (id >= 0 && id <= MAX_PAGE_ID) {
            setCurrentPageId(id);
            setJumpInput(id + 1);
        }
    };

    const handleJump = () => {
        if(!firstChanged){
            setFirstChanged(true);
            console.log("firstChanged -> true");
        }
        const targetId = parseInt(jumpInput, 10) - 1;
        if (targetId >= 0 && targetId <= MAX_PAGE_ID) {
            jumpToPage(targetId);
        } else {
            console.error("Invalid page number for jump.");
        }
    };

    const handleArrowClick = (direction) => {
        if(!firstChanged){
            setFirstChanged(true);
            console.log("firstChanged -> true");
        }
        let newId = currentPageId + direction;
        if (newId >= 0 && newId <= MAX_PAGE_ID) {
            jumpToPage(newId);
        }
    };

    const renderCurrentPage = () => {
        switch(currentPageId) {
            case 0: return <ContentPage1 />;
            case 1: return <ContentPage2 />;
            case 2: return <ContentPage3 />;
            case 3: return <ContentPage4 />;
            case 4: return <ContentPage5 />;
            case 5: return <ContentPage6 />;
            case 6: return <ContentPage7 />;
            case 7: return <ContentPage8 />;
            case 8: return <ContentPage9 />;
            case 9: return <ContentPage10 />;
            case 10: return <ContentPage11 />;
            case 11: return <ContentPage12 />;
            case 12: return <ContentPage13 />;
            case 13: return <ContentPage14 />;
            case 14: return <ContentPage15 />;
            case 15: return <ContentPage16 />;
            case 16: return <ContentPage17 />;
            case 17: return <ContentPage18 />;
            case 18: return <ContentPage19 />;
            case 19: return <ContentPage20 />;
            case 20: return <ContentPage21 />;
            case 21: return <ContentPage22 />; // NEW CASE
            default: return <ContentPage1 />;
        }
    };

    useGSAP(()=>{
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".content-display",
                pin: false,
                scrub: true,
                start: "top top",
                end: "top+=754",
                markers: TOGGLE_MARKERS,
            }
        });

        timeline.from(".pagination-overlay",{
            opacity:0,
            duration: 0.0001,
        })
        timeline.to(".pagination-overlay",{
            opacity:0,
            duration: 0.01,
        }, "+=0.1")

    },[firstChanged])

    return (
        <>
            <div className="content-display">
                <div className="pagination-overlay" style={{
                    position: 'fixed',
                    bottom: '-2.5%',
                    right: '4.5%',
                    width: "20%",
                    transform: 'translateY(-50%)',

                    padding: '10px 10px 10px 20px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                    color: HIGHLIGHT_COLOR,
                    fontFamily: '"Be Vietnam Pro", sans-serif'
                }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                        {currentPageId + 1} / {MAX_PAGE_ID + 1}
                    </div>

                    <button
                        onClick={() => handleArrowClick(1)}
                        disabled={currentPageId === MAX_PAGE_ID}
                        style={{
                            background: 'none',
                            border: '1px solid currentColor',
                            color: 'currentColor',
                            padding: '8px',
                            margin: '5px 0',
                            cursor: currentPageId === MAX_PAGE_ID ? 'default' : 'pointer',
                            borderRadius: '50%',
                            opacity: currentPageId === MAX_PAGE_ID ? 0.5 : 1,
                            transition: 'opacity 0.3s'
                        }}
                    >
                        &#9650;
                    </button>

                    <button
                        onClick={() => handleArrowClick(-1)}
                        disabled={currentPageId === 0}
                        style={{
                            background: 'none',
                            border: '1px solid currentColor',
                            color: 'currentColor',
                            padding: '8px',
                            margin: '5px 0',
                            cursor: currentPageId === 0 ? 'default' : 'pointer',
                            borderRadius: '50%',
                            opacity: currentPageId === 0 ? 0.5 : 1,
                            transition: 'opacity 0.3s'
                        }}
                    >
                        &#9660;
                    </button>

                    <input
                        type="number"
                        min="1"
                        max={MAX_PAGE_ID + 1}
                        value={jumpInput}
                        onChange={(e) => setJumpInput(e.target.value)}
                        placeholder="Trang"
                        style={{
                            width: '45px',
                            padding: '5px',
                            margin: '10px 0 5px',
                            textAlign: 'center',
                            borderRadius: '5px',
                            border: `1px solid ${HIGHLIGHT_COLOR}`,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            color: HIGHLIGHT_COLOR,
                        }}
                    />
                    <button
                        onClick={handleJump}
                        style={{
                            padding: '5px 10px',
                            backgroundColor: HIGHLIGHT_COLOR,
                            color: '#000',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                        }}
                    >
                        Jump
                    </button>
                </div>

                {renderCurrentPage()}
            </div>
        </>
    );
};

export default ContentDisplayNew;