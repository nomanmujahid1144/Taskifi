import React from "react";
import Button from "@/Components/Common/Button";
import { FaArrowRight } from "react-icons/fa6";
import Gridmasonary from "@/Components/Ui/marketing/Gridmasonary";
import SwitchScreen from "@/Components/Ui/crm/switchScreen";
import ContentFeature from "@/Components/Ui/marketing/featuresAnim";
import BlogGrid from "@/Components/Common/BlogContainer";
import FeaturesSection from "@/Components/Ui/marketing/MarketingCards";
import Blob from "@/Components/Common/Blob";
import Image from "next/image";
import BottomCard from "@/Components/Ui/marketing/BottomCard";
import WordChangingAnimation from "@/Components/Common/wordChangingAnimation";

const headings = [
  "Customer Management Hub",
  "Contact activities tracking",
  "Company and deal dashboards",
  "Custom CRM reports",
  "Lead and deal scoring",
];

const images = [
  "/sales/screen1.png",
  "/sales/screen2.png",
  "/sales/screen1.png",
  "/sales/screen2.png",
  "/sales/screen1.png",
];
const blogData = [
  {
    imageSrc: "/blogs/blog-1.png",
    imageAlt: "Blog image 1",
    title: "AI-Powered Lead Sourcing",
    description:
      "Instantly generate high-quality lead lists using firmographic filters, intent signals, and AI-driven research agents — so your reps always start with the right prospects.",
  },
  {
    imageSrc: "/blogs/blog-2.png",
    imageAlt: "Blog image 2",
    title: "Personalized Outreach at Scale",
    description:
      "Craft tailored emails and LinkedIn messages in seconds. Our AI adapts tone, style, and context to resonate with each prospect — driving higher open and reply rates.",
  },
  {
    imageSrc: "/blogs/blog-3.png",
    imageAlt: "Blog image 3",
    title: "Automated Multi-Channel Sequences",
    description:
      "Build smart sequences that combine email, LinkedIn, and other channels. Automate follow-ups, reminders, and handoffs — so no lead falls through the cracks.",
  },
  {
    imageSrc: "/blogs/blog-4.png",
    imageAlt: "Blog image 4",
    title: "Real-Time Enrichment & Insights",
    description:
      "Enrich contact profiles with fresh data — job changes, company updates, funding rounds — ensuring your outreach is always timely and relevant.",
  },
  {
    imageSrc: "/blogs/blog-5.png",
    imageAlt: "Blog image 5",
    title: "Deal Tracking & Engagement Analytics",
    description:
      "See exactly how prospects engage with your outreach. Track opens, clicks, replies, and pipeline impact with actionable insights to refine your strategy.",
  },
  {
    imageSrc: "/blogs/blog-6.png",
    imageAlt: "Blog image 6",
    title: "AI-Optimized Sales Workflows",
    description:
      "Turn your best rep’s playbook into automation. Systematize research, outreach, and follow-ups so the whole team performs like top sellers.",
  },
];

const BlogCardClassnames = {
  card: "custom-dark-shadow pb-12 bg-black/40 border border-white/20 backdrop:blur-2xl",
  image: "w-full lg:h-[277px] object-cover rounded-lg",
  title: "text-white text-2xl font-bold ",
  description: "text-white/80 text-base",
};

export default function page() {
  return (
    <div className="bg-black  text-white relative overflow-hidden">
      <Blob
        size="w-80 h-80"
        colors={["from-secondary", "to-secondary"]}
        position="absolute top-30 -left-50  z-10"
        className="hidden md:block opacity-20 backdrop-blur-2xl"
      />
      <div className="pt-20">
        {/* hero section */}
        <div className="container mx-auto pb-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div className="text-center py-16 mx-auto w-full max-w-5xl justify-center items-center flex-col flex gap-8 px-6">
            <WordChangingAnimation
              beforeText="Built for"
              words={["sales", "marketing", "growth", "teams"]}
            />

            <p className="max-w-lg text-white/80 xl:text-lg">
              Taskifi AI is the smart engine powering your entire business —
              built to plan, automate, and grow faster.
            </p>
            <div className="max-w-xl w-full flex justify-center md:flex-row gap-4">
              <Button
                variant="solid"
                className="w-auto whitespace-nowrap flex justify-center items-center gap-2"
                href="https://app.taskifi.io/signup"
              >
                Get Started
                <FaArrowRight />
              </Button>
            </div>
          </div>
          <Gridmasonary />
        </div>
        {/* text section */}
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div className="flex justify-between items-center flex-col md:flex-row  text-center md:text-left">
            <h2 className=" text-3xl 2xl:text-[40px] font-bold max-w-5xl font-caecilia">
              Solutions for every <br /> business
            </h2>
            <p className="text-white/80 md:text-lg 2xl:text-xl  mt-10 max-w-[600px] 2xl:max-w-[700px] ">
              "I don’t have time to spend hours prospecting and writing cold
              emails. Taskifi’s AI Sales Outreach makes it easy—I get access to
              millions of leads and can launch personalized campaigns in
              minutes."
            </p>
          </div>
        </div>
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div className="text-center mb-12 px-6">
            <h2 className=" component-heading !text-white max-w-3xl mx-auto ">
              AI-Powered CRM That Works the Way You Do
            </h2>
            <p className="text-white/80 2xl:text-lg  mt-10 max-w-2xl mx-auto">
              Automate tasks, organize contacts, and turn every interaction into
              an opportunity—with intelligent tools built for modern
              relationship management.
            </p>
          </div>
          <SwitchScreen images={images} headings={headings} theme="dark" />
        </div>
        {/* <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div className="text-center mb-12 px-6">
            <h2 className=" component-heading !text-white max-w-3xl mx-auto ">
              AI-Powered CRM That Works the Way You Do
            </h2>
            <p className="text-white/80 2xl:text-lg  mt-10 max-w-2xl mx-auto">
              Automate tasks, organize contacts, and turn every interaction into
              an opportunity—with intelligent tools built for modern
              relationship management.
            </p>
          </div>
          <ContentFeature />
        </div> */}
        <div className="container mx-auto pb-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div
            className={`flex flex-col md:flex-row-reverse items-center gap-8`}
          >
            <div className="flex justify-center md:w-1/2 w-full bg-transparent">
              <Image
                src="/marketing/group.png"
                alt="Document upload and processing workflow cards"
                width={500}
                height={600}
                className="!w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-start gap-6 md:w-1/2 w-full text-center md:text-left">
              <h3 className=" text-3xl md:text-[40px] font-bold text-center md:text-left w-full">
                Automate Your Sales Pipeline
              </h3>
              <p className="text-white/80 text-lg">
                Build smart, multi-step sales workflows to move leads faster
                through the pipeline. Automate follow-ups, deal updates,
                reminders, and handoffs — so your sales team can focus on
                closing, not chasing.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div className="text-center mb-12 px-6">
            <h2 className=" component-heading !text-white  mx-auto ">
              Built to Supercharge Every Sales Outreach
            </h2>
            <p className="text-white/80 2xl:text-lg  mt-10 max-w-3xl mx-auto">
              Automate, personalize, and scale your outbound campaigns with
              AI-powered tools, advanced lead sourcing, and intelligent
              engagement tracking — giving your team more time to close deals.
            </p>
          </div>
          <div className="relative">
            <Blob
              size={650}
              colors={["from-secondary", "to-secondary"]}
              position="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              className="hidden md:block opacity-20 backdrop-blur-2xl"
            />
            <BlogGrid blogs={blogData} classNames={BlogCardClassnames} />
          </div>
        </div>
        <div className="container mx-auto pb-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div
            className={`flex flex-col md:flex-row-reverse items-center gap-8`}
          >
            <div className="flex justify-center md:w-1/2 w-full bg-transparent">
              <Image
                src="/marketing/group.png"
                alt="Document upload and processing workflow cards"
                width={500}
                height={600}
                className="!w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col items-start gap-6 md:w-1/2 w-full text-center md:text-left">
              <h3 className=" text-3xl md:text-[40px] font-bold text-center md:text-left w-full">
                Generate highly personalized emails in seconds
              </h3>
              <p className="text-white/80 text-lg">
                Leverage AI in your email writing process for recommendations,
                personalization, rephrasing, and message analysis. Apollo's AI
                writing assistant is built on the world's most extensive contact
                database to surface signals and craft hyper-personalized emails
                for every prospect in your pipeline.
              </p>
              <Button
                variant="solid"
                className="w-auto whitespace-nowrap flex justify-center items-center gap-2"
                href="#"
              >
                Sign Up for Free
                <FaArrowRight />
              </Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div className="text-center mb-16 px-6">
            <h2 className=" component-heading !text-white max-w-2xl mx-auto ">
              Everything you need to source, connect, and close
            </h2>
          </div>
          <div className="h-[1px] max-w-3xl 2xl:max-w-4xl mx-auto mb-[65px] hidden lg:block bg-[#9A9A9A] relative overflow-visible">
            <div className="h-[60px] w-[1px] bg-[#9A9A9A] absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="h-1 w-1 bg-[#9A9A9A] absolute top-0 rounded-full left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="h-[60px] w-[1px] bg-[#9A9A9A] absolute top-0 left-[0%]">
              <div className="h-1 w-1 bg-[#9A9A9A] absolute bottom-0 rounded-full left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="h-[60px] w-[1px] bg-[#9A9A9A] absolute top-0 left-[33%]">
              <div className="h-1 w-1 bg-[#9A9A9A] absolute bottom-0 rounded-full left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="h-[60px] w-[1px] bg-[#9A9A9A] absolute top-0 left-[66%]">
              <div className="h-1 w-1 bg-[#9A9A9A] absolute bottom-0 rounded-full left-1/2 transform -translate-x-1/2"></div>
            </div>
            <div className="h-[60px] w-[1px] bg-[#9A9A9A] absolute top-0 left-[100%]">
              <div className="h-1 w-1 bg-[#9A9A9A] absolute bottom-0 rounded-full left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
          <FeaturesSection />
        </div>
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <BottomCard />
        </div>
      </div>
    </div>
  );
}
