import { Button } from "@/components/ui/button";
import { Briefcase, Building2, Home, MessageCircle, Users } from "lucide-react";

const rentalUseCases = [
  { icon: Home, label: "Homes" },
  { icon: Building2, label: "Shops" },
  { icon: Users, label: "Events" },
  { icon: Briefcase, label: "Offices" },
];

export default function RentalSection() {
  return (
    <section
      id="rental"
      className="py-20 md:py-28 bg-background"
      aria-label="AC rental section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-secondary to-brand-ice rounded-2xl border border-border overflow-hidden shadow-card-lg">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left visual */}
              <div className="brand-gradient p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 bg-white/15 rounded-sm text-xs font-bold tracking-widest text-white uppercase mb-6">
                    AC Rental
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
                    AC on Rent
                    <br />
                    <span className="text-brand-sky">No Large Investment</span>
                  </h2>
                  <p className="text-white/80 text-base leading-relaxed">
                    Stay cool without the upfront cost. We provide
                    well-maintained, clean ACs on short-term and long-term
                    rental plans — perfect for temporary needs.
                  </p>
                </div>

                {/* Use case icons */}
                <div className="mt-8 grid grid-cols-4 gap-3">
                  {rentalUseCases.map(({ icon: Icon, label }) => (
                    <div key={label} className="text-center">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/15 border border-white/20 mx-auto mb-1.5">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white/75 text-xs font-medium">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right content */}
              <div className="p-10 flex flex-col justify-center">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Ideal For Any Need
                </h3>
                <ul className="space-y-3 mb-8">
                  {[
                    "Homes & residential use",
                    "Shops & retail establishments",
                    "Events & temporary gatherings",
                    "Offices & commercial spaces",
                    "Guest houses & short-term stays",
                    "Under-repair period cooling",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold"
                >
                  <a
                    href="https://wa.me/918053083378?text=Hi%2C%20I%20want%20to%20enquire%20about%20AC%20rental%20service."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Enquire on WhatsApp
                  </a>
                </Button>

                <p className="text-center text-xs text-muted-foreground mt-3">
                  Or call us at{" "}
                  <a
                    href="tel:+918053083378"
                    className="text-accent hover:underline font-semibold"
                  >
                    +91 8053083378
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
