import React from 'react'
import "./ContentDisplay.css"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import {useGSAP} from "@gsap/react";

import boiCanhTruocDoiMoi from "../../assets/boi-canh-truoc-doi-moi.jpg";
gsap.registerPlugin(ScrollTrigger, SplitText);

// Optimization? what is that? :troll:

const ContentDisplay = () => {


    const contentPageToggleAction= "play reset play reset"

    let contentPage1 = [];

    useGSAP(() => {
        let textSplitTitlePage1 = null
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

        textSplitTitlePage1 = new SplitText("#content-page-1 h2", {
            type: "chars, lines",
        })

        timeline1.from(textSplitTitlePage1.chars, {
            y: -100,
            opacity: 0,
            stagger: {
                amount: 0.5,
                from: "center",
            },
            duration: 0.7,
            ease: "bounce.out",
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
                duration: 0.4,
                opacity: 0,
                stagger: 0.08,
            }, index === 0 ? "+=0.3" : "+=0.5")
            timeline1.to(p.querySelectorAll("span"), {
                duration: 0.5,
                color: "#FFA500",
                fontWeight: "bold",
                fontSize: "+=0.1rem",
                ease: "power2.out"
            }, "+=0.15")
        })

        timeline1.from(".image-container",{
            opacity: 0,
            rotate: 360,
            x: 500,
            duration: 0.8,
            ease: "power2.out"
        },"-=0.8")

        timeline1.to(".image-container",{
            maskSize: 500,
            duration: 1.2,
            ease: "power2.inOut"
        }, "+=0.15")
        const tsDescPage1 = new SplitText("#content-page-1 .image-description",{
            type: "lines",
        })
        timeline1.from(tsDescPage1.lines, {
            opacity: 0,
            yPercent: 100,
            ease: "power2.out",
            stagger: 0.15,
        }, "-=0.3")


    }, [])



    return (
    <>
        <div className="content-display">
            <div id="content-page-1" className="content-page">
                <div className="board-frame">
                    <h2 style={{
                        position:"absolute",
                        top: "calc(50%)",
                        left: "calc(50%)",
                        transform: "translate(-50%, -50%)",
                        textWrap: "nowrap",
                        width: "auto",
                        fontSize:"4rem",
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

        </div>
    </>
  )
}

export default ContentDisplay
