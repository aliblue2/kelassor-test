"use client";
import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import FilterType from "./FilterType";
import FilterContain from "./FilterContain";
import FilterContent from "./FilterContent";
import { Filter } from "lucide-react";

const ModalFilter: React.FC<{
  onClose: () => void;
  bootcapms: { bootcampTitle: string }[];
}> = ({ onClose, bootcapms }) => {
  const [filterIndex, setFilterIndex] = useState(0);

  const changeIndexFilter = useCallback((index: number) => {
    setFilterIndex(index);
  }, []);

  return (
    <motion.div
      className="fixed flex flex-col items-start justify-start gap-5 left-0 top-0 bg-primary-base bg-opacity-30 backdrop-blur-lg w-full h-full"
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "keyframes", duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="w-full p-5 max-w-[1100px] grid md:grid-cols-3 grid-cols-2 gap-5 mx-auto relative"
        initial={{ opacity: 0, top: 200 }}
        animate={{ opacity: 1, top: 0 }}
        exit={{ opacity: 0, top: 200 }}
        transition={{
          type: "spring",
          duration: 0.5,
          bounce: 0.5,
        }}
      >
        <FilterType index={filterIndex} setFilterType={changeIndexFilter} />
        <FilterContain />
        <FilterContent index={filterIndex} bootcamps={bootcapms} />
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        transition={{ type: "spring", stiffness: 500 }}
        className="p-2 rounded-md bg-primary-base text-white hover:bg-primary-30 transition-colors duration-300 flex items-center justify-center gap-3 mx-auto "
      >
        اعمال تغییرات
        <Filter size={18} />
      </motion.button>
    </motion.div>
  );
};

export default ModalFilter;
