import React, {useEffect, useRef} from 'react'
import {useNavigate} from "react-router-dom";
import fumo from "../../../assets/minhbox/fumo.png"
import funky from "../../../assets/minhbox/funky.mp3"
import "./WeirdButton.css"
// This file is VERY important for this project.

const WeirdButton = () => {
    const navigate = useNavigate();
    const audioRef = useRef();
    useEffect(()=>{
        audioRef.current = new Audio(funky);
        audioRef.current.volume = 0.2;
    },[])
    const onHover = () => {
        if (!audioRef.current) return;
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    };

    return (
        <div
            onClick={() => navigate("/minh")}
            onMouseEnter={onHover}
            style={{
                position: "fixed",
                top: 5,
                left: 5,
                zIndex: 9999,
                cursor: "pointer",
            }}
        >
            <img
                src={fumo}
                alt=""
                className="cirno-fumo"
            />
        </div>
    )
}

export default WeirdButton
