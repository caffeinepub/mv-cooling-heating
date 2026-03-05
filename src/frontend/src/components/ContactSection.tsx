import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { useAddSubmission } from "../hooks/useQueries";

const services = [
  "AC Repair & Service",
  "AC Installation",
  "Window AC Service",
  "Split AC Service",
  "Home Appliance Repair",
  "Cooling Products",
  "AC Rental",
  "Annual Maintenance Contract",
  "Other",
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const mutation = useAddSubmission();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");

    try {
      await mutation.mutateAsync({
        name: form.name,
        number: form.phone,
        service: form.service || "Not specified",
        message: form.message,
      });
      setSubmitStatus("success");
      setForm({ name: "", phone: "", service: "", message: "" });
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-secondary/40"
      aria-label="Contact section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-sm text-xs font-bold tracking-widest text-accent uppercase mb-4">
            Contact Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
            Book a Service Today
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Fill in your details and our technician will reach out to schedule
            your service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info + Map */}
          <div className="space-y-6">
            {/* Contact details */}
            <div className="bg-card rounded-xl border border-border shadow-card p-6">
              <h3 className="font-display font-bold text-foreground text-lg mb-5">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg brand-gradient shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      Address
                    </div>
                    <div className="text-muted-foreground text-sm mt-0.5">
                      Near Gita Bhawan, Main Bazar,
                      <br />
                      Ellenabad, Haryana, India
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg brand-gradient shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      Phone
                    </div>
                    <a
                      href="tel:+918053083378"
                      className="text-accent text-sm font-semibold hover:underline mt-0.5 block"
                    >
                      +91 8053083378
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-500 shrink-0">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      WhatsApp
                    </div>
                    <a
                      href="https://wa.me/918053083378"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 text-sm font-semibold hover:underline mt-0.5 block"
                    >
                      Message on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps embed */}
            <div
              className="rounded-xl overflow-hidden border border-border shadow-card"
              style={{ height: "280px" }}
            >
              <iframe
                title="MV Cooling & Heating Location"
                data-ocid="contact.map_marker"
                src="https://maps.google.com/maps?q=Near+Gita+Bhawan+Main+Bazar+Ellenabad+Haryana&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl border border-border shadow-card p-6 md:p-8">
            <h3 className="font-display font-bold text-foreground text-lg mb-6">
              Send Us a Message
            </h3>

            {/* Success state */}
            {submitStatus === "success" && (
              <div
                data-ocid="contact.success_state"
                className="mb-6 flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg"
                role="alert"
              >
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-green-800 text-sm">
                    Request Submitted!
                  </div>
                  <div className="text-green-700 text-sm mt-0.5">
                    We received your message and will contact you shortly.
                  </div>
                </div>
              </div>
            )}

            {/* Error state */}
            {submitStatus === "error" && (
              <div
                data-ocid="contact.error_state"
                className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
                role="alert"
              >
                <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-red-800 text-sm">
                    Something went wrong
                  </div>
                  <div className="text-red-700 text-sm mt-0.5">
                    Please try again or call us directly at +91 8053083378.
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label
                  htmlFor="contact-name"
                  className="text-sm font-semibold text-foreground mb-1.5 block"
                >
                  Your Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="contact-name"
                  data-ocid="contact.input"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, name: e.target.value }))
                  }
                  className="h-11"
                  autoComplete="name"
                />
              </div>

              <div>
                <Label
                  htmlFor="contact-phone"
                  className="text-sm font-semibold text-foreground mb-1.5 block"
                >
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="contact-phone"
                  data-ocid="contact.input"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  required
                  value={form.phone}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  className="h-11"
                  autoComplete="tel"
                />
              </div>

              <div>
                <Label
                  htmlFor="contact-service"
                  className="text-sm font-semibold text-foreground mb-1.5 block"
                >
                  Service Required
                </Label>
                <Select
                  value={form.service}
                  onValueChange={(val) =>
                    setForm((prev) => ({ ...prev, service: val }))
                  }
                >
                  <SelectTrigger
                    id="contact-service"
                    data-ocid="contact.input"
                    className="h-11"
                  >
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="contact-message"
                  className="text-sm font-semibold text-foreground mb-1.5 block"
                >
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  data-ocid="contact.input"
                  placeholder="Describe your problem or requirement..."
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((prev) => ({ ...prev, message: e.target.value }))
                  }
                />
              </div>

              <Button
                type="submit"
                data-ocid="contact.submit_button"
                className="w-full brand-gradient text-white font-bold h-12 text-base hover:opacity-90 transition-opacity"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
