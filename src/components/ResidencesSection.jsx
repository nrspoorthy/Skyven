"use client";

import Image from "next/image";
import { Playfair_Display, Karla } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400"] });
const karla    = Karla({ subsets: ["latin"], weight: ["400", "600"] });

/* ─── DEFAULT CONTENT — override via props on any page ─────────── */
const DEFAULT_HEADER = {
  title: "Sky Residences & Villas",
  subtitle:
    "From world-class amenities to sky-level villas, Skyven luxury residences offer an unmatched residential experience that's truly above and beyond.",
};

const DEFAULT_CARDS = [
  {
    title: "Penthouse",
    description:
      "Positioned at the summit, this residence offers expansive volumes, private access, and uninterrupted skyline views. Designed for those who value discretion as much as distinction.",
    features: [
      "Private elevator entry",
      "Generous sit-outs",
      "Full height glazing",
      "Grand ceiling volumes",
    ],
    image: "/assests/ResidencesSection1.jpg",
    buttonLabel: "Explore Inside",
    buttonHref: "#",
  },
  {
    title: "Sky Villas",
    description:
      "Set high within the tower, Sky Villas offer the scale of a private home with the vantage of elevation. Especially for those who prefer openness, privacy, and an uninterrupted perspective.",
    features: [
      "Duplex style planning",
      "Private sit-outs",
      "Dedicated family lounge",
      "Dual maid rooms",
    ],
    image: "/assests/ResidencesSection2.jpg",
    buttonLabel: "Explore Inside",
    buttonHref: "#",
  },
  {
    title: "Sky Suites",
    description:
      "Refined living at elevation. Sky Suites are crafted for those who seek the intimacy of a bespoke home with the convenience of a full-service tower.",
    features: [
      "Corner unit panoramas",
      "Premium material palette",
      "Flexible open layouts",
      "Private terrace access",
    ],
    image: "/assests/ResidencesSection3.jpg",
    buttonLabel: "Explore Inside",
    buttonHref: "#",
  },
];

/* ═══════════════════════════════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════════════════════════════ */
export default function ResidencesSection({
  header = DEFAULT_HEADER,
  cards  = DEFAULT_CARDS,
}) {
  const total = cards.length;

  // Header height ~180px — subtract from card content so nothing overflows
  const HEADER_H = 140;

  return (
    <section style={{ backgroundColor: "#FFFFFD" }}>

      {/*
        ── SCROLL DRIVER ──────────────────────────────────────────────
        cards.length × 100vh gives scroll budget for stacking.
        The header is a separate sticky layer at z-index 9 so it
        always stays visible while cards stack beneath it.
      */}
      <div style={{ height: `${total * 100}vh`, position: "relative" }}>

        {/* ── HEADER sticky — always visible at top, z below cards ── */}
        <div
          className="sticky top-0 w-full text-center"
          style={{
            zIndex: 9,
            backgroundColor: "#FFFFFD",
            paddingTop: "2.5rem",
            paddingBottom: "1.5rem",
          }}
        >
          <div className="container-custom">
            <h2
              className={`${playfair.className} text-[44px] leading-[1.1] text-[#2a2a2a]`}
            >
              {header.title}
            </h2>
            <p
              className={`${karla.className} mt-4 text-[15px] leading-[1.7] text-[#666] max-w-[660px] mx-auto`}
            >
              {header.subtitle}
            </p>
          </div>
        </div>

        {/* ── STACKING CARDS ─────────────────────────────────────────
            Each card is sticky top-0 with increasing z-index.
            Cards slide in on top of each other as user scrolls.
            paddingTop offsets the sticky header height.
        ── */}
        {cards.map((card, index) => (
          <div
            key={index}
            className="sticky w-full overflow-hidden"
            style={{
              zIndex: index + 10,
              top: `${HEADER_H}px`,
              backgroundColor: "#FFFFFD",
              height: `calc(100vh - ${HEADER_H}px)`,
            }}
          >
            {/* Top padding to clear the header */}
            <div
              className="container-custom h-full"
              style={{ paddingTop: '2rem' }}
            >
              <div className="flex h-full items-center gap-0">

                {/* LEFT — text */}
                <div className="w-[42%] flex flex-col justify-center pr-12 pb-10">

                  {/* Counter */}
                  <p
                    className={`${karla.className} text-[13px] text-[#aaa] mb-6`}
                    style={{ letterSpacing: "0.1em" }}
                  >
                    {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                  </p>

                  {/* Title */}
                  <h3
                    className={`${playfair.className} text-[52px] leading-[1.1] text-[#2a2a2a] mb-5`}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`${karla.className} text-[15px] leading-[1.75] text-[#555] mb-6 max-w-[400px]`}
                  >
                    {card.description}
                  </p>

                  {/* Features */}
                  <ul className="flex flex-col gap-[9px] mb-8">
                    {card.features.map((f, fi) => (
                      <li
                        key={fi}
                        className={`${karla.className} flex items-center gap-3 text-[14px] text-[#444]`}
                      >
                        <span
                          className="w-[5px] h-[5px] rounded-full flex-shrink-0"
                          style={{ backgroundColor: "#C4A35A" }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={card.buttonHref}
                    className={`${karla.className} inline-flex items-center gap-3 text-white text-[11px] font-semibold tracking-[2px] uppercase px-6 py-3 rounded-sm w-fit transition-opacity hover:opacity-80`}
                    style={{ backgroundColor: "#C4A35A" }}
                  >
                    {card.buttonLabel}
                    <span>→</span>
                  </a>

                </div>

                {/* VERTICAL DIVIDER */}
                <div
                  className="w-[1px] flex-shrink-0"
                  style={{
                    alignSelf: "stretch",
                    backgroundColor: "rgba(196,163,90,0.25)",
                  }}
                />

                {/* RIGHT — image */}
                <div className="w-[58%] pl-12 flex items-center pb-10">
                  <div
                    className="relative w-full rounded-2xl overflow-hidden"
                    style={{ height: `calc(100vh - ${HEADER_H + 80}px)` }}
                  >
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="55vw"
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}