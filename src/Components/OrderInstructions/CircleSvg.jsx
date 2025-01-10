import { motion } from "motion/react";

const CircleSvg = ({ children, delay, isVisible }) => {
  const variants = {
    hidden: {
      opacity: 0,
      r: 30,
    },
    visible: (custom) => {
      return {
        opacity: 1,
        r: custom.r,
        transition: {
          duration: custom?.duration,
          delay: delay,
        },
      };
    },
  };

  return (
    <>
      <motion.svg viewBox={"0, 0, 100%, 100%"} width={"100%"} height={"100%"}>
        <motion.circle
          cx={"50%"}
          cy={"50%"}
          fill={"none"}
          stroke={"blue"}
          strokeWidth={3}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          custom={{ duration: 0.8, r: 40 }}
        />
        <motion.text
          x={"50%"}
          y={"50%"}
          dy="10"
          textAnchor={"middle"}
          fontSize={"2rem"}
          initial={"hidden"}
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          custom={{ duration: 0.8 }}
        >
          {children}
        </motion.text>
      </motion.svg>
    </>
  );
};

export default CircleSvg;
