import Image from "next/image";
import Button from "@/Components/Common/Button";
import CardsSwiper from "@/Components/Ui/aiOptimization/CardsSwiper";
import StepsGrid from "@/Components/Ui/aiOptimization/stepsGrid";
import TestimonialSlider from "@/Components/Ui/aiOptimization/FullWidthSlider";
import CustomDropdown from "@/Components/Common/FaqDropdown";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import {marketingSteps,softwareDevSteps,supplyChainSteps,constructionSteps} from "./data";

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
const aiSteps = [
  {
    title: "Identifying Opportunities",
    desc: "We pinpoint AI use cases with the highest potential for your business. Through in-depth feasibility studies and ROI analysis, we provide strategic insights to ensure your investments yield measurable success.",
  },
  {
    title: "Assessment and Selection",
    desc: "Our team ensures your AI solutions meet the strictest data privacy and compliance standards, including GDPR, CCPA, and HIPAA, while embedding ethical AI practices for long-term trust and reliability.",
  },
  {
    title: "AI Roadmap Development",
    desc: "We craft a detailed AI roadmap with clear milestones and KPIs to guide your journey, ensuring alignment with business goals and a sustainable path to long-term innovation.",
  },
  {
    title: "Change Management and Training",
    desc: "Effective AI implementation requires organizational change. We offer change management services and training programs to help your team adopt AI-driven processes and continuous improvement.",
  },
  {
    title: "AI Integration",
    desc: "Our seamless integration minimizes disruptions while detailed training equips your team to maximize AI’s value, ensuring smooth adoption and consistent use across your organization.",
  },
  {
    title: "Monitor & Optimize",
    desc: "Our team provides continuous monitoring, updates, and fine-tuning to keep your AI solutions performing at peak efficiency, adapting to evolving needs and market trends.",
  },
  {
    title: "Data Preparation",
    desc: "We clean, process, and structure your data with advanced engineering techniques, creating a solid foundation for AI solutions that deliver accurate predictions and meaningful insights.",
  },
  {
    title: "AI Solution Development",
    desc: "We pinpoint AI use cases with the highest potential for your business. Through in-depth feasibility studies and ROI analysis, we provide strategic insights to ensure your investments yield measurable success.",
  },
];


export default function page() {
  return (
    <div className="pt-20">
      {/* hero section */}
      <div className="relative pb-16">
        <Image
          src="/aiOptimization/bg.svg"
          alt="AI Optimization Background"
          layout="fill"
          className="absolute inset-0 object-cover object-bottom -z-20"
          quality={100}
        />
        ;
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div className="flex flex-col   lg:flex-row items-center gap-12 lg:gap-16 px-4 py-10">
            <div className="w-full lg:w-1/2 flex flex-col space-y-8 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl 2xl:text-6xl font-bold leading-tight text-white">
                Lets Talk AI!
              </h1>
              <p className="text-base md:text-lg text-white max-w-xl mx-auto lg:mx-0">
                AI isn’t the future—it’s now. We help you turn ideas into action
                with practical, business-first AI integration.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button
                  type="button"
                  variant="white"
                  className="w-fit text-base md:text-lg !bg-white font-semibold"
                  href="/services/resource-planning"
                >
                  Talk to an AI Expert
                </Button>
              </div>
            </div>
            <div className="w-full flex justify-center items-center lg:w-1/2">
              <Image
                src="/aiOptimization/hero.png"
                alt="Partner Program Hero Image"
                width={665}
                height={530}
                className="object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pl-0 lg:pl-10  max-w-screen-xl py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[38px] 2xl:text-5xl font-bold font-caecilia  text-gradient-primary  max-w-6xl mx-auto mb-3">
            We accelerate Date and AI adoption to positively impact people and
            organizations.
          </h2>
          <div className="h-[2px] bg-primary max-w-2xl mx-auto"></div>
        </div>
        <div>
          <CardsSwiper />
        </div>
      </div>
      <div className="bg-[#F8F8F8]">
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div className="text-center mb-12">
            <h2 className="component-heading font-bold text-text-primary  max-w-6xl mx-auto mb-3">
              How we make AI work for you
            </h2>
          </div>
          <StepsGrid aiSteps={aiSteps} />
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div className="text-center mb-12">
            <h2 className="component-heading !text-white  max-w-6xl mx-auto mb-6">
              Accelerating Growth Through AI Optimization.
            </h2>
            <p className="2xl:text-xl text-white/80 max-w-3xl mx-auto">
              See how businesses are transforming operations with targeted,
              results-driven AI consulting.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </div>
      <div className="bg-[#F8F8F8]">
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div className="text-center mb-12">
            <h2 className="component-heading max-w-6xl mx-auto mb-3">
              Marketing
            </h2>
          </div>
          <StepsGrid aiSteps={marketingSteps} lgCols={3}  />
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div className="text-center mb-12">
            <h2 className="component-heading  max-w-6xl mx-auto mb-3">
              Construction
            </h2>
          </div>
          <StepsGrid aiSteps={constructionSteps} lgCols={3}  />
        </div>
      </div>
      <div className="bg-[#F8F8F8]">
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div className="text-center mb-12">
            <h2 className="component-heading  max-w-6xl mx-auto mb-3">
              Software Development
            </h2>
          </div>
          <StepsGrid aiSteps={softwareDevSteps} lgCols={3}  />
        </div>
      </div>
      <div className="bg-white">
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div className="text-center mb-12">
            <h2 className="component-heading max-w-6xl mx-auto mb-3">
              Supply Chain Management
            </h2>
          </div>
          <StepsGrid aiSteps={supplyChainSteps} lgCols={3}  />
        </div>
      </div>
      <div className="container mx-auto py-16 px-6 flex items-center justify-center">
        <div className="flex-1 max-w-screen-lg text-center md:text-left z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold md:text-5xl font-caecilia">
              FAQ
            </h2>
            <p className="text-text-secondary  md:text-lg  mt-10 max-w-2xl mx-auto">
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
}
