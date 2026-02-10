// components/Button.tsx
import Link from "next/link";
import React from "react";
import clsx from "clsx";

type ButtonProps = {
  variant?: "solid" | "outline" | "white";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  variant = "solid",
  href,
  onClick,
  children,
  className,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "rounded-full px-6 py-3  font-semibold transition-colors duration-200";
  const variantClasses =
    variant === "solid"
      ? "bg-gradient-primary text-white "
      : variant === "white"
      ? "bg-white text-primary border border-primary "
      : "border border-primary text-primary hover-white-button ";

  const combined = clsx(className, baseClasses, variantClasses);

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a href={href} className={combined} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combined} onClick={onClick}>
      {children}
    </button>
  );
}
