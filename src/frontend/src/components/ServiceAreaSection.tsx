import { MapPin } from "lucide-react";

const areas = [
  {
    name: "Ellenabad",
    desc: "Primary service area — Main Bazar, near Gita Bhawan, and all surrounding localities.",
    primary: true,
  },
  {
    name: "Nearby Villages",
    desc: "We serve all villages within 20 km of Ellenabad in Sirsa district.",
    primary: false,
  },
  {
    name: "Sirsa District",
    desc: "Available for service calls across Sirsa district — contact us for availability.",
    primary: false,
  },
  {
    name: "Haryana",
    desc: "For large projects or bulk AC installation, we can travel across Haryana.",
    primary: false,
  },
];

export default function ServiceAreaSection() {
  return (
    <section
      id="service-area"
      className="py-20 md:py-24 bg-background"
      aria-label="Service area section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-sm text-xs font-bold tracking-widest text-accent uppercase mb-4">
            Service Area
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
            We Come to You
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Based in Main Bazar Ellenabad, we provide doorstep AC service across
            the region.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {areas.map(({ name, desc, primary }) => (
            <div
              key={name}
              className={`relative p-6 rounded-xl border shadow-card card-hover ${
                primary
                  ? "brand-gradient text-white border-transparent"
                  : "bg-card border-border"
              }`}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-lg mb-4 ${
                  primary
                    ? "bg-white/20 border border-white/30"
                    : "bg-secondary border border-border"
                }`}
              >
                <MapPin
                  className={`h-5 w-5 ${primary ? "text-white" : "text-accent"}`}
                  aria-hidden="true"
                />
              </div>
              <h3
                className={`font-display font-bold text-base mb-2 ${
                  primary ? "text-white" : "text-foreground"
                }`}
              >
                {name}
                {primary && (
                  <span className="ml-2 text-xs font-semibold bg-white/20 text-white px-2 py-0.5 rounded-full">
                    Primary
                  </span>
                )}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  primary ? "text-white/75" : "text-muted-foreground"
                }`}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
