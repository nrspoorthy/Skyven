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

export default function NavMenu() {
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
          transition: color 0.3s ease;
          display: block;
        }

        .skyven-menu-number {
          font-size: 13px;
          color: #c8c4bc;
          transition: color 0.3s ease;
          line-height: 1;
          align-self: flex-end;
          margin-bottom: 14px;
          font-family: sans-serif;
          font-weight: 400;
        }

        .skyven-menu-item:hover .skyven-menu-text {
          color: #1a1a1a;
        }
        .skyven-menu-item:hover .skyven-menu-number {
          color: #666;
        }

        .menu-item-anim {
          transition: opacity 0.45s ease, transform 0.45s ease;
        }
      `}</style>

      {/* ── Navbar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 32px",
          height: "64px",
          backgroundColor: "#f5f2ec",
        }}
      >
        {/* MENU toggle */}
        <button
          onClick={() => setIsOpen(o => !o)}
          style={{
            display: "flex", alignItems: "center", gap: "8px",
            fontSize: "11px", letterSpacing: "0.15em",
            color: "#888", background: "none", border: "none", cursor: "pointer",
            fontFamily: "sans-serif",
            transition: "color 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.color = "#1a1a1a"}
          onMouseLeave={e => e.currentTarget.style.color = "#888"}
        >
          {isOpen ? (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <line x1="1" y1="1" x2="12" y2="12" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="12" y1="1" x2="1" y2="12" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          ) : (
            <svg width="16" height="11" viewBox="0 0 16 11" fill="none">
              <line x1="0" y1="1"   x2="16" y2="1"   stroke="currentColor" strokeWidth="1.2"/>
              <line x1="0" y1="5.5" x2="16" y2="5.5" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="0" y1="10"  x2="16" y2="10"  stroke="currentColor" strokeWidth="1.2"/>
            </svg>
          )}
          MENU
        </button>

        {/* Logo – centred absolutely */}
        <div style={{
          position: "absolute", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "3px",
        }}>
          <svg width="36" height="26" viewBox="0 0 36 26" fill="none">
            <path d="M18 2C18 2 8 6 2 13C8 11 13 12 18 15C23 12 28 11 34 13C28 6 18 2 18 2Z" fill="#222" opacity="0.85"/>
            <path d="M18 15C18 15 14.5 18.5 14.5 24C16.2 22 18 20.5 18 20.5C18 20.5 19.8 22 21.5 24C21.5 18.5 18 15 18 15Z" fill="#222" opacity="0.85"/>
          </svg>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "11.5px", letterSpacing: "0.3em",
            color: "#222", fontWeight: 400,
          }}>SKYVEN</span>
        </div>

        {/* Enquire Now */}
        <button
          style={{
            border: "1px solid #bbb", fontSize: "10px", letterSpacing: "0.18em",
            color: "#666", padding: "9px 20px", background: "transparent",
            fontFamily: "sans-serif", cursor: "pointer",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={e => Object.assign(e.currentTarget.style, { background:"#1a1a1a", color:"#fff", borderColor:"#1a1a1a" })}
          onMouseLeave={e => Object.assign(e.currentTarget.style, { background:"transparent", color:"#666", borderColor:"#bbb" })}
        >
          ENQUIRE NOW
        </button>
      </nav>

      {/* ── Full-screen overlay ── */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 40,
        backgroundColor: "#f5f2ec",
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? "auto" : "none",
        transition: "opacity 0.5s ease",
        display: "flex",
      }}>

        {/* Left: building image */}
        <div style={{ width: "42%", height: "100%", overflow: "hidden", flexShrink: 0 }}
             className="hidden md:block">
          <img
            src="/building.jpg"   /* ← swap with your actual image */
            alt="Skyven Tower"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* Right: nav links */}
        <div style={{
          flex: 1, display: "flex", flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "72px", paddingRight: "40px",
        }}>
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
                    gap: "16px",
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