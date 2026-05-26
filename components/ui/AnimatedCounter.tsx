"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  decimals?: number;
};

export function AnimatedCounter({
  target,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
  decimals = 0
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const startTime = performance.now();
    const startValue = 0;

    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const update = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const currentValue = startValue + (target - startValue) * easedProgress;

      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }, [hasStarted, target, duration]);

  const formatNumber = (num: number): string => {
    if (decimals > 0) return num.toFixed(decimals);
    return Math.floor(num).toLocaleString("en-IN");
  };

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatNumber(value)}
      {suffix}
    </span>
  );
}
