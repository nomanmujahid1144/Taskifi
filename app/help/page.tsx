"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaMagic,
  FaUserShield,
  FaReceipt,
  FaRobot,
  FaChartLine,
  FaClock,
  FaEnvelope,
  FaUsers,
} from "react-icons/fa";

// Utility to slugify string
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

// Sidebar and other data
const sidebarItems = ["Getting Started", "Billing & Account", "FAQ"];
const moduleItems = [
  "Tasks, Timelines, Boards",
  "AI Project Planner",
  "Project Budgeting",
  "Resource Management",
  "Availability Planner",
  "Timesheets & Approvals",
  "Leave Management",
  "Vendor Database",
  "Bills & Purchase Orders",
  "AI Vendor Suggestions",
  "CRM",
  "Lead & Deal Tracking",
  "Pipeline Views",
  "Smart Lead Scoring",
  "Sales",
  "Quotes & Invoices",
  "Sales Orders",
  "Forecasting Tools",
  "Expenses",
  "Expense Submission",
  "OCR & AI ",
  "Approval Flow",
];
const tags = [
  "Billing",
  "Pricing changes",
  "Sharing & permissions",
  "Restoring content",
  "Adding members",
];
const topics = [
  { icon: FaMagic, title: "AI Project Planner", description: "Leverage AI to create comprehensive project plans." },
  { icon: FaUserShield, title: "Roles & Permissions", description: "Manage user roles and permissions." },
  { icon: FaReceipt, title: "Expense Submissions", description: "Streamline your expense." },
  { icon: FaRobot, title: "Using Taskifi AI", description: "Discover how to leverage AI features." },
  { icon: FaChartLine, title: "CRM Overview", description: "Get an overview of CRM functionalities." },
  { icon: FaClock, title: "Time Tracking", description: "Learn how to track time." },
  { icon: FaEnvelope, title: "Email Campaigns", description: "Create and manage email campaigns." },
  { icon: FaUsers, title: "Vendor Management", description: "Streamline vendor interactions." },
];

// Multi-step help content type
type HelpStep = {
  heading: string;
  description: string;
  images: string[];
};

// Example data
const helpContent: Record<string, HelpStep[]> = {
  // Sidebar Items
  "getting-started": [
    {
      heading: "Step 1 – Account Setup",
      description:
        "Begin by creating your account, verifying your email, and setting your password. Configure your profile with basic details to personalize your workspace.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Workspace Configuration",
      description:
        "Set up your first project or team workspace. Invite team members to collaborate and assign roles for better organization.",
      images: ["/homeHero/askAi.webp", "/homeHero/Status.webp"],
    },
  ],
  "billing-account": [
    {
      heading: "Step 1 – Access Billing",
      description:
        "Go to your account settings and click on the billing section. Review your current plan and available upgrades.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Add Payment Method",
      description:
        "Securely add a credit card, PayPal, or other supported payment methods. Ensure your details are up to date to avoid service interruptions.",
      images: ["/homeHero/Attendance.webp"],
    },
  ],
  faq: [
    {
      heading: "Step 1 – Browse Common Questions",
      description:
        "Check our FAQ section for quick answers to common questions related to projects, billing, and integrations.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Search for Your Query",
      description:
        "Use the search bar to find specific answers quickly. Results are optimized to show the most relevant solutions.",
      images: ["/homeHero/askAi.webp"],
    },
  ],

  // Modules
  "tasks-timelines-boards": [
    {
      heading: "Step 1 – Create Tasks",
      description:
        "Break your project into smaller tasks and assign them to team members. Add deadlines for better tracking.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Use Timelines & Boards",
      description:
        "Visualize your work with Gantt charts or Kanban boards to stay on top of progress and deadlines.",
      images: ["/homeHero/Status.webp"],
    },
  ],
  "ai-project-planner": [
    {
      heading: "Step 1 – Generate Project Plan",
      description:
        "Enter your project goal, timeline, and resources. Let the AI automatically suggest a project structure.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Review & Customize",
      description:
        "Edit the AI-generated plan to match your exact needs. Add tasks, adjust deadlines, or assign resources.",
      images: ["/homeHero/askAi.webp"],
    },
  ],
  "project-budgeting": [
    {
      heading: "Step 1 – Define Budget",
      description:
        "Input your expected costs and allocations for each project phase. Include labor, resources, and overhead.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Track Expenses",
      description:
        "Monitor actual spend vs. planned budget. Get alerts when nearing limits to stay financially on track.",
      images: ["/homeHero/Status.webp"],
    },
  ],
  "resource-management": [
    {
      heading: "Step 1 – Add Resources",
      description:
        "Register people, tools, and assets that will be used in your project. Assign availability and cost rates.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Allocate Resources",
      description:
        "Distribute resources across tasks and avoid over-allocation conflicts using AI-powered suggestions.",
      images: ["/homeHero/Attendance.webp"],
    },
  ],
  "availability-planner": [
    {
      heading: "Step 1 – Configure Work Schedules",
      description:
        "Set standard working hours, holidays, and leave policies to create a baseline of availability.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Adjust in Real-Time",
      description:
        "When team members are unavailable, instantly reassign tasks and get AI recommendations for replacements.",
      images: ["/homeHero/Status.webp"],
    },
  ],
  "timesheets-approvals": [
    {
      heading: "Step 1 – Fill Timesheets",
      description:
        "Team members can log hours against specific tasks and projects, simplifying payroll tracking.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Approve or Reject",
      description:
        "Managers can review submitted timesheets, approve them for billing, or request modifications.",
      images: ["/homeHero/Attendance.webp"],
    },
  ],
  "leave-management": [
    {
      heading: "Step 1 – Submit Leave Requests",
      description:
        "Employees can easily request leave with start and end dates. Attach reasons or documents if needed.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Approvals & Calendar Updates",
      description:
        "Managers approve/reject requests, and the team calendar updates automatically to reflect absences.",
      images: ["/homeHero/Status.webp"],
    },
  ],
  "vendor-database": [
    {
      heading: "Step 1 – Add Vendors",
      description:
        "Maintain a centralized record of all vendors, their details, and contract history.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Organize by Category",
      description:
        "Classify vendors into categories like IT, Marketing, or Supplies for easy searching and reporting.",
      images: ["/homeHero/askAi.webp"],
    },
  ],
  "bills-purchase-orders": [
    {
      heading: "Step 1 – Generate Purchase Orders",
      description:
        "Create and send purchase orders directly to vendors, with automatic numbering and templates.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Track Bills",
      description:
        "Upload or enter vendor bills and match them with purchase orders to avoid duplicate payments.",
      images: ["/homeHero/Attendance.webp"],
    },
  ],
  "ai-vendor-suggestions": [
    {
      heading: "Step 1 – Enable AI Matching",
      description:
        "Input your requirements, and the AI will recommend vendors based on price, ratings, and past performance.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Compare Options",
      description:
        "Review suggested vendors side by side, and select the one that best fits your project needs.",
      images: ["/homeHero/askAi.webp"],
    },
  ],
  crm: [
    {
      heading: "Step 1 – Import Contacts",
      description:
        "Add existing clients, prospects, and partners into the CRM system for easy access.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Manage Pipelines",
      description:
        "Track deals through stages such as lead, negotiation, and closed-won/lost.",
      images: ["/homeHero/Status.webp"],
    },
  ],
  "lead-deal-tracking": [
    {
      heading: "Step 1 – Add New Leads",
      description:
        "Capture lead information manually or via forms and integrate it with campaigns.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Track Deals",
      description:
        "Monitor progress of deals with timelines, expected value, and probability of success.",
      images: ["/homeHero/askAi.webp"],
    },
  ],
  "pipeline-views": [
    {
      heading: "Step 1 – Visualize Sales Stages",
      description:
        "Switch between Kanban, list, and timeline views to analyze your pipeline effectively.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Customize Filters",
      description:
        "Sort pipelines by priority, probability, or value to focus on what matters most.",
      images: ["/homeHero/Status.webp"],
    },
  ],
  "smart-lead-scoring": [
    {
      heading: "Step 1 – Enable AI Scoring",
      description:
        "The system will automatically assign scores to leads based on activity and relevance.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Prioritize Follow-ups",
      description:
        "Focus your efforts on high-value leads by filtering those with the highest scores.",
      images: ["/homeHero/askAi.webp"],
    },
  ],
  sales: [
    {
      heading: "Step 1 – Create Sales Records",
      description:
        "Track opportunities and customer interactions in a central dashboard.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Monitor Sales Metrics",
      description:
        "Keep an eye on revenue, pipeline velocity, and conversion rates with visual dashboards.",
      images: ["/homeHero/Status.webp"],
    },
  ],
  "quotes-invoices": [
    {
      heading: "Step 1 – Generate Quotes",
      description:
        "Draft professional quotes and send them directly to clients for approval.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Convert to Invoice",
      description:
        "With one click, convert accepted quotes into invoices and track payment status.",
      images: ["/homeHero/Attendance.webp"],
    },
  ],
  "sales-orders": [
    {
      heading: "Step 1 – Create Sales Orders",
      description:
        "Turn confirmed deals into sales orders that detail product/service delivery.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Track Fulfillment",
      description:
        "Keep track of delivery schedules, shipping, or project milestones linked to the order.",
      images: ["/homeHero/Status.webp"],
    },
  ],
  "forecasting-tools": [
    {
      heading: "Step 1 – Enable Forecasting",
      description:
        "Set up forecasting models based on past data, seasonality, and pipeline health.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Review Predictions",
      description:
        "Compare forecasts against actuals to refine business strategy and adjust targets.",
      images: ["/homeHero/askAi.webp"],
    },
  ],
  expenses: [
    {
      heading: "Step 1 – Add Expenses",
      description:
        "Log all business expenses with categories and attach receipts for better reporting.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Analyze Spending",
      description:
        "Visualize expenses by category or project to identify cost-saving opportunities.",
      images: ["/homeHero/Status.webp"],
    },
  ],
  "expense-submission": [
    {
      heading: "Step 1 – Submit an Expense",
      description:
        "Upload receipts, enter details, and assign the expense to a project or client.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Approval Workflow",
      description:
        "Once submitted, managers can approve or reject expenses for reimbursement.",
      images: ["/homeHero/Attendance.webp"],
    },
  ],
  "expense-submissions": [
    {
      heading: "Step 1 – Submit Expense Details",
      description:
        "Fill out the expense form with all required details, including amount, category, and attach relevant receipts. Ensure accuracy to speed up approval.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Track Submission Status",
      description:
        "After submitting, monitor the approval status in your dashboard. You’ll receive notifications for any required actions or updates.",
      images: ["/homeHero/Status.webp"],
    },
    {
      heading: "Step 3 – Get Reimbursed",
      description:
        "Once approved, your expense will be processed for reimbursement. You can view payment details and history in your account.",
      images: ["/homeHero/Attendance.webp"],
    },
  ],
  "ocr-ai": [
    {
      heading: "Step 1 – Upload Documents",
      description:
        "Upload scanned bills, receipts, or invoices and let OCR extract details.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – AI Verification",
      description:
        "AI checks extracted data for accuracy and automatically fills expense reports.",
      images: ["/homeHero/askAi.webp"],
    },
  ],
  "approval-flow": [
    {
      heading: "Step 1 – Define Rules",
      description:
        "Set up approval levels based on amount, department, or role requirements.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Automated Notifications",
      description:
        "Approvers get instant notifications when their input is required, ensuring faster processing.",
      images: ["/homeHero/Status.webp"],
    },
  ],

  // Topics
  "roles-permissions": [
    {
      heading: "Step 1 – Assign Roles",
      description:
        "Choose from pre-set roles like Admin, Manager, or Contributor. Assign users accordingly.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Customize Permissions",
      description:
        "Tailor access to specific modules or features to keep sensitive data secure.",
      images: ["/homeHero/askAi.webp"],
    },
  ],
  "using-taskifi-ai": [
    {
      heading: "Step 1 – Ask the AI",
      description:
        "Type your query into Taskifi AI to get recommendations, task breakdowns, or insights.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Refine Suggestions",
      description:
        "Review AI results and tweak them to better match your project context.",
      images: ["/homeHero/askAi.webp"],
    },
  ],
  "crm-overview": [
    {
      heading: "Step 1 – Access Dashboard",
      description:
        "View a summary of your customers, deals, and recent interactions all in one place.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Analyze Reports",
      description:
        "Check pipeline reports and customer insights to drive smarter decisions.",
      images: ["/homeHero/Status.webp"],
    },
  ],
  "time-tracking": [
    {
      heading: "Step 1 – Start Tracking",
      description:
        "Use the built-in timer or manually log hours worked on each task.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Generate Reports",
      description:
        "Export timesheets and see productivity reports across team members.",
      images: ["/homeHero/Attendance.webp"],
    },
  ],
  "vendor-management": [
    {
      heading: "Step 1 – Onboard Vendors",
      description:
        "Add vendor details and assign them to specific categories or projects.",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Manage Contracts",
      description:
        "Upload contracts, monitor renewal dates, and ensure compliance with policies.",
      images: ["/homeHero/Status.webp"],
    },
  ],

  // Already Provided
  "email-campaigns": [
    {
      heading: "Step 1 – Set Up Your Campaign",
      description:
        "Start by carefully selecting a campaign template that aligns with your brand’s personality and goals...",
      images: ["/homeHero/Board.webp"],
    },
    {
      heading: "Step 2 – Customize Content",
      description:
        "Craft an attention-grabbing subject line and write compelling body copy that speaks directly to your audience...",
      images: ["/homeHero/askAi.webp", "/homeHero/Status.webp"],
    },
    {
      heading: "Step 3 – Launch & Monitor",
      description:
        "Schedule or send your campaign and monitor performance metrics such as open rate, click-through rate, and conversions...",
      images: ["/homeHero/Attendance.webp"],
    }
  ],
};


export default function HelpCenter() {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    if (activeSlug) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeSlug]);

  const renderDetailContent = () => {
    if (!activeSlug) return null;

    const steps = helpContent[activeSlug];
    if (!steps) {
      return (
        <div className="p-8 max-w-3xl min-h-screen flex flex-col justify-center items-center mx-auto">
          <button
            className="text-gray-500 flex items-center gap-2 text-lg mb-12"
            onClick={() => setActiveSlug(null)}
          >
            <span className="bg-white h-6 w-6 shadow-sm flex justify-center items-center rounded-full">
              <MdPlayArrow className="rotate-180 text-black" />
            </span>
            <span>Back to Help Center</span>
          </button>
          <h1 className="lg:text-5xl text-3xl font-bold text-text-primary mb-10">
            Page Not Found
          </h1>
          <p className="text-lg text-text-secondary">
            The data for this page is not available.
          </p>
        </div>
      );
    }

    return (
      <div className="px-6">
        <button
          className="group text-gray-500 flex items-center gap-2 text-lg mb-12
             transition-all duration-300 ease-in-out
             hover:text-black hover:scale-[1.02] active:scale-[0.97]"
          onClick={() => setActiveSlug(null)}
        >
          <span
            className="bg-white h-6 w-6 shadow-sm flex justify-center items-center rounded-full
               transition-all duration-300 ease-in-out group-hover:shadow-md group-hover:-translate-x-0.5"
          >
            <MdPlayArrow className="rotate-180 text-black transition-transform duration-300 ease-in-out group-hover:-translate-x-0.5" />
          </span>

          <span className="relative">
            Back to Help Center
            <span
              className="absolute left-0 -bottom-1 w-0 h-[1px] bg-black 
                 transition-all duration-300 ease-in-out group-hover:w-full"
            />
          </span>
        </button>

        {steps.map((step, index) => (
          <div key={index} className="mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">
              {index + 1}. {step.heading}
            </h1>

            <div className="mb-8 rounded-2xl flex justify-center pt-6 lg:pt-20 px-6 items-center overflow-hidden bg-[#F8F8F8]">
              {step.images.length === 1 ? (
                <Image
                  src={step.images[0]}
                  alt={step.heading}
                  width={970}
                  height={400}
                  className="max-h-[400px] object-top rounded-2xl object-cover"
                />
              ) : (
                <div className="flex gap-4 w-full pb-20 justify-center items-center">
                  {step.images.map((img, i) => (
                    <div
                      key={i}
                      className="flex-1 flex justify-center items-center"
                    >
                      <Image
                        src={img}
                        alt={`${step.heading} - image ${i + 1}`}
                        width={450}
                        height={300}
                        className="max-h-[300px] w-auto object-contain rounded-2xl"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            <h2 className="text-2xl font-semibold text-text-secondary mb-2">
              In This Chapter
            </h2>
            <p className="text-black lg:text-xl font-bold  leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white text-gray-800 pt-20 relative xl:container mx-auto">
      {/* Sidebar */}
      <aside
        className={`fixed lg:!sticky max-h-screen overflow-y-scroll scrollbar-hide lg:pb-20 z-40 top-0 lg:top-20 left-0 2xl:w-xs xl:w-72 lg:w-64 h-full bg-white border-r border-gray-200 p-4 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:translate-x-0 md:block`}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="md:hidden mb-4"
        >
          <FaTimes className="text-2xl text-gray-600" />
        </button>

        <div className="font-bold text-base sm:text-lg text-text-primary mb-4 border-b pb-4 border-[#E6E6E6]">
          Today's Chat
        </div>
        <ul className="space-y-2 text-sm font-medium">
          {sidebarItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveSlug(slugify(item))}
                className="flex text-sm sm:text-base md:text-lg text-text-secondary items-center gap-2 hover:text-primary"
              >
                <MdPlayArrow className="text-base sm:text-lg md:text-xl" />
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-6 font-bold text-base sm:text-lg text-text-primary border-b pb-4 border-[#E6E6E6]">
          Modules instead of guides
          <br />
          –Project Management
        </div>
        <ul className="space-y-1 text-sm mt-2">
          {moduleItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActiveSlug(slugify(item))}
                className="flex text-sm sm:text-base md:text-lg text-text-secondary items-center gap-2 hover:text-primary"
              >
                <MdPlayArrow className="text-base sm:text-lg md:text-xl" />
                {item}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6">
        {activeSlug ? (
          renderDetailContent()
        ) : (
          <>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 text-center">
              What can I help you with?
            </h1>

            {/* Search */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative w-full max-w-xl sm:max-w-2xl">
                <span className="absolute inset-y-0 left-3 flex items-center text-text-secondary">
                  <CiSearch className="text-xl sm:text-2xl" />
                </span>
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="w-full pl-10 pr-4 py-2 border border-[#E6E6E6] rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary text-base sm:text-lg md:text-xl text-text-secondary"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Tags */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-6 flex-wrap border-b border-[#E6E6E6] pb-6 sm:pb-8">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveSlug(slugify(tag))}
                  className="text-xs sm:text-sm md:text-base py-2 px-3 sm:px-4 rounded-full bg-[#FFF5DF] border border-[#FFC83E] text-text-primary cursor-pointer hover:bg-primary/5 hover:text-primary hover:border-primary transition duration-300"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Topics */}
            <div className="mt-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6 sm:mb-8">
                Popular Topics (Short Version) Getting Started
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {topics.map(({ icon: Icon, title, description }) => (
                  <button
                    key={title}
                    onClick={() => setActiveSlug(slugify(title))}
                    className="flex flex-col items-start p-4 sm:p-6 gap-3 sm:gap-4 transition duration-300 cursor-pointer"
                  >
                    <Icon className="text-text-primary text-3xl sm:text-4xl md:text-5xl" />
                    <h3 className="font-bold text-text-primary text-lg sm:text-xl md:text-2xl">
                      {title}
                    </h3>
                    <p className="text-text-secondary text-sm sm:text-base md:text-lg w-full text-left lg:w-3/4">
                      {description}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
