"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.35]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src="/hero-detective.png"
        alt="Detetive vitoriana com lupa sob a névoa de Londres"
        style={{ y, opacity }}
        className="absolute left-0 -top-[25%] w-full h-[125%] object-cover object-center will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink" />
      <div className="fog-layer absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
    </div>
  );
}
