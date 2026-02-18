"use client";
import Image from "next/image";
import Button from "../Common/Button";
import { ImQuotesLeft } from "react-icons/im";
import { FaCheckCircle } from "react-icons/fa";
import { useRef, useEffect } from "react";

const quoteData = [
  {
    title:
      "1.Plan Projects With <span class='animate-gradient'>AI Precision</span>",
    description:
      "From launches to client deliverables, Taskifi adapts. Build workflows, track milestones, and manage teams - all powered by AI-driven project budgeting to keep projects on track.",
    features: [
      "Modular Views (List, Board, Timeline)",
      "AI Project Budgeting",
      "Role-Based Permissions",
    ],
    quote: "",
    author: "",
    image: "/testimonials/girl2.webp",
    buttonLabel: "",
  },
  {
    title:
      '2.Resource Management, <span class="animate-gradient">Reinvented.</span>',
    description:
      "No more spreadsheets. Taskifi’s AI resource planning matches the right people to the right tasks, predicts workload, and prevents burnout—so projects move smoothly.",
    features: [],
    quote:
      "“Before Taskifi, we were constantly juggling spreadsheets to track who was available. Now, AI handles the planning for us—and our teams feel more balanced and productive.”",
    author: "James, Project Director",
    image: "/testimonials/man1.webp",
    buttonLabel: "Start your free trial – no setup required",
  },
  {
    title: "3.AI Outbound for Smarter Growth (coming soon)",
    description:
      "Generate qualified leads and reach them with personalized email sequences or direct messages—automatically. Taskifi's AI Outbound helps you scale outreach without losing the human touch.",
    features: [
      "AI-Powered Lead Generation",
      "Personalized Outreach at Scale",
      "Automated Sequences & Tracking",
    ],
    quote: "",
    author: "",
    image: "/testimonials/girl2.webp",
    buttonLabel: "",
  },
  // {
  //   title:
  //     "4. Run your entire <span class='text-primary'>marketing workflow</span> in one place",
  //   description:
  //     "From onboarding new hires to planning your content calendar and tracking team leave—Taskifi brings it all together so your team stays focused and aligned.",
  //   features: [],
  //   quote:
  //     "“Taskifi took a huge load off our shoulders. I thought it was just another task manager… but we now run our onboarding, content calendar, and team leaves on Taskifi.”",
  //   author: "Ahmed, Head of Marketing",
  //   image: "/testimonials/girl2.webp",
  //   buttonLabel: "Explore Taskifi – your business OS",
  // },
];

export default function GifInfo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const setSpeed = () => {
      video.playbackRate = 1.1;
    };
    video.addEventListener("loadedmetadata", setSpeed);
    if (video.readyState >= 1) setSpeed();
    return () => video.removeEventListener("loadedmetadata", setSpeed);
  }, []);

  return (
    <section className=" bg-white py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-16">
        {/* Left Content */}
        <div className="pr-4 space-y-10">
          {quoteData.map((item, index) => (
            <div key={index}>
              {/* ✅ Accepts HTML */}
              <h2
                className="text-3xl font-bold md:text-[24px] 2xl:text-[34px] text-text-primary font-caecilia leading-snug mb-4"
                dangerouslySetInnerHTML={{ __html: item.title }}
              />

              <p className="text-text-secondary  mb-4">{item.description}</p>

              {/* 🔥 Feature List */}
              {item.features && item.features.length > 0 && (
                <ul className="mb-6 space-y-2">
                  {item.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-text-secondary"
                    >
                      <FaCheckCircle className="text-primary mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* 💬 Quote Box */}
              {item.quote && item.author && (
                <div className="border-2 border-primary rounded-lg p-6 relative mb-6">
                  <ImQuotesLeft className="w-10 h-auto text-primary mb-4" />
                  <p className="text-text-secondary mb-4">{item.quote}</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={item.image}
                      alt={`${item.author}'s Avatar`}
                      width={50}
                      height={50}
                      className="rounded-full object-cover border-2 border-secondary object-center"
                    />
                    <span className="font-semibold text-sm text-primary">
                      {item.author}
                    </span>
                  </div>
                </div>
              )}

              {/* 🟢 Dynamic Button */}
              {item.buttonLabel && (
                <Button
                  variant="solid"
                  href="https://app.taskifi.io/signup"
                  className=" text-xs md:text-sm lg:text-[16px]"
                >
                  {item.buttonLabel}
                </Button>
              )}
            </div>
          ))}
        </div>

        {/* 📽️ Right Side Video - auto-playing loop, controls for sound */}
        <div className="md:sticky top-24 self-start relative w-full max-w-[1100px] rounded-xl overflow-hidden [box-shadow:0_0_0_1px_rgba(0,0,0,0.05),0_10px_15px_-3px_rgba(0,0,0,0.2),0_25px_50px_-12px_rgba(0,0,0,0.5),0_40px_80px_-20px_rgba(0,0,0,0.6)]">
          <video
            ref={videoRef}
            src="/videos/taskifi-ai-project-planning.mp4"
            autoPlay
            loop
            playsInline
            controls
            className="w-full rounded-xl aspect-video object-cover block"
          >
            Your browser does not support the video tag.
          </video>
          {/* Completely black from below, then blends upward */}
          <div
            className="absolute inset-x-0 bottom-0 h-[70%] rounded-b-xl pointer-events-none"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,0.5) 28%, rgba(0,0,0,0.15) 50%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
