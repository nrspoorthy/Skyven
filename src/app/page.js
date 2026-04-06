"use client";

import { useState } from "react";
import HeroAnimation from "@/components/HeroAnimation";
import ResidencesSection from "@/components/ResidencesSection";
import NavBar from "@/components/NavBar";
import VideoTextMask from "@/components/VideoTextMask";

export default function Home() {
  const [scrollReady, setScrollReady] = useState(false);

  return (
    <div className="relative">
      
        
     
      <HeroAnimation onScrollReady={() => setScrollReady(true)} />

      {/* RESIDENCES — only visible + scrollable after video2 finishes first play */}
      <div
        className="relative z-20"
        style={{
          visibility:    scrollReady ? "visible"   : "hidden",
          pointerEvents: scrollReady ? "auto"       : "none",
          height:        scrollReady ? "auto"       : 0,
          overflow:      scrollReady ? "visible"    : "hidden",
        }}
      >
        
        <ResidencesSection />
        
      </div>

    </div>
  );
}