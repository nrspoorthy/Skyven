"use client";

import { useState } from "react";
import HeroAnimation from "@/components/HeroAnimation";
import ResidencesSection from "@/components/ResidencesSection";

export default function Home() {
  const [scrollReady, setScrollReady] = useState(false);

  return (
    <div className="relative">

      {/* HERO — sticky z-10, stays pinned while ResidencesSection scrolls over */}
      <HeroAnimation onScrollReady={() => setScrollReady(true)} />

      {/* RESIDENCES — only visible + scrollable after video2 finishes first play */}
      <div
        className="relative z-20"
        style={{
          visibility:    scrollReady ? "visible"   : "hidden",
          pointerEvents: scrollReady ? "auto"       : "none",
          // height:0 collapses it so it doesn't affect scroll height until ready
          height:        scrollReady ? "auto"       : 0,
          overflow:      scrollReady ? "visible"    : "hidden",
        }}
      >
        <ResidencesSection />
      </div>

    </div>
  );
}