"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMediaQuery } from "@/Hooks/UseMediaQuery"; // path to your hook

interface CardData {
  title: string;
  description: string;
  image: string;
}

interface InfoCardsProps {
  infoCards: CardData[];
}

export default function InfoCards({ infoCards }: InfoCardsProps) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="main-cont !py-0 z-30">
      {isMobile ? (
        <Swiper spaceBetween={16} slidesPerView={1} centeredSlides>
          {infoCards.map((card, index) => (
            <SwiperSlide key={index} className=" !flex justify-center items-center">
              <div className="flex flex-col w-full items-center justify-center bg-white shadow-xl rounded-lg h-full mx-4 overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-xl w-full font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary text-lg">
                    {card.description}
                  </p>
                </div>
                <div className="w-full h-64 flex justify-end overflow-hidden rounded-tl-lg pt-3 pl-6 shadow-md">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-auto min-w-full object-cover object-right rounded-tl-lg"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex justify-center md:justify-end items-stretch flex-col md:flex-row gap-6 px-6 md:px-0 md:ml-auto md:max-w-5xl">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between flex-1 bg-white shadow-xl rounded-lg overflow-hidden min-h-0"
            >
              <div className="px-6 py-0 pt-4">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-text-secondary text-lg ">
                  {card.description}
                </p>
              </div>
              <div className="w-full h-80 flex justify-end overflow-hidden rounded-tl-lg mt-auto pt-3 pl-10 shadow-md">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-auto min-w-full object-cover object-right rounded-tl-lg"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
