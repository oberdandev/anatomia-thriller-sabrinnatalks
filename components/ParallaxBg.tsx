"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type ParallaxBgProps = {
  src: string;
  className?: string;
};

export default function ParallaxBg({ src, className }: ParallaxBgProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <div
      ref={ref}
      className={`absolute inset-0 overflow-hidden ${className ?? ""}`}
    >
      <motion.img
        src={src}
        alt=""
        aria-hidden="true"
        style={{ y }}
        className="absolute left-0 -top-[15%] w-full h-[130%] object-cover object-center will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-transparent to-ink/80" />
    </div>
  );
}
