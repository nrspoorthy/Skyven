const legacies = [
  {
    id: 1,
    imageLeft: false,
    tag: "E–INFRA:",
    subtitle: "Where Foundations Are Built on Values",
    paragraphs: [
      "SKYVEN carries the soul of E-Infra, a brand that believes buildings don't begin with blueprints, they begin with belief.",
      "Founded by Mr. Meda Ramesh Reddy and Mr. Miryala Prasad, E-Infra is the result of two civil servants who traded the corridors of power for communities of purpose. For them, land was never a commodity. It was a canvas for legacies, stories, and futures yet to be lived.",
    ],
    bullets: [
      { bold: "95,00,000 SFT", text: "of developments" },
      { bold: "3400+", text: "Premium homes" },
    ],
    image: "/assets/legacy-einfra.jpg",
    imageAlt: "E-Infra Legacy",
  },
  {
    id: 2,
    imageLeft: true,
    tag: "PVR:",
    subtitle: "Subtitle Goes Here",
    paragraphs: [
      "Second legacy description paragraph one goes here.",
      "Second legacy description paragraph two goes here.",
    ],
    bullets: [
      { bold: "50,000+", text: "of something" },
      { bold: "1000+", text: "Another stat" },
    ],
    image: "/assets/legacy-second.jpg",
    imageAlt: "Second Legacy",
  },
];

function LegacyCard({ tag, subtitle, paragraphs, bullets, image, imageAlt, imageLeft }) {
  const textContent = (
    <div className={`w-full md:w-1/2 py-16 flex flex-col justify-center ${imageLeft ? "md:pl-16" : "md:pr-16"}`}>
      <h3 className="text-black text-3xl md:text-4xl mb-6">{tag}</h3>
      <p className="text-black font-semibold text-sm mb-4">{subtitle}</p>
      {paragraphs.map((p, i) => (
        <p key={i} className="text-gray-600 text-xs leading-relaxed mb-4">{p}</p>
      ))}
      <ul className="mt-2 space-y-3">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-gray-700">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500 inline-block flex-shrink-0" />
            <span><strong>{b.bold}</strong> {b.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const imageContent = (
    <div className="w-full md:w-1/2 h-[480px]">
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row items-stretch">
      {imageLeft ? imageContent : textContent}
      {imageLeft ? textContent : imageContent}
    </div>
  );
}

export default function LegacySection() {
  return (
    <section className="bg-[#FAF9F6]">
      <div className="container-custom">
        <h2 className="text-center text-black tracking-[4px] uppercase text-2xl pt-16 mb-12">
          The Two Legacies Behind The Legend
        </h2>
      </div>

      {legacies.map((legacy) => (
        <div key={legacy.id} className="container-custom">
          <LegacyCard {...legacy} />
        </div>
      ))}
    </section>
  );
}