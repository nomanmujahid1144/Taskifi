"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { useRef, useState } from "react";

const stats = [
  {
    count: "100+",
    label: "Early Adopters",
    description: "Businesses already using Taskifi to boost sales and productivity.",
    img: "/man1.webp",
  },
  {
    count: "15+",
    label: "Countries Reached",
    description: "Expanding globally with companies adopting Taskifi across multiple industries.",
    img: "/man2.webp",
  },
  {
    count: "80% Faster",
    label: "Outbound Engagement",
    description: "AI-powered lead generation and personalized outreach at scale.",
    img: "/man3.webp",
  },
  {
    count: "50% More Efficient",
    label: "Project Delivery",
    description: "AI-driven project planning, smart budgeting, and delay prediction.",
    img: "/man4.webp",
  },
  {
    count: "40% Better",
    label: "Resource Utilization",
    description: "AI-based resource planning for smarter workforce allocation.",
    img: "/man5.webp",
  },
];

export default function StatsCarousel() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="bg-white">
      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          className="!py-12 !pr-4"
          slidesPerView={1}
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              const navigation = swiper.params.navigation;
              if (navigation) {
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
              }
            }
          }}
          onInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              const navigation = swiper.params.navigation;
              if (navigation) {
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
              }
              swiper.navigation?.init();
              swiper.navigation?.update();
            }
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onAfterInit={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            690: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.2,
            },
          }}
        >
          {stats.map((item, idx) => (
            <SwiperSlide key={idx} className="px-6 !flex md:!block !justify-center">
              <div className="border-[0.5px] border-[#E5E7EB] bg-[#F2F5FF] p-6 rounded-2xl shadow-xl shadow-[#4919DD1A] flex flex-col justify-start relative min-h-[332px] md:max-w-[310px] w-full">
                <div className="text-4xl pb-7 pt-10 font-semibold">{item.count}</div>
                <div className="text-primary font-semibold text-xl mt-1">{item.label}</div>
                <div className="text-[#252525] 2xl:text-lg w-[60%] mt-2">{item.description}</div>
                <img
                  src={item.img}
                  alt={item.label}
                  className="absolute bottom-0 -right-19 h-5/6 object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            ref={prevRef}
            disabled={isBeginning}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
              ${isBeginning
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white shadow-md hover:bg-gray-200"}`}
          >
            <LuChevronLeft className="w-6 h-6" />
          </button>
          <button
            ref={nextRef}
            disabled={isEnd}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
              ${isEnd
                ? "bg-primary/30 text-white/60 cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary/90"}`}
          >
            <LuChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}