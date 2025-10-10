"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";

import { useRef, useState } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Mila McSabbu",
    title: "Digital Marketer",
    rating: 5,
    image: "/testimonials/girl1.webp",
    feedback:
      "Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on it requires healthy.",
  },
  {
    name: "Jenny Wilson",
    title: "Graphic Designer",
    rating: 5,
    image: "/testimonials/girl2.webp",
    feedback:
      "Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on it requires healthy.",
  },
  {
    name: "Robert Fox",
    title: "Founder, Oppora",
    rating: 4,
    image: "/testimonials/man1.webp",
    feedback:
      "Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on it requires healthy.",
  },
  {
    name: "Robert Fox",
    title: "Founder, Oppora",
    rating: 4,
    image: "/testimonials/man1.webp",
    feedback:
      "Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on it requires healthy.",
  },
  {
    name: "Robert Fox",
    title: "Founder, Oppora",
    rating: 4,
    image: "/testimonials/man1.webp",
    feedback:
      "Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on it requires healthy.",
  },
];

export default function TestimonialCarousel() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="bg-white">
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          className="!py-16 md:!px-3"
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
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx} className="py-6 md:px-4">
              <div className="bg-white pt-20 pb-6 px-4 rounded-2xl shadow-xl shadow-[#4919DD1A] relative min-h-[280px] text-center">
                {/* Avatar */}
                <div className="absolute -top-12 left-12">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 aspect-square rounded-full object-cover border-4 border-secondary shadow-md"
                  />
                </div>

                <div className="flex justify-between items-center">
                  {/* Name & Title */}
                  <div>
                    <h3 className="text-lg font-semibold mt-2 text-start">
                      {t.name}
                    </h3>
                    <p className="text-sm text-gray-500 text-start">
                      {t.title}
                    </p>
                  </div>
                  {/* Rating */}
                  <div className="flex justify-center gap-1 mt-2 text-yellow-400">
                    {[...Array(5)].map((_, i) =>
                      i < t.rating ? (
                        <FaStar key={i} />
                      ) : (
                        <FaRegStar key={i} className="text-gray-300" />
                      )
                    )}
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-gray-600 text-sm mt-4 text-start leading-relaxed">
                  {t.feedback}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            ref={prevRef}
            disabled={isBeginning}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
              ${
                isBeginning
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            <LuChevronLeft className="w-5 h-5" />
          </button>

          <button
            ref={nextRef}
            disabled={isEnd}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors
              ${
                isEnd
                  ? "bg-primary/30 text-white/60 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary/90"
              }`}
          >
            <LuChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}