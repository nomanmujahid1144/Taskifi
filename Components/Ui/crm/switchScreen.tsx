"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type SwitchScreenProps = {
  headings: string[];
  images: string[];
  theme?: "dark" | string;
};

const SwitchScreen = ({ headings, images, theme }: SwitchScreenProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [timer, setTimer] = useState<any>(null);

  useEffect(() => {
    if (!isClicked) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % headings.length);
      }, 3000);
      setTimer(interval);
      return () => clearInterval(interval);
    }

    return () => clearInterval(timer);
  }, [isClicked, headings.length]);

  const handleH2Click = (index: number) => {
    clearInterval(timer);
    setActiveIndex(index);
    setIsClicked(true);
  };

  const getHeadingClass = (index: number) => {
    const isActive = activeIndex === index;

    if (theme === "dark") {
      return isActive
        ? "text-white text-2xl sm:text-3xl font-bold"
        : "text-white/80 text-lg sm:text-xl";
    }

    return isActive
      ? "text-text-primary text-2xl sm:text-3xl font-bold"
      : "text-text-secondary text-lg sm:text-xl";
  };

  return (
    <div className="flex justify-center lg:flex-row flex-col items-center gap-8 lg:gap-16 w-full">
      <div className="img transition-opacity duration-700 ease-in-out opacity-100">
      <div className="bg-white/10 backdrop-blur-2xl  rounded-lg p-2 border border-white  w-full">
          <Image
          src={images[activeIndex]}
          alt="switch screen"
          width={750}
          height={500}
          className="rounded-lg custom-shadow-2 transition-all duration-700 ease-in-out opacity-100 transform scale-100"
        />
      </div>
      </div>
      <div className="switcher flex flex-col gap-6 w-full sm:w-3/4 lg:w-2/5">
        {headings.map((heading, index) => (
          <h2
            key={index}
            className={`${getHeadingClass(index)} cursor-pointer transition-all duration-500 ease-in-out`}
            onClick={() => handleH2Click(index)}
          >
            {heading}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SwitchScreen;
