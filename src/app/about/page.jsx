"use client";
import HeroBanner from "@/components/HeroBanner";
import LegacySection from "@/components/LegacySection";

const stats = [
  { value: "7+", label: "Million SFT Constructed Area" },
  { value: "9+", label: "Projects Completed" },
  { value: "300+", label: "Luxury Villas" },
  { value: "5000+", label: "Happy Customers" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#FAF9F6]">
      <HeroBanner />

      {/* Stats Section */}
      <section className="bg-[#FAF9F6] py-12">
        <div className="container-custom">
          <h2 className="text-center text-[#484848] tracking-[4px] uppercase text-3xl mb-10">
            Delivering Excellence With Continued Growth
          </h2>

          <div className="grid grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center py-4 ${
                  index < stats.length - 1 ? "border-r border-gray-300" : ""
                }`}
              >
                <span className="text-[#484848] text-5xl font-light leading-none mb-3">
                  {stat.value}
                </span>
                <span className="text-[#484848] text-[11px] tracking-wide text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Skyven Section */}
      <section className="bg-[#FAF9F6] pt-14 pb-16">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-[#484848] tracking-[4px] uppercase text-4xl mb-6">
              About Skyven
            </h2>
            <p className="text-[#484848] text-sm leading-relaxed mb-3">
              SKYVEN isn't a tower. It's an empire in the clouds. An address that doesn't touch the sky, It owns it.
            </p>
            <p className="text-[#484848] text-sm leading-relaxed">
              South India's first 63-floor residential masterpiece, SKYVEN rises 755 feet above ordinary, rewriting not just Hyderabad's skyline, but the standards of ultra-luxury living itself.
            </p>
          </div>

          {/* Video Thumbnail */}
          <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-sm overflow-hidden cursor-pointer group">
            <img
              src="/assets/about-video-thumb.jpg"
              alt="Skyven Video"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
                <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <LegacySection />
    </main>
  );
}