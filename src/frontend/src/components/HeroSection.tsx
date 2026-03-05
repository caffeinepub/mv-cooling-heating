import { Button } from "@/components/ui/button";
import { CalendarCheck, MessageCircle, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-appliance-repair.dim_1200x600.jpg"
          alt="Home appliance repair technician at work"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Decorative diagonal overlay at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-background"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center py-32 md:py-40">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available 24/7 in Ellenabad
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 drop-shadow-lg">
          Best Home Appliance Repair Service in Ellenabad —{" "}
          <span className="text-brand-sky">AC &amp; Appliance Experts</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          AC Repair, Refrigerator Service, Washing Machine Repair &amp; All Home
          Appliances. Expert Technicians in Ellenabad &amp; Sirsa District.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            data-ocid="hero.primary_button"
            className="w-full sm:w-auto brand-gradient text-white font-bold text-base px-8 py-6 shadow-lg hover:opacity-90 transition-opacity"
          >
            <a href="tel:+918053083378">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            data-ocid="hero.secondary_button"
            className="w-full sm:w-auto bg-green-500 border-green-500 text-white font-bold text-base px-8 py-6 shadow-lg hover:bg-green-600 hover:border-green-600 transition-colors"
          >
            <a
              href="https://wa.me/918053083378"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Service
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            data-ocid="hero.book_button"
            className="w-full sm:w-auto bg-white/15 backdrop-blur-sm border-white/50 text-white font-bold text-base px-8 py-6 shadow-lg hover:bg-white/25 transition-colors"
          >
            <a href="#contact">
              <CalendarCheck className="mr-2 h-5 w-5" />
              Book Repair
            </a>
          </Button>
        </div>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: "500+", label: "Happy Customers" },
            { value: "8+", label: "Years Experience" },
            { value: "24/7", label: "Service Available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl sm:text-3xl font-black text-white">
                {stat.value}
              </div>
              <div className="text-white/70 text-xs sm:text-sm font-medium mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
