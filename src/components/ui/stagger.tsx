"use client";

import { motion } from "framer-motion";
import { ReactNode, Children, isValidElement, cloneElement, ReactElement } from "react";

interface StaggerGroupProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  delayChildren?: number;
}

export function StaggerGroup({ children, staggerDelay = 0.1, delayChildren = 0, className }: StaggerGroupProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  yOffset?: number;
  duration?: number;
  className?: string;
  onClick?: () => void;
}

export function StaggerItem({ children, yOffset = 20, duration = 0.6, className, onClick }: StaggerItemProps) {
  const itemVariants = {
    hidden: { opacity: 0, y: yOffset, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
    },
  };

  return (
    <motion.div variants={itemVariants} className={className} onClick={onClick}>
      {children}
    </motion.div>
  );
}
