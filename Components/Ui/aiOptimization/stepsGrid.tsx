"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useMediaQuery } from "@/Hooks/UseMediaQuery";

type Step = {
  title: string;
  desc: string;
};

type StepsGridProps = {
  aiSteps: Step[];
  lgCols?: number; // Number of columns for large devices (default = 4)
};

export default function StepsGrid({ aiSteps, lgCols = 4 }: StepsGridProps) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  // Generate dynamic Tailwind class for large columns
  const lgColClass = `lg:grid-cols-${lgCols}`;

  if (isMobile) {
    return (
      <Swiper
        spaceBetween={16}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        slidesPerView={1}
        className="px-4 py-8 !pb-12"
      >
        {aiSteps.map((step, idx) => (
          <SwiperSlide key={idx}>
            <div className="p-4 rounded-xl h-full">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${lgColClass} gap-10 py-10`}>
      {aiSteps.map((step, idx) => (
        <div key={idx} className="h-full">
          <h3 className="font-semibold text-2xl mb-4 text-text-primary">
            {step.title}
          </h3>
          <p className="text-sm text-text-secondary">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
