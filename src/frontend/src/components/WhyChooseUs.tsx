import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Experienced Technician",
    desc: "Our team has years of experience servicing all major AC brands including LG, Samsung, Voltas, Daikin, and more.",
  },
  {
    title: "Quick & Reliable Service",
    desc: "Same-day service available. We arrive on time and complete repairs efficiently so you're comfortable faster.",
  },
  {
    title: "Affordable Pricing",
    desc: "Transparent, competitive pricing with no hidden charges. We give you a quote before starting any work.",
  },
  {
    title: "Quality Work Guarantee",
    desc: "All repairs and services come with a satisfaction guarantee. We stand behind the quality of every job.",
  },
  {
    title: "Local Trusted Service in Ellenabad",
    desc: "We're your neighbors — based right in Main Bazar Ellenabad, trusted by hundreds of local families and businesses.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-20 md:py-28 bg-brand-navy relative overflow-hidden"
      aria-label="Why choose us section"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-block px-3 py-1 bg-white/10 rounded-sm text-xs font-bold tracking-widest text-brand-sky uppercase mb-4">
              Why Choose Us
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              The <span className="text-brand-sky">Right Choice</span>
              <br />
              for AC Service
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              When your AC breaks down in peak summer, you need a service
              provider you can trust. Here's why thousands of Ellenabad
              residents choose MV Cooling &amp; Heating.
            </p>

            <div className="mt-8">
              <a
                href="tel:+918053083378"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-sky text-brand-navy rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
              >
                Call: +91 8053083378
              </a>
            </div>
          </div>

          {/* Right: reasons list */}
          <div className="space-y-4">
            {reasons.map(({ title, desc }, i) => (
              <div
                key={title}
                className="flex gap-4 p-5 bg-white/8 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/12 transition-colors"
              >
                <div className="shrink-0 mt-0.5">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-sky/20 border border-brand-sky/30">
                    <CheckCircle2 className="h-4 w-4 text-brand-sky" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-brand-sky/60 text-xs font-mono font-bold">
                      0{i + 1}
                    </span>
                    <h3 className="font-display font-bold text-white text-sm md:text-base">
                      {title}
                    </h3>
                  </div>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
