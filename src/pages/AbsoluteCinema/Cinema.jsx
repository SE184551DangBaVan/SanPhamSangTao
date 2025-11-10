import React, { useEffect, useRef } from "react";
import "./Cinema.css";
import { gsap } from "gsap";
import {useNavigate} from "react-router-dom";
import { PauseCircleFilledOutlined, PlayArrowRounded, DirectionsRun, HomeFilled } from "@mui/icons-material";

const Cinema = ({filmTitle, movie, transcript}) => {
  const navigate = useNavigate();
  
  const cineRef = useRef(null);
  const videoRef = useRef(null);
  const playButtonRef = useRef(null);
  const stopButtonRef = useRef(null);
  const homeButtonRef = useRef(null);

  useEffect(() => {
    const cine = cineRef.current;
    const video = videoRef.current;
    const playBtn = playButtonRef.current;
    const stopBtn = stopButtonRef.current;
    const homeBtn = homeButtonRef.current;
    const root = document.documentElement;
    const body = document.body;

    const playMovie = () => {
      playBtn.disabled = true;
      cine.classList.add("is-full");
      homeBtn.disabled = true;

      gsap.delayedCall(4, () => {
        stopBtn.disabled = false;
        gsap.to(video, { opacity: 1, duration: 1 });
        video.play();
        body.classList.toggle("is-black");
        root.style.setProperty("--yl", "rgba(239, 240, 218, .85)");
        root.style.setProperty("--yd", "rgba(213, 214, 194, .85)");
      });
    };

    const stopMovie = () => {
      stopBtn.disabled = true;
      gsap.to(video, { opacity: 0, duration: 1 });
      video.pause();
      video.currentTime = 0;
      body.classList.toggle("is-black");

      gsap.delayedCall(3, () => {
        cine.classList.remove("is-full");
        homeBtn.disabled = false;
        playBtn.disabled = false;
        root.style.setProperty("--yl", "#FAFDBA");
        root.style.setProperty("--yd", "#d5d799");
      });
    };

    playBtn.addEventListener("click", playMovie);
    stopBtn.addEventListener("click", stopMovie);

    return () => {
      playBtn.removeEventListener("click", playMovie);
      stopBtn.removeEventListener("click", stopMovie);
    };
  }, []);

  const renderChair = (_, index) => (
    <div className="chair flex" key={index}>
      <div className="chair-b flex">
        <div className="chair-b__front face"></div>
        <div className="chair-b__back face"></div>
        <div className="chair-b__right face"></div>
        <div className="chair-b__left face"></div>
        <div className="chair-b__top face"></div>
        <div className="chair-b__bottom face"></div>
      </div>
      <div className="chair-t flex">
        <div className="chair-t__front face"></div>
        <div className="chair-t__back face"></div>
        <div className="chair-t__right face"></div>
        <div className="chair-t__left face"></div>
        <div className="chair-t__top face"></div>
        <div className="chair-t__bottom face"></div>
      </div>
      <div className="chair-bs flex">
        <div className="chair-ba flex">
          <div className="chair-ba__front face"></div>
          <div className="chair-ba__back face"></div>
          <div className="chair-ba__right face"></div>
          <div className="chair-ba__left face"></div>
          <div className="chair-ba__top face"></div>
          <div className="chair-ba__bottom face"></div>
        </div>
        <div className="chair-ba flex">
          <div className="chair-ba__front face"></div>
          <div className="chair-ba__back face"></div>
          <div className="chair-ba__right face"></div>
          <div className="chair-ba__left face"></div>
          <div className="chair-ba__top face"></div>
          <div className="chair-ba__bottom face"></div>
        </div>
      </div>
    </div>
  );

  const renderRow = (id) => (
    <div className="chairs" id={id} key={id}>
      {Array.from({ length: 5 }).map(renderChair)}
    </div>
  );

  const renderLamp = (_, i) => (
    <div className="lamp flex" key={i}>
      <div className="lamp-t flex">
        <div className="lamp-t__front face"></div>
        <div className="lamp-t__back face"></div>
        <div className="lamp-t__right face"></div>
        <div className="lamp-t__left face"></div>
        <div className="lamp-t__top face"></div>
        <div className="lamp-t__bottom face"></div>
      </div>
      <div className="lamp-b flex">
        <div className="lamp-b__front face"></div>
        <div className="lamp-b__back face"></div>
        <div className="lamp-b__right face"></div>
        <div className="lamp-b__left face"></div>
        <div className="lamp-b__top face"></div>
        <div className="lamp-b__bottom face"></div>
      </div>
    </div>
  );

  return (
    <>
      <div className="cinema-main flex" id="cinema-main">
        <div className="cine" id="cine" ref={cineRef}>
          <div className="floor flex">
            <div className="floor__front face"></div>
            <div className="floor__back face"></div>
            <div className="floor__right face"></div>
            <div className="floor__left face"></div>
            <div className="floor__top face">
              {[1, 2, 3, 4, 5].map(renderRow)}
            </div>
            <div className="floor__bottom face"></div>
          </div>

          <div className="floor-a flex">
            <div className="floor-a__front face"></div>
            <div className="floor-a__back face"></div>
            <div className="floor-a__right face"></div>
            <div className="floor-a__left face"></div>
            <div className="floor-a__top face"></div>
            <div className="floor-a__bottom face"></div>
          </div>

          <div className="steps flex">
            {["a", "b", "c"].map((step) => (
              <div className={`step-${step} flex`} key={step}>
                <div className={`step-${step}__front face`}></div>
                <div className={`step-${step}__back face`}></div>
                <div className={`step-${step}__right face`}></div>
                <div className={`step-${step}__left face`}></div>
                <div className={`step-${step}__top face`}></div>
                <div className={`step-${step}__bottom face`}></div>
              </div>
            ))}
          </div>

          <div className="steps steps-b flex">
            {["a", "b", "c"].map((step) => (
              <div className={`step-${step} flex`} key={`b-${step}`}>
                <div className={`step-${step}__front face`}></div>
                <div className={`step-${step}__back face`}></div>
                <div className={`step-${step}__right face`}></div>
                <div className={`step-${step}__left face`}></div>
                <div className={`step-${step}__top face`}></div>
                <div className={`step-${step}__bottom face`}></div>
              </div>
            ))}
          </div>

          <div className="wall-l flex">
            <div className="wall-l__front face"></div>
            <div className="wall-l__back face"></div>
            <div className="wall-l__right face flex"><span className="movie-title">{filmTitle}</span></div>
            <div className="wall-l__left face"></div>
            <div className="wall-l__top face"></div>
            <div className="wall-l__bottom face"></div>
          </div>

          <div className="wall-r flex">
            <div className="wall-r__front face flex">
              <div className="cinema-screen flex">
                <video ref={videoRef} width="100%"
                  preload="auto"
                  controls={false}
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate noremoteplayback"
                  onSeeked={(e) => { e.target.currentTime = 0; }}>
                  <source
                    src={movie}
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="wall-r__back face"></div>
            <div className="wall-r__right face"></div>
            <div className="wall-r__left face"></div>
            <div className="wall-r__top face"></div>
            <div className="wall-r__bottom face"></div>
          </div>

          <div className="lamps">{Array.from({ length: 3 }).map(renderLamp)}</div>
        </div>
      </div>

      <div className="cinema-buttons">
        <button className="button" id="play" ref={playButtonRef}>
          Phát Phim{" "}
          <PlayArrowRounded className="button__icon"/>
        </button>
        <button className="button" id="stop" ref={stopButtonRef} disabled>
          Ngừng Phim{" "}
          <PauseCircleFilledOutlined className="button__icon"/>
        </button>
      </div>

      <button className='home-button cinema' ref={homeButtonRef} onClick={() => navigate("/")}>
        <HomeFilled className='home-button-icons'/>
          <span className='home-button-text'>
            Trang chủ
          </span>
        <DirectionsRun className='home-button-icons'/>
      </button>
      <div className="home-button cinema lower-layer" title="Ngừng phim để trở về trang chủ" />

      <div className="credit-block">
        Cinema design Credits:
        <span className="credits" content="to https://github.com/ricardoolivaalonso">to https://github.com/ricardoolivaalonso</span>
      </div>

      {transcript}
    </>
  );
};

export default Cinema;