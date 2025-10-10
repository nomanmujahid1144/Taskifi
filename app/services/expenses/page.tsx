import Blob from "@/Components/Common/Blob";
import CustomDropdown from "@/Components/Common/FaqDropdown";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import Button from "@/Components/Common/Button";
import CountUpNumber from "@/Components/Common/CountUpNumber";
import React from "react";
import { GrUserSettings } from "react-icons/gr";
import ExpenseFeatures from "@/Components/Ui/expenses/ExpensesFeatures";
import FinancialTabs from "@/Components/Ui/expenses/ButtonTabs";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { FaChartBar, FaChartPie, FaHandshake } from "react-icons/fa";
import BenefitsSection from "@/Components/Ui/purchases/BenifitsSection";

const faqData = [
  {
    title: "Project Auto-Generation from RFP",
    content: (
      <p>
        Assign the right people automatically. Taskifi matches tasks with
        resource availability, role seniority, and working hours.
      </p>
    ),
    openIcon: <IoIosRemove className="text-text-secondary text-3xl" />,
    closeIcon: <IoIosAdd className="text-text-secondary text-3xl" />,
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
    openIcon: <IoIosRemove className="text-text-secondary text-3xl" />,
    closeIcon: <IoIosAdd className="text-text-secondary text-3xl" />,
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
    openIcon: <IoIosRemove className="text-text-secondary text-3xl" />,
    closeIcon: <IoIosAdd className="text-text-secondary text-3xl" />,
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
    openIcon: <IoIosRemove className="text-text-secondary text-3xl" />,
    closeIcon: <IoIosAdd className="text-text-secondary text-3xl" />,
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

interface StatItem {
  end: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { end: 15, label: "users used Dash for their business today.", suffix: "K" },
  { end: 25, label: "Decrease expense more than 25%/Month", suffix: "%" },
  { end: 60, label: "Business revenue increase significantly.", suffix: "%" },
  { end: 100, label: "Purchases", suffix: "%" },
  { end: 80, label: "Sales", suffix: "%" },
];

const cards = [
  {
    icon: <GrUserSettings className="text-black text-2xl" />,
    title: "Lorem Ipsum is the simply dummy  Text",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    icon: <GrUserSettings className="text-black text-2xl" />,
    title: "Lorem Ipsum is the simply dummy  Text",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    icon: <GrUserSettings className="text-black text-2xl" />,
    title: "Lorem Ipsum is the simply dummy  Text",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    icon: <GrUserSettings className="text-black text-2xl" />,
    title: "Lorem Ipsum is the simply dummy  Text",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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

const page = () => {
  return (
    <div className="pt-20">
      {/* hero*/}
      <div className="bg-white ">
        <div className="text-center pt-10 mx-auto w-full max-w-5xl justify-center items-center flex-col flex gap-12 px-6">
          <h1 className="font-bold text-text-primary xl:text-5xl 2xl:text-6xl text-3xl text-center">
            Instantly capture expenses with OCR-powered bill scanning
          </h1>
          <p className="max-w-3xl text-text-secondary xl:text-lg">
            Track every expense Instantly log reimbursable and company-paid
            expenses. Attach receipts, categorize by type, and assign to budgets
            or projects.
          </p>
        </div>

        <section className="relative w-full container mx-auto max-w-[2000px] flex-col-reverse gap-16 md:gap lg:flex-row overflow-hidden min-h-[600px]  2xl:min-h-[650px] flex items-center justify-start text-text-primary px-6 md:px-16 pb-16">
          {/* Content Wrapper */}
          <div className="  lg:max-w-[50%] w-full z-10">
            {/* Left Text Section */}
            <CustomDropdown
              data={faqData}
              textColor="text-text-primary text-lg font-bold xl:text-2xl"
              bgColor="bg-white shadow-sm shadow-[#1018281A] rounded-xl px-3 py-4"
              expandedIndex={0}
              textColorP="text-text-secondary text-sm xl:text-base"
              className="flex flex-col gap-8"
            />
          </div>

          {/* Right-side "Computer Screen" with partial view */}
          <div className="mt-6 lg:mt-0">
            <Blob
              size={450}
              colors={["from-[#3845E2]", "to-[#7755FF]"]}
              position="top-1/2 hidden md:block md:right-[130px] 2xl:right-[220px] translate-y-[-50%]"
              className="z-0 opacity-30 blur-3xl"
            />
            <div
              className="lg:absolute lg:top-[42%] right-[-10%] lg:translate-y-[-50%] h-auto w-full lg:w-[50%]  2xl:max-w-[900px] 
        2xl:max-h-[600px]  rounded-xl border-8 border-[#FFFFFF7A] backdrop-blur-sm overflow-hidden z-0 shadow-2xl pointer-events-none  md:block"
            >
              <img
                src="/expenses/hero.png"
                alt="Taskifi Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
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

      {/* Cards Section */}
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <h2 className="component-heading text-center pb-16 ">
          Built for your people
        </h2>

        <div className="relative flex flex-col lg:flex-row justify-center gap-6">
          {/* Blobs */}
          <Blob
            size={250}
            colors={["from-primary", "to-secondary"]}
            position="top-0 left-0"
            className="z-0 opacity-45 blur-3xl absolute"
          />
          <Blob
            size={300}
            colors={["from-primary", "to-secondary"]}
            position="bottom-0 right-0"
            className="z-0 opacity-45 blur-3xl absolute"
          />

          {/* Cards */}
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:max-w-[300px] flex flex-col gap-4 bg-white z-20 custom-shadow border border-[#E5E7EB] rounded-xl p-6 text-center sm:text-left"
            >
              <div className="text-black bg-[#4919DD33] w-12 h-12 rounded-full flex justify-center items-center text-2xl mx-auto sm:mx-0">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary">
                {card.title}
              </h3>
              <p className="text-text-secondary text-sm leading-loose">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <ExpenseFeatures
          showButton={true}
          buttonText="Get Started"
          features={features}
          mainTitle="Lorem Ipsum is the simply dummy  Text"
          mainDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        />
      </div>
      <div className="bg-black relative">
        <div className="absolute top-20 right-50 z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="49"
            viewBox="0 0 34 49"
            fill="none"
          >
            <rect width="34" height="49" fill="url(#paint0_linear_313_3058)" />
            <defs>
              <linearGradient
                id="paint0_linear_313_3058"
                x1="17"
                y1="0"
                x2="17"
                y2="49"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            className="absolute top-8 left-0 z-20"
            fill="none"
          >
            <g clipPath="url(#clip0_313_3052)">
              <path
                d="M18.2458 1.4273L20.7456 9.62535C21.0785 10.7173 21.6749 11.7107 22.4821 12.5179C23.2893 13.3251 24.2827 13.9215 25.3746 14.2544L33.5727 16.7541C34.3091 16.9788 34.3091 18.0212 33.5727 18.2458L25.3746 20.7456C24.2827 21.0785 23.2893 21.6749 22.4821 22.4821C21.6749 23.2893 21.0785 24.2827 20.7456 25.3746L18.2455 33.5727C18.0208 34.3091 16.9785 34.3091 16.7538 33.5727L14.2541 25.3746C13.9211 24.2827 13.3248 23.2893 12.5175 22.4821C11.7103 21.6749 10.717 21.0785 9.625 20.7456L1.4273 18.2455C0.6909 18.0208 0.6909 16.9785 1.4273 16.7538L9.62535 14.2541C10.7173 13.9211 11.7107 13.3248 12.5179 12.5175C13.3251 11.7103 13.9215 10.717 14.2544 9.625L16.7545 1.4273C16.9792 0.6909 18.0212 0.6909 18.2458 1.4273Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_313_3052">
                <rect width="35" height="35" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-20 -rotate-90 left-50 z-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="49"
            viewBox="0 0 34 49"
            fill="none"
          >
            <rect width="34" height="49" fill="url(#paint0_linear_313_3058)" />
            <defs>
              <linearGradient
                id="paint0_linear_313_3058"
                x1="17"
                y1="0"
                x2="17"
                y2="49"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 35 35"
            className="absolute top-8 left-0 z-20"
            fill="none"
          >
            <g clipPath="url(#clip0_313_3052)">
              <path
                d="M18.2458 1.4273L20.7456 9.62535C21.0785 10.7173 21.6749 11.7107 22.4821 12.5179C23.2893 13.3251 24.2827 13.9215 25.3746 14.2544L33.5727 16.7541C34.3091 16.9788 34.3091 18.0212 33.5727 18.2458L25.3746 20.7456C24.2827 21.0785 23.2893 21.6749 22.4821 22.4821C21.6749 23.2893 21.0785 24.2827 20.7456 25.3746L18.2455 33.5727C18.0208 34.3091 16.9785 34.3091 16.7538 33.5727L14.2541 25.3746C13.9211 24.2827 13.3248 23.2893 12.5175 22.4821C11.7103 21.6749 10.717 21.0785 9.625 20.7456L1.4273 18.2455C0.6909 18.0208 0.6909 16.9785 1.4273 16.7538L9.62535 14.2541C10.7173 13.9211 11.7107 13.3248 12.5179 12.5175C13.3251 11.7103 13.9215 10.717 14.2544 9.625L16.7545 1.4273C16.9792 0.6909 18.0212 0.6909 18.2458 1.4273Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_313_3052">
                <rect width="35" height="35" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="container mx-auto py-36 px-6  relative  flex flex-col gap-8 items-center justify-center">
          <h2 className="lg:text-[46px] text-2xl font-bold text-white max-w-3xl text-center z-20">
            Want to see how you can put AI to work{" "}
            <span className="text-primary">in your organization?</span>
          </h2>
          <p className="text-[#CDD5DF] max-w-xl text-lg text-center">
            Discover how to easily integrate AI into your workflows and
            transform the way you work
          </p>
          <Button variant="solid" className="px-12 z-20" href="/contact">
            Lets Talk
          </Button>
        </div>
      </div>
      <div className="container mx-auto md:max-w-screen-lg 2xl:max-w-screen-xl py-16 px-6 relative">
        <FinancialTabs />
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
