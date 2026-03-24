import React, { ReactNode, HTMLAttributes } from 'react';
import { motion } from 'motion/react';

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  delay?: number;
  className?: string;
  id?: string;
}

export default function AnimatedSection({ children, className = '', delay = 0, id, ...props }: AnimatedSectionProps) {
  return (
    <motion.section
      {...props}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
