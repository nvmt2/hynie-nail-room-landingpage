"use client";

import React from "react";
import { motion } from "motion/react";
import { type ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

/**
 * A premium, animated button component using Motion.
 */
export const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
}: ButtonProps) => {
  const baseStyles = "px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-[#171717] text-white hover:bg-[#2a2a2a] shadow-lg hover:shadow-xl",
    secondary: "bg-white text-[#171717] border border-[#e5e5e5] hover:border-[#cbcbcb] shadow-sm hover:shadow-md",
    outline: "bg-transparent border-2 border-[#171717] text-[#171717] hover:bg-[#171717] hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.96 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
