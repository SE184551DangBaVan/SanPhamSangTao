import React, {useState} from 'react'
import gsap from "gsap"
import {SplitText} from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import "./ContentDisplay.css"
// Import images
import boiCanhTruocDoiMoi from "../../assets/boi-canh-truoc-doi-moi.jpg";
import quanHeVietNamHoaKy from "../../assets/binh-thuong-hoa-quan-he-viet-nam-hoa-ky.png"
import daiHoiVI from "../../assets/dai-hoi-VI.png"
import giaNhapAsean from "../../assets/gia-nhap-asean-1995.png"
import nguyenVanLinh from "../../assets/nguyen-van-linh.png"
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, SplitText);

const TOGGLE_MARKERS = true;
const HIGHLIGHT_COLOR = "#FFD700";
const MAX_PAGE_ID = 9;
const contentPageToggleAction= "play reset play reset"

// Individual Page Components
const ContentPage1 = () => {
    const containerRef = React.useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current, // <--- Use the component's ID as the trigger
                    // 'start' defines when the timeline begins playing.
                    // 'top top' means when the top of the element hits the top of the viewport.
                    start: "top top", // Keep this for the pinned section
                    end: "bottom top",
                    pin: true,
                    markers: TOGGLE_MARKERS, // Keep markers for debugging
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
                    trigger: containerRef.current, // <--- Use the component's ID as the trigger
                    // 'start' defines when the timeline begins playing.
                    // 'top top' means when the top of the element hits the top of the viewport.
                    start: "top top", // Keep this for the pinned section
                    end: "bottom top",
                    pin: true,
                    markers: TOGGLE_MARKERS, // Keep markers for debugging
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

// Helper function for standard page animations (pages 3-4 and others with similar structure)
const animateStandardPage = (containerRef, pageId) => {
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current, // <--- Use the component's ID as the trigger
                // 'start' defines when the timeline begins playing.
                // 'top top' means when the top of the element hits the top of the viewport.
                start: "top top", // Keep this for the pinned section
                end: "bottom top",
                pin: true,
                markers: TOGGLE_MARKERS, // Keep markers for debugging
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

// Similar pattern for pages 5-10 - I'll create a few more as examples

const ContentPage5 = () => {
    const containerRef = React.useRef(null);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current, // <--- Use the component's ID as the trigger
                    // 'start' defines when the timeline begins playing.
                    // 'top top' means when the top of the element hits the top of the viewport.
                    start: "top top", // Keep this for the pinned section
                    end: "bottom top",
                    pin: true,
                    markers: TOGGLE_MARKERS, // Keep markers for debugging
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

        useGSAP(() => {
            const ctx = gsap.context(() => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current, // <--- Use the component's ID as the trigger
                        // 'start' defines when the timeline begins playing.
                        // 'top top' means when the top of the element hits the top of the viewport.
                        start: "top top", // Keep this for the pinned section
                        end: "bottom top",
                        pin: true,
                        markers: TOGGLE_MARKERS, // Keep markers for debugging
                        toggleActions: contentPageToggleAction,
                    }
                });

                // 1. Main Title Animation (Quick Fade In to Top Center)
                tl.fromTo("#content-page-6 h2.main-title-small", { opacity: 0 }, {
                    opacity: 1,
                    duration: 0.2,
                }, 0); // Start immediately

                // 2. Sub-Title Animation (Move from Left)
                const textSplitSubTitlePage6 = new SplitText("#content-page-6 h3.sub-title", {
                    type: "chars, lines",
                })

                tl.from(textSplitSubTitlePage6.chars, {
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
        }, []);
        return(
            <div id="content-page-6" className="content-page" ref={containerRef}>
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
        )
    }


    const ContentPage7 = ()=>{
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

                tl.fromTo("#content-page-7 h2.main-title-small", { opacity: 0 }, {
                    opacity: 1,
                    duration: 0.2,
                }, 0);

                const textSplitSubTitlePage7 = new SplitText("#content-page-7 h3.sub-title", {
                    type: "chars, lines",
                })

                tl.from(textSplitSubTitlePage7.chars, {
                    xPercent: -150,
                    opacity: 0,
                    stagger: 0.05,
                    duration: 0.5,
                }, "+=0.1");

                const contentPage7Paragraphs = Array.from(document.querySelectorAll("#content-page-7 p"));

                contentPage7Paragraphs.forEach((p, index)=>{
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
        }, []);
        return(
            <div id="content-page-7" className="content-page" ref={containerRef}>
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
        )
    }

    const ContentPage8 = () =>{
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

                tl.fromTo("#content-page-8 h2.main-title-small", { opacity: 0 }, {
                    opacity: 1,
                    duration: 0.2,
                }, 0);

                // 2. Sub-Title Animation (Move from Left)
                const textSplitSubTitlePage8 = new SplitText("#content-page-8 h3.sub-title", {
                    type: "chars, lines",
                })

                tl.from(textSplitSubTitlePage8.chars, {
                    xPercent: -150,
                    opacity: 0,
                    stagger: 0.05,
                    duration: 0.5,
                }, "+=0.1");

                const contentPage8Paragraphs = Array.from(document.querySelectorAll("#content-page-8 p"));

                contentPage8Paragraphs.forEach((p, index)=>{
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
        }, []);

        return(
            <div id="content-page-8" className="content-page" ref={containerRef}>
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

    // Render current page only
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
            duration: 0.01,
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
                    top: '50%',
                    right: '2%',
                    width: "7.5%",
                    transform: 'translateY(-50%)',

                    padding: '10px 10px 10px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                    color: HIGHLIGHT_COLOR,
                    fontFamily: '"Be Vietnam Pro", sans-serif'
                }}>
                    <div style={{ fontSize: '1.2rem', marginBottom: '10px', fontWeight: '600' }}>
                        {currentPageId + 1} / {MAX_PAGE_ID + 1}
                    </div>

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
                        &#9650;
                    </button>

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

                {/* Render only current page */}
                {renderCurrentPage()}
            </div>
        </>
    );
};

export default ContentDisplayNew;