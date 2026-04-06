"use client";

import { useEffect, useRef, useState } from "react";
import { Playfair_Display, Karla } from "next/font/google";
import HomeScrollBanner from "./HomeScrollBanner";
import CloudThreeJS from "./CloudThreeJS";
import NavBar from "./NavBar";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"] });
const karla    = Karla({ subsets: ["latin"], weight: ["400", "600"] });

export default function HeroAnimation({ onScrollReady }) {
  const [showOverlay,  setShowOverlay]  = useState(true);
  const [start,        setStart]        = useState(false);
  const [showVideo,    setShowVideo]    = useState(false);
  const [showText,     setShowText]     = useState(false);
  const [showVideo2,   setShowVideo2]   = useState(false);
  const [showText2,    setShowText2]    = useState(false);
  const video2Ref = useRef(null);

  useEffect(() => {
    const t0 = setTimeout(() => setShowOverlay(false), 800);
    const t1 = setTimeout(() => setStart(true),        1600);
    const t2 = setTimeout(() => setShowVideo(true),    1800);
    const t3 = setTimeout(() => setShowText(true),     3200);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  function handleVideoLoop() {
    // video2 finished first play — tell parent to reveal ResidencesSection
    onScrollReady?.();
  }

  function handleEnter() {
    const v = video2Ref.current;
    if (v) { v.currentTime = 0; v.play(); }
    setShowVideo2(true);
    setTimeout(() => setShowText2(true), 3200);
  }

  return (
    <div className="sticky top-0 z-10">
      <NavBar />
      <section className="relative w-full h-screen overflow-hidden bg-white">

        {/* WHITE OVERLAY */}
        <div className={`absolute inset-0 bg-white z-40 transition-opacity duration-700
          ${showOverlay ? "opacity-100" : "opacity-0 pointer-events-none"}`} />

        {/* VIDEO 1 */}
        <div
          className={`absolute inset-0 z-10 overflow-hidden
          transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${showVideo ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
          style={{ clipPath: showVideo ? "inset(0% 0% 0% 0%)" : "inset(50% 0% 50% 0%)" }}
        >
          {/* <CloudThreeJS className="w-full h-full" /> */}
          <video src="/assets/video.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
        </div>

        {/* VIDEO 2 SCENE */}
        <HomeScrollBanner
          showVideo2={showVideo2}
          showText2={showText2}
          video2Ref={video2Ref}
          onVideoLoop={handleVideoLoop}
        />

        {/* SPLIT CARDS */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div className={`absolute top-0 left-0 w-full h-1/2 flex flex-col items-center justify-center bg-white
            transition-transform duration-[1800ms] ease-[cubic-bezier(0.76,0,0.24,1)]
            ${start ? "-translate-y-full" : "translate-y-0"}`}>
            <img src="/assets/infra.png" alt="infra" className="w-[240px] mb-5" />
            <p className="text-[11px] tracking-[3px] text-gray-500 uppercase">Foundation on values</p>
            <div className="absolute bottom-0 left-0 h-[0.01em] w-full bg-[#E5C38C]" />
          </div>
          <div className={`absolute bottom-0 left-0 w-full h-1/2 flex flex-col items-center justify-center bg-white
            transition-transform duration-[1800ms] ease-[cubic-bezier(0.76,0,0.24,1)]
            ${start ? "translate-y-full" : "translate-y-0"}`}>
            <div className="absolute top-0 left-0 w-full h-[0.01em] bg-[#E5C38C]" />
            <img src="/assets/pvr.png" alt="pvr" className="w-[220px] mb-4 mt-5" />
            <p className="text-[13px] text-gray-500">An offering in the sky by E infra and PVR</p>
          </div>
        </div>

        {/* VIDEO 1 TEXT */}
        <div className={`absolute bottom-[18%] left-0 right-0 text-center text-white z-20
          transition-opacity duration-[800ms] ease-in-out
          ${showVideo2 ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <div className="container-custom flex flex-col items-center">
            <h1 className={`${playfair.className}
              !text-[100px] leading-[100px] tracking-[0.12em] uppercase
              transition-all duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
              ${showText ? "opacity-100 blur-0" : "opacity-0 blur-md"}`}>
              BEYOND THE SKYLINE
            </h1>
            <p className={`${karla.className}
              mt-6 text-[24px] leading-[32px] max-w-[620px] mx-auto opacity-80
              transition-all duration-[2400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
              ${showText ? "opacity-100 blur-0" : "opacity-0 blur-md"}`}>
              A vantage reserved for those who prefer distance from the ordinary.
              An address defined by height, horizon, and quiet command.
            </p>
            <button
              onClick={handleEnter}
              className={`mt-8 px-8 py-3 border border-white text-sm tracking-[2px]
              transition-all duration-[2000ms] ease-[cubic-bezier(0.22,1,0.36,1)]
              ${showText ? "opacity-100" : "opacity-0"}
              hover:bg-white hover:text-black`}>
              ENTER EXPERIENCE
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}