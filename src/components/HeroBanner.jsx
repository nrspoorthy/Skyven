"use client";
import { useEffect, useState } from "react";
import { Playfair_Display, Karla } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"] });
const karla    = Karla({ subsets: ["latin"], weight: ["400", "600"] });
export default function HeroBanner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full h-[650px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/about-banner.jpg"
          alt="Skyven Tower"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom w-full">
          <h1
            className={`${playfair.className} text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight max-w-xl transition-all duration-700 delay-200 ${
              loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            The Most Iconic
            <br />
            Tower in the Sky.
          </h1>
        </div>
      </div>
    </section>
  );
}