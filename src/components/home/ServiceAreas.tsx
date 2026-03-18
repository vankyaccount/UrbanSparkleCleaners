import Link from "next/link";
import { SERVICE_AREAS } from "@/lib/constants";

export function ServiceAreas() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Areas We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional cleaning services across the Greater Hamilton and Niagara regions of Ontario.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {SERVICE_AREAS.map((area) => (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              className="group p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all text-center"
            >
              <div className="text-2xl mb-2">📍</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors text-sm">
                {area.name}
              </h3>
              <p className="text-xs text-gray-500">{area.province}</p>
              {area.isNew && (
                <span className="inline-block mt-1 text-xs bg-secondary/10 text-secondary font-semibold px-2 py-0.5 rounded-full">
                  NEW
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
