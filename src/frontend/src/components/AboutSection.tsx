import { Award, Clock, MapPin, ShieldCheck } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Licensed & Certified",
    desc: "Fully trained and experienced technicians for all AC brands and models.",
  },
  {
    icon: MapPin,
    title: "Locally Based",
    desc: "Located near Gita Bhawan, Main Bazar Ellenabad — your neighborhood service provider.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    desc: "Same-day service for urgent repairs. We value your time and comfort.",
  },
  {
    icon: Award,
    title: "Quality Assured",
    desc: "Every job comes with a service guarantee and use of genuine spare parts.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-background"
      aria-label="About section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text side */}
          <div>
            <div className="inline-block px-3 py-1 bg-secondary rounded-sm text-xs font-bold tracking-widest text-accent uppercase mb-4">
              About Us
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              Ellenabad's Most <span className="text-accent">Trusted</span>{" "}
              Appliance Repair Experts
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              MV Cooling &amp; Heating is a trusted home appliance repair and
              cooling service provider located in Main Bazar Ellenabad, near
              Gita Bhawan. We provide professional repair and maintenance for
              Air Conditioners, Refrigerators, Washing Machines, Deep Freezers,
              Air Coolers, Microwave Ovens, Water Coolers, and all major home
              appliances for homes and shops across Ellenabad and Sirsa
              district.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              With years of hands-on experience servicing all major brands —
              including LG, Samsung, Voltas, Whirlpool, Godrej, Haier, and more
              — our skilled technicians deliver fast, reliable, affordable
              service you can count on throughout Haryana.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+918053083378"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 brand-gradient text-white rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
              >
                +91 8053083378
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-md font-semibold text-sm hover:bg-secondary transition-colors"
              >
                Book a Service →
              </a>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-5 bg-card rounded-lg border border-border shadow-card card-hover"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-md brand-gradient mb-4">
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-1.5 text-base">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
