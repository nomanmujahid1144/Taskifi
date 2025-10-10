import React from "react";
import Image from "next/image";
import Blob from "@/Components/Common/Blob";

const Gridmasonary = () => {
  return (
    <div className="relative">
      {/* Decorative Blobs */}
      <Blob
        size="w-80 h-80"
        colors={["from-secondary", "to-secondary"]}
        position="absolute top-0 left-0 z-10"
        className="hidden md:block opacity-20 backdrop-blur-2xl"
      />
      <Blob
        size="w-80 h-80"
        colors={["from-secondary", "to-secondary"]}
        position="absolute top-96 left-0 z-10"
        className="hidden md:block opacity-20 backdrop-blur-2xl"
      />
      <Blob
        size="w-80 h-80"
        colors={["from-secondary", "to-secondary"]}
        position="absolute top-76 left-96 z-10"
        className="hidden md:block opacity-20 backdrop-blur-2xl"
      />
      <Blob
        size="w-80 h-80"
        colors={["from-secondary", "to-secondary"]}
        position="absolute bottom-0 right-0 z-10"
        className="hidden md:block opacity-20 backdrop-blur-2xl"
      />
      <Blob
        size="w-80 h-80"
        colors={["from-secondary", "to-secondary"]}
        position="absolute bottom-0 right-[600px] z-10"
        className="hidden md:block opacity-20 backdrop-blur-2xl"
      />

      {/* Decorative SVG */}
      <svg
        width="53"
        height="53"
        viewBox="0 0 53 53"
        className="absolute -top-24 right-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.5 0V25.9362H0L2.31922 25.2741C13.6542 22.0384 22.5175 13.3637 25.8236 2.26988L26.5 0Z"
          fill="#B5E4CA"
        />
        <path
          d="M26.5 53V25.9362H0L2.39109 26.6484C13.682 30.0117 22.4392 38.7809 25.6163 49.9057L26.5 53Z"
          fill="#B5E4CA"
        />
        <path
          d="M26.5 0V25.9362H53L50.6808 25.2741C39.3458 22.0384 30.4825 13.3637 27.1764 2.26988L26.5 0Z"
          fill="#B5E4CA"
        />
        <path
          d="M26.5 53V25.9362H53L50.6089 26.6484C39.318 30.0117 30.5608 38.7809 27.3837 49.9057L26.5 53Z"
          fill="#B5E4CA"
        />
      </svg>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 lg:grid-cols-10 relative z-20">
        {/* Card 1 */}
        <div className="col-span-1 sm:col-span-6 lg:col-span-10 flex flex-col md:flex-row justify-between items-start md:items-center marketing-grid-card gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl text-white font-bold mb-4">
              Growth
            </h3>
            <p className="text-sm sm:text-base text-white/80 max-w-2xs">
              Expand your pipeline effortlessly with access to 10M+ global
              leads. Taskifi’s AI helps you identify the best-fit prospects and
              keeps your funnel growing every day.
            </p>
          </div>
          <div className="w-full max-w-[460px]">
            <Image
              src="/marketing/colorPicker.png"
              alt="Color Picker"
              width={463}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 row-span-2 flex flex-col gap-6 justify-between items-start marketing-grid-card">
          <div>
            <h3 className="text-xl sm:text-2xl text-white font-bold mb-4">
              Conversion
            </h3>
            <p className="text-sm sm:text-base text-white/80 max-w-2xs">
              Turn leads into customers faster. With AI-personalized outreach
              and automated follow-ups, Taskifi boosts reply rates and helps
              your team close more deals.
            </p>
          </div>
          <div className="w-full">
            <Image
              src="/marketing/card2.png"
              alt="Conversion Image"
              width={463}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-span-1 sm:col-span-4 lg:col-span-7 flex flex-col md:flex-row justify-between items-start md:items-center marketing-grid-card gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl text-white font-bold mb-4">
              Engagement
            </h3>
            <p className="text-sm sm:text-base text-white/80 max-w-2xs">
              No more generic messages. Taskifi crafts unique, context-aware
              emails and sends them at the right time—so every interaction feels
              relevant and human.
            </p>
          </div>
          <div className="w-full max-w-[380px]">
            <Image
              src="/marketing/card1.png"
              alt="Engagement"
              width={379}
              height={200}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-span-1 sm:col-span-4 lg:col-span-7 flex flex-col-reverse md:flex-row justify-between items-start md:items-center marketing-grid-card gap-4">
          <div className="w-full max-w-[380px]">
            <Image
              src="/marketing/card3.png"
              alt="Success"
              width={379}
              height={200}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl text-white font-bold mb-4">
              Success
            </h3>
            <p className="text-sm sm:text-base text-white/80 max-w-2xs">
              Track open rates, replies, and conversions in real time. Taskifi
              gives you the insights to refine your outreach and scale what
              works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gridmasonary;
