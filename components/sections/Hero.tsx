"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui";

/**
 * Premium Hero section for the landing page.
 */
export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Decorative Elements for visual depth */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-container rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container rounded-full blur-[100px] opacity-60" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-6 block drop-shadow-sm">
            Est. 2024 • Premium Nail Artistry
          </span>
          <h1 className="text-6xl md:text-[7rem] font-serif text-on-surface mb-8 leading-[1.1] tracking-tight">
            Elevate your <br />
            <span className="italic font-light">signature style.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-on-surface-variant mb-12 font-light leading-relaxed">
            Experience the intersection of luxury care and bespoke nail design. 
            Our master technicians transform every appointment into a masterpiece.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="primary" className="min-w-[220px] text-lg py-4">
              Book Appointment
            </Button>
            <Button variant="outline" className="min-w-[220px] text-lg py-4">
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Animated Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-primary font-bold">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
