import Image from "next/image";
import Button from "@/Components/Common/Button";
import HeroSection from "@/Components/Ui/ai/hero";
import Blob from "@/Components/Common/Blob";
import FeatureAnimation from "@/Components/Ui/ai/featureAnimation";
import LogoMarquee from "@/Components/Ui/LogoMarquee";
import { FiArrowRight } from "react-icons/fi";
import FeatureGrid from "@/Components/Ui/ai/FeatureGrid";
import CustomDropdown from "@/Components/Common/FaqDropdown";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

const images = [
  "/booking.svg",
  "/econmy.png",
  "/booking.svg",
  "/econmy.png",
  "/booking.svg",
  "/econmy.png",
  "/booking.svg",
  "/econmy.png",
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

export default function page() {
  return (
    <div className="bg-black overflow-hidden">
      <div className="pt-20 text-white  ">
        {/* hero section */}
        <div className="container mx-auto pb-16 relative px-0  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <Blob
            size="w-96 h-80"
            colors={["from-secondary", "to-secondary"]}
            position="absolute top-0 md:top-20 -left-90 "
            className=" md:block opacity-20 backdrop-blur-2xl"
          />
          <Blob
            size="w-[425px] h-[425px]"
            colors={["from-secondary", "to-secondary"]}
            position="absolute top-20 -right-90 "
            className=" md:block opacity-20 backdrop-blur-2xl"
          />
          <HeroSection />
        </div>
        {/* features section */}
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <FeatureAnimation />
        </div>

        {/* screen section */}
        <div className="relative container mx-auto">
          <img
            src="/ai/screenbg.png"
            alt="bg"
            className=" w-full absolute lg:top-1/2 top-[65%] left-0 "
          />
          <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
            <section className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="component-heading !text-white mb-6">
                  Use smart invoice templates to streamline your billing
                  process.
                </h1>
                <p className=" 2xl:text-xl text-white max-w-3xl mx-auto">
                  Plan Smarter with AI Project Budgeting Taskifi breaks your
                  projects into clear phases and uses AI to forecast costs at
                  every stage. From planning to delivery, it automatically
                  identifies budget risks, highlights where resources might
                  stretch thin, and predicts potential delays
                </p>
              </div>

              <div className="bg-white/30  lg:w-[953px] border mx-auto h-fit   border-white backdrop:blur-2xl rounded-2xl p-1">
                <img
                  src="/ai/screen1.png"
                  className="w-full h-auto rounded-xl object-contain"
                  alt=""
                />
              </div>
            </section>
          </div>
        </div>
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div className="flex justify-center flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-1/2 flex gap-12 flex-col">
              <h2 className="lg:text-[32px] text-2xl font-bold text-white">
                <span className="block">
                  AI Email Outreach, Done Smarter {" "}
                </span>
                <span className="text-2xl font-normal text-white/50">
                  It’s not just about sending more messages — it’s about sending the right ones with intelligent AI personalization.
                </span>
              </h2>
              <Button className="flex w-fit justify-center items-center gap-2">
                Try Taskifi
                <FiArrowRight />
              </Button>
            </div>
            <div className="w-full lg:w-1/2">
              <FeatureGrid />
            </div>
          </div>
        </div>
        <section className="relative w-full container mx-auto max-w-[2000px] flex-col gap-16 md:gap md:flex-row overflow-hidden min-h-[600px]  2xl:min-h-[800px] flex items-center justify-center  text-white px-6 md:px-16 py-20">
          {/* Content Wrapper */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12 w-full relative z-10">
            {/* Left Text Section */}
            <div className="flex-1 text-center md:text-left z-10">
              <div className="flex items-center gap-2 mb-5">
                <Image
                  src="/logo/primaryWhiteLogo.svg"
                  alt="Taskifi"
                  width={120}
                  height={28}
                />
              </div>

              <h1 className="text-3xl font-bold md:text-[40px] text-left  font-caecilia mb-6">
                Hire your 24/7 AI Business
                <br /> Assistant
              </h1>

              <p className="text-white mb-12 text-base md:text-lg text-left  max-w-lg">
                Zeta is your always-on partner for smarter work. From drafting
                emails and planning projects to generating ideas and forecasting
                outcomes, Zeta gives you expert support whenever you need it —
                no extra hiring required.
              </p>
              <div className="inline-flex">
                <Button variant="solid" href="#">
                  Discover what Zeta can do
                </Button>
              </div>
            </div>
          </div>

          {/* Right-side "Computer Screen" with partial view */}
          <div>
            <div
              className="md:absolute md:top-1/2 right-[-10%] md:translate-y-[-50%] h-auto w-full md:w-[55vw]  lg:max-h-[500px]  2xl:max-w-[900px] 
        2xl:max-h-[600px]  rounded-xl border-8 border-[#FFFFFF7A] backdrop-blur-sm overflow-hidden z-0 custom-shadow-blue pointer-events-none  md:block"
            >
              <img
                src="/ai/screen2.png"
                alt="Taskifi Preview"
                className="w-full h-full "
              />
            </div>
          </div>
        </section>
        {/* screen section */}
        {/* <div className="relative container mx-auto overflow-hidden">
          <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
            <section className="max-w-6xl lg:min-h-[800px] mx-auto">
              <div className="text-center mb-12">
                <h1 className="component-heading !text-white mb-6">
                  Use smart invoice templates to streamline your billing
                  process.
                </h1>
                <p className=" 2xl:text-xl text-white max-w-3xl mx-auto">
                  Automatically generate accurate, professional invoices for
                  every client with predefined templates. Eliminate manual
                  entry, reduce errors, and get paid faster — so your team can
                  focus on closing deals, not chasing payments.
                </p>
                <Button className="mt-8" variant="solid">
                  Start planning smarter
                </Button>
              </div>

              <div className="bg-white/30  lg:w-[953px] border mx-auto h-fit lg:absolute lg:-bottom-[20%] lg:left-1/2 transform lg:-translate-x-1/2   border-white backdrop:blur-2xl rounded-2xl p-1">
                <img
                  src="/ai/screen1.png"
                  className="w-full h-auto rounded-xl object-contain"
                  alt=""
                />
              </div>
              <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 w-full h-40  from-15%"></div>
            </section>
          </div>
        </div> */}
        <div className="py-16">
          <LogoMarquee type="image" images={images} theme="dark" />
          <p className=" font-normal text-white/80 md:leading-1.5 text-center px-6 mt-8">
            TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE
          </p>
        </div>

        <div className="relative container mx-auto flex px-6 lg:px-0 flex-col lg:flex-row justify-end lg:gap-36 gap-16 items-center overflow-hidden min-h-[700px] py-16">
          <div className=" lg:absolute  lg:-left-[30%] xl:-left-[20%] 2xl:left-0 bg-white/30   border border-white rounded-2xl lg:rounded-l-none lg:border-l-transparent p-2 lg:pl-0 ">
            <img
              src="/ai/screen3.png"
              alt="Taskifi Preview"
              className="2xl:w-[622px] 2xl:h-[609px] min-h-[500px] object-cover rounded-xl lg:rounded-l-none m-0 object-right"
            />
          </div>
          <div className=" lg:w-1/2  w-full">
            <div className="flex-1 text-center md:text-left z-10">
              <div className="flex items-center gap-2 mb-5">
                <Image
                  src="/logo/primaryWhiteLogo.svg"
                  alt="Taskifi"
                  width={120}
                  height={28}
                />
              </div>

              <h1 className="text-3xl font-bold md:text-[40px] text-left  font-caecilia mb-6">
                Use AI Outreach & 10M+ Leads in Taskifi
              </h1>

              <p className="text-white mb-6 text-base md:text-lg text-left  max-w-lg">
                Never let your reps waste time on manual prospecting again. With access to a global database of 10M+ leads and AI agents that handle personalized outreach, Taskifi replicates the work of a full sales team—crafting tailored emails, scheduling smart follow-ups, and analyzing engagement automatically.
              </p>
              <p className="text-white mb-12 text-base md:text-lg text-left  max-w-lg">
                From finding the right prospects to writing the perfect message, Taskifi ensures your pipeline grows without the repetitive grunt work
              </p>
              <div className="inline-flex">
                <Button variant="solid" href="#">
                  Discover what Zeta can do
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
          <div className="flex-1 max-w-screen-lg text-center md:text-left z-10">
            <div className="text-center mb-16">
              <h2 className="component-heading !text-white ">FAQ</h2>
              <p className="text-white/80 2xl:text-lg  mt-10 max-w-2xl mx-auto">
                Everything you need to know about the product and billing. Can’t
                find the answer you’re looking for? Please chat to our team.
              </p>
            </div>
            <CustomDropdown
              data={faqData2}
              bgOpen="bg-[#1C1C1E]"
              textColor="text-white md:text-2xl text-lg"
              textColorP="text-white/80"
              bgColor="bg-transparent "
              classNameMenu="rounded-xl "
              expandedIndex={0}
              className="mb-8 flex flex-col gap-4 divide-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
