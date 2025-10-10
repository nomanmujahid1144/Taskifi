import React from "react";
import { FaRocket, FaUsers } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
import clsx from "clsx";

const features = [
  {
    color: "#22c55e", // green-500
    icon: FaRocket,
    title: "Lead Finder",
    description:
      "Instantly access a global database of 200M+ verified B2B contacts. Use advanced filters to discover high-fit prospects across industries and regions.",
  },
  {
    color: "#3b82f6", // blue-500
    icon: AiOutlineRobot,
    title: "AI Outreach Studio",
    description:
      "Craft hyper-personalized cold emails and LinkedIn messages in seconds with Taskifi’s AI, tailored to each lead’s profile and intent signals.",
  },
  {
    color: "#eab308", // yellow-500
    icon: FaUsers,
    title: "Multi-Channel Sequencer",
    description:
      "Run automated outreach across email, LinkedIn, and more. Sequence steps, set triggers, and let Taskifi handle the follow-ups while your team focuses on conversations.",
  },
  {
    color: "#a855f7", // purple-500
    icon: HiOutlineMailOpen,
    title: "Inbox Intelligence",
    description:
      "Track opens, clicks, and replies in real-time. Manage all conversations from a unified inbox to never miss a prospect.",
  },
];


function MarketingCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto z-10 relative">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        const bgColor = feature.color + "33"; // Add alpha (33 = ~20%)

        return (
          <div
            key={index}
            className={clsx(
              "bg-[#1C1C1E] rounded-3xl p-6 shadow-md flex flex-col gap-5 text-left"
            )}
          >
            <div
              className="p-3 w-fit rounded-lg"
              style={{
                backgroundColor: bgColor,
              }}
            >
              <Icon className="text-3xl" style={{ color: feature.color }} />
            </div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-sm text-white/80">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MarketingCards;
