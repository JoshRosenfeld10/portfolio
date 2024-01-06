"use client";
import React, { useEffect } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { motion } from "framer-motion";

function CursorGradient() {
  const mousePosition = useMousePosition();
  const width = 1920 * 2;

  const variants = {
    default: {
      x: (mousePosition.x as number) - width / 2,
      y: (mousePosition.y as number) - width / 2,
    },
  };

  return (
    <>
      {mousePosition.x !== null && mousePosition.y !== null && (
        <motion.div
          variants={variants}
          animate="default"
          className="w-[3840px] h-[3840px] bg-gradient-radial from-primary-950 via-transparent to-transparent fixed blur-3xl opacity-50"
        />
      )}
    </>
  );
}

export default CursorGradient;
