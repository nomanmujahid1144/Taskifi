"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { scrollToSection } from "@/utils/scrollToSection"; // Adjust path as needed

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isDarkPage = pathname === "/ai" || pathname === "/marketing";

  const footerClass = isDarkPage
    ? "bg-black text-white"
    : "bg-bg-grey text-gray-700";

  const headingClass = isDarkPage ? "text-white font-bold" : "font-bold text-text-primary";
  const linkTextClass = isDarkPage ? "text-white/80" : "text-text-secondary";
  const dividerClass = isDarkPage ? "bg-white/20" : "bg-[#5B556D]";

  // Handle clicks for internal hash links
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if it's a hash link
    if (href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = href.substring(2); // Remove "/#"
      
      // If we're already on home page, just scroll
      if (pathname === "/") {
        scrollToSection(sectionId);
      } else {
        // Navigate to home page, then scroll
        router.push("/");
        // Wait for navigation to complete before scrolling
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    }
  };

  const footerSections = [
    {
      heading: "Company",
      links: [
        { text: "Contact & Partnerships", href: "/partner-program" },
        { text: "Pricing", href: "/pricing" }
      ]
    },
    {
      heading: "Project Management",
      links: [
        { text: "Task Management", href: "/services/project-management" },
        { text: "Project Templates", href: "/services/project-management" },
        { text: "Budgeting", href: "/services/project-management" },
        { text: "AI Project Planner", href: "/services/project-management" },
        { text: "RFP-to-Project Auto-Generation", href: "/services/project-management" },
        { text: "Cost Estimation & Deliverable Forecasting", href: "/services/project-management" }
      ]
    },
    {
      heading: "Resource Management",
      links: [
        { text: "Resource Planning", href: "/services/resource-planning" },
        { text: "Timesheets", href: "/services/resource-planning" },
        { text: "Leave Management", href: "/services/resource-planning" },
        { text: "Onboarding", href: "/services/resource-planning" }
      ]
    },
    {
      heading: "Support & Access",
      links: [
        { text: "Live AI Assistant (Zeta)", href: "/help" },
        { text: "Help Center", href: "/help" },
        { text: "On-Demand Demo", href: "/#contact" },
        { text: "Get Started", href: "https://app.taskifi.io/signup" },
        { text: "Sign In", href: "https://app.taskifi.io/signin" },
        { text: "Sign Up", href: "https://app.taskifi.io/signup" }
      ]
    }
  ];

  return (
    <footer className={`${footerClass} border-t border-gray-200`}>
      {/* Top Bar */}
      <div className={`border-b ${isDarkPage ? "bg-black border-gray-800" : "bg-white border-gray-200"}`}>
        <div className="w-full max-w-screen-xl mx-auto 2xl:px-4 px-4 lg:px-16 xl:px-24 py-4">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-4 2xl:text-sm text-xs">
            {/* Logo and Text */}
            <div className="flex items-center gap-2">
              <Image
                src="/logo/primarySmallLogo.svg"
                alt="Taskifi"
                width={16}
                height={16}
              />
              <span className={linkTextClass}>AI that speaks your language.</span>
            </div>

            {/* Marquee (mobile only) */}
            <div className="block md:hidden w-full">
              <Marquee gradient={false} speed={50} pauseOnHover>
                {[
                  { icon: "task", text: "Always-On Support" },
                  { icon: "bolt", text: "Cutting-Edge Feature Releases" },
                  { icon: "lock", text: "Bank-Level Data Protection" },
                  { icon: "bulb", text: "4.9/5 User Ratings" },
                  { icon: "robot", text: "Guaranteed 99.9% Uptime", width: 24 },
                  { icon: "task", text: "Always-On Support" },
                  { icon: "bolt", text: "Cutting-Edge Feature Releases" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4">
                    <Image
                      src={`/Icons/footer/${item.icon}.svg`}
                      alt={`${item.text} Icon`}
                      width={item.width || 16}
                      height={item.width || 16}
                    />
                    <span className={linkTextClass}>{item.text}</span>
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Icon row (desktop only) */}
            <div className="hidden md:flex flex-wrap justify-between items-center gap-4">
              {[
                { icon: "task", text: "Always-On Support" },
                { icon: "bolt", text: "Cutting-Edge Features" },
                { icon: "lock", text: "Bank-Level Data Protection" },
                { icon: "bulb", text: "4.9/5 User Ratings" },
                { icon: "robot", text: "Guaranteed 99.9% Uptime", width: 24 },
              ].map((item, i, arr) => (
                <div key={i} className="flex items-center gap-2">
                  {i !== 0 && (
                    <div className={`w-[1px] h-8 ${dividerClass}`}></div>
                  )}
                  <div className="flex items-center gap-2">
                    <Image
                      src={`/Icons/footer/${item.icon}.svg`}
                      alt={`${item.text} Icon`}
                      width={item.width || 16}
                      height={item.width || 16}
                    />
                    <span className={linkTextClass}>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Main Footer Links */}
      <div className="w-full max-w-screen-xl mx-auto 2xl:px-4 px-4 lg:px-16 xl:px-24 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-8 2xl:text-base text-sm w-full">
          <div className="w-full">
            <h4 className={headingClass}>Taskifi</h4>
          </div>

          {footerSections.map((section, index) => (
            <div key={index} className="w-full">
              <h4 className={`${headingClass} mb-3`}>{section.heading}</h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      className={linkTextClass} 
                      href={link.href}
                      onClick={(e) => handleSectionClick(e, link.href)}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`border-t-2 border-[#595959] max-w-screen-xl mx-auto text-center py-4 ${linkTextClass}`}>
        © 2025 Taskifi Ltd. All rights reserved. | Built for businesses that move fast.
      </div>
    </footer>
  );
}