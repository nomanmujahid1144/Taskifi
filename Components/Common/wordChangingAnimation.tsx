"use client";
import React, { useEffect, useState } from "react";

type Props = {
  beforeText: string;       // text before the <br/>
  words: string[];          // rotating words for the <span>
  typeSpeed?: number;       // ms per character when typing
  deleteSpeed?: number;     // ms per character when deleting
  holdDelay?: number;       // ms to hold full word before deleting
};

const wordChangingAnimation: React.FC<Props> = ({
  beforeText,
  words,
  typeSpeed = 120,
  deleteSpeed = 70,
  holdDelay = 1000,
}) => {
  const [index, setIndex] = useState(0);       // which word
  const [sub, setSub] = useState(0);           // how many chars shown
  const [deleting, setDeleting] = useState(false);

  const current = words.length ? words[index % words.length] : "";

  useEffect(() => {
    if (!words.length) return;

    let timer: number;

    // finished typing current word -> pause, then start deleting
    if (!deleting && sub === current.length) {
      timer = window.setTimeout(() => setDeleting(true), holdDelay);
      return () => clearTimeout(timer);
    }

    // finished deleting -> move to next word
    if (deleting && sub === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    // continue typing or deleting
    timer = window.setTimeout(() => {
      setSub((s) => s + (deleting ? -1 : 1));
    }, deleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [sub, deleting, current.length, words, holdDelay, typeSpeed, deleteSpeed]);

  const displayed = current.slice(0, sub);

  return (
    <h1 className="font-bold text-white lg:text-5xl 2xl:text-6xl text-3xl text-center">
      {beforeText} <br />
      <span className="text-primary">{displayed}</span>
      <span className="inline-block w-[1ch] animate-pulse duration-75">|</span>
    </h1>
  );
};

export default wordChangingAnimation;
