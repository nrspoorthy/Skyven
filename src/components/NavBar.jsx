"use client";

import { useState } from "react";
import Link from "next/link";

const menuItems = [
  { number: "01", label: "About us",    href: "/about" },
  { number: "02", label: "Amenities",   href: "/amenities" },
  { number: "03", label: "Floor Plans", href: "/floor-plans" },
  { number: "04", label: "Contact us",  href: "/contact" },
  { number: "05", label: "Blogs",       href: "/blogs" },
];

export default function NavBar({ visible = true }) {
  const [isOpen, setIsOpen] = useState(false);
  

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400&display=swap');

        .skyven-menu-text {
          font-family: 'Playfair Display', serif;
          font-size: 80px;
          line-height: 84px;
          font-weight: 400;
          letter-spacing: 0em;
          color: #c8c4bc;
          transition: color 0.35s ease;
        }

        .skyven-menu-number {
          font-size: 13px;
          color: #c8c4bc;
          transition: color 0.35s ease;
          font-family: sans-serif;
          font-weight: 400;
          align-self: flex-end;
          margin-bottom: 14px;
          flex-shrink: 0;
        }

        .skyven-menu-item:hover .skyven-menu-text {
          color: #1a1a1a;
        }
        .skyven-menu-item:hover .skyven-menu-number {
          color: #555;
        }

        .menu-item-anim {
          transition: opacity 0.45s ease, transform 0.45s ease;
        }

        @media (max-width: 768px) {
          .skyven-menu-text {
            font-size: 44px;
            line-height: 52px;
          }
        }
      `}</style>

      {/* ── Navbar — always on top ── */}
      <div
        className={`fixed top-0 left-0 right-0 z-50
          transition-all duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
          ${visible ? "opacity-100 blur-0" : "opacity-0 blur-sm pointer-events-none"}`}
      >
        <div className="container-custom flex items-center justify-between py-6">

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(o => !o)}
            className="flex items-center gap-2 text-lg font-medium tracking-[2px] uppercase transition-colors duration-300"
            style={{ color: isOpen ? "#1a1a1a" : "white" }}
          >
            {isOpen ? (
              <>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <line x1="1" y1="1" x2="15" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                  <line x1="15" y1="1" x2="1" y2="15" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Menu
              </>
            ) : (
              <>
                <span className="flex flex-col gap-[5px]">
                  <span className="block w-5 h-[1.5px] bg-current" />
                  <span className="block w-5 h-[1.5px] bg-current" />
                </span>
                Menu
              </>
            )}
          </button>

          {/* Logo */}
         
<div className="absolute left-1/2 -translate-x-1/2 text-center">
  {isOpen ? (
    <img
      src="/assets/logo-dark.svg"   // 👈 save your SVG here
      alt="Skyven Dark"
      className="h-14 w-auto mx-auto"
    />
  ) : (
    <img
      src="/assets/logo.svg"
      alt="Skyven"
      className="h-14 w-auto mx-auto"
    />
  )}
</div>

          {/* Enquire Now */}
          <button
            className="text-sm tracking-[2px] rounded-md uppercase px-5 py-2 transition-all duration-300"
            style={
              isOpen
                ? { border: "1px solid #bbb", color: "#555", background: "transparent" }
                : { border: "1px solid white", color: "white", background: "transparent" }
            }
            onMouseEnter={e =>
              Object.assign(e.currentTarget.style, {
                background: "#1a1a1a", color: "#fff", borderColor: "#1a1a1a",
              })
            }
            onMouseLeave={e => {
              if (isOpen) {
                Object.assign(e.currentTarget.style, {
                  background: "transparent", color: "#555", borderColor: "#bbb",
                });
              } else {
                Object.assign(e.currentTarget.style, {
                  background: "transparent", color: "#fff", borderColor: "#fff",
                });
              }
            }}
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* ── Full-screen overlay ── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 40,
          backgroundColor: "#f5f2ec",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.5s ease",
          display: "flex",
          alignItems: "flex-start",  /* align from top */
          overflow: "hidden",
        }}
      >
        {/* Left — contained image card, starts below navbar */}
        <div
          className="hidden md:block"
          style={{
            width: "42%",
            height: "100vh",
            flexShrink: 0,
            paddingTop: "80px",       /* below navbar height */
            paddingLeft: "32px",
            paddingBottom: "32px",
            boxSizing: "border-box",
          }}
        >
          <img
            src="/assets/menutower.jpg"
            alt="Skyven Tower"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
              display: "block",
            }}
          />
        </div>

        {/* Right — nav links, vertically centred */}
        <div
          style={{
            flex: 1,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "64px",
            paddingRight: "40px",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {menuItems.map((item, i) => (
              <li
                key={item.number}
                className="skyven-menu-item menu-item-anim"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0)" : "translateY(18px)",
                  transitionDelay: isOpen ? `${i * 60}ms` : "0ms",
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "14px",
                  }}
                >
                  <span className="skyven-menu-number">{item.number}</span>
                  <span className="skyven-menu-text">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}