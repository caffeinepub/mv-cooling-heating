import { Button } from "@/components/ui/button";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  scrolled: boolean;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Rental", href: "#rental" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ scrolled }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-card border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center shrink-0">
            <img
              src="/assets/generated/mv-logo-new-transparent.dim_400x120.png"
              alt="MV Cooling & Heating Logo"
              className="h-10 md:h-12 w-auto object-contain"
              loading="eager"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid="nav.link"
                className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors duration-150 ${
                  scrolled
                    ? "text-foreground hover:text-accent hover:bg-secondary"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              size="sm"
              className="brand-gradient text-white font-semibold shadow-sm hover:opacity-90"
            >
              <a href="tel:+918053083378">
                <Phone className="mr-1.5 h-3.5 w-3.5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled
                ? "text-foreground hover:bg-secondary"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-b border-border shadow-card-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-ocid="nav.link"
                className="px-4 py-3 text-sm font-semibold text-foreground rounded-md hover:bg-secondary hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border mt-1">
              <Button
                asChild
                className="w-full brand-gradient text-white font-semibold"
              >
                <a
                  href="tel:+918053083378"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: +91 8053083378
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
