const trustItems = [
  { icon: "🏡", label: "Locally Owned & Operated" },
  { icon: "✅", label: "Satisfaction Guarantee" },
  { icon: "🌱", label: "Eco-Certified Cleaners" },
  { icon: "🌿", label: "Eco-Friendly Products" },
];

export function TrustBar() {
  return (
    <section className="bg-surface border-y">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-2 text-center">
              <span className="text-2xl" aria-hidden="true">{item.icon}</span>
              <span className="text-sm md:text-base font-semibold text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
