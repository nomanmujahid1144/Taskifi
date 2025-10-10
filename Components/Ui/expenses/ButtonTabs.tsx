"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircleDot } from "react-icons/fa6";
import Image from "next/image";
import Button from "@/Components/Common/Button";
import Blob from "@/Components/Common/Blob";

const tabs = [
  {
    label: "Expense",
    image: "/heropreview.gif",
    heading: "Capture and categorize all employee expenses in real time.",
    points: [
      "Submit and track expenses across categories",
      "Attach receipts and supporting documentation",
      "Maintain real-time visibility on spending",
    ],
  },
  {
    label: "Expense Report",
    image: "/heropreview.gif",
    heading: "Automate reporting with clarity and control.",
    points: [
      "Generate reports effortlessly",
      "Integrate reports with budgets and teams",
      "Export to PDF and CSV formats",
    ],
  },
  {
    label: "Expense Budget",
    image: "/heropreview.gif",
    heading: "Stay within budget with proactive insights.",
    points: [
      "Set team and project-based budgets",
      "Monitor thresholds and get alerts",
      "Enable smart approvals on overages",
    ],
  },
];

const FinancialTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 text-center">

        <div className="flex flex-col justify-center items-center mb-16 gap-6">
          <h2 className="component-heading max-w-5xl ">
            Design smart workflows for every financial need
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s,
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-20 flex-wrap">
          {tabs.map((t, idx) => (
            <Button
              key={idx}
              onClick={() => setActiveTab(idx)}
              variant={activeTab === idx ? "solid" : "outline"} 
            >
              {t.label}
            </Button>
          ))}
        </div>

        {/* Animated Content */}
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 relative md:min-h-[400px]">
          <Blob
            size="w-full h-full rounded-xl"
            colors={["from-primary", "to-primary"]}
            position="top-0 left-0"
            className="opacity-20 z-0"
          />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + "-image"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full p-2.5 rounded-xl border-white border bg-[#FFFFFF63] backdrop-blur-sm"
              >
                <Image
                  src={tab.image}
                  alt={tab.label}
                  width={700}
                  height={500}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + "-text"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h3 className=" text-2xl lg:text-3xl text-center lg:text-left font-bold mb-10 text-black">
                  {tab.heading}
                </h3>
                <ul className="space-y-4">
                  {tab.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <FaCircleDot className="text-primary size-5 mt-1" />
                      <p className="text-lg text-text-secondary">{point}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialTabs;
