"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface Metric {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const metrics: Metric[] = [
  { value: 47, suffix: "+", label: "stron uruchomionych", icon: "🔥" },
  { value: 4.9, suffix: "/5", label: "średnia ocena", icon: "⭐" },
  { value: 24, suffix: "h", label: "czas realizacji demo", icon: "⏱️" },
  { value: 12, suffix: "+", label: "branż obsługiwanych", icon: "💼" },
];

function CountUp({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(value * easeOut);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {value % 1 === 0 ? Math.floor(count) : count.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function SocialProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative bg-bg-light py-5 border-y border-border"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl mb-1">{metric.icon}</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-accent-500 mb-1">
                <CountUp value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-xs sm:text-sm text-text-secondary uppercase tracking-wide">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
