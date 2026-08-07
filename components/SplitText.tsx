"use client";

import { motion } from "motion/react";

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
};

export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.045,
}: SplitTextProps) {
  const words = text.split(" ");
  let letterIndex = 0;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span key={wi} aria-hidden="true" className="inline-block whitespace-nowrap">
          {word.split("").map((letter, li) => {
            const i = letterIndex++;
            return (
              <motion.span
                key={li}
                className="inline-block will-change-transform"
                initial={{ opacity: 0, y: "0.55em", filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: delay + i * stagger,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {letter}
              </motion.span>
            );
          })}
          {wi < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}
