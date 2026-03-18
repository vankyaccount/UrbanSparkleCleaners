"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const start = performance.now();
          const step = (timestamp: number) => {
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

const stats = [
  { target: 500, suffix: "+", label: "Happy Clients" },
  { target: 100, suffix: "%", label: "Satisfaction Rate" },
  { target: 12, suffix: "", label: "Cities Served" },
  { target: 10, suffix: "+", label: "Service Types" },
];

export function StatsCounter() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(target);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold mb-2">
        {count}{suffix}
      </p>
      <p className="text-blue-200 text-sm md:text-base">{label}</p>
    </div>
  );
}
