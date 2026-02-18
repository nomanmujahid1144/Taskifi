"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/Components/Common/Button";
import Image from "next/image";

const features = [
  {
    title: "Plan with clarity and control.",
    description:
      "Real-Time Availability Insights Avoid burnout or downtime. Taskifi gives you a live view of every team member's capacity, so you can plan responsibly across projects and timelines.",
    image: "/resourcePlanning/laptop.png",
  },
  {
    title: "AI-Optimized Resource Allocation",
    description:
      "Our intelligent planner matches the right people to the right tasks — factoring in availability, role seniority, and hours worked — to keep your teams balanced and productive",
    image: "/resourcePlanning/laptop2.png",
  },
  {
    title: "Synced with Leave & Timesheets",
    description:
      "Time-off, logged hours, and approvals all flow into your planning view, ensuring every decision is backed by real-time data.",
    image: "/resourcePlanning/laptop3.png",
  },
];

const FeatureComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // auto cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 4000); // every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* Heading */}
      <h2 className="text-center component-heading leading-tight mb-16 max-w-3xl 2xl:max-w-5xl mx-auto">
        Prevent overutilization and underutilization — plan with clarity and
        control.
      </h2>

      {/* Image Section */}
      <div className="relative w-full flex justify-center items-center lg:py-16 py-8 px-6 mx-auto  rounded-xl bg-gradient-primary">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={features[activeIndex].image}
              alt={features[activeIndex].title}
              width={700}
              height={360}
              className="object-contain"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Decorative star */}
        <div className="absolute top-2 right-2 lg:top-8 lg:right-8 lg:w-10 lg:h-10 h-5 w-5  rounded-full rotate-45">
          <svg
            className="w-full h-full"
            viewBox="0 0 53 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.5 0V25.9362H0L2.31922 25.2741C13.6542 22.0384 22.5175 13.3637 25.8236 2.26988L26.5 0Z"
              fill="#B5E4CA"
            />
            <path
              d="M26.5 53V25.9362H0L2.39109 26.6484C13.682 30.0117 22.4392 38.7809 25.6163 49.9057L26.5 53Z"
              fill="#B5E4CA"
            />
            <path
              d="M26.5 0V25.9362H53L50.6808 25.2741C39.3458 22.0384 30.4825 13.3637 27.1764 2.26988L26.5 0Z"
              fill="#B5E4CA"
            />
            <path
              d="M26.5 53V25.9362H53L50.6089 26.6484C39.318 30.0117 30.5608 38.7809 27.3837 49.9057L26.5 53Z"
              fill="#B5E4CA"
            />
          </svg>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full h-[2px] bg-[#9F9F9F] flex items-center mt-8 relative">
        <motion.div
          className="h-[4px] bg-[#3B47F6] rounded-full absolute top-1/2 -translate-y-1/2"
          initial={{ width: "0%" }}
          animate={{ width: `${((activeIndex + 1) / features.length) * 100}%` }}
          transition={{ duration: 0.8 }}
        />
      </div>

      {/* Content Grid */}
      <div className="w-full mt-8 flex flex-col md:flex-row justify-between gap-16">
        {features.map(({ title, description }, index) => (
          <div key={index} className="flex-1 flex flex-col">
            <h3
              className={` text-xl mb-4 leading-snug transition-all duration-300 ${
                activeIndex === index ? "font-bold text-text-primary" : "font-normal text-text-secondary opacity-70"
              }`}
            >
              {title}
            </h3>
            <p className="text-base text-text-secondary leading-relaxed mb-8">
              {description}
            </p>
            <Button
              type="button"
              variant="solid"
              className="w-fit text-base font-semibold mt-auto"
              href="https://app.taskifi.io/signup"
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureComponent;
