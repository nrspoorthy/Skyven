"use client";

import Link from "next/link";

const quickLinks = [
  { label: "Home",                href: "/" },
  { label: "About us",            href: "/about" },
  { label: "Residences & Villas", href: "/residences" },
  { label: "Amenities",           href: "/amenities" },
  { label: "Blogs",               href: "/blogs" },
  { label: "Contact us",          href: "/contact" },
];

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* Main footer content */}
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0">

          {/* Left — Logo */}
          <div className="md:w-[40%] flex items-center md:items-center">
            <img
              src="/assets/logo-dark.svg"
              alt="Skyven"
              style={{ width: "160px" }}
            />
          </div>

          {/* Middle — Quick Links */}
          <div className="md:w-[30%]">
            <h3
              className="mb-4"
              style={{
                color: "#3a3a3a",
                fontSize: "24px",
                fontWeight: "600",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-black"
                    style={{
                      color: "#555",
                      textDecoration: "none",
                      fontSize: "16px",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Contact */}
          <div className="md:w-[30%]">
            <h3
              className="mb-4"
              style={{
                color: "#3a3a3a",
                fontSize: "24px",
                fontWeight: "600",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              Contact
            </h3>

            <p className="mb-3" style={{ color: "#555", fontSize: "16px" }}>
              Rera No.: P02400009501
            </p>

            {/* Address */}
            <div className="flex items-start gap-2 mb-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: "#555", marginTop: "2px", flexShrink: 0 }}
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <p style={{ color: "#555", fontSize: "16px", lineHeight: "1.6" }}>
                SY no. 153, Gandipet Main Road, Kokapet, Hyderabad, Telangana, 500075
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2 mb-6">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: "#555", flexShrink: 0 }}
              >
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <a
                href="tel:+917730000063"
                className="hover:text-black transition-colors duration-200"
                style={{
                  color: "#555",
                  textDecoration: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                {"+91 7730000063"}
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2">
              <span
                style={{
                  color: "#3a3a3a",
                  fontSize: "16px",
                  fontWeight: "500",
                  textDecoration: "underline",
                  textUnderlineOffset: "4px",
                  marginRight: "4px",
                }}
              >
                Follow us:
              </span>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917730000063"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
                style={{
                  backgroundColor: "#3a3a3a",
                  cursor: "pointer",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
                style={{
                  backgroundColor: "#3a3a3a",
                  cursor: "pointer",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center transition-opacity duration-200 hover:opacity-70"
                style={{
                  backgroundColor: "#3a3a3a",
                  cursor: "pointer",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ backgroundColor: "#4a4a4a" }}>
        <div className="container-custom py-4 flex items-center justify-center">
          <p className="text-center" style={{ color: "#ccc", fontSize: "16px" }}>
            Copyright &copy; 2026. Skyven by Elegantea Infra LLP
          </p>
        </div>
      </div>
    </div>
  );
}