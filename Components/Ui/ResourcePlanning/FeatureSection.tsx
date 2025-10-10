"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import {
  FaUserClock,
  FaBalanceScale,
  FaChartLine,
  FaCalendarCheck,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Button from "@/Components/Common/Button";

const tabs = [
  {
    label: "Track Requests in Real Time",
    icon: <FaUserClock size={16} />,
    image: "/resourcePlanning/screen2.png",
  },
  {
    label: "Monitor Leave Balances Accurately",
    icon: <FaBalanceScale size={16} />,
    image: "/resourcePlanning/screen1.png",
  },
  {
    label: "Analyze Time-Off Trends",
    icon: <FaChartLine size={16} />,
    image: "/resourcePlanning/screen2.png",
  },
  {
    label: "Stay Ahead with Availability Forecasts",
    icon: <FaCalendarCheck size={16} />,
    image: "/resourcePlanning/screen1.png",
  },
];

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="w-full  bg-white">
      <div className=" text-center">
        {/* Heading */}
        <h2 className="component-heading font-semibold mb-12">
           Plan, Track, and Optimize Your Team’s Time.
        </h2>

        {/* Mobile Swiper */}
        <div className="relative md:hidden mb-12">
          <button
            ref={prevRef}
            disabled={isBeginning}
            className={`absolute -left-4  z-30 top-3   rounded-full  ${
              isBeginning ? "text-gray-300" : "text-primary"
            }`}
          >
            <FaChevronLeft />
          </button>
          <button
            ref={nextRef}
            disabled={isEnd}
            className={`absolute -right-3 top-3  z-30   rounded-full  ${
              isEnd ? "text-gray-300" : "text-primary"
            }`}
          >
            <FaChevronRight />
          </button>

          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              const nav = swiper.params.navigation;
              if (nav && typeof nav !== "boolean") {
                nav.prevEl = prevRef.current;
                nav.nextEl = nextRef.current;
              }
            }}
            onSlideChange={(swiper) => {
              setActiveTab(swiper.activeIndex);
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onReachBeginning={() => setIsBeginning(true)}
            onReachEnd={() => setIsEnd(true)}
            onFromEdge={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            modules={[Navigation]}
          >
            {tabs.map(({ label, icon }, idx) => (
              <SwiperSlide key={idx} className="!flex !justify-center !w-full">
                <Button
                  onClick={() => setActiveTab(idx)}
                  variant={activeTab === idx ? "solid" : "outline"}
                  className=" flex justify-center text-xs  w-fit items-center gap-2 py-2"
                >
                  <span
                    className={
                      activeTab === idx ? "text-white" : "text-primary"
                    }
                  >
                    {icon}
                  </span>
                  {label}
                </Button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop Tab Buttons */}
        <div className="hidden md:flex flex-wrap justify-center gap-4 mb-14">
          {tabs.map(({ label, icon }, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2 text-sm   border border-primary rounded-full anim hover:text-white transition-colors duration-200 font-semibold ${activeTab === idx ? "bg-gradient-primary text-white" : "bg-white text-primary"}`}
            >
              <span >
                {icon}
              </span>
              {label}
            </button>
          ))}
        </div>

        {/* Image Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="relative w-fit mx-auto flex justify-center items-center"
          >
            <Image
              src={tab.image}
              alt={tab.label}
              width={900}
              height={750}
              className="border-4 border-black rounded-2xl shadow-2xl"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TabSection;
