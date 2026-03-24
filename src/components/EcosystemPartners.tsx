import React from 'react';
import { motion } from 'motion/react';

export default function EcosystemPartners() {
  const partners = [
    "NVIDIA", "Schneider Electric", "Vertiv", "Infineon", "Siemens",
    "NVIDIA", "Schneider Electric", "Vertiv", "Infineon", "Siemens"
  ];

  return (
    <section className="py-10 bg-surface-container-low border-y border-outline-variant/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-10">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-on-surface-variant">
          Strategic Ecosystem Partners
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative flex overflow-hidden w-full">
        <motion.div
          className="flex w-max whitespace-nowrap items-center gap-16 md:gap-24 px-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {partners.map((partner, index) => (
            <span key={index} className="text-2xl font-black font-headline text-on-secondary-fixed inline-block">
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
