import { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Tab {
  name: string;
  icon: React.ReactNode;
}

interface TabSwitcherProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (tabName: string) => void;
}

const TabSwitcher: FC<TabSwitcherProps> = ({ tabs, activeTab, setActiveTab }) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className=" border-b border-[#C3C3C3] pb-3 ">
      {/* Mobile Swiper */}
      <div className="relative md:hidden px-3">
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-6 z-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-6 z-20 bg-gradient-to-l from-white to-transparent" />

        {/* Swiper Navigation Buttons */}
        <button
          ref={prevRef}
          disabled={isBeginning}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-30 p-1 transition-colors ${
            isBeginning ? 'text-gray-300' : 'text-primary hover:text-primary'
          }`}
        >
          <FaChevronLeft size={16} />
        </button>
        <button
          ref={nextRef}
          disabled={isEnd}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-30 p-1 transition-colors ${
            isEnd ? 'text-gray-300' : 'text-primary hover:text-primary'
          }`}
        >
          <FaChevronRight size={16} />
        </button>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            const nav = swiper.params.navigation;
            if (nav && typeof nav !== 'boolean') {
              nav.prevEl = prevRef.current;
              nav.nextEl = nextRef.current;
            }
          }}
          onSlideChange={(swiper) => {
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
          {tabs.map((tab) => {
            const isActive = activeTab === tab.name;
            return (
              <SwiperSlide key={tab.name} className="!w-full">
                <button
                  onClick={() => setActiveTab(tab.name)}
                  className={`relative flex items-center justify-center w-full gap-2 px-4 py-2 text-lg font-medium [&>svg]:size-[20px] transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-primary fill-primary'
                      : 'text-[#252525] hover:text-primary'
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 bottom-[-13px] w-full h-[2px] z-10 bg-primary"
                    />
                  )}
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Desktop Flex Tabs */}
      <div className="hidden md:flex justify-between gap-3">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;
          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`relative flex items-center gap-2 2xl:px-4 py-2 text-sm lg:text-base xl:text-lg font-bold [&>svg]:size-[20px] transition-colors ${
                isActive
                  ? 'text-primary fill-primary'
                  : 'text-[#252525] hover:text-primary'
              }`}
            >
              {tab.icon}
              {tab.name}
              {isActive && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 bottom-[-13px] w-full h-[3px] z-10 bg-primary"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TabSwitcher;
