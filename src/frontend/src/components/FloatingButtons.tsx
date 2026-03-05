import { MessageCircle, Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div
      className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3"
      aria-label="Quick contact buttons"
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/918053083378?text=Hi%2C%20I%20need%20AC%20service."
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="floating.whatsapp_button"
        aria-label="Contact on WhatsApp"
        className="floating-btn flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      {/* Call */}
      <a
        href="tel:+918053083378"
        data-ocid="floating.call_button"
        aria-label="Call us now"
        className="floating-btn flex items-center justify-center w-14 h-14 rounded-full brand-gradient text-white shadow-xl"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
