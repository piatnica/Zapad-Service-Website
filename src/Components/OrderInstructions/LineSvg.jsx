import { motion } from "motion/react";

const LineSvg = ({ delay, isVisible }) => {
  const variants = {
    initial: {
      pathLength: 0,
    },
    animate: (custom) => {
      return {
        pathLength: 1,
        transition: {
          duration: custom?.duration,
          delay: delay,
        },
      };
    },
  };

  return (
    <>
      <motion.svg
        style={{
          display: "block",
          height: "5px",
          width: "81%", // Данные значений width и marginLeft установлены из-за
          marginLeft: "17%",
        }}
      >
        <motion.line
          x1={"1%"}
          y1={"50%"}
          x2={"99%"}
          y2={"50%"}
          stroke={"blue"}
          strokeWidth="3"
          strokeLinecap="round"
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={variants}
          custom={{ duration: 0.3 }}
        />
      </motion.svg>
    </>
  );
};

export default LineSvg;
