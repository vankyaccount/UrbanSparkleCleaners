"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { SERVICES, SERVICE_AREAS, PRICING } from "@/lib/constants";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

export function BookingForm() {
  const searchParams = useSearchParams();

  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState({
    serviceType: searchParams.get("service") || "",
    propertyType: searchParams.get("property") || "",
    bedrooms: searchParams.get("bedrooms") || "2",
    bathrooms: searchParams.get("bathrooms") || "1",
    addons: [] as string[],
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    area: "",
    notes: "",
    totalEstimate: searchParams.get("estimate") || "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function updateField(field: string, value: string | string[]) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function toggleAddon(addonId: string) {
    setFormData((prev) => ({
      ...prev,
      addons: prev.addons.includes(addonId)
        ? prev.addons.filter((id) => id !== addonId)
        : [...prev.addons, addonId],
    }));
  }

  async function handleSubmit() {
    setStatus("loading");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setStep(6);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (step === 6 && status === "success") {
    return (
      <div className="text-center p-8 bg-green-50 rounded-xl border border-green-200">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-green-800 mb-2">Booking Request Received!</h2>
        <p className="text-green-700 mb-4">
          Thank you, {formData.name}! We&apos;ve received your booking request and will contact you
          within 24 hours to confirm the details.
        </p>
        {formData.totalEstimate && (
          <p className="text-lg font-semibold text-green-800">
            Estimated Price: ${formData.totalEstimate}
          </p>
        )}
        <p className="text-green-600 mt-4 text-sm">
          Need immediate assistance? Call us at <strong>(647) 460-7008</strong>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border p-6 md:p-8">
      {/* Progress */}
      <div className="flex items-center justify-between mb-8">
        {[1, 2, 3, 4, 5].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                s <= step ? "bg-primary text-white" : "bg-gray-200 text-gray-500"
              }`}
            >
              {s < step ? "✓" : s}
            </div>
            {s < 5 && (
              <div className={`w-8 sm:w-16 h-1 mx-1 ${s < step ? "bg-primary" : "bg-gray-200"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Service Type */}
      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Select Service Type</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {SERVICES.map((service) => (
              <button
                key={service.slug}
                onClick={() => updateField("serviceType", service.slug)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  formData.serviceType === service.slug
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <span className="text-2xl">{service.icon}</span>
                <p className="font-semibold text-gray-900 mt-1">{service.name}</p>
              </button>
            ))}
          </div>
          <button
            onClick={() => step < 5 && setStep(2)}
            disabled={!formData.serviceType}
            className="mt-6 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Step 2: Property Details */}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Property Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
              <div className="grid grid-cols-3 gap-3">
                {["apartment", "townhouse", "house"].map((type) => (
                  <button
                    key={type}
                    onClick={() => updateField("propertyType", type)}
                    className={`p-3 rounded-lg border-2 text-center capitalize transition-all ${
                      formData.propertyType === type
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                <select
                  value={formData.bedrooms}
                  onChange={(e) => updateField("bedrooms", e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                <select
                  value={formData.bathrooms}
                  onChange={(e) => updateField("bathrooms", e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={() => setStep(1)} className="flex-1 py-3 border rounded-lg font-semibold hover:bg-gray-50">
              Back
            </button>
            <button
              onClick={() => setStep(3)}
              disabled={!formData.propertyType}
              className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Add-ons */}
      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Add-Ons (Optional)</h2>
          <div className="space-y-3">
            {PRICING.addons.map((addon) => (
              <button
                key={addon.id}
                onClick={() => toggleAddon(addon.id)}
                className={`w-full p-3 rounded-lg border-2 text-left transition-all flex justify-between items-center ${
                  formData.addons.includes(addon.id)
                    ? "border-primary bg-primary/5"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <span className="font-medium text-gray-700">{addon.name}</span>
                <span className="font-bold text-primary">+${addon.price}</span>
              </button>
            ))}
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={() => setStep(2)} className="flex-1 py-3 border rounded-lg font-semibold hover:bg-gray-50">
              Back
            </button>
            <button onClick={() => setStep(4)} className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark">
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Date & Time */}
      {step === 4 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Preferred Date & Time</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => updateField("date", e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
              <select
                value={formData.time}
                onChange={(e) => updateField("time", e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (8AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                <option value="evening">Evening (4PM - 6PM)</option>
              </select>
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={() => setStep(3)} className="flex-1 py-3 border rounded-lg font-semibold hover:bg-gray-50">
              Back
            </button>
            <button onClick={() => setStep(5)} className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark">
              Next
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Contact Info */}
      {step === 5 && (
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Your Contact Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="Your full name"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg"
                  placeholder="(647) 000-0000"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => updateField("address", e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="Your address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Area</label>
              <select
                value={formData.area}
                onChange={(e) => updateField("area", e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              >
                <option value="">Select your area</option>
                {SERVICE_AREAS.map((area) => (
                  <option key={area.slug} value={area.slug}>
                    {area.name}, {area.province}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => updateField("notes", e.target.value)}
                className="w-full px-4 py-3 border rounded-lg resize-none"
                placeholder="Any special requirements..."
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6">
            <button onClick={() => setStep(4)} className="flex-1 py-3 border rounded-lg font-semibold hover:bg-gray-50">
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={!formData.name || !formData.email || !formData.phone || status === "loading"}
              className="flex-1 bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Submit Booking Request"}
            </button>
          </div>
          {status === "error" && (
            <p className="text-red-600 text-sm text-center mt-3">
              Something went wrong. Please try again or call (647) 460-7008.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
