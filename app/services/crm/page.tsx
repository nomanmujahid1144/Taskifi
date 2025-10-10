import Blob from "@/Components/Common/Blob";
import Button from "@/Components/Common/Button";
import EngagementSection from "@/Components/Ui/crm/engagmentSection";
import LogoMarquee from "@/Components/Ui/LogoMarquee";
import AICRMCard from "@/Components/Ui/crm/CrmCard";
import SwitchScreen from "@/Components/Ui/crm/switchScreen";
import BlogGrid from "@/Components/Common/BlogContainer";
import CustomDropdown from "@/Components/Common/FaqDropdown";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import ExpenseFeatures from "@/Components/Ui/expenses/ExpensesFeatures";
import { IoCheckmark } from "react-icons/io5";
import Image from "next/image";

import {
  AiOutlineAppstoreAdd,
  AiOutlineUser,
  AiOutlineTeam,
  AiOutlineAppstore,
  AiOutlineSchedule,
} from "react-icons/ai"; // Import icons (example)

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

const cardData = [
  {
    icon: <AiOutlineAppstoreAdd size={31} />, // Replace with the appropriate icon
    title: "AI CRM Assistant",
    description:
      "Drive productivity and personalization with built-in AI that automates follow-ups, prioritizes leads, suggests next best actions, and crafts personalized communications – fully integrated across your CRM.",
    iconColor: "#45C646",
  },
  {
    icon: <AiOutlineUser size={31} />, // Replace with the appropriate icon
    title: " Lead & Contact Management",
    description:
      "Capture, organize, and nurture your leads and contacts seamlessly. Manage every stage of the relationship from first touch to conversion, while tracking activity history, engagement, and interactions all in one place.",
    iconColor: "#008EFF",
  },
  {
    icon: <AiOutlineTeam size={31} />, // Replace with the appropriate icon
    title: "Company & Account Organization",
    description:
      "Map your contacts to their respective companies with ease. Structure your CRM with clear account hierarchies, making it simple to manage multiple contacts within the same organization for stronger business relationships.",
    iconColor: "#FFC046",
  },
  {
    icon: <AiOutlineAppstore size={31} />, // Replace with the appropriate icon
    title: "Dynamic Smart Lists",
    description:
      "Segment your contacts and companies automatically based on behaviors, properties, and activities. Build dynamic lists that update in real-time to power your personalized outreach, automation, and reporting strategies.",
    iconColor: "#FF9500",
  },
  {
    icon: <AiOutlineSchedule size={31} />, // Replace with the appropriate icon
    title: "Task & Activity Automation",
    description:
      "Stay on top of every interaction with intelligent task management. Automate reminders, schedule activities, and trigger custom items based on contact engagement, or custom workflows.",
    iconColor: "#FF3B30",
  },
];

const blogData = [
  {
    imageSrc: "/blogs/blog-1.png",
    imageAlt: "Blog image 1",
    title: "Customizable CRM Fields",
    description:
      "Personalize your CRM by creating specific fields for leads, contacts, companies, and deals — tailored to your unique business needs.",
  },
  {
    imageSrc: "/blogs/blog-2.png",
    imageAlt: "Blog image 2",
    title: "Boost Your Marketing Strategy",
    description:
      "Leverage data analytics to create personalized marketing campaigns that resonate with your audience and drive engagement.",
  },
  {
    imageSrc: "/blogs/blog-3.png",
    imageAlt: "Blog image 3",
    title: "The Future of AI in Business",
    description:
      "Explore the latest trends in AI technology and how businesses can integrate AI to automate tasks and improve decision-making.",
  },
  {
    imageSrc: "/blogs/blog-4.png",
    imageAlt: "Blog image 1",
    title: "Customizable CRM Fields",
    description:
      "Personalize your CRM by creating specific fields for leads, contacts, companies, and deals — tailored to your unique business needs.",
  },
  {
    imageSrc: "/blogs/blog-5.png",
    imageAlt: "Blog image 2",
    title: "Boost Your Marketing Strategy",
    description:
      "Leverage data analytics to create personalized marketing campaigns that resonate with your audience and drive engagement.",
  },
  {
    imageSrc: "/blogs/blog-6.png",
    imageAlt: "Blog image 3",
    title: "The Future of AI in Business",
    description:
      "Explore the latest trends in AI technology and how businesses can integrate AI to automate tasks and improve decision-making.",
  },
];

const BlogCardClassnames = {
  card: "custom-dark-shadow pb-12 bg-white",
  image: "w-full lg:h-[277px] object-cover rounded-lg",
  title: "text-text-primary text-center text-2xl font-bold ",
  description: "text-[#2C2C2C99] text-base",
};

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

const features3 = [
  {
    title: "Know more, Sell better",
    description: [
      "Equip your team with AI-driven insights that given them the edge in every interaction.",
      " View important details like communication history and preferences",
      "Get AI recommendations on next best actions",
      "Personalize pitches with data-backed insights",
    ],
    image: "/sales/screen2.png",
    reverse: false,
  },
];

const page = () => {
  return (
    <div className="pt-20">
      <div className="container mx-auto pb-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <div className="text-center pt-8 mx-auto w-full max-w-5xl justify-center items-center flex-col flex gap-6 px-6">
          <h1 className="font-bold text-text-primary  lg:text-5xl 2xl:text-6xl text-3xl text-center">
            360 CUSTOMER VIEW
          </h1>
          <p className="max-w-4xl text-text-secondary xl:text-lg">
            Gain insights with a 360 customer view
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
            className="absolute  top-56 -left-28"
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
          <img
            src="/CRM/hero.png"
            alt="hero image with a screen"
            className="w-full  rounded-xl custom-shadow-blue border-4 border-black"
          />
        </div>
      </div>
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <div className="text-center mb-6">
          <h2 className="component-heading ">
            Know who 🔥 is and engage faster
          </h2>
          <p className="text-text-secondary  2xl:text-lg  mt-10 max-w-3xl mx-auto">
            Automate messages and trigger actions with lead scores created from
            signals that matter.
          </p>
        </div>
        <EngagementSection />
      </div>
      <div className="py-10">
        <div className="text-center mb-12 px-6">
          <h2 className=" component-heading max-w-5xl mx-auto ">
            Connect Your CRM with the Tools You Already Use
          </h2>
          <p className="text-text-secondary 2xl:text-lg  mt-10 max-w-2xl mx-auto">
            Seamlessly integrate with your favorite platforms to sync contacts,
            track conversations, and keep every deal moving forward.
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
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <div className="text-center mb-12 px-6">
          <h2 className=" component-heading max-w-5xl mx-auto ">
            AI-Powered CRM That Works the Way You Do
          </h2>
          <p className="text-text-secondary 2xl:text-lg  mt-10 max-w-2xl mx-auto">
            Automate tasks, organize contacts, and turn every interaction into
            an opportunity—with intelligent tools built for modern relationship
            management.
          </p>
        </div>
        <div className="flex justify-center flex-wrap items-center gap-x-8 gap-y-12">
          {cardData.map((card, index) => (
            <AICRMCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              iconColor={card.iconColor}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <div className="text-center mb-12 px-6">
          <h2 className=" component-heading max-w-3xl mx-auto ">
            AI-Powered CRM That Works the Way You Do
          </h2>
          <p className="text-text-secondary 2xl:text-lg  mt-10 max-w-2xl mx-auto">
            Automate tasks, organize contacts, and turn every interaction into
            an opportunity—with intelligent tools built for modern relationship
            management.
          </p>
        </div>
        <SwitchScreen headings={headings} images={images} />
      </div>
      {/* <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <div className="text-center mb-12 px-6">
          <h2 className=" component-heading mx-auto ">
            Built to Strengthen Every Customer Relationship
          </h2>
          <p className="text-text-secondary 2xl:text-lg  mt-10 max-w-3xl mx-auto">
            Customize, automate, and scale your CRM workflows with flexible
            fields, smart data handling, and full visibility across your sales
            and support pipeline.
          </p>
        </div>
        <BlogGrid blogs={blogData} classNames={BlogCardClassnames} />
      </div> */}
      <div className="bg-black overflow-hidden relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="53"
          height="53"
          viewBox="0 0 53 53"
          className="absolute top-52 left-28 lg:block hidden"
          fill="none"
        >
          <path
            d="M26.5 0V25.9362H0L2.31922 25.2741C13.6542 22.0384 22.5175 13.3637 25.8236 2.26988L26.5 0Z"
            fill="white"
          />
          <path
            d="M26.5 53V25.9362H0L2.39109 26.6484C13.682 30.0117 22.4392 38.7809 25.6163 49.9057L26.5 53Z"
            fill="white"
          />
          <path
            d="M26.5 0V25.9362H53L50.6808 25.2741C39.3458 22.0384 30.4825 13.3637 27.1764 2.26988L26.5 0Z"
            fill="white"
          />
          <path
            d="M26.5 53V25.9362H53L50.6089 26.6484C39.318 30.0117 30.5608 38.7809 27.3837 49.9057L26.5 53Z"
            fill="white"
          />
        </svg>
        <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6  flex flex-col gap-8 items-center justify-center">
          <h2 className="component-heading !text-white max-w-6xl text-center z-20">
            Let{" "}
            <span className="text-primary">AI Build Your Perfect Lists</span>{" "}
            Take the guesswork out of segmentation.
          </h2>
          <p className="text-[#CDD5DF] max-w-4xl 2xl:text-lg text-center">
            Taskifi's AI automatically creates smart contact lists based on
            engagement, activities, and customer behavior — so you always target
            the right people at the right time.
          </p>
          <Button variant="solid" className="px-12 z-20" href="/contact">
            Create Smart Lists
          </Button>
          <div className="max-w-screen-xl mt-12 ">
            <div className="relative ">
            
              <div
                className=" h-auto w-full    
          rounded-3xl border-8 border-[#FFFFFF7A] backdrop-blur-sm overflow-hidden z-0 shadow-2xl pointer-events-none custom-shadow-blue md:block"
              >
                <img
                  src="/CRM/screen1.png"
                  alt="Taskifi Preview"
                  className="w-[1050px] h-[470px] object-top !object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <ExpenseFeatures
          showButton={false}
          buttonText="Learn More"
          mainTitle=""
          mainDescription=""
          features={features3}
        />
      </div>
      <div className="container mx-auto  relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <div className="flex justify-between items-center md:flex-row flex-col-reverse gap-8">
          <div className="md:w-3/4 flex flex-col gap-12">
            <h2 className=" text-3xl 2xl:text-5xl font-bold text-text-primary mx-auto leading-tight font-caecilia">
              Start unifying your data, teams, and tools with Taskifi Smart CRM.
            </h2>
            <div className="flex flex-col md:flex-row gap-4">
              <Button href="#" className="text-center" variant="solid">
                {" "}
                Get a demo
              </Button>
              <Button href="#" className="text-center" variant="outline">
                {" "}
                Get started free
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/CRM/cta.png"
              alt="Call to Action Image"
              width={350}
              height={350}
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto py-16 px-6 flex items-center justify-center">
        <div className="flex-1 max-w-screen-lg text-center md:text-left z-10">
          <div className="text-center mb-16">
            <h2 className="component-heading ">
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
