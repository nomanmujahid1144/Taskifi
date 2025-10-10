import Button from "@/Components/Common/Button";
import Blob from "@/Components/Common/Blob";
import React from "react";
import Image from "next/image";
import CountUpNumber from "@/Components/Common/CountUpNumber";
import CustomDropdown from "@/Components/Common/FaqDropdown";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ExpenseFeatures from "@/Components/Ui/expenses/ExpensesFeatures";
import BenefitsSection from "@/Components/Ui/purchases/BenifitsSection";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { FaChartPie, FaHandshake, FaChartBar } from "react-icons/fa";

interface StatItem {
  end: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { end: 400, label: "Lorem Ipsum", suffix: "+" },
  { end: 600, label: "Lorem Ipsum", suffix: "%" },
  { end: 10, label: "Lorem Ipsum", suffix: "k" },
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

const features = [
  {
    title: "Simplify expense reimbursements at scale",
    description:
      "Track, validate, and approve employee reimbursements with ease. Taskifi centralizes every expense submitted by your team — whether it’s out-of-pocket costs or client-related charges. Automatically link each reimbursement to reports, budgets, and roles for full transparency.",
    image: "/expenses/feature1.png", // Update path as needed
    reverse: false,
  },
  {
    title: "Plan and track business trips with precision",
    description:
      "From flights and hotels to daily allowances, Taskifi lets you manage every trip detail in one place. Connect trips to projects, define budgets, assign approvers, and sync with expenses — ensuring a seamless travel and reporting experience for every team member.",
    image: "/expenses/feature2.png", // Update path as needed
    reverse: true,
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
    <div className="pt-20">
      <div className="container mx-auto pb-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <Blob
          size="w-80 h-80"
          colors={["from-secondary", "to-secondary"]}
          position="absolute top-20 -left-90 -z-10"
          className="hidden md:block opacity-20 backdrop-blur-2xl"
        />
        <div className="text-center  mx-auto w-full max-w-5xl justify-center items-center flex-col flex gap-8 px-6">
          <h1 className="font-bold text-text-primary md:text-5xl max-w-3xl 2xl:max-w-5xl 2xl:text-6xl text-3xl text-center">
            Automate your procurement — from RFQ to Delivery
          </h1>
          <p className="max-w-4xl text-text-secondary xl:text-lg">
            Taskifi’s Purchase Management module streamlines the full purchasing
            lifecycle. Send RFQs, compare vendor offers with AI-powered
            recommendations, generate purchase orders, track bills and payments,
            and close the loop with confirmed goods delivery — all in one
            integrated workspace.
          </p>
          <div className="max-w-xl w-full flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-primary px-6 py-3 rounded-full flex-grow min-w-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-0"
            />
            <Button
              variant="solid"
              className="w-auto whitespace-nowrap"
              href="#"
            >
              Get Started
            </Button>
          </div>
        </div>

        <div className="mt-10 flex justify-center items-center relative max-w-4xl py-6 mx-auto">
          <svg
            width="53"
            height="53"
            viewBox="0 0 53 53"
            className="absolute z-[99]  top-56 -left-28"
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
          <Blob
            size="w-64 h-96"
            position="absolute -top-10 -right-10 -z-10"
            className="hidden md:block opacity-20 backdrop-blur-2xl"
          />
          <img
            src="/expenses/hero.png"
            alt="hero image with a screen"
            className="w-full  rounded-xl border-4 border-black"
          />
        </div>
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
        <section className="relative w-full container mx-auto max-w-[2000px] flex-col gap-16 md:gap lg:flex-row overflow-hidden min-h-[600px]  2xl:min-h-[800px] flex items-center justify-start bg-black text-white px-6 md:px-16 py-20">
          {/* Content Wrapper */}
          <div className="  lg:max-w-[45%] w-full z-10">
            <div className=" mb-4 lg:mb-8">
              <Image
                src="/logo/primaryWhiteLogo.svg"
                alt="Taskifi Logo"
                width={116}
                height={50}
                className=" mb-4 lg:mb-8 "
              />
              <h2 className=" text-3xl  2xl:text-[40px] text-white font-bold leading-relaxed">
                No more manual tasks.Just automated business growth.
              </h2>
            </div>
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
          <div className=" lg:w-1/2">
            <Blob
              size={550}
              colors={["from-[#3845E2]", "to-[#7755FF]"]}
              position="top-1/2 hidden md:block md:right-[130px] 2xl:right-[220px] translate-y-[-50%]"
              className="z-0 opacity-30 blur-3xl"
            />
            <div
              className=" h-auto w-full   2xl:max-w-[900px] 
        2xl:max-h-[600px]  rounded-3xl border-8 border-[#FFFFFF7A] backdrop-blur-sm overflow-hidden z-0 shadow-2xl pointer-events-none  md:block"
            >
              <img
                src="/purchases/screen1.png"
                alt="Taskifi Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </div>
      {/* Features Section */}
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <ExpenseFeatures
          showButton={true}
          buttonText="Learn More"
          mainTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          mainDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          features={features}
        />
      </div>
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <BenefitsSection
          title="Optimize Your Purchasing Workflow"
          description="Automate vendor selection, approvals, and orders to reduce costs and speed up procurement."
          benefits={[
            {
              icon: FaChartPie,
              iconColor: "text-[#F64D00]",
              iconBg: "bg-[#F64D00]/20",
              percentage: "40%",
              title: "Faster decision-making",
              description:
                "Thanks to centralized business data and real-time reports.",
            },
            {
              icon: FaHandshake,
              iconColor: "text-[#059669]",
              iconBg: "bg-[#059669]/20",
              percentage: "32%",
              title: "Implementation time reduced",
              description: "Launch your full business suite in under a week.",
            },
            {
              icon: FaChartBar,
              iconColor: "text-[#7555FE]",
              iconBg: "bg-[#7555FE]/20",
              percentage: "80%",
              title: "Implementation time reduced",
              description: "Launch your full business suite in under a week.",
            },
          ]}
          imageUrl="/girl-pointing.webp"
          primarySpan={false}
        />
      </div>
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <ExpenseFeatures
          showButton={true}
          buttonText="Learn More"
          mainTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          mainDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          features={features}
        />
      </div>
      <div className="container mx-auto pb-16 px-6 flex items-center justify-center">
        <div className="flex-1 max-w-screen-lg text-center md:text-left z-10">
          <div className="text-center mb-16">
            <h2 className="component-heading">
              FAQ
            </h2>
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
