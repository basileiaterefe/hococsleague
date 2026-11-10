"use client";

import { useEffect, useRef, useState } from "react";
import { TodoText } from "@/components/TodoText";
import { usePrefersReducedMotion } from "@/components/usePrefersReducedMotion";

export function StatCounter({
  label,
  value,
  todo,
}: {
  label: string;
  value: number | null;
  todo: string;
}) {
  const reduce = usePrefersReducedMotion();
  const [current, setCurrent] = useState(value);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value === null || reduce) {
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }
        observer.disconnect();
        const duration = 800;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCurrent(Math.round(eased * value));
          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        };
        setCurrent(0);
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [reduce, value]);

  return (
    <div ref={ref} className="rounded-2xl border border-line bg-card p-6 text-center backdrop-blur-sm">
      <p className="font-display text-4xl font-bold text-ink">
        {value === null ? <TodoText value={todo} /> : current}
      </p>
      <p className="mt-2 text-sm font-medium text-muted">{label}</p>
    </div>
  );
}
