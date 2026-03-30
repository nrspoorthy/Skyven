"use client";

export default function NavBar({ visible = true }) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50
        transition-all duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)]
        ${visible ? "opacity-100 blur-0" : "opacity-0 blur-sm pointer-events-none"}`}
    >
      <div className="container-custom flex items-center justify-between py-6">

        {/* Menu Button */}
        <button className="flex items-center gap-2 text-white text-lg font-medium tracking-[2px] uppercase">
          <span className="flex flex-col gap-[5px]">
            <span className="block w-5 h-[1.5px] bg-white" />
            <span className="block w-5 h-[1.5px] bg-white" />
          </span>
          Menu
        </button>

        {/* Logo – centred absolutely */}
        <div className="absolute left-1/2 -translate-x-1/2 text-white text-center">
          <img src="/assets/logo.svg" alt="Skyven" className="h-14 w-auto mx-auto" />
        </div>

        {/* Enquire Now */}
        <button className="border border-white text-white text-sm tracking-[2px] rounded-md uppercase px-5 py-2 hover:bg-white hover:text-black transition-colors duration-300">
          Enquire Now
        </button>

      </div>
    </div>
  );
}