"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useRef, useState } from "react";
import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

const testimonials = [
  {
    title: "Nexus Labs",
    content:
      "Taskifi's AI project planner transformed how we run delivery. We use AI-driven budgeting and workload forecasting to keep projects on track, and resource management to match the right people to the right tasks. We've cut planning time and eliminated spreadsheets—our teams focus on delivery, not coordination.",
    image: "/aiOptimization/growthHub.png",
    person: {
      image: "/testimonials/man1.webp",
      name: "Karim Chen",
      role: "Head of Project Delivery at Nexus Labs",
    },
  },
  {
    title: "BuildRight Co.",
    content:
      "Resource planning used to be a bottleneck. With Taskifi we forecast demand, avoid overloading people, and see utilization at a glance. The AI project budgeting helps us allocate funds and keep projects on budget from day one. It's become essential for our operations.",
    image: "/aiOptimization/growthHub.png",
    person: {
      image: "/testimonials/man1.webp",
      name: "Marcus Webb",
      role: "Chief Operations Officer at BuildRight Co.",
    },
  },
];

export default function TestimonialSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="w-full flex justify-center items-center py-10 relative testimonial-slider-new">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
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
            <div className="bg-[#7755FF] backdrop-blur-2xl text-white rounded-2xl overflow-hidden flex flex-col-reverse md:flex-row items-stretch justify-between border border-white/15">
              {/* Text Section */}
              <div className="w-full px-4 py-6 sm:p-6 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">{item.title}</h3>
                <p className="text-sm sm:text-base md:text-lg text-white lg:w-[80%]">
                  {item.content}
                </p>

                {/* Testimonial Person Section */}
                <div className="mt-6 sm:mt-8 flex items-start gap-4">
                  <Image
                    src={item.person.image}
                    alt={item.person.name}
                    width={90}
                    height={90}
                    className="rounded-full object-cover w-20 h-20 sm:w-24 sm:h-24 object-top border-4 border-gray-300"
                  />
                  <div className="text-white">
                    <p className="font-bold text-xl sm:text-2xl md:text-3xl mb-2 sm:mb-4">
                      {item.person.name}
                    </p>
                    <p className="text-white text-base sm:text-xl md:text-2xl">
                      {item.person.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        <button
          ref={prevRef}
          className={`absolute z-10 top-1/2 left-0 transform border -translate-y-1/2 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-300
          ${!isBeginning ? "bg-primary text-white" : "bg-white text-black"}`}
        >
          <LuChevronLeft className="text-2xl" />
        </button>
        <button
          ref={nextRef}
          className={`absolute z-10 top-1/2 right-0 transform border -translate-y-1/2 rounded-full w-10 h-10 flex items-center justify-center shadow transition-all duration-300
          ${!isEnd ? "bg-primary text-white" : "bg-white text-black"}`}
        >
          <LuChevronRight className="text-2xl" />
        </button>
      </Swiper>
    </div>
  );
}
