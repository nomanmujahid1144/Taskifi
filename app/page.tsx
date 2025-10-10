import TaskifiTabs from "@/Components/Ui/TaskifyTabs";
import StatsCarousel from "@/Components/Ui/StatsCarousel";
import LogoMarquee from "@/Components/Ui/LogoMarquee";
import HeroPreview from "@/Components/Ui/HeroPreview";
import Hero from "@/Components/Ui/Hero";
import TestimonialSlider from "@/Components/Ui/TestimonialSwiper";
import ContactForm from "@/Components/Ui/ContactForm";
import GifInfo from "@/Components/Ui/gifInfo";
import Blob from "@/Components/Common/Blob";
import GifWithQuote from "@/Components/Ui/gifWithQuote";
import InfoCards from "@/Components/Ui/FourCards";

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
const cards = [
  {
    image: "/github.webp",
    title: "GitHub",
  },
  {
    image: "/slack.webp",
    title: "Slack",
  },
  {
    image: "/adobe.webp",
    title: "Adobe",
  },
  {
    image: "/google.webp",
    title: "Google",
  },
  {
    image: "/microsoft.webp",
    title: "Microsoft",
  },
  {
    image: "/outlook.webp",
    title: "Outlook",
  },
  {
    image: "/github.webp",
    title: "GitHub",
  },
  {
    image: "/slack.webp",
    title: "Slack",
  },
  {
    image: "/adobe.webp",
    title: "Adobe",
  },
];

const infoCards = [
  {
    title: "Tech Startups",
    description: "Manage projects & automate workflows.",
    image: "/frames/frame3.webp",
  },
  {
    title: "Construction Firms & Contractors",
    description: "Track resources & expenses.",
    image: "/frames/frame2.webp",
  },
  {
    title: "Retail & E-Commerce",
    description: "Optimize inventory, sales, and CRM.",
    image: "/frames/frame3.webp",
  },
  {
    title: " Marketing Agencies",
    description: "AI-powered campaign automation.",
    image: "/frames/frame1.webp",
  },
];

export default function Home() {
  return (
    <div className="">
      <div className="bg-bg-grey relative  overflow-hidden pt-20">
        <Blob
          size={300}
          colors={["from-primary", "to-primary"]}
          position="top-42 -left-42"
          className="opacity-15 bg-[linear-gradient(90deg,_#3845E2_0%,_#7755FF_100%)] z-30"
        />
        <Hero />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
      <div className="py-16">
        <LogoMarquee type="image" images={images} />
        <p className=" font-normal text-text-secondary md:leading-1.5 text-center px-6 mt-8">
          TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE
        </p>
      </div>
      <div className="main-cont">
        <TaskifiTabs />
      </div>
      <div className="container mx-auto pl-0 lg:pl-10  max-w-screen-xl py-16">
        <h2 className="component-heading mb-20 px-6 text-center capitalize">
          software that grows with your business
        </h2>
        <StatsCarousel />
      </div>
      <div className="py-16 bg-black ">
        <HeroPreview />
      </div>
      <div className="main-cont">
        <div className="text-center mb-12 ">
          <h2 className="component-heading">
            The Intelligent Sales Management Platform
          </h2>
          <p className="text-text-secondary 2xl:text-lg  mt-10 max-w-2xl mx-auto">
            Taskifi transforms how businesses generate and close deals by
            combining AI-powered lead generation, personalized outreach, and
            automated follow-ups. Gain complete visibility into your pipeline,
            streamline collaboration between sales teams, and unlock new paths
            to revenue growth with Taskifi.
          </p>
        </div>
        <GifWithQuote />
      </div>

      <div className="py-16">
        <div className="text-center mb-12 px-6 ">
          <h2 className=" component-heading">
            Integrate apps with just a few clicks
          </h2>
          <p className="text-text-secondary 2xl:text-lg  mt-10 max-w-2xl mx-auto">
           Bring all your favorite tools together—whether it’s  Google for docs, Microsoft for productivity, or Slack  for Communication. Taskifi integrates smoothly so your workflows stay connected, and your teams stay in sync.
          </p>
        </div>
        <div className="py-4">
          <LogoMarquee type="card" cards={cards} />
        </div>
        <div className="py-4">
          <LogoMarquee type="card" cards={cards} direction="right" />
        </div>
        <div className="py-4">
          <LogoMarquee type="card" cards={cards} />
        </div>
      </div>

      <div className="py-16   relative overflow-hidden">
        {/* Blurred Background Layer */}
        <div className="absolute inset-0 backdrop-blur-3xl blur-3xl  z-0">
          <Blob
            size={493}
            colors={["from-[#715DFF]", "to-[#715DFF]"]}
            position="-top-20 -left-30"
            className="opacity-70"
          />
          <Blob
            size={493}
            colors={["from-[#715DFF]", "to-[#715DFF]"]}
            position="top-0 right-0"
            className="opacity-70"
          />{" "}
          <Blob
            size={493}
            colors={["from-[#715DFF]", "to-[#715DFF]"]}
            position="-top-20 -right-30"
            className="opacity-70"
          />
          <Blob
            size={493}
            colors={["from-[#715DFF]", "to-[#715DFF]"]}
            position="top-0 right-42"
            className="opacity-70"
          />
          <Blob
            size={493}
            colors={["from-[#715DFF]", "to-[#715DFF]"]}
            position="-bottom-20 left-[40%] -translate-x-1/2"
            className="opacity-70"
          />
        </div>

        {/* Foreground Content Layer */}
        <InfoCards infoCards={infoCards} />
      </div>

      <div className="overflow-hidden relative">
        <div className="main-cont ">
          <GifInfo />
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-screen-xl py-16">
        <div className="text-center mb-12">
          <h2 className="component-heading">
            Built for professionals like you.
          </h2>
          <p className="text-text-secondary  2xl:text-lg  mt-10 max-w-2xl mx-auto">
            Used by seriously productive people.
          </p>
        </div>
        <TestimonialSlider />
      </div>
      <div className="relative container mx-auto">
        <img
          src="/frames/Wave-1.webp"
          alt="contact-bg"
          className=" absolute bottom-0 left-0 right-0 w-full object-contain pointer-events-none"
        />
        <div id="contact" className="container mx-auto md:max-w-screen-lg 2xl:max-w-screen-xl py-16 ">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
