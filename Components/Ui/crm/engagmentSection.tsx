"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EngagementSection = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Initially set the first section as active
  const [height, setHeight] = useState(40); // Start with 40% for the first section by default
  const [isMobile, setIsMobile] = useState(false);

  // Using useEffect to detect if the device is mobile
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = window.innerWidth <= 768;
      setIsMobile(checkMobile);
    }
  }, []); // Empty dependency array ensures it only runs once when the component mounts

  const sections = [
    {
      heading: "Build custom score",
      paragraph:
        "Use all your demographic, firmographics and behavioral data to set up scores.",
      image: "/CRM/engagment.png",
    },
    {
      heading: "Optimize Engagement",
      paragraph:
        "Refine your strategy based on collected data to boost user engagement.",
      image: "/CRM/engagment.png", 
    },
    {
      heading: "Analyze Data Trends",
      paragraph:
        "Track key metrics to understand the behavior of your audience over time.",
      image: "/CRM/engagment.png", 
    },
  ];

  // Handle hover for desktop or click for mobile
  const handleHover = (index: number) => {
    if (!isMobile) {
      setActiveIndex(index);
      if (index === 0) setHeight(40);
      else if (index === 1) setHeight(66);
      else setHeight(100);
    }
  };

  const handleClick = (index: number) => {
    if (isMobile) {
      setActiveIndex(index);
      if (index === 0) setHeight(40);
      else if (index === 1) setHeight(66);
      else setHeight(100);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-24 items-center p-4">
      <div className="w-full  h-auto">
        <Image
          src={sections[activeIndex].image}
          alt="Engagement"
          width={530}
          height={500}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
      <div className="flex  justify-start items-center gap-6 w-full">
        <div className="bar bg-gray-300 w-[3px] h-[220px]  relative">
          <motion.div
            className="bg-primary w-full"
            style={{ height: `${height}%` }} 
            initial={{ height: 40 }} 
            animate={{ height: `${height}%` }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </div>
        <div className="flex flex-col gap-8 w-full">
          {sections.map((section, index) => (
            <div
              key={index}
              onMouseEnter={() => handleHover(index)} // Desktop hover effect
              onClick={() => handleClick(index)} // Mobile click effect
              className="w-full cursor-pointer"
            >
              <h2
                className={`text-xl lg:text-2xl font-bold ${
                  activeIndex === index ? "text-text-primary" : "text-text-secondary"
                }`}
              >
                {section.heading}
              </h2>
              <motion.p
                className="text-text-secondary w-full  text-base lg:text-lg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0, height: activeIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.5 }}
              >
                {section.paragraph}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngagementSection;
