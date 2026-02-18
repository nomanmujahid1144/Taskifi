import Image from "next/image";
import Button from "@/Components/Common/Button";
import CustomDropdown from "@/Components/Common/FaqDropdown";
import { IoArrowForwardOutline, IoArrowUpOutline } from "react-icons/io5";

const faqData = [
  {
    title: "Generate More Leads with AI Outreach",
    content: (
      <p>
        Access a database of 10M+ global leads and send personalized outreach
        automatically—so your pipeline grows faster.
      </p>
    ),
    openIcon: <IoArrowUpOutline className="text-white text-2xl" />,
    closeIcon: <IoArrowForwardOutline className="text-white text-2xl" />,
    button: (
      <Button variant="solid" className="mt-3" href="https://app.taskifi.io/signup">
        Get Started
      </Button>
    ),
  },
  {
    title: "Automate Project Workflows",
    content: (
      <p>
        Use AI to organize tasks, track milestones, and predict delays—keeping
        projects on time and within budget.
      </p>
    ),
    openIcon: <IoArrowUpOutline className="text-white text-2xl" />,
    closeIcon: <IoArrowForwardOutline className="text-white text-2xl" />,
    button: (
      <Button variant="solid" className="mt-3" href="https://app.taskifi.io/signup">
        Get Started
      </Button>
    ),
  },
  {
    title: "Optimize Resource Planning",
    content: (
      <p>
        AI balances workloads, manages timesheets, and forecasts availability
        to prevent burnout and boost efficiency.
      </p>
    ),
    openIcon: <IoArrowUpOutline className="text-white text-2xl" />,
    closeIcon: <IoArrowForwardOutline className="text-white text-2xl" />,
    button: (
      <Button variant="solid" className="mt-3" href="https://app.taskifi.io/signup">
        Get Started
      </Button>
    ),
  },
  {
    title: "Gain Insights that Drive Growth",
    content: (
      <p>
        Get clear visibility into sales, projects, and resources with
        AI-powered analytics for smarter decisions.
      </p>
    ),
    openIcon: <IoArrowUpOutline className="text-white text-2xl" />,
    closeIcon: <IoArrowForwardOutline className="text-white text-2xl" />,
    button: (
      <Button variant="solid" className="mt-3" href="https://app.taskifi.io/signup">
        Get Started
      </Button>
    ),
  },
];

const FeatureAnimation = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-20 ">
      {/* Left Section */}
      <div className="flex flex-col gap-10 w-full md:w-1/2">
        <div className="flex flex-col gap-6">
          <h1 className="text-white text-3xl md:text-4xl font-bold">
            AI that speaks your language
          </h1>
          {/* <p className="text-lg text-white/80 leading-8 md:leading-10">
            Taskifi brings AI across every part of your business — helping you
            manage customers, automate projects, optimize resources, grow sales,
            and launch campaigns.
          </p>
          <p className="text-lg text-white/80 leading-8 md:leading-10">
            One smart platform. Infinite possibilities.
          </p> */}
        </div>

        {/* <h2 className="text-2xl md:text-3xl text-white">
          Explore AI Across Taskifi
        </h2> */}

        {/* Left Text Section */}
            <CustomDropdown
              data={faqData}
              textColor="text-white text-lg xl:text-xl"
              bgColor="bg-transparent px-2 "
              expandedIndex={0}
              className="flex flex-col gap-4 "
            />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex flex-row justify-center items-center gap-10">
        <div className="w-1/2">
          <Image
            src="/ai/featureStack.png"
            alt="Feature Animation"
            width={326}
            height={500}
            className="h-auto w-full object-cover"
            quality={100}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-4 text-white text-lg text-left">
          <p>AI</p>
          <p>AUTOMATION</p>
          <p>INSIGHTS</p>
          <p>MANAGEMENT</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureAnimation;
