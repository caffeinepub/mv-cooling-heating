const showcaseItems = [
  {
    src: "/assets/generated/hero-appliance-repair.dim_1200x600.jpg",
    alt: "AC repair service by expert technician",
    label: "AC Repair Service",
  },
  {
    src: "/assets/generated/refrigerator-repair.dim_600x400.jpg",
    alt: "Refrigerator repair and service",
    label: "Refrigerator Repair",
  },
  {
    src: "/assets/generated/washing-machine-repair.dim_600x400.jpg",
    alt: "Washing machine repair service",
    label: "Washing Machine Repair",
  },
];

export default function ApplianceShowcase() {
  return (
    <section
      aria-label="Appliance repair services showcase"
      className="py-10 bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {showcaseItems.map(({ src, alt, label }) => (
            <div
              key={label}
              className="relative h-[300px] rounded-xl overflow-hidden shadow-card group"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl sm:text-2xl text-center drop-shadow-lg px-4">
                  {label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
