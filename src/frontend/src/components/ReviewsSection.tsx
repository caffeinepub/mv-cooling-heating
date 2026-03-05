import { Star } from "lucide-react";

const reviews = [
  {
    text: "Very quick AC repair service in Ellenabad. My split AC was not cooling and they fixed it within 2 hours of calling. Very professional team!",
    author: "Ramesh K.",
    location: "Main Bazar, Ellenabad",
    rating: 5,
  },
  {
    text: "Affordable and professional technician. Highly recommended! They serviced my window AC at a very reasonable price. No hidden charges.",
    author: "Sunita D.",
    location: "Near Bus Stand, Ellenabad",
    rating: 5,
  },
  {
    text: "Best cooling service provider near Main Bazar. I have been using their services for 3 years now. Always on time and quality work guaranteed.",
    author: "Vijay S.",
    location: "Grain Market, Ellenabad",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-secondary/40"
      aria-label="Customer reviews section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 bg-accent/10 rounded-sm text-xs font-bold tracking-widest text-accent uppercase mb-4">
            Customer Reviews
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Trusted by hundreds of families and businesses in Ellenabad and
            Sirsa district.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map(({ text, author, location, rating }, i) => (
            <div
              key={author}
              data-ocid={`reviews.item.${i + 1}`}
              className="bg-card rounded-xl border border-border p-6 shadow-card card-hover flex flex-col"
            >
              {/* Stars */}
              <div
                className="flex gap-1 mb-4"
                aria-label={`Rating: ${rating} out of 5 stars`}
              >
                {[1, 2, 3, 4, 5].slice(0, rating).map((starIdx) => (
                  <Star
                    key={starIdx}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-sm leading-relaxed flex-1 italic">
                "{text}"
              </blockquote>

              {/* Author */}
              <div className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                <div className="w-9 h-9 rounded-full brand-gradient flex items-center justify-center shrink-0">
                  <span className="text-white font-display font-bold text-sm">
                    {author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-display font-bold text-foreground text-sm">
                    {author}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-card rounded-full border border-border shadow-card">
            <div className="text-center">
              <div className="font-display text-xl font-black text-foreground">
                4.9★
              </div>
              <div className="text-muted-foreground text-xs">
                Average Rating
              </div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="font-display text-xl font-black text-foreground">
                500+
              </div>
              <div className="text-muted-foreground text-xs">
                Happy Customers
              </div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <div className="font-display text-xl font-black text-foreground">
                8+
              </div>
              <div className="text-muted-foreground text-xs">
                Years in Business
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
