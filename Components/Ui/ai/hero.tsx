"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Button from "@/Components/Common/Button";
import { FaArrowRight } from "react-icons/fa6";
import Pill from "./Pill";
import Msg from "./msg";
import { motion, AnimatePresence } from "framer-motion";

const stepsData = [
  { type: "pill" as const, content: "Can Taskifi really help me get more leads?" },
  {
    type: "msg" as const,
    content: "Yes! You'll have access to a database of 10M+ leads worldwide, ready for outreach.",
  },
  { type: "pill", content: "How many leads can I expect to convert?" },
  {
    type: "msg",
    content: "On average, teams see 3× more qualified prospects in the first month.",
  },
  { type: "pill", content: "Okay, but managing projects after closing deals is still tough." },
  {
    type: "msg",
    content: "That's why we built AI Project Management—to organize tasks and predict delays before they happen.",
  },
  { type: "pill", content: "And my team? They often get overloaded with work." },
  {
    type: "msg",
    content: "Our AI Resource Planner balances workloads and improves efficiency by 40%, preventing burnout.",
  },
];

// Fixed highlight function with better regex
const highlightNumbers = (text: string) => {
  // Match numbers, percentages, multipliers, and symbols like +, ×, %
  const regex = /(\d+[MK]?[+]?|[×]?\d+[×]?|\d+%|\d+\.\d+%?|×|\+)/g;
  
  const parts = text.split(regex);
  
  return parts.map((part, index) => {
    if (regex.test(part) && part.trim() !== '') {
      return (
        <span key={index} className="text-primary font-semibold">
          {part}
        </span>
      );
    }
    return part;
  });
};

type Step = (typeof stepsData)[number] & { id: number };

interface TypewriterTextProps {
  text: string;
  typingSpeed?: number;
  onDone?: () => void;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  typingSpeed = 30,
  onDone,
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText("");
    if (!text) {
      onDone?.();
      return;
    }

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        onDone?.();
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed, onDone]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      {highlightNumbers(displayText)}
    </motion.span>
  );
};

const bubbleVariants = {
  initial: { opacity: 0, y: 10, scale: 0.95 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.4, 
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { 
      duration: 0.35, 
      ease: [0.55, 0.085, 0.68, 0.53] 
    },
  },
};

interface BubbleSlotProps {
  step: Step;
  isTyping: boolean;
  onTypeDone: () => void;
}

const BubbleSlot: React.FC<BubbleSlotProps> = ({ step, isTyping, onTypeDone }) => {
  if (step.type === "pill") {
    return (
      <motion.div
        key={`pill-${step.id}`}
        layout
        initial="initial"
        animate="animate"
        exit="exit"
        variants={bubbleVariants}
        className="w-full justify-end flex mb-4"
      >
        <Pill
          content={
            isTyping ? (
              <TypewriterText 
                text={step.content} 
                onDone={onTypeDone} 
                typingSpeed={20}
              />
            ) : (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {highlightNumbers(step.content)}
              </motion.span>
            )
          }
        />
      </motion.div>
    );
  } else {
    return (
      <motion.div
        key={`msg-${step.id}`}
        layout
        initial="initial"
        animate="animate"
        exit="exit"
        variants={bubbleVariants}
        className="w-full justify-start flex mb-4"
      >
        <Msg
          content={
            isTyping ? (
              <TypewriterText 
                text={step.content} 
                onDone={onTypeDone} 
                typingSpeed={15}
              />
            ) : (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {highlightNumbers(step.content)}
              </motion.span>
            )
          }
        />
      </motion.div>
    );
  }
};

export default function HeroSection() {
  const steps = useMemo<Step[]>(
    () => stepsData.map((s, i) => ({ ...s, id: i })),
    []
  );

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);
  const [allStepsDone, setAllStepsDone] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<Step[]>([]);

  const currentStep = steps[currentStepIndex];
  const isTyping = !typingDone;

  const handleTypeDone = useCallback(() => {
    setTypingDone(true);
  }, []);

  useEffect(() => {
    if (!typingDone) return;

    // Add the completed step to visible steps
    if (currentStep) {
      setVisibleSteps(prev => [...prev, currentStep]);
    }

    if (currentStepIndex >= steps.length - 1) {
      setAllStepsDone(true);
      return;
    }

    const id = setTimeout(() => {
      setCurrentStepIndex((i) => i + 1);
      setTypingDone(false);
    }, 800); // Shorter pause between messages

    return () => clearTimeout(id);
  }, [typingDone, currentStepIndex, steps.length, currentStep]);

  // Keep only the last 2 steps visible
  const displaySteps = useMemo(() => {
    return visibleSteps.slice(-2);
  }, [visibleSteps]);

  return (
    <section className="w-full relative min-h-[550px] overflow-hidden">
      <Image
        src="/ai/Section.png"
        alt="Grid Background"
        width={1079}
        height={500}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-full md:w-auto object-cover z-0"
        quality={100}
        priority
      />

      <div className="flex justify-start items-center gap-4 px-6 z-10 relative pt-10 flex-col min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {displaySteps.map((step) => (
            <BubbleSlot
              key={`bubble-${step.id}`}
              step={step}
              isTyping={false} // Already typed out steps are not typing
              onTypeDone={() => {}}
            />
          ))}
          
          {/* Current typing step */}
          {currentStep && !displaySteps.includes(currentStep) && (
            <BubbleSlot
              key={`bubble-${currentStep.id}`}
              step={currentStep}
              isTyping={isTyping}
              onTypeDone={handleTypeDone}
            />
          )}
        </AnimatePresence>
      </div>

      {allStepsDone && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.5 
          }}
          className="flex justify-start gap-6 pb-6 w-full absolute bottom-0 left-0 mt-6 md:mt-12 px-6"
        >
          <Button
            variant="solid"
            href="#"
            className="flex justify-center items-center gap-2 group"
          >
            Try Taskifi 
            <motion.span
              initial={{ x: -5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <FaArrowRight className="text-white group-hover:translate-x-1 transition-transform duration-200" />
            </motion.span>
          </Button>
          <Button variant="white" href="/#contact" className="border-none !text-black hover:bg-gray-100 transition-colors">
            Get a Demo
          </Button>
        </motion.div>
      )}
    </section>
  );
}