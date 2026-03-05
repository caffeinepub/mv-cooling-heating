import { Button } from "@/components/ui/button";
import {
  Box,
  Droplets,
  Fan,
  Flame,
  Package,
  Phone,
  RotateCcw,
  Snowflake,
  Thermometer,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "AC Repair & Installation",
    desc: "Expert diagnosis and repair for all AC types — window, split, cassette. Professional installation with proper gas charging and wiring.",
    color: "from-blue-600 to-blue-500",
  },
  {
    icon: Wind,
    title: "Window AC Service",
    desc: "Complete servicing of window AC units including deep cleaning, filter wash, gas top-up, coil cleaning, and full electrical checks.",
    color: "from-sky-600 to-sky-500",
  },
  {
    icon: Snowflake,
    title: "Split AC Service",
    desc: "Full service for split AC systems — indoor and outdoor unit cleaning, refrigerant check, coil cleaning, and leak detection.",
    color: "from-cyan-600 to-cyan-500",
  },
  {
    icon: Zap,
    title: "AC Gas Filling",
    desc: "Professional AC refrigerant gas refilling and top-up service for all AC brands. Restore your AC's cooling performance quickly.",
    color: "from-indigo-600 to-indigo-500",
  },
  {
    icon: Thermometer,
    title: "Refrigerator Repair",
    desc: "Complete refrigerator repair service for all brands. We fix cooling issues, compressor faults, gas leaks, thermostat problems, and more.",
    color: "from-blue-700 to-blue-600",
  },
  {
    icon: Box,
    title: "Deep Freezer Repair",
    desc: "Professional deep freezer repair and servicing. We fix temperature issues, gas charging, compressor faults for all commercial and home deep freezers.",
    color: "from-slate-600 to-slate-500",
  },
  {
    icon: RotateCcw,
    title: "Washing Machine Repair",
    desc: "Expert washing machine repair for top-load and front-load machines. We fix drum issues, motor faults, water problems, and electronic failures.",
    color: "from-teal-600 to-teal-500",
  },
  {
    icon: Fan,
    title: "Air Cooler Repair",
    desc: "Complete air cooler repair and servicing — pump replacement, motor repair, water tank cleaning, and full performance restoration.",
    color: "from-sky-700 to-sky-600",
  },
  {
    icon: Flame,
    title: "Microwave Oven Repair",
    desc: "Professional microwave oven repair for all brands. We fix heating issues, turntable faults, door problems, and electronic control board failures.",
    color: "from-orange-600 to-orange-500",
  },
  {
    icon: Droplets,
    title: "Water Cooler Repair",
    desc: "Expert water cooler repair and maintenance. We fix cooling issues, motor faults, leakage problems, and thermostat faults for all brands.",
    color: "from-cyan-700 to-cyan-600",
  },
  {
    icon: Package,
    title: "AC Available on Rent",
    desc: "Affordable AC rental for homes, events, shops, and offices. Short-term and long-term rental plans available at the best rates in Ellenabad.",
    color: "from-green-600 to-green-500",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-secondary/40"
      aria-label="Services section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-sm text-xs font-bold tracking-widest text-accent uppercase mb-4">
            Our Services
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
            Complete Home Appliance &amp; AC Services
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Expert repair and service for all your home appliances and AC units
            across Ellenabad and Sirsa district.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, color }, index) => (
            <div
              key={title}
              data-ocid={`services.item.${index + 1}`}
              className="bg-card rounded-xl border border-border p-6 shadow-card card-hover flex flex-col"
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${color} mb-4 shrink-0`}
              >
                <Icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="font-display font-bold text-foreground text-base mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                {desc}
              </p>
              <Button
                asChild
                size="sm"
                data-ocid={`services.primary_button.${index + 1}`}
                className="w-full brand-gradient text-white font-semibold hover:opacity-90 transition-opacity"
              >
                <a href="tel:+918053083378">
                  <Phone className="mr-2 h-3.5 w-3.5" />
                  Call Now
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
