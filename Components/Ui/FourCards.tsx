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
              <div className="flex flex-col w-full items-center justify-center bg-white shadow-lg rounded-lg  h-full mx-4">
                <div className="px-6 py-4">
                  <h3 className="text-xl w-full font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary text-lg">
                    {card.description}
                  </p>
                </div>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex justify-center items-stretch flex-col md:flex-row gap-6 px-6 md:px-0">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between flex-1 bg-white shadow-lg rounded-lg "
            >
              <div className="px-6 py-0 pt-4">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-text-secondary text-lg ">
                  {card.description}
                </p>
              </div>
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-auto object-cover rounded mt-auto"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
