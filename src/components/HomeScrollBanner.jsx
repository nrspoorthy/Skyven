"use client";


import { Playfair_Display, Karla } from "next/font/google";


const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"] });
const karla    = Karla({ subsets: ["latin"], weight: ["400", "600"] });

export default function HomeScrollBanner({ showVideo2, showText2, video2Ref, onVideoLoop }) {
  return (
    <>
      {/* VIDEO 2 */}
      <div>
      <div
        className={`absolute inset-0 z-20 transition-opacity duration-[1000ms] ease-in-out
        ${showVideo2 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        <video
          ref={video2Ref}
          src="/assets/video2.mp4"
          preload="auto"
          muted
          playsInline
          onEnded={onVideoLoop}
          className="w-full h-full object-cover"
        />
      </div>

      {/* VIDEO 2 TEXT */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-[25] text-white">
        <div className="container-custom">
          <h2
            className={`${playfair.className}
            transition-all duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
            ${showText2 ? "opacity-100 blur-0" : "opacity-0 blur-md"}`}
            style={{ fontSize: '72px', lineHeight: '72px', fontWeight: 400 }}
          >
            Uninterrupted Views.<br />Absolute Peace.
          </h2>
          <p
            className={`${karla.className} mt-4
            transition-all duration-[2400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
            ${showText2 ? "opacity-100 blur-0" : "opacity-0 blur-md"}`}
            style={{ fontSize: '16px', lineHeight: '20px', fontWeight: 600, color: '#FFFFFF' }}
          >
            Ultra-Luxury for you to own in Hyderabad. Amidst the clouds, 755 feet high.
          </p>
        </div>
      </div>

      {/* NAVBAR */}
      <div
        className={`fixed top-0 left-0 right-0 z-50
        transition-all duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${showText2 ? "opacity-100 blur-0" : "opacity-0 blur-sm pointer-events-none"}`}
      >
        <div className="container-custom flex items-center justify-between py-6">
          <button className="flex items-center gap-2 cursor-pointer text-white text-lg font-medium tracking-[2px] uppercase">
            <span className="flex flex-col gap-[5px]">
              <span className="block w-5 h-[1.5px] bg-white" />
              <span className="block w-5 h-[1.5px] bg-white" />
            </span>
            Menu
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 text-white text-center">
            <img src="/assets/logo.svg" alt="Skyven" className="h-14 w-auto mx-auto" />
          </div>
          <button className="border cursor-pointer border-white text-white text-sm tracking-[2px] rounded-md uppercase px-5 py-2 hover:bg-white hover:text-black transition-colors duration-300">
            Enquire Now
          </button>
        </div>
      </div>

      {/* OVERVIEW PANEL — bottom right */}
      <div
        className={`fixed bottom-8 left-0 right-0 z-50
        transition-all duration-[2400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${showText2 ? "opacity-100 blur-0" : "opacity-0 blur-sm pointer-events-none"}`}
      >
        <div className="container-custom flex justify-end">
          <div className="bg-white/90 backdrop-blur-sm flex items-center gap-4 px-6 py-4 min-w-[220px]">
            <span className="text-2xl font-light text-gray-400">01</span>
            <span className="w-[1px] h-8 bg-gray-300" />
            <span className="text-sm tracking-[2px] uppercase text-gray-700 font-medium">Overview</span>
            <span className="ml-auto text-xl text-gray-400 font-light">+</span>
          </div>
        </div>
      </div>

      {/* SCROLL TO EXPLORE — only after video2 completes first loop */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 text-white text-[11px] tracking-[3px] uppercase
        transition-all duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${showText2 ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        Scroll to explore
      </div>
</div>
      {/* RESIDENCES — z-20, slides over the hero on scroll */}
     
    </>
  );
}