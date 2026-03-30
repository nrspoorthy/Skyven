import { playfair, karla } from "../app/layout";
import Image from "next/image";

export default function TwoLegacies() {
  return (
    <section
      className={`${karla.variable} ${playfair.variable} bg-[#f5f2eb] py-20`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">

        {/* Heading */}
        <h2
          className="text-center tracking-[0.2em] uppercase mb-16 text-[#1a1a1a]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          The Two Legacies Behind The Legend
        </h2>

        {/* E-INFRA Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">

          {/* Left: Text — w-full, no max-w constraint */}
          <div className="space-y-4 w-full">
            <h3
              className="font-normal text-[#484848]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              E-INFRA:
            </h3>
            <p
              className="font-400 tracking-widest text-[#484848] uppercase text-xs"
              style={{ fontFamily: "var(--font-karla)" }}
            >
              Where Foundations Are Built on Values
            </p>
            <p
              className="text-[#444] leading-relaxed"
              style={{ fontFamily: "var(--font-karla)" }}
            >
              SKYVEN carries the soul of E-Infra, a brand that believes buildings
              don&apos;t begin with blueprints, they begin with belief.
            </p>
            <p
              className="text-[#484848] leading-relaxed"
              style={{ fontFamily: "var(--font-karla)" }}
            >
              Founded by Mr. Meda Ramesh Reddy and Mr. Miryala Prasad, E-Infra is
              the result of two civil servants who traded the corridors of power
              for communities of purpose. For them, land was never a commodity. It
              was a canvas for legacies, stories, and futures yet to be lived.
            </p>
            <ul
              className="text-[#484848] space-y-1 pl-4 list-disc"
              style={{ fontFamily: "var(--font-karla)" }}
            >
              <li>
                <p><b>95,00,000 SFT</b> of developments</p>
              </li>
              <li>
                <p><b>3400+</b> Premium homes</p>
              </li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="relative w-full h-72 md:h-[500px] rounded overflow-hidden shadow-md">
            <Image
              src="/assets/einfra-interior.jpg"
              alt="E-Infra luxury interior"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* PVR Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left: Image */}
          <div className="relative w-full h-72 md:h-[500px] rounded overflow-hidden shadow-md">
            <Image
              src="/assets/pvr-tower.png"
              alt="PVR Skyven tower"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Text — w-full, no max-w constraint */}
          <div className="space-y-4 w-full">
            <h3
              className="font-normal text-[#484848]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              PVR:
            </h3>
            <p
              className="font-bold tracking-widest text-[#484848] uppercase text-xs"
              style={{ fontFamily: "var(--font-karla)" }}
            >
              Where Legacy Becomes Lifestyle
            </p>
            <p
              className="text-[#484848] leading-relaxed text"
              style={{ fontFamily: "var(--font-karla)" }}
            >
              Alongside E-Infra stands PVR, the name that doesn&apos;t just
              promise homes, it delivers generational lifestyles.
            </p>
            <p
              className="text-[#484848] leading-relaxed"
              style={{ fontFamily: "var(--font-karla)" }}
            >
              Founded by Mr. Pingle Vasudeva Reddy, who began working at 14 and
              transformed industries with sheer grit, PVR is a brand forged in
              the fires of discipline, excellence, and foresight.
            </p>
            <p
              className="text-[#484848] leading-relaxed"
              style={{ fontFamily: "var(--font-karla)" }}
            >
              In SKYVEN, PVR ensures the project isn&apos;t a residential space,
              it&apos;s an heirloom, crafted to outlast time, trends, and
              territories.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}