"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  className?: string;
  from?: number;
  to: number;
  duration?: number;
};

export default function CountUp({
  className,
  from = 0,
  to,
  duration = 2,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let start: number | null = null;
    const diff = to - from;

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);

      if (ref.current) {
        ref.current.textContent = String(Math.floor(from + diff * progress));
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [from, to, duration]);

  return (
    <span ref={ref} className={`${className} font-mono tabular-nums`}>
      {from}
    </span>
  );
}
