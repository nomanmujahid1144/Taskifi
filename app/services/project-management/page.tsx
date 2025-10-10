import React from "react";
import Blob from "@/Components/Common/Blob";
import Button from "@/Components/Common/Button";
import CountUpNumber from "@/Components/Common/CountUpNumber";
import CustomDropdown from "@/Components/Common/FaqDropdown";
import AutomationsComponent from "@/Components/Ui/Project-management/Automation";
import TemplateCenter from "@/Components/Ui/Project-management/TemplateCenter";
import BudgetingSection from "@/Components/Ui/Project-management/BudgetingSection";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import ScrollWordColor from "@/Components/Common/ScrollWordColour";

interface StatItem {
  end: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { end: 95, label: "Fewer missed deadlines", suffix: "%" },
  { end: 3, label: "Faster planning speed", suffix: "X" },
  { end: 1200, label: "Projects launched with AI", suffix: "+" },
];
const faqData = [
  {
    title: "Project Auto-Generation from RFP",
    content: (
      <p>
        Assign the right people automatically. Taskifi matches tasks with
        resource availability, role seniority, and working hours.
      </p>
    ),
    openIcon: <IoIosArrowUp className="text-white text-2xl" />,
    closeIcon: <IoIosArrowDown className="text-white text-2xl" />,
    button: (
      <Button variant="solid" className="mt-3" href="#">
        Get Started
      </Button>
    ),
  },
  {
    title: "Cost Estimation Engine",
    content: (
      <p>
        Yes, you can try us for free for 30 days. If you want, we’ll provide a
        personalized onboarding call.
      </p>
    ),
    openIcon: <IoIosArrowUp className="text-white text-2xl" />,
    closeIcon: <IoIosArrowDown className="text-white text-2xl" />,
    button: (
      <Button variant="solid" className="mt-3" href="#">
        Get Started
      </Button>
    ),
  },
  {
    title: "Deliverable Forecasting",
    content: (
      <p>
        Yes, you can try us for free for 30 days. If you want, we’ll provide a
        personalized onboarding call.
      </p>
    ),
    openIcon: <IoIosArrowUp className="text-white text-2xl" />,
    closeIcon: <IoIosArrowDown className="text-white text-2xl" />,
    button: (
      <Button variant="solid" className="mt-3" href="#">
        Get Started
      </Button>
    ),
  },
  {
    title: "Multi-Board Planning",
    content: (
      <p>
        Yes, you can try us for free for 30 days. If you want, we’ll provide a
        personalized onboarding call.
      </p>
    ),
    openIcon: <IoIosArrowUp className="text-white text-2xl" />,
    closeIcon: <IoIosArrowDown className="text-white text-2xl" />,
    button: (
      <Button variant="solid" className="mt-3" href="#">
        Get Started
      </Button>
    ),
  },
  {
    title: "Live AI Assistant (Zeta)",
    content: (
      <p>
        Yes, you can try us for free for 30 days. If you want, we’ll provide a
        personalized onboarding call.
      </p>
    ),
    openIcon: <IoIosArrowUp className="text-white text-2xl" />,
    closeIcon: <IoIosArrowDown className="text-white text-2xl" />,
    button: (
      <Button variant="solid" className="mt-3" href="#">
        Get Started
      </Button>
    ),
  },
];

const faqData2 = [
  {
    title: "Project Auto-Generation from RFP",
    content: (
      <p>
        Assign the right people automatically. Taskifi matches tasks with
        resource availability, role seniority, and working hours.
      </p>
    ),
    openIcon: <FiMinusCircle className="text-text-secondary text-2xl" />,
    closeIcon: <FiPlusCircle className="text-text-secondary text-2xl" />,
  },
  {
    title: "Cost Estimation Engine",
    content: (
      <p>
        Yes, you can try us for free for 30 days. If you want, we’ll provide a
        personalized onboarding call.
      </p>
    ),
    openIcon: <FiMinusCircle className="text-text-secondary text-2xl" />,
    closeIcon: <FiPlusCircle className="text-text-secondary text-2xl" />,
  },
  {
    title: "Deliverable Forecasting",
    content: (
      <p>
        Yes, you can try us for free for 30 days. If you want, we’ll provide a
        personalized onboarding call.
      </p>
    ),
    openIcon: <FiMinusCircle className="text-text-secondary text-2xl" />,
    closeIcon: <FiPlusCircle className="text-text-secondary text-2xl" />,
  },
  {
    title: "Multi-Board Planning",
    content: (
      <p>
        Yes, you can try us for free for 30 days. If you want, we’ll provide a
        personalized onboarding call.
      </p>
    ),
    openIcon: <FiMinusCircle className="text-text-secondary text-2xl" />,
    closeIcon: <FiPlusCircle className="text-text-secondary text-2xl" />,
  },
  {
    title: "Live AI Assistant (Zeta)",
    content: (
      <p>
        Yes, you can try us for free for 30 days. If you want, we’ll provide a
        personalized onboarding call.
      </p>
    ),
    openIcon: <FiMinusCircle className="text-text-secondary text-2xl" />,
    closeIcon: <FiPlusCircle className="text-text-secondary text-2xl" />,
  },
];

const page = () => {
  return (
    <div className="pt-20 ">
      <div className="text-white relative">
        <section className="relative w-full container mx-auto max-w-[2000px] flex-col gap-16 md:gap lg:flex-row  overflow-hidden min-h-[600px]  2xl:min-h-[700px] max-h-screen flex items-center justify-start  text-text-primary px-6  md:pt-0 md:px-16">
          {/* Content Wrapper */}
          <div className="lg:max-w-[45%] w-full z-10">
            <div className="flex-1 xl:max-w-2xl xl:px-6 xl:text-left z-10">
              <p className="text-primary text-lg font-medium mb-6">
                Save 4 hours per person every single week
              </p>
              <h1 className="lg:text-5xl 2xl:text-6xl text-left text-3xl w-full font-bold mb-6">
                Turn client contracts into project plans
              </h1>

              <p className="text-text-secondary mb-8 text-base xl:text-lg text-left max-w-lg">
                Taskifi automatically transforms RFPs into full project plans —
                complete with timelines, resource allocation, cost estimation,
                and deliverable tracking.
              </p>
              <p className="text-text-secondary mb-8 text-base xl:text-lg text-left max-w-lg">
                No more spreadsheets. No more guesswork. Just upload your RFP
                and watch Taskifi generate everything you need to deliver on
                time and on budget — using real-time availability, role-based
                assignment logic, and cost forecasting.
              </p>
              <div className="flex">
                <Button variant="solid" href="#">
                  Get Started
                </Button>
              </div>
            </div>
          </div>

          {/* Right-side "Computer Screen" with partial view */}
          <div>
            <div
              className="lg:absolute lg:top-1/2 right-[-10%] lg:translate-y-[-50%] h-auto w-full lg:w-[55%]  2xl:max-w-[900px] 
        2xl:max-h-[600px]  rounded-xl border-8 border-[#FFFFFF7A] backdrop-blur-sm overflow-hidden z-0 custom-shadow-blue pointer-events-none  md:block"
            >
              <img
                src="/ProjectManagement/projecthero.png"
                alt="Taskifi Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      {/* counter */}
      <div className="container mx-auto py-16 px-6 relative max-w-screen-2xl">
        <div className="flex items-center flex-col md:flex-row justify-center md:gap-28 relative gap-16">
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">
                  <CountUpNumber
                    end={stat.end}
                    suffix={stat.suffix}
                    duration={1}
                    className="text-5xl font-bold "
                  />
                </div>
                <div className="text-lg font-medium text-text-secondary">
                  {stat.label}
                </div>
              </div>

              {/* Divider except after last item */}
              {index < stats.length - 1 && (
                <div className="w-px h-14 md:block hidden bg-black" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* faq */}
      <div className="bg-black text-white">
        <div className="text-center pt-16 w-full justify-center items-center flex-col flex gap-8 px-6">
          <h1 className="component-heading !text-white text-center">
            <span className="text-primary">AI-Driven</span> Resource Planner
          </h1>
          <p className="max-w-xl text-white 2xl:text-lg">
            Assign the right people automatically. Taskifi matches tasks with
            resource availability, role seniority, and working hours.
          </p>
        </div>

        <section className="relative w-full container mx-auto max-w-[2000px] flex-col gap-16 md:gap lg:flex-row overflow-hidden min-h-[600px]  2xl:min-h-[800px] flex items-center justify-start bg-black text-white px-6 md:px-16 py-20">
          {/* Content Wrapper */}
          <div className="  lg:max-w-[45%] w-full z-10">
            {/* Left Text Section */}
            <CustomDropdown
              data={faqData}
              textColor="text-white text-lg xl:text-2xl"
              bgColor="bg-transparent px-2 "
              expandedIndex={0}
              className="flex flex-col gap-4 "
            />
          </div>

          {/* Right-side "Computer Screen" with partial view */}
          <div>
      
            <div
              className="lg:absolute lg:top-1/2 right-[-10%] lg:translate-y-[-50%] h-auto w-full lg:w-[55%]  2xl:max-w-[900px] 
        2xl:max-h-[600px]  rounded-xl border-8 border-[#FFFFFF7A] backdrop-blur-sm overflow-hidden z-0 custom-shadow-blue pointer-events-none  md:block"
            >
              <img
                src="/ProjectManagement/projecthero.png"
                alt="Taskifi Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <AutomationsComponent />
      </div>

      <div className="container mx-auto py-16 pb-0 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <div className="text-center md:text-left w-full mx-auto max-w-4xl mb-16">
          <h2 className="component-heading text-center leading-snug">
            Kickstart any process with ready-to-use, <br />
            <span className="text-indigo-600">AI-enhanced templates</span>
          </h2>
          <p className="mt-4 2xl:text-lg text-gray-600 max-w-4xl text-center mx-auto md:mx-0">
            Taskifi’s Template Center gives you a head start by offering a
            library of smart templates across marketing, project management,
            operations, and more. Whether you're planning a campaign or
            structuring a full-scale client project, you’ll find customizable
            templates designed to match your workflow.
          </p>
        </div>
        <TemplateCenter />
      </div>
      <ScrollWordColor
        text="AI should work for you, not the other way around. Designed to evolve and predict your needs - Taskifi AI is built to enable your best work yet."
        containerClassName="container mx-auto py-36 px-6 relative flex items-center justify-center"
        headingClassName="2xl:text-[40px] md:text-4xl text-2xl font-bold text-[#717171] max-w-6xl text-center z-20"
        blobSize={200}
      />
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6 ">
        <BudgetingSection />
      </div>
      <div className="container mx-auto pb-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <div className="flex-1 max-w-screen-lg text-center md:text-left z-10">
          <div className="text-center mb-16">
            <h2 className="component-heading ">FAQ</h2>
            <p className="text-text-secondary  2xl:text-lg  mt-10 max-w-2xl mx-auto">
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please chat to our team.
            </p>
          </div>
          <CustomDropdown
            data={faqData2}
            bgOpen="bg-[#F9FAFB]"
            textColor="text-black md:text-2xl text-lg"
            textColorP="text-text-secondary "
            bgColor="bg-transparent "
            classNameMenu="rounded-xl "
            expandedIndex={0}
            className="mb-8 flex flex-col gap-4 divide-none"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
