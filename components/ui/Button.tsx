import React from "react";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

/**
 * A premium button component rendered as a Server Component.
 * Motion animations removed to support full server rendering.
 */
export const Button = ({
  children,
  className = "",
  variant = "primary",
}: ButtonProps) => {
  const baseStyles =
    "px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-[#171717] text-white hover:bg-[#2a2a2a] shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-95",
    secondary:
      "bg-white text-[#171717] border border-[#e5e5e5] hover:border-[#cbcbcb] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:scale-95",
    outline:
      "bg-transparent border-2 border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white hover:-translate-y-0.5 active:scale-95",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
