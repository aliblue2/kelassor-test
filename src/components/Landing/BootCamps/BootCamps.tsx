"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import BootCampCard from "./BootCampCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

//BootCamps component
const BootCamps = () => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(triggerRef, { once: true ,margin:"0px 0px -100px 0px" });
  const Pvariant = {
    animate: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1, // Stagger animation by 0.1 seconds between children
        when: "beforeChildren",
      },
    },
  };
  return (
    <div className="flex flex-col" ref={triggerRef}>
      <CustomHeading>
        <h2>رشته‌های کلاسور</h2>
      </CustomHeading>
      <motion.div 
        variants={Pvariant}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      className="grid gap-2 md:gap-5 w-full mt-10 grid-cols-2 md:grid-cols-4">
        {/*todo todo: map data from backend */}
        <BootCampCard />
        <BootCampCard />
        <BootCampCard />
        <BootCampCard />
        <BootCampCard />
      </motion.div>
    </div>
  );
};

export default BootCamps;
