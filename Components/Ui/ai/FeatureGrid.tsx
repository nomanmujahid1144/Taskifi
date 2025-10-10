// components/FeatureGrid.tsx
import { PiMicrophoneLight ,PiClipboardTextLight } from "react-icons/pi";
import {  MdAutoFixHigh } from "react-icons/md";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";




const featuresTop = [
  {
    icon: <PiMicrophoneLight className="text-white text-2xl mb-2" />,
    title: "Personalized Messaging",
    description: "Write tailored emails for every lead instantly with AI suggestions.",
  },
  {
    icon: <PiClipboardTextLight className="text-white text-2xl mb-2" />,
    title: "Smart Timing",
    description: "Send outreach when leads are most likely to open and engage.",
  },
];

const featuresBottom = [
  {
    icon: <RiCheckboxCircleLine className="text-white text-xl mb-2" />,
    title: "One-Click Campaigns",
    description: "Launch AI-driven email sequences without manual setup.",
  },
  {
    icon: <CiHeart className="text-white text-xl mb-2" />,
    title: "Save Templates",
    description: "Reuse and refine your top-performing campaigns anytime.",
  },
  {
    icon: <MdAutoFixHigh className="text-white text-xl mb-2" />,
    title: "Auto Follow-Ups",
    description: "Generate and send smart follow-ups to keep conversations alive.",
  },
];

export default function FeatureGrid() {
  return (
    <div className="bg-black  text-white">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Top Row - 2 items centered */}
        <div className="flex justify-center  divide-x divide-white/10 ">
          {featuresTop.map((feature, index) => (
            <div key={index} className="text-center flex flex-col px-4 justify-center items-center max-w-xs">
              {feature.icon}
              <h3 className="text-xs font-semibold">{feature.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row - 3 items spaced */}
        <div className="flex justify-center  divide-x divide-white/10 ">
          {featuresBottom.map((feature, index) => (
            <div key={index} className="text-center flex flex-col px-2 md:px-4  justify-center items-center max-w-xs">
              {feature.icon}
              <h3 className="text-xs font-semibold">{feature.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
