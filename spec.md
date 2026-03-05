# MV Cooling & Heating

## Current State

The website is a single-page React app for MV Cooling & Heating, an AC repair and cooling service company in Ellenabad, Haryana. It includes:

- Header with logo (`mv-logo-transparent.dim_300x100.png`) and nav
- Hero section with AC-focused headline and hero background image
- About section describing the business
- Services section with 7 AC-focused service cards (no "Call Now" button per card)
- WhyChooseUs, RentalSection, ReviewsSection, ServiceAreaSection, ContactSection, Footer
- SEO focused only on AC repair keywords
- Floating WhatsApp and Call buttons

## Requested Changes (Diff)

### Add
- 4 new services: Refrigerator Repair & Service, Deep Freezer Repair, Washing Machine Repair, Air Cooler Repair, Microwave Oven Repair, Water Cooler Repair (expanding the existing 7 to 11 total)
- "Call Now" button on each service card (linking to tel:+918053083378)
- New generated logo image in header and footer: `mv-logo-new-transparent.dim_400x120.png`
- Favicon reference in index.html: `favicon-mv.dim_64x64.png`
- New appliance repair images in appropriate sections: `hero-appliance-repair.dim_1200x600.jpg`, `refrigerator-repair.dim_600x400.jpg`, `washing-machine-repair.dim_600x400.jpg`
- Appliance image gallery/showcase strip between Services and WhyChooseUs
- SEO primary keywords: Refrigerator Repair Ellenabad, Washing Machine Repair Ellenabad, Deep Freezer Repair Ellenabad, Home Appliance Repair Ellenabad

### Modify
- `index.html`: Update meta title to "AC & Home Appliance Repair Ellenabad | MV Cooling & Heating", meta description to include all appliance services, keywords expanded, schema description updated, favicon linked
- `Header.tsx`: Replace old logo src with new logo `mv-logo-new-transparent.dim_400x120.png`
- `Footer.tsx`: Replace old logo src, update services list to include all 11 services
- `HeroSection.tsx`: Update headline/subheadline to mention home appliances, update hero background to use `hero-appliance-repair.dim_1200x600.jpg`
- `AboutSection.tsx`: Update description to clearly mention all appliance types (refrigerators, washing machines, deep freezers, air coolers, microwave ovens)
- `ServicesSection.tsx`: Replace 7 cards with 11 full service cards, each with icon, name, description, and "Call Now" button; professional grid layout

### Remove
- Old logo reference `mv-logo-transparent.dim_300x100.png` (replaced by new logo)

## Implementation Plan

1. Update `index.html`: new meta title, description, keywords, favicon link, schema description
2. Update `Header.tsx`: new logo image path
3. Update `Footer.tsx`: new logo image path, expanded services list
4. Update `HeroSection.tsx`: new hero bg image, updated headline to mention all appliances
5. Update `AboutSection.tsx`: updated body text covering all appliance types
6. Update `ServicesSection.tsx`: full 11-service grid with Call Now buttons per card
7. Add `ApplianceShowcase.tsx`: image strip component with 3 appliance images
8. Wire `ApplianceShowcase` into `App.tsx` between ServicesSection and WhyChooseUs
