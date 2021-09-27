import React from "react";
import { motion } from "framer-motion";
import { ButtonProps } from "./type";

const button = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  pressed: { scale: 0.95 },
};

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <motion.button
      className="btn"
      onClick={onClick}
      variants={button}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
    >
      {text}
    </motion.button>
  );
}
