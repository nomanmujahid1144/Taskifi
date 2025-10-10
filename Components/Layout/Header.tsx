"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Common/Button";
import Submenu from "./Submenu";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineEventNote, MdOutlineAttachMoney } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import path from "path";

const submenuData = {
  Service: [
    {
      icon: <FaProjectDiagram className="mr-2 lg:text-2xl text-purple-700" />,
      title: "Project Management",
      description:
        "Effective project management ensures timely delivery, resource optimization, and seamless team collaboration.",
      href: "/services/project-management",
    },
    {
      icon: <MdOutlineEventNote className="mr-2 lg:text-2xl text-purple-700" />,
      title: "Resource Planning",
      description:
        "Resource planning allocates time, skills, and tools effectively to maximize project efficiency.",
      href: "/services/resource-planning",
    },
  ],
  // Finance: [
  //   {
  //     icon: <MdOutlineAttachMoney className="mr-2 lg:text-2xl text-purple-700" />,
  //     title: "Expense Management",
  //     description:
  //       "Expense management involves tracking, controlling, and optimizing costs to ensure projects stay within budget.",
  //     href: "/services/expenses",
  //   },
  //   {
  //     icon: <BsCart3 className="mr-2 lg:text-2xl text-purple-700" />,
  //     title: "Purchase",
  //     description:
  //       "Purchase involves acquiring goods or services essential for project execution.",
  //     href: "/services/purchases",
  //   },
  // ],
  // Operations: [
  //   {
  //     icon: <MdOutlineAttachMoney className="mr-2 lg:text-2xl text-purple-700" />,
  //     title: "Sales",
  //     description:
  //       "Sales drive revenue by promoting products or services to meet customer needs.",
  //     href: "/services/sales",
  //   },
  //   {
  //     icon: <BsCart3 className="mr-2 lg:text-2xl text-purple-700" />,
  //     title: "CRM",
  //     description:
  //       "CRM (Customer Relationship Management) focuses on building and maintaining strong customer relationships.",
  //     href: "/services/crm",
  //   },
  // ],
  Marketing: [
    {
      icon: (
        <MdOutlineAttachMoney className="mr-2 lg:text-2xl text-purple-700" />
      ),
      title: "Marketing",
      description:
        "Sales drive revenue by promoting products or services to meet customer needs.",
      href: "/marketing",
    },
    {
      icon: <BsCart3 className="mr-2 lg:text-2xl text-purple-700" />,
      title: "CRM",
      description:
        "CRM (Customer Relationship Management) focuses on building and maintaining strong customer relationships.",
      href: "/services/crm",
    },
  ],
};
const submenuData2 = {
  Services: [
    {
      icon: <FaProjectDiagram className="mr-2 lg:text-2xl text-purple-700" />,
      title: "Partner Program",
      description:
        " Join our Partner Program to collaborate and grow together. and expand your business with us.",
      href: "/partner-program",
    },
    {
      icon: <MdOutlineEventNote className="mr-2 lg:text-2xl text-purple-700" />,
      title: "AI optimization",
      description:
        "Optimize your AI models for better performance and efficiency. and enhance your AI capabilities.",
      href: "/optimization",
    },
  ],
};

export default function Header() {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState("");
  const [mobileDropdown, setMobileDropdown] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement | null>(null);

  const isActive = (href: string) => pathname === href;

  const dropdownVariants = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2 },
  };

  useEffect(() => {
    setDesktopDropdown("");
    setMobileDropdown("");
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const mobileMenuVariants = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%" },
    transition: { duration: 0.3 },
  };

  function getScrollbarWidth(): number {
    if (typeof window === "undefined") return 0;
    return window.innerWidth - document.documentElement.clientWidth;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopDropdown("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isOverlayOpen = isMobileMenuOpen || desktopDropdown !== "";

  useEffect(() => {
    const isOverlayOpen = isMobileMenuOpen || desktopDropdown !== "";

    if (isOverlayOpen) {
      const scrollBarWidth = getScrollbarWidth();
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, [isMobileMenuOpen, desktopDropdown]);

  const isAIPage = pathname.includes("/ai") || pathname.includes("/marketing");

  return (
    <>
      <header
        className={`z-[100] fixed w-full top-0 transition-shadow ${
          isAIPage
            ? "bg-transparent"
            : isOverlayOpen || isScrolled
            ? "bg-transparent "
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto container">
          <div className="relative px-4 max-w-screen-xl mx-auto lg:px-16 h-20 flex items-center justify-between">
            <div className="flex items-center space-x-12">
              <Link
                href="/"
                className={`flex items-center gap-3  border border-border py-2 px-4 rounded-2xl ${
                  isAIPage
                    ? "bg-black text-white"
                    : isOverlayOpen || isScrolled
                    ? "bg-white text-text-secondary"
                    : "bg-white text-text-secondary"
                }`}
              >
                {isAIPage ? (
                  <img
                    src="/logo/primaryWhiteLogo.svg"
                    alt="MyApp Logo - Link to Home"
                    className="h-5"
                  />
                ) : (
                  <img
                    src="/logo/primaryBlackLogo.svg"
                    alt="MyApp Logo - Link to Home"
                    className="h-5"
                  />
                )}
                <span className="text-[10px] border-l border-border pl-3 text-inherit">AI that speaks <br /> your language</span>
              </Link>

              {/* Desktop menu: show from xl and above */}
              <div
                className={`hidden xl:flex xl:items-center  py-3 px-4 border border-border rounded-2xl xl:space-x-8  ${
                  isAIPage
                    ? "bg-black"
                    : isOverlayOpen || isScrolled
                    ? "bg-white"
                    : "bg-white"
                }`}
                ref={desktopDropdownRef}
              >
                <Link
                  href="/"
                  className={` transition-colors relative ${
                    isAIPage
                      ? "text-white"
                      : isActive("/") // Your existing logic
                      ? "text-primary"
                      : "text-text-primary hover:text-primary"
                  }`}
                >
                  Home
                  {isActive("/") && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary rounded-full"
                    />
                  )}
                </Link>

                <div>
                  <button
                    onClick={() =>
                      setDesktopDropdown(
                        desktopDropdown === "apps" ? "" : "apps"
                      )
                    }
                    aria-haspopup="true"
                    aria-expanded={desktopDropdown === "apps"}
                    className={`flex items-center  cursor-pointer transition-colors ${
                      pathname.includes("/ai") ||
                      pathname.includes("/marketing")
                        ? "text-white"
                        : pathname.startsWith("/services")
                        ? "text-primary"
                        : "text-text-primary hover:text-primary"
                    }`}
                  >
                    Apps <FiChevronDown className="ml-1" />
                  </button>
                  <AnimatePresence>
                    {desktopDropdown === "apps" && (
                      <motion.div
                        {...dropdownVariants}
                        className="absolute left-1/2 transform -translate-x-1/2 top-2/3 w-full max-w-5xl z-50 rounded-xl bg-white mt-8 border border-gray-200 shadow-md"
                      >
                        <Submenu submenuContent={submenuData} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/ai"
                  className={`  relative transition-colors ${
                    pathname.includes("/marketing")
                      ? "text-white"
                      : pathname.startsWith("/ai")
                      ? "text-primary"
                      : "text-text-primary hover:text-primary"
                  }`}
                >
                  AI
                  {isActive("/ai") && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary rounded-full"
                    />
                  )}
                </Link>

                <Link
                  href="/pricing"
                  className={` transition-colors relative ${
                    isAIPage
                      ? "text-white"
                      : isActive("/pricing") // Your existing logic
                      ? "text-primary"
                      : "text-text-primary hover:text-primary"
                  }`}
                >
                  Pricing
                  {isActive("/pricing") && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary rounded-full"
                    />
                  )}
                </Link>

                <div>
                  <button
                    onClick={() =>
                      setDesktopDropdown(
                        desktopDropdown === "others" ? "" : "others"
                      )
                    }
                    aria-haspopup="true"
                    aria-expanded={desktopDropdown === "apps"}
                    className={`flex items-center  cursor-pointer transition-colors ${
                      pathname.includes("/ai") ||
                      pathname.includes("/marketing")
                        ? "text-white"
                        : pathname.startsWith("/optimization") ||
                          pathname.startsWith("/partner-program")
                        ? "text-primary"
                        : "text-text-primary hover:text-primary"
                    }`}
                  >
                    Other services <FiChevronDown className="ml-1" />
                  </button>
                  <AnimatePresence>
                    {desktopDropdown === "others" && (
                      <motion.div
                        {...dropdownVariants}
                        className="absolute left-1/2 transform -translate-x-1/2 top-2/3 w-full max-w-5xl z-50 rounded-xl bg-white mt-8 border border-gray-200 shadow-md"
                      >
                        <Submenu submenuContent={submenuData2} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/help"
                  className={` transition-colors relative ${
                    isAIPage
                      ? "text-white"
                      : isActive("/help") // Your existing logic
                      ? "text-primary"
                      : "text-text-primary hover:text-primary"
                  }`}
                >
                  Help
                  {isActive("/help") && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary rounded-full"
                    />
                  )}
                </Link>
              </div>
            </div>

            {/* Mobile menu button: show below xl */}
            <div className="flex max-w-full xl:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-2  ${
                  isAIPage
                    ? "text-white"
                    : "text-text-primary hover:text-primary"
                }`}
                aria-label="Open menu"
              >
                <FiMenu size={24} />
              </button>
            </div>

            {/* Right buttons: show from xl and above */}
            <div className="hidden xl:flex items-center  space-x-4">
              <Button variant="outline" href="/login">
                Sign in
              </Button>
              <Button variant="solid" href="/get-started">
                Get started
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                {...mobileMenuVariants}
                className="fixed inset-0 bg-white z-50 flex flex-col"
              >
                <div className="flex items-center justify-between px-4 py-4 ">
                  <Link href="/">
                    <img
                      src="/logo/primaryBlackLogo.svg"
                      className="h-8"
                      alt="MyApp Logo - Link to Home"
                    />
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2"
                    aria-label="Close menu"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                <div className="flex-1 overflow-auto px-6 py-4 space-y-6">
                  <Link
                    href="/"
                    className="block text-lg font-medium text-gray-700 hover:text-primary"
                  >
                    Home
                  </Link>

                  <div>
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === "apps" ? "" : "apps"
                        )
                      }
                      className="w-full text-left text-lg font-medium flex justify-between items-center"
                    >
                      Apps <FiChevronDown />
                    </button>
                    {mobileDropdown === "apps" && (
                      <div className="ml-4 mt-2 flex flex-col space-y-2">
                        {Object.entries(submenuData).map(
                          ([category, items]) => (
                            <div key={category} className="mb-4">
                              <h3 className="font-medium text-gray-900 mb-2">
                                {category}
                              </h3>
                              {items.map((item, index) => (
                                <Link
                                  key={index}
                                  href={item.href}
                                  className="flex items-center py-2 text-gray-700 hover:text-primary"
                                >
                                  {item.icon}
                                  <span>{item.title}</span>
                                </Link>
                              ))}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/ai"
                    className="block text-lg font-medium text-gray-700 hover:text-primary"
                  >
                    AI
                  </Link>
                  <Link
                    href="/pricing"
                    className="block text-lg font-medium text-gray-700 hover:text-primary"
                  >
                    Pricing
                  </Link>

                  <div>
                    <button
                      onClick={() =>
                        setMobileDropdown(
                          mobileDropdown === "others" ? "" : "others"
                        )
                      }
                      className="w-full text-left text-lg font-medium flex justify-between items-center"
                    >
                      Other Services <FiChevronDown />
                    </button>
                    {mobileDropdown === "others" && (
                      <div className="ml-4 mt-2 space-y-2">
                        {Object.entries(submenuData2).map(
                          ([category, items]) => (
                            <div key={category} className="mb-4">
                              <h3 className="font-medium text-gray-900 mb-2">
                                {category}
                              </h3>
                              {items.map((item, index) => (
                                <Link
                                  key={index}
                                  href={item.href}
                                  className="flex items-center py-2 text-gray-700 hover:text-primary"
                                >
                                  {item.icon}
                                  <span>{item.title}</span>
                                </Link>
                              ))}
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>

                  <Link
                    href="/help"
                    className="block text-lg font-medium text-gray-700 hover:text-primary"
                  >
                    Help
                  </Link>

                  <div className="flex flex-col mt-4 space-y-2">
                    <Button
                      variant="outline"
                      href="/login"
                      className="w-full text-center mt-4"
                    >
                      Sign in
                    </Button>
                    <Button
                      variant="solid"
                      href="/get-started"
                      className="w-full text-center mt-2"
                    >
                      Get started
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <AnimatePresence>
        {(desktopDropdown || isMobileMenuOpen) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black  z-40"
          />
        )}
      </AnimatePresence>
    </>
  );
}
