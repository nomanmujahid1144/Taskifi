import Blob from "@/Components/Common/Blob";
import WorkSelector from "@/Components/Ui/sales/workSelector";
import Button from "@/Components/Common/Button";
import { FaArrowRight } from "react-icons/fa6";
import ExpenseFeatures from "@/Components/Ui/expenses/ExpensesFeatures";
import BenefitsSection from "@/Components/Ui/purchases/BenifitsSection";
import { FaChartPie, FaHandshake, FaChartBar } from "react-icons/fa";
import Image from "next/image";
import CustomDropdown from "@/Components/Common/FaqDropdown";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";

const features = [
  {
    title: "Simplify expense reimbursements at scale",
    description: [
      " With Taskifi’s item module, you can centralize descriptions, rates, and tax details in one place. Speed up your quoting, invoicing, and order processing with structured, searchable item records.",
      "Let your team access up-to-date product info instantly — no more digging through spreadsheets.",
    ],
    image: "/sales/screen1.png",
    boldText: "Make product and service management seamless.",
    reverse: false,
  },
  {
    title: "Plan and track business trips with precision",
    description:
      "From flights and hotels to daily allowances, Taskifi lets you manage every trip detail in one place. Connect trips to projects, define budgets, assign approvers, and sync with expenses — ensuring a seamless travel and reporting experience for every team member.",
    image: "/sales/screen1.png",
    reverse: true,
  },
];

const features2 = [
  {
    title: "Simplify expense reimbursements at scale",
    description: [
      " With Taskifi’s item module, you can centralize descriptions, rates, and tax details in one place. Speed up your quoting, invoicing, and order processing with structured, searchable item records.",
      "Let your team access up-to-date product info instantly — no more digging through spreadsheets.",
    ],
    image: "/sales/screen1.png",
    boldText: "Make product and service management seamless.",
    reverse: true,
  },
];

const features3 = [
  {
    title: "Simplify expense reimbursements at scale",
    subtitle: "Expense Management",
    description: [
      " With Taskifi’s item module, you can centralize descriptions, rates, and tax details in one place. Speed up your quoting, invoicing, and order processing with structured, searchable item records.",
      "Let your team access up-to-date product info instantly — no more digging through spreadsheets.",
    ],
    image: "/sales/screen1.png",
    boldText: "Make product and service management seamless.",
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
      <div className="container mx-auto overflow-hidden  pb-16 px-6 relative">
        <Blob
          size="w-80 h-80"
          colors={["from-secondary", "to-secondary"]}
          position="absolute top-20 -left-56 -z-10"
          className="hidden md:block opacity-20 backdrop-blur-2xl"
        />
        <div className="text-center pt-8 mx-auto w-full max-w-5xl justify-center items-center flex-col flex gap-6 px-6">
          <h1 className="font-bold text-text-primary lg:max-w-3xl 2xl:max-w-full lg:text-5xl 2xl:text-6xl text-3xl text-center">
            One place to manage your entire sales process
          </h1>
          <p className="max-w-4xl text-text-secondary xl:text-lg">
            Simplify and accelerate your sales operations — from first contact
            to final payment — all in one streamlined platform. Taskifi gives
            your team full visibility and control across every sales stage for
            faster deals and healthier cash flow.
          </p>
          <p className=" text-text-secondary font-bold md:text-lg mt-8">
            What would you like to work on?
          </p>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col justify-center gap-8 items-center relative mt-10">
          <svg
            width="53"
            height="53"
            viewBox="0 0 53 53"
            className="absolute -top-20 right-0 -z-10"
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
          <WorkSelector />
          <Button
            variant="solid"
            href="#"
            className="flex items-center px-10 gap-2"
          >
            Get Started
            <FaArrowRight className="w-4" />
          </Button>
        </div>

        <div className="mt-10 flex justify-center items-center relative  max-w-5xl py-6 mx-auto">
          <img
            src="/resourcePlanning/laptop.png"
            alt="hero image with a screen"
            className="w-full "
          />
        </div>
      </div>
      {/* Features Section */}
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <ExpenseFeatures
          showButton={false}
          buttonText="Learn More"
          mainTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          mainDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          features={features}
        />
      </div>
      {/* screen section */}
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <section className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="component-heading mb-6">
              Use smart invoice templates to streamline your billing process.
            </h1>
            <p className=" 2xl:text-lg text-text-secondary max-w-3xl mx-auto">
              Automatically generate accurate, professional invoices for every
              client with predefined templates. Eliminate manual entry, reduce
              errors, and get paid faster — so your team can focus on closing
              deals, not chasing payments.
            </p>
          </div>

          <img
            src="/sales/screen2.png"
            className="w-full h-auto object-contain border-4 border-black rounded-2xl mb-16"
            alt=""
          />
        </section>
      </div>
      {/* benifit section */}
      <div className="container mx-auto py-16 relative px-6  lg:px-10 xl:px-24 2xl:max-w-screen-xl 2xl:px-6">
        <BenefitsSection
          title="Accelerate Sales with Taskifi"
          description=""
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
          imageUrl="/girl-pointing2.webp"
          primarySpan={true}
        />
      </div>
      {/* Features Section 2 */}
      <div className="bg-[#F8F8F8]">
        <div className="container mx-auto md:max-w-screen-lg 2xl:max-w-screen-xl py-32 px-6 relative">
          <ExpenseFeatures
            showButton={false}
            buttonText="Learn More"
            mainTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            mainDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
            features={features2}
          />
          <div className="flex justify-between md:flex-row flex-col items-center gap-12">
            <div className="card flex flex-col items-start justify-start md:w-1/2">
              <div className="w-full  relative p-6  md:pl-0">
                <div className="w-full z-30 relative">
                  <Image
                    src="/sales/rc-2.png"
                    alt="Sales Image"
                    width={700}
                    height={500}
                    className="rounded-lg w-full custom-shadow-2"
                  />
                </div>
              </div>
              <div className="md:p-6 pt-6">
                <h2 className="text-2xl lg:text-4xl  font-bold mb-6 text-black">
                  Recurring Payments
                </h2>
                <p className="text-text-secondary  text-base lg:text-lg font-medium leading-relaxed mb-2">
                  Automate your invoicing process with recurring billing. Set up
                  profiles for clients and let Taskifi handle repeat invoicing
                  with customizable frequency, due dates, and auto-reminders.
                </p>
              </div>
            </div>
            <div className="card flex flex-col items-start justify-start md:w-1/2">
              <div className="w-full  relative p-6 md:pr-0">
                <div className="w-full z-30 relative">
                  <Image
                    src="/sales/rc-1.png"
                    alt="Sales Image"
                    width={700}
                    height={500}
                    className="rounded-lg w-full custom-shadow-2"
                  />
                </div>
              </div>
              <div className=" pt-6 md:p-6">
                <h2 className="text-2xl lg:text-4xl  font-bold mb-6 text-black">
                  Recurring Payments
                </h2>
                <p className="text-text-secondary text-base lg:text-lg font-medium leading-relaxed mb-2">
                  Automate your invoicing process with recurring billing. Set up
                  profiles for clients and let Taskifi handle repeat invoicing
                  with customizable frequency, due dates, and auto-reminders.
                </p>
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
          mainTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          mainDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
          features={features3}
        />
      </div>
      <div className="container mx-auto pb-16 px-6 flex items-center justify-center">
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
