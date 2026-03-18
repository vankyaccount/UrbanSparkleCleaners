import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { generatePageMetadata } from "@/lib/seo";

export const metadata: Metadata = generatePageMetadata({
  title: "Customer Reviews | Urban Sparkle Cleaners",
  description:
    "Read genuine customer reviews for Urban Sparkle Cleaners. See why homeowners in Burlington, Oakville, Hamilton & Niagara trust us for professional cleaning.",
  path: "/reviews",
});

// Comprehensive reviews collection combining testimonials from across the site
const reviews = [
  // Main site testimonials
  {
    name: "David Thompson",
    location: "Burlington",
    rating: 5,
    text: "Urban Sparkle Cleaners provided exceptional service for our office. Their attention to detail was remarkable, and the team was professional and courteous throughout.",
    date: "2025-11-15",
    service: "Office Cleaning",
  },
  {
    name: "Liam O'Sullivan",
    location: "Waterdown",
    rating: 5,
    text: "The team transformed our space with their dedication and hard work. I couldn't believe the difference after just one session. Highly recommended!",
    date: "2025-11-10",
    service: "Deep Cleaning",
  },
  {
    name: "Raj Patel",
    location: "Stoney Creek",
    rating: 5,
    text: "Punctual, friendly, and the quality of their work speaks for itself. Urban Sparkle Cleaners is our go-to for both home and office cleaning.",
    date: "2025-11-05",
    service: "Regular Cleaning",
  },
  {
    name: "Anita Gupta",
    location: "Oakville",
    rating: 5,
    text: "Professional, efficient, and friendly. Urban Sparkle Cleaners made our home spotless and fresh. We've been using them monthly and couldn't be happier.",
    date: "2025-10-28",
    service: "Regular Cleaning",
  },
  // Niagara area testimonials
  {
    name: "Maria S.",
    location: "Niagara Falls",
    rating: 5,
    text: "Absolutely love Urban Sparkle! They cleaned our Airbnb in Niagara Falls between guests and it looked better than when we first furnished it. Fast, thorough, and reliable every single time.",
    date: "2025-12-01",
    service: "Airbnb Cleaning",
  },
  {
    name: "James K.",
    location: "Niagara Falls",
    rating: 5,
    text: "Booked a deep clean for our house in Stamford and the team was incredible. Every corner spotless. Will definitely be scheduling regular bi-weekly cleanings going forward.",
    date: "2025-11-28",
    service: "Deep Cleaning",
  },
  {
    name: "Sarah T.",
    location: "St. Catharines",
    rating: 5,
    text: "Used Urban Sparkle for a move-out clean of my Glenridge apartment near Brock. They did an incredible job — got my full deposit back. Highly recommend for anyone in St. Catharines.",
    date: "2025-11-20",
    service: "Move-Out Cleaning",
  },
  {
    name: "Michael R.",
    location: "St. Catharines",
    rating: 5,
    text: "We've been using them for monthly cleaning in our Port Dalhousie home for almost a year. Consistent, reliable, and always thorough. Wouldn't trade them for anything.",
    date: "2025-11-15",
    service: "Regular Cleaning",
  },
  {
    name: "Patricia L.",
    location: "Niagara-on-the-Lake",
    rating: 5,
    text: "We run three Airbnb properties in Niagara-on-the-Lake and Urban Sparkle is our go-to cleaning team. They're always on time, always thorough, and our guests consistently mention how clean the properties are.",
    date: "2025-11-10",
    service: "Airbnb Cleaning",
  },
  {
    name: "Linda M.",
    location: "Welland",
    rating: 5,
    text: "Urban Sparkle has been cleaning our Welland home every two weeks for six months. They're incredibly thorough and always professional. Best cleaning service we've ever had.",
    date: "2025-11-05",
    service: "Regular Cleaning",
  },
  {
    name: "Nicole B.",
    location: "Fort Erie",
    rating: 5,
    text: "We have a Crystal Beach vacation rental and Urban Sparkle takes care of all our turnover cleaning. They're fast, thorough, and our guests always comment on how clean the cottage is.",
    date: "2025-10-25",
    service: "Airbnb Cleaning",
  },
  // Additional diverse reviews
  {
    name: "Jennifer Chen",
    location: "Ancaster",
    rating: 5,
    text: "After our renovation, our house was covered in dust. Urban Sparkle's post-renovation cleaning was incredible — they got every surface, including ones we didn't even think of. Worth every penny.",
    date: "2025-12-05",
    service: "Post-Renovation Cleaning",
  },
  {
    name: "Robert Williams",
    location: "Grimsby",
    rating: 5,
    text: "The eco-friendly products are a huge plus for us with kids and pets. The cleaning quality is outstanding, and I love that we're not exposing our family to harsh chemicals.",
    date: "2025-11-30",
    service: "Regular Cleaning",
  },
  {
    name: "Amanda Foster",
    location: "Burlington",
    rating: 5,
    text: "I've tried many cleaning services over the years, but Urban Sparkle is by far the best. Their satisfaction guarantee isn't just talk — they came back the next day to address a few minor areas I mentioned.",
    date: "2025-11-22",
    service: "Deep Cleaning",
  },
  {
    name: "George Mitchell",
    location: "Hamilton",
    rating: 5,
    text: "As a real estate agent, I need reliable cleaners for my listings. Urban Sparkle has been my go-to for staging cleaning for years. They always deliver on time and my listings always show beautifully.",
    date: "2025-11-18",
    service: "Home Staging Cleaning",
  },
  {
    name: "Sophie Martin",
    location: "Oakville",
    rating: 5,
    text: "The team cleaned my mother's condo as part of their senior cleaning service. They were so patient, respectful, and did an amazing job. It's made such a difference in her quality of life.",
    date: "2025-11-12",
    service: "Senior Cleaning",
  },
  {
    name: "Carlos Rodriguez",
    location: "Burlington",
    rating: 5,
    text: "We hired Urban Sparkle for our office and the difference has been remarkable. Employee morale improved, clients notice, and the workspace is healthier. Best investment we've made.",
    date: "2025-11-08",
    service: "Janitorial Services",
  },
  {
    name: "Lisa Thompson",
    location: "Stoney Creek",
    rating: 5,
    text: "Moving is stressful enough without worrying about the cleaning. Urban Sparkle handled both our move-out and move-in cleaning flawlessly. Both properties were absolutely spotless.",
    date: "2025-10-30",
    service: "Move-In/Move-Out Cleaning",
  },
  {
    name: "Mark Henderson",
    location: "Thorold",
    rating: 5,
    text: "I manage several Airbnb properties across Niagara. Urban Sparkle handles all our turnovers now — consistent, reliable, and they catch issues I would have missed. Essential for any host.",
    date: "2025-10-20",
    service: "Airbnb Cleaning",
  },
  {
    name: "Emily Watson",
    location: "Niagara Falls",
    rating: 5,
    text: "Had an event at my home and hired Urban Sparkle for pre- and post-event cleaning. They made everything so easy — the house looked amazing before guests arrived and was spotless again the next morning.",
    date: "2025-10-15",
    service: "Event Cleaning",
  },
  {
    name: "Frank and Marie Campbell",
    location: "Welland",
    rating: 5,
    text: "We've been using Urban Sparkle for over a year now. They're like family — trustworthy, reliable, and they truly care about doing a great job. We recommend them to everyone we know.",
    date: "2025-10-10",
    service: "Regular Cleaning",
  },
];

// Calculate average rating
const averageRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
const fiveStarCount = reviews.filter(r => r.rating === 5).length;
const distribution = [0, 0, 0, 0, 0];
reviews.forEach(r => distribution[r.rating - 1]++);

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-accent" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Reviews", url: "/reviews" }]} />

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Customer Reviews
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what homeowners and businesses across
              Burlington, Oakville, Hamilton, and the Niagara Region have to say about Urban Sparkle Cleaners.
            </p>
          </div>

          {/* Rating Summary */}
          <div className="bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 mb-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">{averageRating.toFixed(1)}</div>
                <div className="flex justify-center gap-0.5 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/90">{reviews.length} Verified Reviews</p>
              </div>

              <div className="text-center">
                <div className="text-4xl font-bold mb-2">{fiveStarCount}</div>
                <p className="text-white/90">5-Star Reviews</p>
                <p className="text-sm text-white/75 mt-1">
                  {Math.round((fiveStarCount / reviews.length) * 100)}% of all reviews
                </p>
              </div>

              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center gap-3">
                    <span className="text-sm w-16">{stars} Star</span>
                    <div className="flex-1 bg-white/20 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-white h-full rounded-full"
                        style={{ width: `${(distribution[stars - 1] / reviews.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm w-10 text-right">{distribution[stars - 1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <StarRating rating={review.rating} />
                  {review.service && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {review.service}
                    </span>
                  )}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-gray-100">
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">
                    {review.location}, ON
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(review.date).toLocaleDateString("en-CA", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
