"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CardItem {
  image: string;
  title: string;
}

interface LogoMarqueeProps {
  type: "image" | "card";
  images?: string[];
  cards?: CardItem[];
  direction?: "left" | "right";
  theme?: "dark" | "white"; // New prop
}

export default function LogoMarquee({
  type,
  images = [],
  cards = [],
  direction = "left",
  theme = "white",
}: LogoMarqueeProps) {
  const [repeatCount, setRepeatCount] = useState(1);

  useEffect(() => {
    const baseItemWidth = type === "image" ? 200 : 240;
    const itemCount = type === "image" ? images.length : cards.length;
    const screenWidth = window.innerWidth;
    const minWidth = itemCount * baseItemWidth;

    const count = Math.ceil((screenWidth * 1.5) / minWidth);
    setRepeatCount(count);
  }, [type, images.length, cards.length]);

  const isDark = theme === "dark";

  const renderItems = () => {
    const originalItems = type === "image" ? images : cards;

    const repeated = Array(repeatCount)
      .fill(originalItems)
      .flat()
      .map((item, idx) => {
        if (type === "image") {
          return (
            <div key={`img-${idx}`} className="mx-6">
              <Image
                src={item as string}
                alt={`logo-${idx}`}
                width={160}
                height={40}
                className={`object-contain ${isDark ? "grayscale invert" : ""}`}
              />
            </div>
          );
        }

        const card = item as CardItem;
        return (
          <div
            key={`card-${idx}`}
            className={`mx-6 flex items-center gap-3 h-13 border rounded-lg px-4 py-2 shadow-sm
              ${isDark ? "border-white/20 bg-black text-white" : "border-primary/40 bg-white text-black"}`}
          >
            <Image
              src={card.image}
              alt={card.title}
              width={28}
              height={28}
              className={`object-contain ${isDark ? "grayscale" : ""}`}
            />
            <span className="text-sm font-medium">{card.title}</span>
          </div>
        );
      });

    return repeated;
  };

  return (
    <div className={`${isDark ? "bg-black" : "bg-white"} relative overflow-hidden`}>
      {/* Left Gradient */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none 
          bg-gradient-to-r ${isDark ? "from-black to-transparent" : "from-white to-transparent"}`}
      />
      {/* Right Gradient */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none 
          bg-gradient-to-l ${isDark ? "from-black to-transparent" : "from-white to-transparent"}`}
      />

      <Marquee gradient={false} speed={40} pauseOnHover direction={direction}>
        {renderItems()}
      </Marquee>
    </div>
  );
}
