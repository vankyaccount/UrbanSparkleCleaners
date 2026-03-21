"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PRICING } from "@/lib/constants";

type PropertyType = "apartment" | "townhouse" | "house";
type CleaningType = "regular" | "deep";

export function PricingCalculator() {
  const [propertyType, setPropertyType] = useState<PropertyType>("apartment");
  const [cleaningType, setCleaningType] = useState<CleaningType>("regular");
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const estimate = useMemo(() => {
    const pricing = PRICING[cleaningType];
    let basePrice = pricing[propertyType].minPrice;

    // Extra bedrooms add time
    const extraBedrooms = Math.max(0, bedrooms - 2);
    const extraBathrooms = Math.max(0, bathrooms - 1);
    const extraHours = extraBedrooms * 0.5 + extraBathrooms * 0.5;
    const extraCost = extraHours * pricing.hourlyRate * (cleaningType === "deep" ? 2 : 1); // deep has 2 cleaners

    // Addon costs
    const addonCost = selectedAddons.reduce((total, addonId) => {
      const addon = PRICING.addons.find((a) => a.id === addonId);
      return total + (addon?.price || 0);
    }, 0);

    return Math.round(basePrice + extraCost + addonCost);
  }, [propertyType, cleaningType, bedrooms, bathrooms, selectedAddons]);

  function toggleAddon(addonId: string) {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  }

  const properties: { value: PropertyType; label: string; desc: string }[] = [
    { value: "apartment", label: "Apartment", desc: "Up to 2 bedrooms" },
    { value: "townhouse", label: "Townhouse", desc: "Min 4 hours" },
    { value: "house", label: "House", desc: "3+ bedrooms" },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border p-6 md:p-8">
      {/* Step 1: Property Type */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">1. Select Property Type</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {properties.map((prop) => (
            <button
              key={prop.value}
              onClick={() => setPropertyType(prop.value)}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                propertyType === prop.value
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <p className="font-semibold text-gray-900">{prop.label}</p>
              <p className="text-sm text-gray-500">{prop.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Step 2: Bedrooms & Bathrooms */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">2. Number of Rooms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                -
              </button>
              <span className="text-xl font-bold w-8 text-center">{bedrooms}</span>
              <button
                onClick={() => setBedrooms(Math.min(6, bedrooms + 1))}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                -
              </button>
              <span className="text-xl font-bold w-8 text-center">{bathrooms}</span>
              <button
                onClick={() => setBathrooms(Math.min(5, bathrooms + 1))}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Step 3: Cleaning Type */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">3. Cleaning Type</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => setCleaningType("regular")}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              cleaningType === "regular"
                ? "border-primary bg-primary/5"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <p className="font-semibold text-gray-900">Regular Cleaning</p>
            <p className="text-sm text-gray-500">$33/hour per technician <span className="line-through text-gray-400">$36</span></p>
          </button>
          <button
            onClick={() => setCleaningType("deep")}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              cleaningType === "deep"
                ? "border-primary bg-primary/5"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <p className="font-semibold text-gray-900">Deep Cleaning</p>
            <p className="text-sm text-gray-500">$40/hour, minimum 2 technicians</p>
          </button>
        </div>
      </div>

      {/* Step 4: Add-ons */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">4. Add-Ons (Optional)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PRICING.addons.map((addon) => (
            <button
              key={addon.id}
              onClick={() => toggleAddon(addon.id)}
              className={`p-3 rounded-lg border-2 text-left transition-all flex justify-between items-center ${
                selectedAddons.includes(addon.id)
                  ? "border-primary bg-primary/5"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                    selectedAddons.includes(addon.id)
                      ? "bg-primary border-primary"
                      : "border-gray-300"
                  }`}
                >
                  {selectedAddons.includes(addon.id) && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-sm font-medium text-gray-700">{addon.name}</span>
              </div>
              <span className="text-sm font-bold text-primary">+${addon.price}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Estimate */}
      <div className="bg-gradient-to-r from-primary to-primary-dark rounded-xl p-6 text-white text-center">
        <p className="text-blue-200 text-sm mb-1">Estimated Price</p>
        <p className="text-4xl md:text-5xl font-bold mb-2">${estimate}</p>
        <p className="text-blue-200 text-sm mb-6">
          *Final price confirmed after consultation. Prices are estimates.
        </p>
        <Link
          href={`/book?service=${cleaningType}&property=${propertyType}&bedrooms=${bedrooms}&bathrooms=${bathrooms}&estimate=${estimate}`}
          className="inline-flex items-center justify-center bg-accent text-gray-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
        >
          Book at This Price
        </Link>
      </div>
    </div>
  );
}
