import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const currentYear = new Date().getFullYear();

const services = [
  "AC Repair & Installation",
  "Window AC Service",
  "Split AC Service",
  "AC Gas Filling",
  "Refrigerator Repair",
  "Deep Freezer Repair",
  "Washing Machine Repair",
  "Air Cooler Repair",
  "Microwave Oven Repair",
  "Water Cooler Repair",
  "AC on Rent",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "AC Rental", href: "#rental" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const serviceAreas = [
  "Ellenabad (Main Bazar)",
  "Nearby Villages",
  "Sirsa District",
  "Haryana",
];

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white" aria-label="Site footer">
      <div className="container mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <img
              src="/assets/generated/mv-logo-new-transparent.dim_400x120.png"
              alt="MV Cooling & Heating"
              className="h-10 w-auto object-contain mb-4 brightness-0 invert"
              loading="lazy"
            />
            <p className="text-white/65 text-sm leading-relaxed mb-5">
              Professional AC repair and home appliance repair services in
              Ellenabad, Haryana. We service ACs, refrigerators, washing
              machines, deep freezers &amp; more.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+918053083378"
                aria-label="Call us"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 border border-white/15 hover:bg-white/20 transition-colors"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/918053083378"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-green-500/80 border border-green-400/30 hover:bg-green-500 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-ocid="nav.link"
                    className="text-white/65 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/65 text-sm hover:text-white transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Area */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-4">
              Contact Info
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-brand-sky shrink-0 mt-0.5" />
                <span className="text-white/65 text-sm leading-relaxed">
                  Near Gita Bhawan, Main Bazar,
                  <br />
                  Ellenabad, Haryana, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-sky shrink-0" />
                <a
                  href="tel:+918053083378"
                  className="text-white/65 text-sm hover:text-white transition-colors"
                >
                  +91 8053083378
                </a>
              </div>
            </div>
            <h3 className="font-display font-bold text-white text-base mb-3">
              Service Area
            </h3>
            <ul className="space-y-1.5">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="text-white/65 text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-sky shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs text-center sm:text-left">
            © {currentYear} MV Cooling &amp; Heating. All rights reserved.
          </p>
          <p className="text-white/40 text-xs text-center">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 underline transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
