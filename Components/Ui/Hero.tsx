"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  easeInOut,
  easeIn,
  easeOut,
} from "framer-motion";
import Blob from "../Common/Blob";
import Image from "next/image";
import Button from "../Common/Button";
import {
  BsCheckSquare,
  BsPeople,
  BsFileEarmarkText,
  BsBarChartLine,
  BsChatDots,
} from "react-icons/bs";
import {
  CiMonitor,
  CiCalendar,
  CiFileOn,
  CiFolderOn,
  CiUser,
  CiChat1,
  CiViewList,
  CiShop,
  CiBookmark,
} from "react-icons/ci";
import {
  FaArrowRightLong,
  FaCalendar,
  FaRegFolderOpen
} from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { TbSquareDashed } from "react-icons/tb";


export const options = [
  {
    id: "os",
    label: "Sales",
    img: "/homeHero/Board.webp",
    icon: CiShop, // 🏬 represents sales / commerce
  },
  {
    id: "pms",
    label: "Projects",
    img: "/homeHero/Board.webp",
    icon: CiFolderOn, // 📁 projects folder
  },
  {
    id: "resources",
    label: "Resources",
    img: "/homeHero/askAi.webp",
    icon: CiUser, // 👤 human resources
  },
  {
    id: "leads",
    label: "Leads",
    img: "/homeHero/Attendance.webp",
    icon: CiViewList, // 📋 list of leads
  },
  {
    id: "tasks",
    label: "Tasks",
    img: "/homeHero/Status.webp",
    icon: CiBookmark, // 🔖 tasks marker
  },
  {
    id: "calendar",
    label: "Calendar",
    img: "/homeHero/Timesheets.webp",
    icon: CiCalendar, // 📅 calendar
  },
  {
    id: "docs",
    label: "Documents",
    img: "/homeHero/askAi.webp",
    icon: CiFileOn, // 📄 file/document
  },
  {
    id: "analytics",
    label: "Analytics",
    img: "/homeHero/rcManagment.webp",
    icon: CiMonitor, // 🖥️ dashboard/analytics screen
  },
  {
    id: "chats",
    label: "Chats",
    img: "/homeHero/Board.webp",
    icon: CiChat1, // 💬 chat bubble
  },
];

import placeholderImg from "@/Hooks/constant"

export default function Hero() {
  const [selected, setSelected] = useState("os");

  return (
    <section className="relative bg-bg-grey overflow-hidden lg:container mx-auto px-2">
      <div className="mx-auto  pt-10 md:pb-[500px] pb-12 relative z-10 text-center">
        <h1 className="text-3xl  md:text-5xl 2xl:text-6xl font-bold font-caecilia text-text-primary leading-tight md:max-w-4xl  2xl:max-w-5xl mx-auto">
          <span className="animate-gradient">From AI to ROI:</span> Transform Contracts into Execution-Ready Project Plans.
        </h1>
        <p className="text-text-secondary text-base mt-4">
          Did you know most companies lose over
          <span className="text-primary font-medium"> 30% </span>
          of their productivity to manual workflows?
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button variant="solid" href="https://app.taskifi.io/signup">
            Try it's Free
          </Button>
          <Button variant="outline" href="/#contact">
            Request a Demo
          </Button>
        </div>
        <p className="text-text-secondary mt-6 text-xs md:text-sm">
          No credit card needed ✦ Get started for free
        </p>
      </div>

      {/* Responsive Floating Panel */}

      <Blob
        size="w-[420px] h-[450px]"
        colors={["from-primary", "to-secondary"]}
        position="bottom-10  right-20"
        className="opacity-20 hidden md:block rounded-none z-10 "
      />

      <div className="relative md:absolute bottom-0 md:bottom-10 md:right-20 w-full p-2.5  border-white border bg-[#FFFFFF63]  md:w-96 flex justify-center md:justify-end z-20">
        <div className="p-6 bg-white rounded-md w-[96%] md:w-full shadow-xl">
          <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
            What would you like to manage?
          </h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {options.map((opt) => {
              const isChecked = selected === opt.id;
              const Icon = opt.icon;

              return (
                <button
                  key={opt.id}
                  onClick={() => setSelected(opt.id)}
                  className="flex flex-col items-center border border-[#D5D7FF] cursor-pointer p-3 hover:border-primary transition text-xs relative"
                >
                  <span className="hidden md:inline">
                    {isChecked ? (
                      <BsCheckSquare className="text-primary w-4 h-4 mb-1 absolute top-1.5 right-1.5" />
                    ) : (
                      <TbSquareDashed className="text-gray-400 w-4 h-4 mb-1 absolute top-1.5 right-1.5" />
                    )}
                  </span>
                  <div className="flex items-center justify-center mb-2">
                    <Icon className="text-gray-500 w-6 h-6" />
                  </div>
                  {opt.label.split(" ")[0]}
                </button>
              );
            })}
          </div>
          <Button
            variant="solid"
            href="https://app.taskifi.io/signup"
            className="flex items-center justify-center gap-2 w-full"
          >
            Get Started
            <FaArrowRightLong className="ml-2 size-4" />
          </Button>
        </div>
      </div>

      {/* Background Image — visible only on desktop */}
      <div className="absolute bottom-0 w-full  justify-center z-0 hidden md:flex">
        <div className="relative w-full h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0.2 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.3, ease: easeIn },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.3, ease: easeOut },
              }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[35%]"
            >
              <svg
                width="53"
                height="53"
                viewBox="0 0 53 53"
                className="absolute  top-36 -left-28"
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

              <Image
                src={
                  options.find((opt) => opt.id === selected)?.img || "/img1.png"
                }
                alt="Dashboard"
                width={1000}
                height={800}
                priority
                placeholder="blur"
                blurDataURL={placeholderImg}
                loading="eager"
                className="object-cover rounded-xl border-4 max-w-none border-black shadow-2xl"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="hidden">
        {options.map((opt) => (
          <Image
            key={opt.id}
            src={opt.img}
            alt=""
            width={1000}
            height={800}
            loading="eager"
          />
        ))}
      </div>
    </section>
  );
}
