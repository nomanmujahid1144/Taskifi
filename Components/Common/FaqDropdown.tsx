"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type DropdownItem = {
  title: string;
  content: ReactNode;
  openIcon?: ReactNode;
  closeIcon?: ReactNode;
  button?: ReactNode;
};

type CustomDropdownProps = {
  data: DropdownItem[];
  bgColor?: string;
  textColor?: string;
  expandedIndex?: number;
  textColorP?: string;
  className?: string;
  classNameMenu?: string;
  bgOpen?: string;
};

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  data,
  textColorP = "text-white",
  bgColor = "bg-transparent",
  classNameMenu = "",
  textColor = "text-black",
  bgOpen,
  expandedIndex = -1,
  className = "",
}) => {
  const [openIndex, setOpenIndex] = useState<number>(expandedIndex);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  useEffect(() => {
    const newHeights = contentRefs.current.map((el) => el?.scrollHeight || 0);
    setHeights(newHeights);
  }, [data]);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className={`w-full rounded-md divide-y divide-text-secondary ${className}`}>
      {data.map((item, index) => {
        const isOpen = openIndex === index;
        const appliedBg = isOpen ? bgOpen ?? bgColor : bgColor;
        const height = isOpen ? heights[index] ?? "auto" : 0;

        return (
          <div
            key={index}
            className={`${appliedBg} text-left p-4 ${classNameMenu}`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <h3 className={` ${textColor}`}>{item.title}</h3>
              <div className="ml-4">
                {isOpen
                  ? item.openIcon ?? <span>-</span>
                  : item.closeIcon ?? <span>+</span>}
              </div>
            </div>

            <AnimatePresence initial={false}>
              <motion.div
                key="content"
                initial={{ height: 0 }}
                animate={{ height }}
                exit={{ height: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ overflow: "hidden" }}
                className={`mt-3 text-base ${textColorP}`}
              >
                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  className={` transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-100 pointer-events-none"
                  }`}
                >
                  {item.content}
                  {item.button && <div className="mt-6 inline-flex ml-2 mb-2">{item.button}</div>}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default CustomDropdown;
