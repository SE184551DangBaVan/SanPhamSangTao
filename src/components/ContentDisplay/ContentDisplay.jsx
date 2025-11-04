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

        textSplitTitlePage1 = SplitText.create("#content-page-1 h2", {
            type: "chars, lines",
        })

        timeline1.from(textSplitTitlePage1.chars, {
            yPercent: "random([50,-50])",
            opacity: 0,
            stagger: {
                amount: 0.06,
                from: "random",
            },
            duration: 0.9,
        })
            .to("#content-page-1 h2", {
                fontSize: "2.3rem",
                top: "2rem",
                left: "2.5rem",
                xPercent: 0,
                yPercent: 0,
                duration: 0.6,
        }, "+=1.4")
        contentPage1.forEach((p)=>{
            let textSplit = SplitText.create(p, {
                type: "words, lines",
            })
            timeline1.from(textSplit.words,{
                yPercent: "random([25,-25])",
                duration: 0.3,
                opacity: 0,
                stagger: 0.05,
            })
            timeline1.to(p.querySelectorAll("span"), {
                duration: 0.3,
                color: "red",
                fontWeight: "bold",
                fontSize: "+=0.2rem"
            })
        })


    }, [])



    return (
    <>
        <div className="content-display">
            <div id="content-page-1" className="content-page">
                <div className="board-frame">
                    <h2 style={{
                        position:"absolute",
                        top: "calc(50% - 2rem)",
                        left: "calc(8rem)",
                        fontSize:"4rem",
                    }}> Bối cảnh trước Đổi mới (1975 – 1986)</h2>

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
                </div>
            </div>

        </div>
    </>
  )
}

export default ContentDisplay
