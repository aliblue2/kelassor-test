import { motion } from "framer-motion";
import { ReactNode } from "react";

//MazeContainer component
type MazeContainerProps = {
  children: ReactNode;
  side: "left" | "right";
};
const MazeContainer = ({ children, side }: MazeContainerProps) => {
  const variants = {
    initial: {
      opacity: 0,
      x: side === "right" ? 100 : -100,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        opacity: { delay: 0.2, ease: "easeInOut", duration: 0.2 },
        x: { delay: 0.2, ease: "easeInOut", duration: 0.5 },
      },
    },
  };
  return (
    <div className="relative overflow-hidden p-5 w-screen">
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
        className={`${
          side === "left" ? "rounded-r-[30px] md:rounded-r-[50px]" : "rounded-l-[30px] md:rounded-l-[50px]"
        } relative maze container bg-opacity-30 !p-0`}
      >
        {/* fill outside container ********************************************************************************/}
        <div
          className={`absolute w-screen h-full maze ${
            side === "right" ? "right-[-100vw]" : "left-[-100vw]"
          } `}
        />
        <div className="p-[10px] md:p-10">{children}</div>
      </motion.div>
    </div>
  );
};

export default MazeContainer;
