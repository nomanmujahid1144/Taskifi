"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRef, useState } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

const testimonials = [
  {
    title: "GrowthHub",
    content:
      "GrowthHub partnered with us to improve performance across their sales and procurement functions. Through our AI Optimization service, we assessed their current workflows, identified inefficiencies, and deployed Taskifi’s AI tools to streamline operations and support smarter decision-making.",
    results: [
      "38% reduction in manual sales follow-ups",
      "3x faster vendor selection using AI-powered recommendations",
      "24% boost in operational efficiency",
    ],
    image: "/aiOptimization/growthHub.png",
  },
  {
    title: "GrowthHub",
    content:
      "GrowthHub partnered with us to improve performance across their sales and procurement functions. Through our AI Optimization service, we assessed their current workflows, identified inefficiencies, and deployed Taskifi’s AI tools to streamline operations and support smarter decision-making.",
    results: [
      "38% reduction in manual sales follow-ups",
      "3x faster vendor selection using AI-powered recommendations",
      "24% boost in operational efficiency",
    ],
    image: "/aiOptimization/growthHub.png",
  },
];

export default function TestimonialSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="w-full px-4 md:px-8 py-10 relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={({ isBeginning, isEnd }) => {
          setIsBeginning(isBeginning);
          setIsEnd(isEnd);
        }}
        onInit={({ isBeginning, isEnd }) => {
          setIsBeginning(isBeginning);
          setIsEnd(isEnd);
        }}
        className="relative !px-4"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#00000066] backdrop-blur-2xl text-white rounded-2xl overflow-hidden flex flex-col-reverse md:flex-row items-stretch justify-between border border-white/15">
              {/* Text Section */}
              <div className="w-full md:w-7/12 p-4 md:p-10 flex flex-col justify-center gap-4">
                <h3 className="text-3xl font-bold">{item.title}</h3>
                <p className="text-sm md:text-lg text-white/80">
                  {item.content}
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold text-2xl mb-2 text-white">
                    The Results?
                  </h4>
                  <ul className="list-decimal list-inside space-y-1 text-sm md:text-lg text-white/80">
                    {item.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-5/12 h-[250px] md:h-auto relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className={`absolute z-10 top-1/2 left-0 transform -translate-y-1/2 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-300
          ${!isBeginning ? "bg-primary text-white" : "bg-white text-black"}`}
        >
          <LuChevronLeft className="text-2xl" />
        </button>
        <button
          ref={nextRef}
          className={`absolute z-10 top-1/2 right-0 transform -translate-y-1/2 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-300
          ${!isEnd ? "bg-primary text-white" : "bg-white text-black"}`}
        >
          <LuChevronRight className="text-2xl" />
        </button>
      </Swiper>
    </div>
  );
}
