"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const cards = [
  {
    title: "Strategy",
    subtitle: "& Transformation",
    description:
      "We accompany companies from strategy to operations and adoption. We leverage all types of data across organizations to accelerate their transformation and create value. Our hackathons, GenAI Academy, and School of Data help companies educate and train their teams.",
    image: "/aiOptimization/card1.png",
  },
  {
    title: "AI",
    subtitle: "Acceleration",
    description:
      "Grounded on solid data foundations, we develop AI solutions designed per industry sectors and tailor-made per departments (Sales & Marketing, Customer Support, Supply Chain, Manufacturing, Finance, HR, ...). We have dedicated teams with thorough expertise, working together beyond frontiers.",
    image: "/aiOptimization/card2.png",
  },
  {
    title: "Data",
    subtitle: "Foundations & BI",
    description:
      "We create a foundation for effective data governance and management through a framework that drives value and compliance. Our data analytics and BI tools help enterprises work smarter and drive better results. We also combine data and environmental transformations for greater impact.",
    image: "/aiOptimization/card3.png",
  },
  {
    title: "AI",
    subtitle: "Acceleration",
    description:
      "Grounded on solid data foundations, we develop AI solutions designed per industry sectors and tailor-made per departments (Sales & Marketing, Customer Support, Supply Chain, Manufacturing, Finance, HR, ...). We have dedicated teams with thorough expertise, working together beyond frontiers.",
    image: "/aiOptimization/card2.png",
  },
  {
    title: "Data",
    subtitle: "Foundations & BI",
    description:
      "We create a foundation for effective data governance and management through a framework that drives value and compliance. Our data analytics and BI tools help enterprises work smarter and drive better results. We also combine data and environmental transformations for greater impact.",
    image: "/aiOptimization/card3.png",
  },
];

export default function CardsSwiper() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
        className="!pb-16 px-4 sm:px-6 md:px-10" // ✨ responsive padding
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="flex">
            <div className="bg-white rounded-xl p-4 md:p-6 flex flex-col justify-start text-left transition-all duration-300 w-full h-full min-h-[480px] md:min-h-[540px] custom-shadow-4 border border-[#EAECF0]">
              <div className="w-full flex justify-center items-center mb-4 md:mb-6">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={120}
                  height={50}
                  className="w-auto h-auto object-contain"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2 md:mb-3">
                {card.title}
              </h3>
              <h4 className="text-base md:text-lg font-medium text-[#475569] mb-3 md:mb-4">
                {card.subtitle}
              </h4>
              <p className="text-sm md:text-base text-text-secondary ">
                {card.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
