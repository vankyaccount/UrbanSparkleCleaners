// Service + City landing page content config.
// Each entry drives a dedicated SEO page targeting a specific service+city keyword cluster.

export interface ServiceCityPage {
  city: string;           // URL slug, e.g. "niagara-falls"
  cityName: string;       // Display name, e.g. "Niagara Falls"
  province: string;       // e.g. "ON"
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSubheading: string;
  content: string;        // Rich HTML body content
  includes: string[];     // Checklist items for the "What's Included" section
  faqs: { question: string; answer: string }[];
  testimonial?: { name: string; location: string; text: string };
  nearbyAreas: { name: string; slug: string }[];
}

// ─────────────────────────────────────────────────────────────
// HOUSE CLEANING — 3 cities
// Target queries: house cleaning service [city], home cleaning [city],
//   residential cleaning [city], house cleaners [city], cleaners [city]
// ─────────────────────────────────────────────────────────────

export const HOUSE_CLEANING_CITIES: ServiceCityPage[] = [
  {
    city: "niagara-falls",
    cityName: "Niagara Falls",
    province: "ON",
    metaTitle: "House Cleaning Services in Niagara Falls, ON | Urban Sparkle Cleaners",
    metaDescription: "House cleaning in Niagara Falls, ON from $99. Serving Stamford, Chippawa & Airbnb rentals near Clifton Hill. Eco-friendly, fully insured. Call (647) 460-7008.",
    heroHeading: "House Cleaning Services in Niagara Falls, ON",
    heroSubheading: "Reliable, eco-friendly residential cleaning for Niagara Falls homeowners. Fully insured team, transparent pricing, and a 100% satisfaction guarantee.",
    content: `
      <h2>Professional House Cleaning in Niagara Falls, Ontario</h2>
      <p>Finding a trustworthy, reliable house cleaner in Niagara Falls shouldn't be stressful. Urban Sparkle Cleaners has been serving Southern Ontario homes since 2013 — fully insured, background-checked, and committed to leaving your home spotless every visit.</p>
      <p>Whether you need a one-time deep clean, regular weekly or bi-weekly maintenance cleaning, or a quick Airbnb turnaround between guests, our experienced team is ready to help. We use eco-friendly, plant-based cleaning products that are safe for your family, children, and pets.</p>

      <h2>Niagara Falls Neighbourhoods We Clean</h2>
      <p>We serve all parts of Niagara Falls, ON, including:</p>
      <ul>
        <li><strong>Stamford</strong> — One of Niagara Falls' largest residential areas; we regularly service homes throughout this neighbourhood.</li>
        <li><strong>Chippawa</strong> — A quieter riverside community; perfect for our bi-weekly maintenance service.</li>
        <li><strong>Queenston</strong> — Historic homes and newer builds alike benefit from our detailed cleaning.</li>
        <li><strong>Lundy's Lane</strong> — High-traffic tourist area with many short-term rentals; we offer fast Airbnb turnaround cleaning.</li>
        <li><strong>Downtown Niagara Falls</strong> — Condos, apartments, and townhouses throughout the downtown core.</li>
        <li><strong>Garner Road / Lyons Creek</strong> — Newer subdivisions in south Niagara Falls.</li>
      </ul>

      <h2>What House Cleaning in Niagara Falls Includes</h2>
      <p>Our standard house cleaning service covers your entire home from top to bottom:</p>
      <p><strong>Regular cleaning</strong> (weekly, bi-weekly, monthly) focuses on maintaining a clean, tidy home — dusting, vacuuming, mopping, bathroom scrubbing, kitchen surfaces, and trash removal. Ideal for families who want to walk into a spotless home every week without lifting a finger.</p>
      <p><strong>Deep cleaning</strong> goes further — baseboards, grout, inside cabinets, ceiling fans, light fixtures, and behind appliances. We recommend a deep clean as your first visit, then regular maintenance from there.</p>

      <h2>House Cleaning Pricing in Niagara Falls</h2>
      <p>Our pricing is transparent with no hidden fees. Regular house cleaning starts at $33/hour:</p>
      <ul>
        <li>Apartments (up to 2 bedrooms): from <strong>$99</strong></li>
        <li>Townhouses: from <strong>$132</strong> (4-hour minimum)</li>
        <li>Houses (3+ bedrooms): from <strong>$165</strong></li>
      </ul>
      <p>Book weekly and save 15%. Bi-weekly saves 10%. Monthly saves 5%. All supplies included.</p>

      <h2>Why Niagara Falls Homeowners Choose Urban Sparkle Cleaners</h2>
      <ul>
        <li><strong>Fully insured and bonded</strong> — complete liability coverage on every visit</li>
        <li><strong>Eco-friendly products</strong> — plant-based, non-toxic, safe for children and pets</li>
        <li><strong>Satisfaction guarantee</strong> — not happy? We return within 24 hours to re-clean at no charge</li>
        <li><strong>No hidden fees</strong> — the price we quote is the price you pay</li>
        <li><strong>Flexible scheduling</strong> — weekday and Saturday appointments available</li>
        <li><strong>All supplies provided</strong> — we bring everything; you don't need to supply a thing</li>
      </ul>
    `,
    includes: [
      "Dusting all surfaces, shelves, and furniture",
      "Vacuuming all carpets, rugs, and upholstered furniture",
      "Mopping all hard floors",
      "Full bathroom cleaning (toilet, sink, shower/tub, mirrors)",
      "Kitchen cleaning (counters, stovetop exterior, sink, appliance exteriors)",
      "Emptying all trash bins",
      "Wiping down light switches and door handles",
      "General tidying throughout",
    ],
    faqs: [
      {
        question: "How much does house cleaning cost in Niagara Falls?",
        answer: "Regular house cleaning in Niagara Falls starts at $33/hour. The minimum is $99 for apartments (up to 2 bedrooms), $132 for townhouses, and $165 for houses with 3+ bedrooms. Recurring clients save up to 15%. Use our online pricing calculator for an instant estimate.",
      },
      {
        question: "Do I need to be home when the cleaners arrive?",
        answer: "No — many of our Niagara Falls clients provide a key or entry code. Our team is fully vetted, insured, and bonded, so you can have complete peace of mind.",
      },
      {
        question: "Do you clean Airbnb and short-term rentals in Niagara Falls?",
        answer: "Yes. Niagara Falls has a large short-term rental market and we specialize in fast, reliable Airbnb turnaround cleaning — linen changes, restocking, and a thorough clean between every guest.",
      },
      {
        question: "What areas of Niagara Falls do you serve?",
        answer: "We serve all Niagara Falls neighbourhoods including Stamford, Chippawa, Queenston, Lundy's Lane, downtown Niagara Falls, Garner Road, and surrounding areas.",
      },
      {
        question: "How do I book a house cleaner in Niagara Falls?",
        answer: "Book online at urbansparklecleaners.ca/book, call (647) 460-7008, or email urbansparklecleaners@gmail.com. Same-week appointments are often available.",
      },
    ],
    testimonial: {
      name: "Maria S.",
      location: "Niagara Falls, ON",
      text: "Absolutely love Urban Sparkle! They cleaned our Airbnb in Niagara Falls between guests and it looked better than when we first furnished it. Fast, thorough, and reliable every single time.",
    },
    nearbyAreas: [
      { name: "St. Catharines", slug: "st-catharines" },
      { name: "Welland", slug: "welland" },
      { name: "Niagara-on-the-Lake", slug: "niagara-on-the-lake" },
      { name: "Thorold", slug: "thorold" },
    ],
  },
  {
    city: "st-catharines",
    cityName: "St. Catharines",
    province: "ON",
    metaTitle: "House Cleaning Services in St. Catharines, ON | Urban Sparkle Cleaners",
    metaDescription: "House cleaning in St. Catharines, ON from $99. Serving Port Dalhousie, Grantham, Brock U area & beyond. Eco-friendly, fully insured. Call (647) 460-7008.",
    heroHeading: "House Cleaning Services in St. Catharines, ON",
    heroSubheading: "St. Catharines' trusted residential cleaning team. Eco-friendly products, fully insured, 100% satisfaction guarantee — so you can enjoy your home without the work.",
    content: `
      <h2>Professional House Cleaning in St. Catharines, Ontario</h2>
      <p>Urban Sparkle Cleaners provides professional, reliable house cleaning to homeowners and renters across St. Catharines, ON. From quick bi-weekly refreshes to thorough deep cleans, our fully insured team delivers consistent results using eco-friendly, plant-based products.</p>
      <p>St. Catharines is the largest city in the Niagara Region — and a busy one. Whether you're a working professional in Port Dalhousie, a family in Grantham, or a student near Brock University, we'll keep your home spotless so you can focus on what matters.</p>

      <h2>St. Catharines Neighbourhoods We Clean</h2>
      <p>We serve all areas of St. Catharines, including:</p>
      <ul>
        <li><strong>Port Dalhousie</strong> — Lakeside homes and condos; a popular area for our bi-weekly maintenance cleanings.</li>
        <li><strong>Grantham</strong> — One of St. Catharines' largest residential neighbourhoods; we service dozens of homes here weekly.</li>
        <li><strong>Downtown St. Catharines</strong> — Apartments, condos, and older homes; our team is experienced with all building types.</li>
        <li><strong>Merritton</strong> — Established residential neighbourhood with a mix of houses and townhouses.</li>
        <li><strong>Facer / Haig</strong> — Central St. Catharines; frequent bookings for regular cleaning and deep cleans.</li>
        <li><strong>Lakeshore / North End</strong> — Newer subdivisions along the lakefront.</li>
      </ul>

      <h2>Our House Cleaning Services in St. Catharines</h2>
      <p><strong>Regular cleaning</strong> keeps your St. Catharines home consistently clean. We vacuum, mop, dust, scrub bathrooms, clean kitchen surfaces, and empty trash — on whatever schedule works for you (weekly, bi-weekly, or monthly).</p>
      <p><strong>Deep cleaning</strong> tackles the areas that regular cleaning doesn't cover: inside cabinets, baseboards, grout lines, light fixtures, ceiling fans, and behind appliances. Perfect for first visits, spring cleaning, or before a home inspection.</p>
      <p><strong>Move-out cleaning</strong> is a comprehensive clean for tenants leaving a rental property. We'll ensure the unit meets landlord standards and maximizes your chance of getting your full deposit back.</p>

      <h2>House Cleaning Pricing in St. Catharines</h2>
      <p>Transparent pricing, no surprises:</p>
      <ul>
        <li>Apartments (up to 2 bedrooms): from <strong>$99</strong> at $33/hr</li>
        <li>Townhouses: from <strong>$132</strong> (4-hour minimum)</li>
        <li>Houses (3+ bedrooms): from <strong>$165</strong></li>
      </ul>
      <p>Deep cleaning starts at $40/hr with a minimum of 2 technicians. Add-ons (inside oven, inside fridge, windows) available from $25. Recurring discounts: 15% off weekly, 10% off bi-weekly, 5% off monthly.</p>

      <h2>Why St. Catharines Residents Trust Urban Sparkle Cleaners</h2>
      <ul>
        <li><strong>Fully insured and bonded</strong> — every visit covered by liability insurance</li>
        <li><strong>Eco-friendly</strong> — plant-based products, safe for kids and pets</li>
        <li><strong>Satisfaction guarantee</strong> — we return within 24 hours if you're not satisfied</li>
        <li><strong>All supplies included</strong> — we bring everything</li>
        <li><strong>Flexible scheduling</strong> — weekdays and Saturdays available</li>
      </ul>
    `,
    includes: [
      "Dusting all surfaces, shelves, and furniture",
      "Vacuuming all carpets, rugs, and upholstered furniture",
      "Mopping all hard floors",
      "Full bathroom cleaning (toilet, sink, shower/tub, mirrors)",
      "Kitchen cleaning (counters, stovetop exterior, sink, appliance exteriors)",
      "Emptying all trash bins",
      "Wiping down light switches and door handles",
      "General tidying throughout",
    ],
    faqs: [
      {
        question: "How much does house cleaning cost in St. Catharines?",
        answer: "House cleaning in St. Catharines starts at $33/hour. Apartments start at $99, townhouses at $132, and houses at $165. Recurring clients save up to 15% off. All supplies are included.",
      },
      {
        question: "Do you clean near Brock University in St. Catharines?",
        answer: "Yes — we service apartments, condos, and student rentals near Brock University and throughout central St. Catharines.",
      },
      {
        question: "Can you do a move-out clean for a rental in St. Catharines?",
        answer: "Absolutely. Our move-out cleaning service is comprehensive and designed to meet landlord inspection standards in St. Catharines and across Niagara Region. We clean every area including inside appliances, baseboards, and closets.",
      },
      {
        question: "Do I need to be home during cleaning?",
        answer: "No. Many St. Catharines clients leave a key or entry code. All our cleaners are vetted, insured, and bonded.",
      },
      {
        question: "How do I book a house cleaner in St. Catharines?",
        answer: "Book online at urbansparklecleaners.ca/book, call (647) 460-7008, or email urbansparklecleaners@gmail.com. Same-week bookings are often available.",
      },
    ],
    testimonial: {
      name: "Rachel M.",
      location: "St. Catharines, ON",
      text: "I've tried three different cleaning services in St. Catharines and Urban Sparkle is by far the best. Consistent, thorough, and always on time. My home has never looked cleaner.",
    },
    nearbyAreas: [
      { name: "Niagara Falls", slug: "niagara-falls" },
      { name: "Welland", slug: "welland" },
      { name: "Niagara-on-the-Lake", slug: "niagara-on-the-lake" },
      { name: "Grimsby", slug: "grimsby" },
    ],
  },
  {
    city: "welland",
    cityName: "Welland",
    province: "ON",
    metaTitle: "House Cleaning Services in Welland, ON | Urban Sparkle Cleaners",
    metaDescription: "House cleaning in Welland, ON from $99. Serving Coyle Creek, North Welland & all neighbourhoods. Eco-friendly, fully insured. Satisfaction guaranteed. Call (647) 460-7008.",
    heroHeading: "House Cleaning Services in Welland, ON",
    heroSubheading: "Welland's trusted cleaning team. Eco-friendly products, fully insured, flexible scheduling, and a 100% satisfaction guarantee on every clean.",
    content: `
      <h2>Professional House Cleaning in Welland, Ontario</h2>
      <p>Urban Sparkle Cleaners offers professional, reliable house cleaning services throughout Welland, ON. Whether you're a homeowner who wants a consistently clean home, a renter preparing to move out, or a busy family that needs regular help, our trained, insured team is here to help.</p>
      <p>Welland is a growing community in the heart of Niagara Region — and our cleaners know the city well. From the north end near the Welland Canal to the newer subdivisions in south Welland, we cover the whole city.</p>

      <h2>Welland Neighbourhoods We Serve</h2>
      <ul>
        <li><strong>North Welland</strong> — Close to the canal; a mix of older homes and condos.</li>
        <li><strong>Lincoln Street area</strong> — Central Welland with high demand for regular maintenance cleaning.</li>
        <li><strong>South Welland / Coyle Creek</strong> — Newer subdivisions; popular with families booking bi-weekly service.</li>
        <li><strong>East Welland</strong> — Established residential streets; frequent deep clean requests.</li>
        <li><strong>Welland proper (downtown)</strong> — Apartments and townhouses throughout the downtown core.</li>
      </ul>

      <h2>Our House Cleaning Services in Welland</h2>
      <p><strong>Regular cleaning</strong> is our most popular service in Welland — keeping your home consistently clean on a weekly, bi-weekly, or monthly schedule. Each visit includes dusting, vacuuming, mopping, bathroom and kitchen cleaning, and general tidying.</p>
      <p><strong>Deep cleaning</strong> is a comprehensive, top-to-bottom clean that goes beyond routine maintenance. We clean inside cabinets and drawers, scrub grout, wipe down baseboards, clean light fixtures and ceiling fans, and get behind and under furniture. Ideal for a first clean or seasonal refresh.</p>
      <p>We also offer <strong>move-in/move-out cleaning</strong>, <strong>post-renovation cleaning</strong>, and <strong>one-time cleans</strong> for special occasions.</p>

      <h2>Cleaning Prices in Welland</h2>
      <p>Pricing is transparent with no hidden fees:</p>
      <ul>
        <li>Apartments (up to 2 bedrooms): from <strong>$99</strong></li>
        <li>Townhouses: from <strong>$132</strong></li>
        <li>Houses (3+ bedrooms): from <strong>$165</strong></li>
      </ul>
      <p>Regular cleaning is $33/hr. Deep cleaning is $40/hr (minimum 2 technicians). Weekly service saves 15%; bi-weekly saves 10%.</p>

      <h2>Why Welland Homeowners Choose Urban Sparkle Cleaners</h2>
      <ul>
        <li><strong>Locally serving Welland</strong> — we're based in the Niagara Region and know the area well</li>
        <li><strong>Fully insured and bonded</strong> — peace of mind on every visit</li>
        <li><strong>Eco-friendly products</strong> — plant-based, non-toxic, safe for kids and pets</li>
        <li><strong>100% satisfaction guarantee</strong> — we'll return within 24 hours to re-clean if you're not satisfied</li>
        <li><strong>All supplies included</strong> — no need to buy or supply anything</li>
        <li><strong>Easy online booking</strong> — book in minutes at urbansparklecleaners.ca/book</li>
      </ul>
    `,
    includes: [
      "Dusting all surfaces, shelves, and furniture",
      "Vacuuming all carpets, rugs, and upholstered furniture",
      "Mopping all hard floors",
      "Full bathroom cleaning (toilet, sink, shower/tub, mirrors)",
      "Kitchen cleaning (counters, stovetop exterior, sink, appliance exteriors)",
      "Emptying all trash bins",
      "Wiping down light switches and door handles",
      "General tidying throughout",
    ],
    faqs: [
      {
        question: "How much does house cleaning cost in Welland?",
        answer: "House cleaning in Welland starts at $33/hour with a $99 minimum for apartments, $132 for townhouses, and $165 for houses with 3+ bedrooms. Recurring customers save up to 15%. All supplies and equipment are included.",
      },
      {
        question: "Do you offer deep cleaning in Welland?",
        answer: "Yes. Deep cleaning in Welland is $40/hour with a minimum of 2 technicians. It includes everything in regular cleaning plus baseboards, grout, inside cabinets, light fixtures, and behind appliances.",
      },
      {
        question: "How do I book a house cleaner in Welland?",
        answer: "Book online at urbansparklecleaners.ca/book, call (647) 460-7008, or email urbansparklecleaners@gmail.com. We serve all neighbourhoods in Welland and can often accommodate same-week bookings.",
      },
      {
        question: "Are your cleaners insured in Welland?",
        answer: "Yes. Urban Sparkle Cleaners is fully insured and bonded. Every technician carries liability coverage protecting your home on every visit.",
      },
      {
        question: "Do you offer recurring cleaning in Welland?",
        answer: "Yes — weekly, bi-weekly, and monthly recurring service is available. Recurring clients receive automatic discounts: 15% for weekly, 10% for bi-weekly, and 5% for monthly bookings.",
      },
    ],
    testimonial: {
      name: "Sandra T.",
      location: "Welland, ON",
      text: "Urban Sparkle has been cleaning our home in Welland for six months now and we couldn't be happier. Reliable, thorough, and genuinely lovely people. Highly recommend.",
    },
    nearbyAreas: [
      { name: "Niagara Falls", slug: "niagara-falls" },
      { name: "St. Catharines", slug: "st-catharines" },
      { name: "Thorold", slug: "thorold" },
      { name: "Port Colborne", slug: "port-colborne" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// DEEP CLEANING — 3 cities
// Target queries: deep cleaning [city], cleaning company [city],
//   thorough cleaning [city]
// ─────────────────────────────────────────────────────────────

export const DEEP_CLEANING_CITIES: ServiceCityPage[] = [
  {
    city: "niagara-falls",
    cityName: "Niagara Falls",
    province: "ON",
    metaTitle: "Deep Cleaning Services in Niagara Falls, ON | Urban Sparkle Cleaners",
    metaDescription: "Deep cleaning in Niagara Falls, ON from $120. Grout, baseboards & inside cabinets for Stamford homes & downtown condos. 2 technicians. Call (647) 460-7008.",
    heroHeading: "Deep Cleaning Services in Niagara Falls, ON",
    heroSubheading: "A comprehensive top-to-bottom clean for Niagara Falls homes. Grout, baseboards, inside cabinets, and every hidden corner — handled by our trained, insured team.",
    content: `
      <h2>What is Deep Cleaning in Niagara Falls?</h2>
      <p>Deep cleaning goes far beyond regular maintenance cleaning. While a standard cleaning keeps your home tidy week to week, a deep clean tackles the areas that build up over time: grout lines, inside cabinets and drawers, baseboards and door frames, light fixtures, ceiling fans, the inside of your oven and refrigerator, and behind and under furniture.</p>
      <p>Urban Sparkle Cleaners provides thorough deep cleaning services across Niagara Falls, ON — with a minimum of 2 trained technicians per visit to ensure every area is addressed efficiently and completely.</p>

      <h2>When to Book Deep Cleaning in Niagara Falls</h2>
      <ul>
        <li><strong>First clean</strong> — we recommend a deep clean as your first visit before moving to regular maintenance</li>
        <li><strong>Spring cleaning</strong> — reset your home after a long winter</li>
        <li><strong>Before a home sale or listing</strong> — present your Niagara Falls property at its best</li>
        <li><strong>Post-renovation</strong> — remove construction dust and debris after renovations</li>
        <li><strong>Before a major event</strong> — ensure your home is spotless for guests</li>
        <li><strong>Seasonal refresh</strong> — quarterly deep clean to supplement regular maintenance</li>
      </ul>

      <h2>What Our Deep Cleaning Includes in Niagara Falls</h2>
      <p>Our deep cleaning service in Niagara Falls covers everything in a regular clean, plus:</p>
      <ul>
        <li>Scrubbing tile grout in bathrooms and kitchens</li>
        <li>Cleaning inside cabinets and drawers</li>
        <li>Wiping baseboards and door frames throughout the home</li>
        <li>Cleaning light fixtures and ceiling fans</li>
        <li>Washing interior window sills and frames</li>
        <li>Cleaning behind and under furniture and appliances</li>
        <li>Detailed scrubbing of shower and tub surrounds</li>
        <li>Cleaning inside the oven and refrigerator (as add-ons or included in full deep clean)</li>
      </ul>

      <h2>Deep Cleaning Pricing in Niagara Falls</h2>
      <p>Deep cleaning in Niagara Falls is $40/hour with a minimum of 2 technicians:</p>
      <ul>
        <li>Apartments (up to 2 bedrooms): from <strong>$120</strong></li>
        <li>Townhouses: from <strong>$160</strong></li>
        <li>Houses (3+ bedrooms): from <strong>$200</strong></li>
      </ul>
      <p>Final price depends on the size and current condition of your home. Contact us for a precise estimate.</p>

      <h2>Deep Cleaning vs Regular Cleaning — Which Do You Need?</h2>
      <p>If your home hasn't had a thorough clean in 3+ months, if you've just moved in, or if you're preparing to sell, a deep clean is the right choice. After your initial deep clean, most Niagara Falls clients switch to bi-weekly regular maintenance cleaning to keep their home in top condition year-round.</p>
    `,
    includes: [
      "Everything in regular cleaning",
      "Scrubbing tile grout in bathrooms and kitchens",
      "Cleaning inside all cabinets and drawers",
      "Wiping baseboards, door frames, and trim",
      "Cleaning light fixtures and ceiling fans",
      "Washing window sills and frames",
      "Cleaning behind and under furniture",
      "Detailed scrubbing of shower/tub surrounds",
    ],
    faqs: [
      {
        question: "How much does deep cleaning cost in Niagara Falls?",
        answer: "Deep cleaning in Niagara Falls starts at $40/hour with a minimum of 2 technicians. Minimum prices are $120 for apartments, $160 for townhouses, and $200 for houses. The final cost depends on the size and condition of your home.",
      },
      {
        question: "How long does a deep clean take in a Niagara Falls home?",
        answer: "A thorough deep clean typically takes 4–8 hours depending on the size and condition of the property. With 2 technicians, most homes are completed in half the time of a single-person clean.",
      },
      {
        question: "How often should I deep clean my home in Niagara Falls?",
        answer: "Most homeowners in Niagara Falls benefit from a deep clean 2–4 times per year, with regular bi-weekly maintenance cleaning in between. After your first deep clean, a regular schedule keeps your home consistently pristine.",
      },
      {
        question: "Do you clean Airbnb properties in Niagara Falls with a deep clean?",
        answer: "Yes. We offer deep cleans for short-term rentals in Niagara Falls, including between guest turnovers, seasonal resets, and end-of-season thorough cleans. Our team is experienced with Airbnb properties throughout Niagara Falls.",
      },
      {
        question: "Can I book a deep clean online?",
        answer: "Yes. Book at urbansparklecleaners.ca/book or call (647) 460-7008. For deep cleans, we recommend calling to discuss the scope and get an accurate estimate based on your home's size and condition.",
      },
    ],
    testimonial: {
      name: "James K.",
      location: "Niagara Falls, ON",
      text: "Booked a deep clean for our house in Stamford and the team was incredible. Every corner spotless. Will definitely be scheduling regular bi-weekly cleanings going forward.",
    },
    nearbyAreas: [
      { name: "St. Catharines", slug: "st-catharines" },
      { name: "Welland", slug: "welland" },
      { name: "Niagara-on-the-Lake", slug: "niagara-on-the-lake" },
      { name: "Thorold", slug: "thorold" },
    ],
  },
  {
    city: "st-catharines",
    cityName: "St. Catharines",
    province: "ON",
    metaTitle: "Deep Cleaning Services in St. Catharines, ON | Urban Sparkle Cleaners",
    metaDescription: "Deep cleaning in St. Catharines, ON from $120. Top-to-bottom clean for Port Dalhousie to Grantham homes. 2 trained technicians, fully insured. Call (647) 460-7008.",
    heroHeading: "Deep Cleaning Services in St. Catharines, ON",
    heroSubheading: "Top-to-bottom deep cleaning for St. Catharines homes. Two trained technicians tackle every corner — grout, baseboards, inside cabinets, and beyond.",
    content: `
      <h2>Professional Deep Cleaning in St. Catharines, Ontario</h2>
      <p>Urban Sparkle Cleaners offers comprehensive deep cleaning services across St. Catharines, ON. Our deep clean is a thorough, detailed service that covers every surface and hidden area — far beyond what a standard cleaning addresses.</p>
      <p>St. Catharines is Niagara Region's largest city, with homes ranging from century-old Port Dalhousie residences to brand-new Grantham subdivisions. Our team is experienced with all property types and sizes.</p>

      <h2>When Should You Book a Deep Clean in St. Catharines?</h2>
      <ul>
        <li><strong>First-time customers</strong> — start fresh with a deep clean, then maintain with regular service</li>
        <li><strong>Spring or fall refresh</strong> — seasonal deep clean after winter or before the holidays</li>
        <li><strong>Pre-sale or listing preparation</strong> — make your St. Catharines property shine for buyers</li>
        <li><strong>Post-renovation</strong> — remove construction dust after home improvements</li>
        <li><strong>Moving in</strong> — ensure a previous occupant's home is truly clean before you settle in</li>
      </ul>

      <h2>What Deep Cleaning Includes in St. Catharines</h2>
      <p>Beyond the standard clean (dusting, vacuuming, mopping, bathrooms, kitchen surfaces), our deep clean in St. Catharines adds:</p>
      <ul>
        <li>Scrubbing grout in all bathrooms and the kitchen</li>
        <li>Cleaning inside all kitchen and bathroom cabinets</li>
        <li>Wiping all baseboards, door frames, and trim</li>
        <li>Cleaning ceiling fans and light fixtures</li>
        <li>Washing window sills, frames, and ledges</li>
        <li>Vacuuming and cleaning behind and under all furniture</li>
        <li>Detailed scrubbing of shower tiles and tub surrounds</li>
      </ul>

      <h2>Deep Cleaning Pricing in St. Catharines</h2>
      <ul>
        <li>Apartments: from <strong>$120</strong> ($40/hr, minimum 2 technicians)</li>
        <li>Townhouses: from <strong>$160</strong></li>
        <li>Houses (3+ bedrooms): from <strong>$200</strong></li>
      </ul>
      <p>Actual price varies based on home size and condition. Contact us for a free estimate specific to your St. Catharines home.</p>

      <h2>Deep Cleaning vs Regular Cleaning in St. Catharines</h2>
      <p>Regular cleaning maintains cleanliness. Deep cleaning restores it. If your home hasn't had a thorough clean in several months, or if you've just moved into a new place in St. Catharines, start with a deep clean — then switch to regular bi-weekly maintenance to keep it in top condition.</p>
    `,
    includes: [
      "Everything in regular cleaning",
      "Scrubbing tile grout in bathrooms and kitchens",
      "Cleaning inside all cabinets and drawers",
      "Wiping baseboards, door frames, and trim",
      "Cleaning light fixtures and ceiling fans",
      "Washing window sills and frames",
      "Cleaning behind and under furniture",
      "Detailed scrubbing of shower/tub surrounds",
    ],
    faqs: [
      {
        question: "How much does deep cleaning cost in St. Catharines?",
        answer: "Deep cleaning in St. Catharines starts at $40/hour with a minimum of 2 technicians. Pricing starts at $120 for apartments, $160 for townhouses, and $200 for houses. Call (647) 460-7008 for a precise quote.",
      },
      {
        question: "How is deep cleaning different from regular cleaning?",
        answer: "Regular cleaning handles weekly maintenance: dusting, vacuuming, mopping, and surface cleaning. Deep cleaning goes further — inside cabinets, grout, baseboards, ceiling fans, behind appliances, and every neglected corner.",
      },
      {
        question: "How often should I get a deep clean in St. Catharines?",
        answer: "Most St. Catharines homeowners do a deep clean 2–4 times per year. After an initial deep clean, regular bi-weekly maintenance cleaning is usually sufficient to keep your home consistently clean.",
      },
      {
        question: "Do you offer deep cleaning near Brock University?",
        answer: "Yes — we clean student rentals, condos, and apartments throughout central St. Catharines including the areas near Brock University.",
      },
      {
        question: "How do I book a deep clean in St. Catharines?",
        answer: "Book online at urbansparklecleaners.ca/book or call (647) 460-7008. We recommend calling for deep cleans so we can accurately estimate time and cost based on your specific home.",
      },
    ],
    testimonial: {
      name: "David P.",
      location: "St. Catharines, ON",
      text: "Hired Urban Sparkle for a deep clean before listing our home in St. Catharines. The team was thorough, professional, and the house looked spotless. Our realtor was impressed.",
    },
    nearbyAreas: [
      { name: "Niagara Falls", slug: "niagara-falls" },
      { name: "Welland", slug: "welland" },
      { name: "Niagara-on-the-Lake", slug: "niagara-on-the-lake" },
      { name: "Grimsby", slug: "grimsby" },
    ],
  },
  {
    city: "welland",
    cityName: "Welland",
    province: "ON",
    metaTitle: "Deep Cleaning Services in Welland, ON | Urban Sparkle Cleaners",
    metaDescription: "Deep cleaning in Welland, ON from $120. Serving canal-side homes to south Welland — grout, baseboards & inside cabinets. 2 technicians. Call (647) 460-7008.",
    heroHeading: "Deep Cleaning Services in Welland, ON",
    heroSubheading: "Thorough top-to-bottom deep cleaning for Welland homes. Two trained technicians, eco-friendly products, and a satisfaction guarantee on every visit.",
    content: `
      <h2>Professional Deep Cleaning in Welland, Ontario</h2>
      <p>Urban Sparkle Cleaners provides thorough, professional deep cleaning services throughout Welland, ON. Our deep cleaning service is a comprehensive top-to-bottom clean that goes far beyond routine maintenance — tackling grout, baseboards, inside cabinets, ceiling fans, and every area that builds up over time.</p>

      <h2>When to Book Deep Cleaning in Welland</h2>
      <ul>
        <li><strong>Your first clean with us</strong> — get your home into top condition before starting regular service</li>
        <li><strong>Spring cleaning</strong> — thorough reset after winter in Welland</li>
        <li><strong>Before or after a move</strong> — ideal for tenants and homeowners alike</li>
        <li><strong>Post-renovation</strong> — construction dust removal and full cleanup</li>
        <li><strong>Quarterly refresh</strong> — supplement regular cleaning with a seasonal deep clean</li>
      </ul>

      <h2>What's Included in a Deep Clean in Welland</h2>
      <p>Our Welland deep clean covers everything in a regular clean, plus:</p>
      <ul>
        <li>Scrubbing all tile grout in bathrooms and kitchen</li>
        <li>Cleaning inside all cabinets and drawers</li>
        <li>Wiping down all baseboards, door frames, and trim</li>
        <li>Cleaning light fixtures and ceiling fans</li>
        <li>Washing window sills and ledges</li>
        <li>Cleaning behind and under all furniture and appliances</li>
        <li>Detailed scrubbing of shower and tub surrounds</li>
      </ul>

      <h2>Deep Cleaning Prices in Welland</h2>
      <ul>
        <li>Apartments: from <strong>$120</strong></li>
        <li>Townhouses: from <strong>$160</strong></li>
        <li>Houses (3+ bedrooms): from <strong>$200</strong></li>
      </ul>
      <p>All deep cleans require a minimum of 2 technicians at $40/hr. Price may vary based on the size and condition of your Welland home — contact us for a free estimate.</p>

      <h2>Why Welland Homeowners Choose Our Deep Cleaning Service</h2>
      <p>We send a minimum of 2 trained technicians to every deep clean, ensuring the work is done thoroughly and efficiently. Our team uses eco-friendly, plant-based products — no harsh chemicals in your home. And if you're not completely satisfied with the result, we return within 24 hours to re-clean at no charge.</p>
    `,
    includes: [
      "Everything in regular cleaning",
      "Scrubbing tile grout in bathrooms and kitchens",
      "Cleaning inside all cabinets and drawers",
      "Wiping baseboards, door frames, and trim",
      "Cleaning light fixtures and ceiling fans",
      "Washing window sills and frames",
      "Cleaning behind and under furniture",
      "Detailed scrubbing of shower/tub surrounds",
    ],
    faqs: [
      {
        question: "How much does deep cleaning cost in Welland?",
        answer: "Deep cleaning in Welland starts at $40/hour with a minimum of 2 technicians. Starting prices are $120 for apartments, $160 for townhouses, and $200 for houses. Final cost depends on home size and current condition.",
      },
      {
        question: "Do I need a deep clean or a regular clean?",
        answer: "If your home hasn't had a thorough clean in 3+ months, if you've recently moved in, or if you're preparing for a special event or home sale, a deep clean is the right choice. After your initial deep clean, most Welland clients move to bi-weekly regular maintenance.",
      },
      {
        question: "How many cleaners do you send for a deep clean in Welland?",
        answer: "Every deep cleaning booking in Welland requires a minimum of 2 technicians to ensure thorough coverage. Larger homes may have 3 technicians depending on the scope.",
      },
      {
        question: "Do you offer post-renovation deep cleaning in Welland?",
        answer: "Yes. Post-renovation deep cleaning in Welland removes construction dust, paint specks, and debris after home improvement projects. This is a specialty service — contact us for a tailored quote.",
      },
      {
        question: "How do I book deep cleaning in Welland?",
        answer: "Call (647) 460-7008, book online at urbansparklecleaners.ca/book, or email urbansparklecleaners@gmail.com. We serve all of Welland and can often accommodate bookings within the same week.",
      },
    ],
    testimonial: {
      name: "Mike B.",
      location: "Welland, ON",
      text: "Had Urban Sparkle do a deep clean on our house before we put it on the market. Two cleaners came and spent the whole day. The place was immaculate — better than when we bought it.",
    },
    nearbyAreas: [
      { name: "Niagara Falls", slug: "niagara-falls" },
      { name: "St. Catharines", slug: "st-catharines" },
      { name: "Thorold", slug: "thorold" },
      { name: "Port Colborne", slug: "port-colborne" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// MOVE-OUT CLEANING — 3 cities
// Target queries: move out cleaning [city], end of tenancy cleaning [city],
//   move in cleaning [city], end of lease cleaning
// ─────────────────────────────────────────────────────────────

export const MOVE_OUT_CLEANING_CITIES: ServiceCityPage[] = [
  {
    city: "niagara-falls",
    cityName: "Niagara Falls",
    province: "ON",
    metaTitle: "Move-Out Cleaning Services in Niagara Falls, ON | Urban Sparkle Cleaners",
    metaDescription: "Move-out cleaning in Niagara Falls, ON — get your full deposit back. Trusted by Stamford renters, condo owners & property managers. Fully insured. Call (647) 460-7008.",
    heroHeading: "Move-Out Cleaning Services in Niagara Falls, ON",
    heroSubheading: "Leaving your Niagara Falls rental? Our thorough move-out clean helps you get your full deposit back. Trusted by tenants, landlords, and property managers across Niagara Falls.",
    content: `
      <h2>Professional Move-Out Cleaning in Niagara Falls, ON</h2>
      <p>Moving out of a rental in Niagara Falls? The condition you leave the property in directly impacts how much of your security deposit you get back. Urban Sparkle Cleaners provides thorough, professional move-out cleaning services for tenants, landlords, and property managers throughout Niagara Falls.</p>
      <p>Our move-out cleaning is a comprehensive, top-to-bottom clean of the entire vacant property — designed to meet or exceed Ontario landlord inspection standards. We tackle everything from inside appliances to closet shelves to bathroom grout.</p>

      <h2>What Our Move-Out Cleaning Covers in Niagara Falls</h2>
      <p>A standard move-out clean from Urban Sparkle Cleaners includes:</p>
      <ul>
        <li>Full kitchen clean: inside oven, inside fridge, inside all cabinets and drawers, counters, stovetop, sink, and backsplash</li>
        <li>Bathroom(s): scrubbing toilet, sink, shower/tub, grout, mirrors, inside medicine cabinet, and floor</li>
        <li>All floors: vacuuming carpets (including closets), mopping all hard floors</li>
        <li>Walls and trim: spot-cleaning marks off walls, wiping all baseboards and door frames</li>
        <li>Interior windows: cleaning window sills, ledges, and frames throughout</li>
        <li>All closets: shelves, rods, and floors cleaned</li>
        <li>Light fixtures and ceiling fans cleaned</li>
        <li>Garage sweep (if applicable)</li>
      </ul>

      <h2>Move-Out Cleaning for Niagara Falls Renters</h2>
      <p>Ontario's Residential Tenancies Act requires tenants to return a rental unit in the same condition as when they moved in, with reasonable wear and tear. A professional move-out clean significantly increases the likelihood of recovering your full deposit.</p>
      <p>We work with renters throughout Niagara Falls — from apartments near Clifton Hill to townhouses in Stamford and single-family homes in Chippawa. Our team knows exactly what landlords and property managers look for during inspections.</p>

      <h2>Move-Out Cleaning for Landlords and Property Managers</h2>
      <p>Property managers and landlords across Niagara Falls rely on Urban Sparkle Cleaners to prepare vacant units quickly between tenancies. We can accommodate tight turnaround times and coordinate directly with your property management team.</p>
    `,
    includes: [
      "Full kitchen: inside oven, fridge, all cabinets, counters, stovetop, sink",
      "Full bathroom(s): toilet, sink, shower/tub, grout, mirrors, floor",
      "All floors: vacuuming (including closets) and mopping",
      "Baseboards, door frames, and trim throughout",
      "Interior window sills, ledges, and frames",
      "All closets: shelves, rods, and floors",
      "Light fixtures and ceiling fans",
      "Spot-cleaning marks off walls",
    ],
    faqs: [
      {
        question: "How much does move-out cleaning cost in Niagara Falls?",
        answer: "Move-out cleaning in Niagara Falls is priced based on the size and condition of the property. Contact us at (647) 460-7008 or use our pricing calculator for an estimate. Our regular cleaning starts at $33/hr and deep cleaning at $40/hr; move-out cleans are typically priced as deep cleans.",
      },
      {
        question: "Will a move-out clean help me get my deposit back in Niagara Falls?",
        answer: "A professional move-out clean significantly improves your chances of recovering your full security deposit. We clean to the standard that most Niagara Falls landlords expect, including inside appliances, closets, and baseboards.",
      },
      {
        question: "How much notice do you need for a move-out clean?",
        answer: "We recommend booking at least 3–5 days in advance. We do accommodate urgent requests when available — call (647) 460-7008 to check availability.",
      },
      {
        question: "Do you clean empty or furnished properties in Niagara Falls?",
        answer: "We primarily do move-out cleaning on vacant (empty) properties. For furnished properties, we offer our regular or deep cleaning services instead.",
      },
      {
        question: "Do you provide move-in cleaning for new tenants in Niagara Falls?",
        answer: "Yes. Whether you're a tenant moving into a new Niagara Falls rental or a homeowner who just purchased a property, we offer move-in cleaning to ensure the space is thoroughly clean before you settle in.",
      },
    ],
    testimonial: {
      name: "Kim L.",
      location: "Niagara Falls, ON",
      text: "Used Urban Sparkle for my move-out clean in Niagara Falls and got my full deposit back. They cleaned absolutely everything — even the inside of the fridge and oven. Couldn't recommend them more.",
    },
    nearbyAreas: [
      { name: "St. Catharines", slug: "st-catharines" },
      { name: "Welland", slug: "welland" },
      { name: "Niagara-on-the-Lake", slug: "niagara-on-the-lake" },
      { name: "Thorold", slug: "thorold" },
    ],
  },
  {
    city: "st-catharines",
    cityName: "St. Catharines",
    province: "ON",
    metaTitle: "Move-Out Cleaning Services in St. Catharines, ON | Urban Sparkle Cleaners",
    metaDescription: "Move-out cleaning in St. Catharines, ON — trusted by Brock U students & Grantham renters to recover their full deposit. Fully insured. Call (647) 460-7008.",
    heroHeading: "Move-Out Cleaning Services in St. Catharines, ON",
    heroSubheading: "Moving out of your St. Catharines rental? Our thorough end-of-tenancy clean helps you recover your full deposit. Trusted by tenants and property managers across Niagara Region.",
    content: `
      <h2>Professional Move-Out Cleaning in St. Catharines, ON</h2>
      <p>Urban Sparkle Cleaners provides thorough, professional move-out cleaning services for renters, landlords, and property managers throughout St. Catharines. Whether you're leaving an apartment near Brock University, a townhouse in Port Dalhousie, or a house in Grantham, our team will leave the property in excellent condition.</p>
      <p>Move-out cleaning in St. Catharines is a comprehensive service — going room by room, inside every cabinet, appliance, and closet to ensure the property meets inspection standards.</p>

      <h2>What's Included in Our St. Catharines Move-Out Cleaning</h2>
      <ul>
        <li>Kitchen: inside oven, inside fridge, all cabinets and drawers, counters, stovetop, sink, backsplash</li>
        <li>Bathroom(s): toilet, sink, shower/tub, scrubbing grout, mirror, medicine cabinet interior, floor</li>
        <li>Floors: vacuuming all carpets (including closets), mopping all hard floors</li>
        <li>Walls and trim: spot-cleaning marks, baseboards, door frames throughout</li>
        <li>Interior windows: sills, ledges, and frames</li>
        <li>Closets: shelves, rods, and floors</li>
        <li>Light fixtures and ceiling fans</li>
      </ul>

      <h2>Move-Out Cleaning for St. Catharines Renters</h2>
      <p>St. Catharines has a large rental market — from student housing near Brock University to family homes throughout the city. Our move-out cleaning service is designed to help tenants meet their lease obligations under Ontario's Residential Tenancies Act and maximize their chance of getting their full security deposit returned.</p>

      <h2>Move-Out Cleaning for Landlords in St. Catharines</h2>
      <p>Property managers and landlords throughout St. Catharines trust Urban Sparkle Cleaners to prepare vacant units quickly and thoroughly between tenancies. We work around your schedule and can coordinate directly with property management companies.</p>
    `,
    includes: [
      "Full kitchen: inside oven, fridge, all cabinets, counters, stovetop, sink",
      "Full bathroom(s): toilet, sink, shower/tub, grout, mirrors, floor",
      "All floors: vacuuming (including closets) and mopping",
      "Baseboards, door frames, and trim throughout",
      "Interior window sills, ledges, and frames",
      "All closets: shelves, rods, and floors",
      "Light fixtures and ceiling fans",
      "Spot-cleaning marks off walls",
    ],
    faqs: [
      {
        question: "How much does move-out cleaning cost in St. Catharines?",
        answer: "Move-out cleaning in St. Catharines is priced based on the property's size and current condition. Contact us at (647) 460-7008 for a free estimate. Move-out cleans are typically priced as deep cleans, starting from $120 for apartments.",
      },
      {
        question: "Can I book a move-out clean near Brock University?",
        answer: "Yes. We regularly clean student rentals and apartments near Brock University and throughout central St. Catharines. We're familiar with the typical condition of student rentals and clean accordingly.",
      },
      {
        question: "How far in advance should I book a move-out clean in St. Catharines?",
        answer: "We recommend booking 3–5 days before your move-out date. For end-of-semester rush periods (April/May), booking 1–2 weeks ahead is advisable.",
      },
      {
        question: "Will the clean meet my St. Catharines landlord's inspection standards?",
        answer: "Our move-out cleaning is designed to meet or exceed typical landlord inspection standards in Ontario. We clean inside appliances, closets, cabinets, baseboards, and all the areas landlords commonly inspect.",
      },
      {
        question: "Do you also offer move-in cleaning in St. Catharines?",
        answer: "Yes. If you're moving into a new rental or home in St. Catharines, we offer move-in cleaning to ensure the property is thoroughly clean before you unpack.",
      },
    ],
    testimonial: {
      name: "Tom W.",
      location: "St. Catharines, ON",
      text: "Booked Urban Sparkle for my apartment in St. Catharines when I moved out. Got my full deposit back, no issues. The team was professional and did a fantastic job on the kitchen and bathrooms.",
    },
    nearbyAreas: [
      { name: "Niagara Falls", slug: "niagara-falls" },
      { name: "Welland", slug: "welland" },
      { name: "Niagara-on-the-Lake", slug: "niagara-on-the-lake" },
      { name: "Grimsby", slug: "grimsby" },
    ],
  },
  {
    city: "welland",
    cityName: "Welland",
    province: "ON",
    metaTitle: "Move-Out Cleaning Services in Welland, ON | Urban Sparkle Cleaners",
    metaDescription: "Move-out cleaning in Welland, ON — from downtown apartments to Coyle Creek townhouses. Get your full deposit back. Fully insured. Call (647) 460-7008.",
    heroHeading: "Move-Out Cleaning Services in Welland, ON",
    heroSubheading: "Leaving your Welland rental? Our professional move-out clean is designed to meet your landlord's standards and help you recover your full deposit.",
    content: `
      <h2>Professional Move-Out Cleaning in Welland, ON</h2>
      <p>Urban Sparkle Cleaners provides thorough move-out cleaning services for renters, landlords, and property managers across Welland. Whether you're leaving a downtown apartment, a north Welland townhouse, or a detached home in Coyle Creek, our team will ensure the property is spotless for inspection.</p>

      <h2>Why Move-Out Cleaning Matters in Welland</h2>
      <p>Under Ontario's Residential Tenancies Act, tenants are required to return a rental property in the same clean condition as when they moved in. A professional move-out cleaning demonstrates that obligation has been met — and dramatically increases the likelihood of recovering your full security deposit.</p>
      <p>Urban Sparkle Cleaners has helped hundreds of Niagara Region tenants move out cleanly, meeting the standards that Welland landlords and property managers expect during their walk-through inspection.</p>

      <h2>What's Included in Our Welland Move-Out Clean</h2>
      <ul>
        <li>Kitchen: inside oven, inside refrigerator, all cabinets and drawers, counters, stovetop, sink, and backsplash</li>
        <li>Bathroom(s): full scrub of toilet, sink, shower/tub, grout, mirrors, medicine cabinet, and floor</li>
        <li>All floors: vacuuming (including closets and corners), mopping all hard floors</li>
        <li>Baseboards, door frames, and trim throughout the property</li>
        <li>Interior window sills, ledges, and frames</li>
        <li>All closets: shelves, hanging rods, and floors</li>
        <li>Light fixtures and ceiling fans</li>
        <li>Spot-cleaning marks on walls</li>
      </ul>

      <h2>Move-Out Cleaning for Welland Landlords</h2>
      <p>Landlords and property managers in Welland use Urban Sparkle Cleaners to quickly prepare vacant units between tenancies. We work efficiently with 2+ technicians and can accommodate your tenant turnover schedule.</p>
    `,
    includes: [
      "Full kitchen: inside oven, fridge, all cabinets, counters, stovetop, sink",
      "Full bathroom(s): toilet, sink, shower/tub, grout, mirrors, floor",
      "All floors: vacuuming (including closets) and mopping",
      "Baseboards, door frames, and trim throughout",
      "Interior window sills, ledges, and frames",
      "All closets: shelves, rods, and floors",
      "Light fixtures and ceiling fans",
      "Spot-cleaning marks off walls",
    ],
    faqs: [
      {
        question: "How much does move-out cleaning cost in Welland?",
        answer: "Move-out cleaning in Welland is priced based on the property size and condition. Contact us at (647) 460-7008 for a free estimate. Move-out cleans are typically priced as deep cleans starting from $120 for apartments.",
      },
      {
        question: "How do I ensure I get my deposit back when leaving a Welland rental?",
        answer: "Book a professional move-out clean before your inspection day. Our team will clean inside appliances, all cabinets, closets, baseboards, and every area landlords typically check. Many of our Welland clients receive their full deposit back after our clean.",
      },
      {
        question: "Can you accommodate a last-minute move-out clean in Welland?",
        answer: "We do our best to accommodate urgent bookings. Call (647) 460-7008 directly to check same-week or last-minute availability in Welland.",
      },
      {
        question: "Do you clean furnished or unfurnished properties in Welland?",
        answer: "Move-out cleaning is typically done on vacant (unfurnished) properties. For occupied or furnished properties, we recommend our regular or deep cleaning service instead.",
      },
      {
        question: "Do you offer move-in cleaning in Welland too?",
        answer: "Yes. If you're moving into a new place in Welland and want to start fresh, we offer move-in cleaning to ensure the property is properly clean before you unpack.",
      },
    ],
    testimonial: {
      name: "Lisa C.",
      location: "Welland, ON",
      text: "Urban Sparkle did our move-out clean in Welland and the landlord was very happy with the condition. We got our full deposit back. Highly recommend for anyone leaving a rental in the area.",
    },
    nearbyAreas: [
      { name: "Niagara Falls", slug: "niagara-falls" },
      { name: "St. Catharines", slug: "st-catharines" },
      { name: "Thorold", slug: "thorold" },
      { name: "Port Colborne", slug: "port-colborne" },
    ],
  },
];
