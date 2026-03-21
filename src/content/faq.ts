export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export const HOME_FAQS: FAQ[] = [
  {
    question: "What areas does Urban Sparkle Cleaners serve?",
    answer:
      "We proudly serve Burlington, Oakville, Hamilton, Grimsby, Stoney Creek, Ancaster, Waterdown, Niagara Falls, Niagara-on-the-Lake, St. Catharines, Welland, and Thorold across the Greater Hamilton and Niagara regions of Ontario.",
  },
  {
    question: "How much do your cleaning services cost?",
    answer:
      "Our regular cleaning starts from $99 for apartments (up to 2 bedrooms) at $33/hour. Townhouse cleaning starts at $132 with a minimum of 4 hours. Deep cleaning is $40/hour with a minimum of 2 technicians. Visit our pricing page for a detailed estimate.",
  },
  {
    question: "Are your technicians insured and bonded?",
    answer:
      "Yes, all Urban Sparkle Cleaners team members are fully insured and bonded. We carry comprehensive liability insurance for your peace of mind.",
  },
  {
    question: "Do you use eco-friendly cleaning products?",
    answer:
      "Absolutely! We use eco-friendly, plant-based cleaning products that are safe for your family, pets, and the environment while still delivering exceptional cleaning results.",
  },
  {
    question: "How do I book a cleaning service?",
    answer:
      "You can book through our website by filling out the booking form, calling us at (647) 460-7008, or emailing urbansparklecleaners@gmail.com. We respond to all requests within 24 hours.",
  },
];

export const ALL_FAQS: FAQ[] = [
  ...HOME_FAQS,
  {
    question: "What is included in a regular cleaning?",
    answer:
      "Our regular cleaning includes dusting all surfaces, vacuuming and mopping floors, cleaning bathrooms (toilet, sink, shower/tub), kitchen cleaning (countertops, sink, stovetop), emptying trash bins, and tidying up rooms.",
    category: "Services",
  },
  {
    question: "What is the difference between regular cleaning and deep cleaning?",
    answer:
      "Regular cleaning covers day-to-day maintenance tasks. Deep cleaning goes further with detailed scrubbing of bathrooms, kitchen appliances, baseboards, light fixtures, window sills, inside cabinets, and other often-overlooked areas. Deep cleaning requires a minimum of 2 technicians at $40/hour.",
    category: "Services",
  },
  {
    question: "Can I customize my cleaning package?",
    answer:
      "Yes! We offer fully customizable cleaning packages. You can add extras like appliance cleaning ($30), inside window cleaning ($30), laundry services ($25), and more. Just let us know your specific needs.",
    category: "Services",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 48 hours in advance to secure your preferred time slot. However, we do our best to accommodate last-minute requests when possible.",
    category: "Booking",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We ask for at least 24 hours' notice for cancellations. This helps us manage our schedule and serve all our clients effectively.",
    category: "Booking",
  },
  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No, our team brings all necessary cleaning supplies and equipment. We use professional-grade, eco-friendly products. If you have preferred products, we're happy to use those instead.",
    category: "Services",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "No, you don't need to be home. Many clients provide a key or access code. Our team members are fully insured and bonded for your peace of mind.",
    category: "Booking",
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer:
      "We offer a Satisfaction Guarantee. If you're not happy with any aspect of our cleaning, contact us within 24 hours and we'll return to re-clean the area at no additional charge.",
    category: "Policies",
  },
  {
    question: "Do you offer recurring cleaning services?",
    answer:
      "Yes! We offer weekly, bi-weekly, and monthly recurring cleaning services. Recurring clients enjoy priority scheduling and consistent service from the same team when possible.",
    category: "Services",
  },
  {
    question: "How long does a typical cleaning take?",
    answer:
      "A regular cleaning for a 2-bedroom apartment typically takes 2-3 hours. Townhouses usually take 4+ hours. Deep cleaning takes longer depending on the size and condition of the space. We'll provide a time estimate during booking.",
    category: "Services",
  },
  {
    question: "Do you offer commercial cleaning services?",
    answer:
      "Yes, we provide professional commercial cleaning services including office cleaning, janitorial services, and custom cleaning solutions for businesses of all sizes across our service areas.",
    category: "Services",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, e-transfer, and credit cards. Payment is typically collected after the cleaning service is completed.",
    category: "Policies",
  },
  {
    question: "Are your prices competitive?",
    answer:
      "Yes! Our regular cleaning starts at just $33/hour ($99 minimum for apartments). We offer transparent pricing with no hidden fees. Visit our pricing page to get an instant estimate.",
    category: "Pricing",
  },
  {
    question: "Can you clean my Airbnb between guests?",
    answer:
      "Absolutely! We specialize in quick-turnaround Airbnb cleaning. We understand the time constraints hosts face and can work efficiently to have your property guest-ready.",
    category: "Services",
  },
  {
    question: "Do you offer move-in/move-out cleaning?",
    answer:
      "Yes, our move-in/move-out cleaning is one of our most popular services. We ensure every surface is spotless for a smooth property transition, whether you're a tenant, landlord, or homeowner.",
    category: "Services",
  },
];
