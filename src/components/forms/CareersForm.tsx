"use client";

import { useState } from "react";

export function CareersForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    availability: "",
    experience: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", position: "", availability: "", experience: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center p-8 bg-green-50 rounded-xl border border-green-200">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Application Received!</h3>
        <p className="text-green-700">
          Thank you for your interest in joining Urban Sparkle Cleaners! We&apos;ve received your
          application and will review it shortly. Qualified candidates will be contacted within 3-5 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="career-name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name *
          </label>
          <input
            id="career-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="career-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            id="career-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="career-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number *
          </label>
          <input
            id="career-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
            placeholder="(647) 000-0000"
          />
        </div>
        <div>
          <label htmlFor="career-position" className="block text-sm font-medium text-gray-700 mb-1">
            Position Applied For *
          </label>
          <select
            id="career-position"
            required
            value={formData.position}
            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
          >
            <option value="">Select a position</option>
            <option value="house-cleaner">House Cleaner</option>
            <option value="commercial-cleaner">Commercial Cleaner</option>
            <option value="deep-clean-specialist">Deep Clean Specialist</option>
            <option value="airbnb-cleaner">Airbnb/Vacation Rental Cleaner</option>
            <option value="team-lead">Team Lead</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="career-availability" className="block text-sm font-medium text-gray-700 mb-1">
            Availability *
          </label>
          <select
            id="career-availability"
            required
            value={formData.availability}
            onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
          >
            <option value="">Select availability</option>
            <option value="full-time">Full-time (35-40 hours/week)</option>
            <option value="part-time">Part-time (15-30 hours/week)</option>
            <option value="weekends">Weekends Only</option>
            <option value="flexible">Flexible / On-Call</option>
          </select>
        </div>
        <div>
          <label htmlFor="career-experience" className="block text-sm font-medium text-gray-700 mb-1">
            Years of Experience *
          </label>
          <select
            id="career-experience"
            required
            value={formData.experience}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
          >
            <option value="">Select experience</option>
            <option value="entry">Entry Level (0-1 year)</option>
            <option value="some">Some Experience (1-2 years)</option>
            <option value="experienced">Experienced (3-5 years)</option>
            <option value="expert">Expert (5+ years)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="career-message" className="block text-sm font-medium text-gray-700 mb-1">
          Tell Us About Yourself
        </label>
        <textarea
          id="career-message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors resize-none"
          placeholder="Briefly describe your cleaning experience, strengths, and why you'd be a great fit..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </button>

      {status === "error" && (
        <p className="text-red-600 text-sm text-center">
          Something went wrong. Please try again or email us at urbansparklecleaners@gmail.com
        </p>
      )}
    </form>
  );
}
