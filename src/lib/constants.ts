export const SITE_CONFIG = {
  name: "Urban Sparkle Cleaners",
  url: "https://urbansparklecleaners.ca",
  phone: "+1 647-460-7008",
  phoneDisplay: "(647) 460-7008",
  email: "urbansparklecleaners@gmail.com",
  instagram: "@urbansparkle_cleaners",
  instagramUrl: "https://instagram.com/urbansparkle_cleaners",
  description:
    "Professional cleaning services in Burlington, Oakville, Hamilton, and the Niagara Region. Residential & commercial cleaning with eco-friendly products. Satisfaction Guarantee.",
  yearsFounded: 2013,
};

export interface ServiceArea {
  slug: string;
  name: string;
  province: string;
  tagline: string;
  isNew?: boolean;
  nearbyAreas: string[];
  mapQuery: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "burlington",
    name: "Burlington",
    province: "ON",
    tagline: "Professional Cleaning Services in Burlington, ON",
    nearbyAreas: ["oakville", "hamilton", "waterdown"],
    mapQuery: "Burlington,+Ontario,+Canada",
  },
  {
    slug: "oakville",
    name: "Oakville",
    province: "ON",
    tagline: "Professional Cleaning Services in Oakville, ON",
    nearbyAreas: ["burlington", "hamilton"],
    mapQuery: "Oakville,+Ontario,+Canada",
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    province: "ON",
    tagline: "Professional Cleaning Services in Hamilton, ON",
    nearbyAreas: ["burlington", "stoney-creek", "ancaster"],
    mapQuery: "Hamilton,+Ontario,+Canada",
  },
  {
    slug: "grimsby",
    name: "Grimsby",
    province: "ON",
    tagline: "Cleaning Services in Grimsby, ON",
    nearbyAreas: ["burlington", "stoney-creek", "st-catharines"],
    mapQuery: "Grimsby,+Ontario,+Canada",
  },
  {
    slug: "stoney-creek",
    name: "Stoney Creek",
    province: "ON",
    tagline: "Cleaning Services in Stoney Creek, ON",
    nearbyAreas: ["hamilton", "grimsby"],
    mapQuery: "Stoney+Creek,+Ontario,+Canada",
  },
  {
    slug: "ancaster",
    name: "Ancaster",
    province: "ON",
    tagline: "Cleaning Services in Ancaster, ON",
    nearbyAreas: ["hamilton", "waterdown"],
    mapQuery: "Ancaster,+Ontario,+Canada",
  },
  {
    slug: "waterdown",
    name: "Waterdown",
    province: "ON",
    tagline: "Cleaning Services in Waterdown, ON",
    nearbyAreas: ["burlington", "hamilton", "ancaster"],
    mapQuery: "Waterdown,+Ontario,+Canada",
  },
  {
    slug: "niagara-falls",
    name: "Niagara Falls",
    province: "ON",
    tagline: "Professional Cleaning Services in Niagara Falls, ON",
    isNew: true,
    nearbyAreas: ["st-catharines", "welland", "niagara-on-the-lake", "thorold"],
    mapQuery: "Niagara+Falls,+Ontario,+Canada",
  },
  {
    slug: "niagara-on-the-lake",
    name: "Niagara-on-the-Lake",
    province: "ON",
    tagline: "Cleaning Services in Niagara-on-the-Lake, ON",
    isNew: true,
    nearbyAreas: ["st-catharines", "niagara-falls"],
    mapQuery: "Niagara-on-the-Lake,+Ontario,+Canada",
  },
  {
    slug: "st-catharines",
    name: "St. Catharines",
    province: "ON",
    tagline: "Professional Cleaning Services in St. Catharines, ON",
    isNew: true,
    nearbyAreas: ["niagara-falls", "niagara-on-the-lake", "thorold", "grimsby"],
    mapQuery: "St.+Catharines,+Ontario,+Canada",
  },
  {
    slug: "welland",
    name: "Welland",
    province: "ON",
    tagline: "Cleaning Services in Welland, ON",
    isNew: true,
    nearbyAreas: ["niagara-falls", "thorold", "st-catharines"],
    mapQuery: "Welland,+Ontario,+Canada",
  },
  {
    slug: "thorold",
    name: "Thorold",
    province: "ON",
    tagline: "Cleaning Services in Thorold, ON",
    isNew: true,
    nearbyAreas: ["st-catharines", "niagara-falls", "welland"],
    mapQuery: "Thorold,+Ontario,+Canada",
  },
  {
    slug: "fort-erie",
    name: "Fort Erie",
    province: "ON",
    tagline: "Cleaning Services in Fort Erie, ON",
    isNew: true,
    nearbyAreas: ["niagara-falls", "welland", "st-catharines"],
    mapQuery: "Fort+Erie,+Ontario,+Canada",
  },
  {
    slug: "fonthill",
    name: "Fonthill",
    province: "ON",
    tagline: "Cleaning Services in Fonthill, ON",
    isNew: true,
    nearbyAreas: ["pelham", "welland", "st-catharines"],
    mapQuery: "Fonthill,+Ontario,+Canada",
  },
  {
    slug: "pelham",
    name: "Pelham",
    province: "ON",
    tagline: "Cleaning Services in Pelham, ON",
    isNew: true,
    nearbyAreas: ["fonthill", "welland", "st-catharines"],
    mapQuery: "Pelham,+Ontario,+Canada",
  },
  {
    slug: "lincoln",
    name: "Lincoln",
    province: "ON",
    tagline: "Cleaning Services in Lincoln, ON",
    isNew: true,
    nearbyAreas: ["grimsby", "st-catharines", "niagara-on-the-lake"],
    mapQuery: "Lincoln,+Ontario,+Canada",
  },
  {
    slug: "port-colborne",
    name: "Port Colborne",
    province: "ON",
    tagline: "Cleaning Services in Port Colborne, ON",
    isNew: true,
    nearbyAreas: ["welland", "fort-erie", "niagara-falls"],
    mapQuery: "Port+Colborne,+Ontario,+Canada",
  },
];

export interface ServiceInfo {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
}

export const SERVICES: ServiceInfo[] = [
  {
    slug: "regular-cleaning",
    name: "Regular Cleaning",
    shortDescription:
      "Maintain a consistently clean home with our flexible weekly, bi-weekly, or monthly cleaning services.",
    icon: "🏠",
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    shortDescription:
      "A thorough top-to-bottom cleaning that reaches every hidden corner of your space.",
    icon: "✨",
  },
  {
    slug: "move-in-move-out-cleaning",
    name: "Move-In/Move-Out Cleaning",
    shortDescription:
      "Make your move stress-free with our comprehensive cleaning for your old or new home.",
    icon: "📦",
  },
  {
    slug: "post-renovation-cleaning",
    name: "Post-Renovation Cleaning",
    shortDescription:
      "We handle the construction dust and debris left behind after renovations.",
    icon: "🔨",
  },
  {
    slug: "airbnb-cleaning",
    name: "Airbnb Cleaning",
    shortDescription:
      "Quick turnaround cleaning services to keep your Airbnb guest-ready at all times.",
    icon: "🏡",
  },
  {
    slug: "event-cleaning",
    name: "Event Cleaning",
    shortDescription:
      "Pre and post event cleaning to ensure your venue is pristine for every occasion.",
    icon: "🎉",
  },
  {
    slug: "senior-cleaning",
    name: "Senior Cleaning",
    shortDescription:
      "Gentle, respectful, and thorough cleaning services tailored for seniors.",
    icon: "❤️",
  },
  {
    slug: "condo-cleaning",
    name: "Condo Cleaning",
    shortDescription:
      "Specialized cleaning services designed for condos and apartment living.",
    icon: "🏢",
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    shortDescription:
      "Professional office cleaning to maintain a productive and healthy workspace.",
    icon: "💼",
  },
  {
    slug: "janitorial-services",
    name: "Janitorial Services",
    shortDescription:
      "Reliable ongoing janitorial services to keep your facilities clean and welcoming.",
    icon: "🧹",
  },
];

export const PRICING = {
  regular: {
    hourlyRate: 33,
    apartment: { minPrice: 99, label: "Apartment (up to 2 bed)" },
    townhouse: { minPrice: 132, minHours: 4, label: "Townhouse" },
    house: { minPrice: 165, label: "House (3+ bed)" },
  },
  deep: {
    hourlyRate: 40,
    minCleaners: 2,
    apartment: { minPrice: 120, label: "Apartment (up to 2 bed)" },
    townhouse: { minPrice: 160, minHours: 4, label: "Townhouse" },
    house: { minPrice: 200, label: "House (3+ bed)" },
  },
  addons: [
    { id: "appliance", name: "Appliance Cleaning (oven/fridge)", price: 30 },
    { id: "windows", name: "Inside Windows", price: 30 },
    { id: "laundry", name: "Laundry (wash & fold)", price: 25 },
    { id: "fridge", name: "Inside Fridge", price: 25 },
    { id: "oven", name: "Inside Oven", price: 25 },
    { id: "garage", name: "Garage Sweep", price: 20 },
  ],
};

export const TESTIMONIALS = [
  {
    name: "David Thompson",
    location: "Burlington",
    rating: 5,
    text: "Urban Sparkle Cleaners provided exceptional service for our office. Their attention to detail was remarkable, and the team was professional and courteous throughout.",
  },
  {
    name: "Liam O'Sullivan",
    location: "Waterdown",
    rating: 5,
    text: "The team transformed our space with their dedication and hard work. I couldn't believe the difference after just one session. Highly recommended!",
  },
  {
    name: "Raj Patel",
    location: "Stoney Creek",
    rating: 5,
    text: "Punctual, friendly, and the quality of their work speaks for itself. Urban Sparkle Cleaners is our go-to for both home and office cleaning.",
  },
  {
    name: "Anita Gupta",
    location: "Oakville",
    rating: 5,
    text: "Professional, efficient, and friendly. Urban Sparkle Cleaners made our home spotless and fresh. We've been using them monthly and couldn't be happier.",
  },
];
