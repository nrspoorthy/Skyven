"use client";

import { useEffect, useState } from "react";

const RoomIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
    <rect x="8" y="14" width="32" height="22" rx="1" stroke="#6B6B6B" strokeWidth="1.5" />
    <rect x="14" y="8" width="20" height="8" rx="1" stroke="#6B6B6B" strokeWidth="1.5" />
    <line x1="8" y1="22" x2="40" y2="22" stroke="#6B6B6B" strokeWidth="1.5" />
    <line x1="24" y1="22" x2="24" y2="36" stroke="#6B6B6B" strokeWidth="1.5" />
    <line x1="16" y1="14" x2="16" y2="8" stroke="#6B6B6B" strokeWidth="1.5" />
    <line x1="32" y1="14" x2="32" y2="8" stroke="#6B6B6B" strokeWidth="1.5" />
  </svg>
);

const FacilityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0">
    <rect x="2" y="2" width="9" height="9" rx="0.5" stroke="#9A7A4A" strokeWidth="1.2" strokeDasharray="2 1" />
    <rect x="13" y="2" width="9" height="9" rx="0.5" stroke="#9A7A4A" strokeWidth="1.2" strokeDasharray="2 1" />
    <rect x="2" y="13" width="9" height="9" rx="0.5" stroke="#9A7A4A" strokeWidth="1.2" strokeDasharray="2 1" />
    <rect x="13" y="13" width="9" height="9" rx="0.5" stroke="#9A7A4A" strokeWidth="1.2" strokeDasharray="2 1" />
  </svg>
);

const MODAL_DATA = {
  Penthouse: {
    brand: "SKYVEN",
    title: "THE PENTHOUSE",
    description:
      "From sunrise swims to starlit observatories, every detail at Skyven penthouse apartments is designed to elevate the everyday into the extraordinary.",
    specs: ["57th Floor", "11,790–12,556 SFT", "Duplex", "Ultra Modern"],
    facilities: [
      "Panoramic view with private sky decks",
      "High ceilings and exclusive elevator access",
      "Ultra private and opulent living",
      "Private terraces for elevated Treasure",
      "Breathtaking skyline views",
    ],
    images: [
      "/assets/penthouse-1.jpg",
      "/assets/penthouse-2.jpg",
      "/assets/penthouse-3.jpg",
      "/assets/penthouse-4.jpg",
    ],
  },
  "Sky Villas": {
    brand: "SKYVEN",
    title: "SKY VILLAS",
    description:
      "Set high within the tower, Sky Villas offer the scale of a private home with the vantage of elevation — for those who prefer openness, privacy, and an uninterrupted perspective.",
    specs: ["High Floors", "Duplex Style", "Private Sit-outs", "Dual Maid Rooms"],
    facilities: [
      "Duplex style planning across two levels",
      "Dedicated family lounge",
      "Private sit-outs with panoramic views",
      "Dual maid rooms",
      "Exclusive elevator access",
    ],
    images: [
      "/assets/skyvilla-1.jpg",
      "/assets/skyvilla-2.jpg",
      "/assets/skyvilla-3.jpg",
      "/assets/skyvilla-4.jpg",
    ],
  },
  "4 BHK": {
    brand: "SKYVEN",
    title: "4 BHK RESIDENCES",
    description:
      "Refined living at elevation. Sky Suites are crafted for those who seek the intimacy of a bespoke home with the convenience of a full-service tower.",
    specs: ["Corner Units", "Open Layouts", "Private Terrace", "Premium Finish"],
    facilities: [
      "Corner unit panoramas on two sides",
      "Premium material palette throughout",
      "Flexible open floor plan",
      "Private terrace access",
      "Full-service tower amenities",
    ],
    images: [
      "/assets/pent1.png",
      "/assets/pent2.png",
      "/assets/pent3.png",
      "/assets/pent4.png",
    ],
  },
};

export default function ResidenceModal({ cardTitle, onClose }) {
  const data = MODAL_DATA[cardTitle] ?? MODAL_DATA["Penthouse"];
  const { brand, title, description, specs, facilities, images } = data;

  const [slideIndex, setSlideIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  /* Popup entrance — start invisible, trigger after mount */
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  /* Animated close — fade out first, then unmount */
  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 500);
  };

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  /* Auto-advance images */
  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % images.length);
      setAnimKey((k) => k + 1);
    }, 3800);
    return () => clearInterval(id);
  }, [images.length]);

  const goTo = (i) => {
    setSlideIndex(i);
    setAnimKey((k) => k + 1);
  };

  return (
    <>
      <style>{`
        @keyframes slideFromBottom {
          from { transform: translateY(100%); }
          to   { transform: translateY(0%);   }
        }
        .img-slide-up {
          animation: slideFromBottom 0.95s cubic-bezier(0.77, 0, 0.18, 1) both;
        }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 z-[99] bg-black/50 backdrop-blur-sm transition-opacity duration-500"
        style={{ opacity: visible ? 1 : 0 }}
      />

      {/* ── FULL-WIDTH MODAL — slides up from bottom ── */}
      <div
        className="fixed inset-x-0 bottom-0 z-[100] flex flex-col bg-white"
        style={{
          /* Occupies full viewport height */
          height: "100vh",
          /* Entrance: translates up from below */
          transform: visible ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.55s cubic-bezier(0.76, 0, 0.24, 1)",
        }}
      >

        {/* ══════════════════════════════════════════
            HEADER BAR — SKYVEN left · X right
            Full width, sits above left+right split
            ══════════════════════════════════════════ */}
        <div className="flex items-center justify-between px-8 border-b border-gray-100 flex-shrink-0" style={{ height: 56 }}>
          <span
            className="text-[13px] font-semibold tracking-[0.25em] text-gray-800"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {brand}
          </span>

          <button
            onClick={handleClose}
            aria-label="Close"
            className="w-9 h-9 border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors duration-200"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 1L11 11M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* ══════════════════════════════════════════
            BODY — left content panel + right images
            Exactly your original layout preserved
            ══════════════════════════════════════════ */}
        <div className="flex flex-1 overflow-hidden min-h-0">

          {/* ── LEFT PANEL ── */}
          <div className="bg-white w-[45%] h-full overflow-y-auto">
            <div className="container-custom flex flex-col py-8">

              {/* Title */}
              <h2
                className="text-[2rem] font-light tracking-wide text-gray-900 mb-3"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                {title}
              </h2>

              {/* Description */}
              <p className="text-[13px] text-gray-500 leading-[1.75] mb-5 max-w-[380px]">
                {description}
              </p>

              <hr className="border-gray-200 mb-5" />

              {/* Size & Rooms */}
              <p className="text-[10px] font-bold tracking-[0.22em] text-[#9A7A4A] uppercase mb-3">
                SIZE AND ROOMS
              </p>

              <div className="grid grid-cols-4 gap-2 mb-5">
                {specs.map((s) => (
                  <div key={s} className="flex flex-col items-center gap-2">
                    <div className="w-[50px] h-[50px] rounded-full border border-gray-300 flex items-center justify-center">
                      <RoomIcon />
                    </div>
                    <span className="text-[10px] text-gray-500 text-center leading-tight">{s}</span>
                  </div>
                ))}
              </div>

              <hr className="border-gray-200 mb-5" />

              {/* Facilities */}
              <p className="text-[10px] font-bold tracking-[0.22em] text-[#9A7A4A] uppercase mb-3">
                FACILITIES
              </p>

              <ul className="flex flex-col gap-[9px] mb-6">
                {facilities.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <FacilityIcon />
                    <span className="text-[13px] text-gray-600 leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex gap-3 flex-wrap">
                <button className="flex items-center gap-2 border border-[#9A7A4A] text-[#9A7A4A] text-[10px] tracking-[0.18em] uppercase px-5 py-3 hover:bg-[#9A7A4A] hover:text-white transition-colors duration-200">
                  VIEW FLOOR PLAN
                  <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                    <path d="M0 4.5H13M9 1L13 4.5L9 8" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </button>
                <button className="flex items-center gap-2 border border-[#9A7A4A] text-[#9A7A4A] text-[10px] tracking-[0.18em] uppercase px-5 py-3 hover:bg-[#9A7A4A] hover:text-white transition-colors duration-200">
                  VIEW GALLERY
                  <svg width="14" height="9" viewBox="0 0 14 9" fill="none">
                    <path d="M0 4.5H13M9 1L13 4.5L9 8" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </button>
              </div>

            </div>
          </div>

          {/* ── RIGHT PANEL — image gallery ── */}
          <div className="relative flex-1 h-full overflow-hidden bg-gray-900">

            {/* Image stack — bottom-to-top slide */}
            {images.map((src, i) => (
              <div
                key={i}
                className={`absolute inset-0 ${i === slideIndex ? "z-10" : "z-0"}`}
              >
                <img
                  key={i === slideIndex ? `active-${animKey}` : `idle-${i}`}
                  src={src}
                  alt={`${title} view ${i + 1}`}
                  className={`w-full h-full object-cover${i === slideIndex ? " img-slide-up" : ""}`}
                />
              </div>
            ))}

            {/* Top shadow */}
            <div
              className="absolute top-0 left-0 right-0 z-20 pointer-events-none"
              style={{
                height: "160px",
                background: "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0) 100%)",
              }}
            />

            {/* Dot indicators */}
            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-[10px] z-30">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-[7px] h-[7px] rounded-full border transition-all duration-300 ${
                    i === slideIndex
                      ? "bg-white border-white scale-125"
                      : "bg-transparent border-white/50"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}