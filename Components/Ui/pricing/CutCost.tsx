"use client";

import { useState,useEffect } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import Image from "next/image";

const appIcons = [
  "/pricing/icon1.svg",
  "/pricing/icon2.svg",
  "/pricing/icon3.svg",
  "/pricing/tailwind.png",
  "/pricing/icon4.svg",
  "/pricing/icon5.svg",
  "/pricing/icon6.svg",
  "/pricing/icon7.svg",
  "/pricing/icon8.svg",
  "/pricing/icon9.svg",
  "/pricing/icon10.svg",
  "/pricing/icon11.svg",
];

export default function CutCosts() {
  const [users, setUsers] = useState(350);
  const [value, setValue] = useState(50); // starting value

  useEffect(() => {
    // Updates CSS variable on the element itself
    document.documentElement.style.setProperty("--val", `${value}%`);
  }, [value]);

  return (
    <section className="bg-white py-12 md:py-20 text-text-primary ">
      <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold text-center mb-2">
        Cut Costs with Taskifi
      </h2>
      <p className="text-center text-sm sm:text-base md:text-lg text-text-secondary mb-10 md:mb-12">
        Cost savings are based on average monthly price per user for each app.
      </p>

      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 md:gap-10">
        {/* Left Box */}
        <div className="bg-gradient-to-br from-[#9333EA] to-[#3945E2] text-white p-5 sm:p-6 rounded-2xl w-full lg:max-w-lg flex flex-col justify-between">
          <div className="text-xs sm:text-sm font-semibold bg-white/30 w-fit inline-block px-3 py-1.5 rounded-full mb-4">
            <Image
              src="/logo/primaryWhiteLogo.svg"
              alt="Cut Costs"
              width={94}
              height={24}
              className="inline-block mr-2"
            />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
              Replace 4 apps
            </h3>
            <p className="text-[#F3E8FF] text-sm sm:text-base mb-6">
              It is estimated that Taskifi can replace at least 4 of your
              existing business apps.
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 mb-6">
            <p className="text-xl sm:text-2xl font-bold leading-snug">
              Save $354.000/year
            </p>
            <p className="text-[10px] sm:text-xs text-white mt-2">
              Taskifi can save a 500 person company $354,000 per year compared
              to the non-enterprise price of your apps.
            </p>
          </div>
          <button className="bg-white text-violet-700 w-full justify-center font-bold text-sm sm:text-base px-4 py-2 rounded-lg flex items-center gap-2">
            Start Saving with Taskifi Today <FaArrowRight className="text-sm" />
          </button>

          <div className="flex flex-col sm:flex-row items-center  bg-white/10 rounded-xl p-4 sm:p-6 gap-3 mt-6">
            <div className="w-[90px] h-auto rounded-full overflow-hidden">
              <img
                src="/pricing/girl.png"
                alt="user"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-sm">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <div className="flex items-center text-yellow-400 gap-1 text-xs sm:text-sm">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <h3 className="text-xs sm:text-sm">Nucleus Research</h3>
              </div>
              <p className="text-xs leading-snug">
                <span className="font-bold">Taskifi</span> brings all of our
                teams together into one place so they can stay on track,
                collaborate and communication
              </p>
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 w-full lg:max-w-xl">
          <div className="text-xs sm:text-sm font-semibold bg-primary/20 w-fit text-primary inline-block px-3 py-1.5 rounded-full mb-4">
            Your apps today
          </div>
          <p className="font-bold text-sm sm:text-base mb-3">
            Which apps do you use?
          </p>
          <p className="text-xs sm:text-sm text-text-secondary mb-5">
            Select the applications your team currently uses
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {appIcons.map((icon, i) => (
              <div
                key={i}
                className="w-full h-[72px] sm:h-[96px] flex items-center justify-center bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <img
                  src={icon}
                  alt={`App ${i + 1}`}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                />
              </div>
            ))}
          </div>

          <label
            htmlFor="userRange"
            className="mb-2  text-sm font-medium text-gray-700 flex justify-between items-center"
          >
            How many people work at your company?
            <p className="text-xs text-primary border w-20 border-primary px-2 py-1 flex justify-center items-center rounded-full font-medium">
              {users} <span className="max-sm:hidden">users</span>
            </p>
          </label>
          <input
            type="range"
            id="userRange"
            min="10"
            max="1000"
            step="10"
            value={users}
            onChange={(e) => setUsers(Number(e.target.value))}
            className="w-full accent-primary"
            style={{
              background: `linear-gradient(to right, #7755ff 0%, #4919dd ${users/10}%, #fff ${users / 10}%, #fff 100%)`,
            }}
          />
          <div className="flex justify-between text-xs text-text-secondary mt-1">
            <span>10 users</span>
            <span>1000+ users</span>
          </div>
        </div>
      </div>
    </section>
  );
}
