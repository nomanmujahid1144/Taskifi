"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const infoData = [
  {
    title: "AI-Generated Posts.",
    description: "Create ready-to-publish content and images in seconds.",
    image: "/Board.png",
  },
  {
    title: "Direct LinkedIn Publishing.",
    description: "Post instantly or schedule ahead without leaving Taskifi.",
    image: "/Board.png",
  },
  {
    title: "Always Stay Visible.",
    description:
      "Plan your posting calendar and keep your brand active, automatically.",
    image: "/Board.png",
  },
];

const ContentFeature = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animateProgress, setAnimateProgress] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateProgress(false);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % infoData.length);
        setAnimateProgress(true);
      }, 500);
    }, 4000);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className=" ">
        <div className="relative rounded-xl overflow-hidden shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={infoData[activeIndex].image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-2 rounded-2xl bg-white/10 relative border mx-auto border-white w-full max-w-5xl">
                <Image
                  src={infoData[activeIndex].image}
                  alt="Feature Image"
                  width={1000}
                  height={900}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 w-full h-96 pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-between max-w-sm mx-auto items-center mt-8 gap-4">
          {infoData.map((_, index) => (
            <div
              key={index}
              className="w-full h-1 bg-primary/30 rounded-full overflow-hidden"
            >
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{
                  width:
                    activeIndex === index && animateProgress ? "100%" : "0%",
                }}
                transition={{ duration: 4, ease: "easeInOut" }}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:space-x-12 space-y-6 md:space-y-0">
          {infoData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: activeIndex === index ? 1 : 0.4 }}
              transition={{ duration: 0.5 }}
              className="text-left w-full md:w-1/3"
            >
              <p className="text-white/50 max-w-xs mx-auto md:mx-0">
                <span className="text-xl text-white ">
                  {item.title}
                </span>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentFeature;
