"use client";

import React, { useMemo } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Blob from "./Blob";

interface ScrollWordColorProps {
  text?: string;
  containerClassName?: string;
  headingClassName?: string;
  blobSize?: number;
}

export default function ScrollWordColor({
  text = `AI should work for you, not the other way around. Designed to evolve and predict your needs - Taskifi AI is built to enable your best work yet.`,
  containerClassName = "container mx-auto py-36 px-6 relative flex items-center justify-center",
  headingClassName = "2xl:text-[40px] md:text-4xl text-2xl font-bold max-w-6xl text-center z-20",
  blobSize = 200,
}: ScrollWordColorProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Watch scroll progress for this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0.4 1", "0.1 0.2"],
    // "0.3 1" = animation starts when top hits 30% of viewport
    // "0.1 0" = animation ends when bottom hits top of viewport
  });

  const words = useMemo(() => text.split(" "), [text]);

  return (
    <div className="bg-black">
      <section ref={containerRef} className={containerClassName}>
        <Blob
          size={blobSize}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"
          aria-hidden="true"
        />

        <h2 className={headingClassName} aria-label={text}>
          {words.map((word, i) => {
            // Calculate when each word should turn white
            const start = i / words.length;
            const end = (i + 1) / words.length;

            const color = useTransform(
              scrollYProgress,
              [start, end],
              ["#717171", "#ffffff"]
            );

            return (
              <motion.span
                key={i}
                style={{ color }}
                className="inline-block transition-colors duration-300 ease-linear"
              >
                {word}
                {i !== words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            );
          })}
        </h2>
      </section>
    </div>
  );
}
