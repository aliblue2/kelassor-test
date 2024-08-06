"use client";
import { motion } from "framer-motion";
import InfiniteScroll from "./InfiniteScroll";

//InfiniteScroll component
//data below can be props
//todo remove background
const images = [
  "/Landing/Companies/zavie.webp",
  "/Landing/Companies/hamava.webp",
  "/Landing/Companies/digify.webp",
  "/Landing/Companies/asmari.webp",
  "/Landing/Companies/wishwork.webp",
  "/Landing/Companies/karkhane.webp",
  "/Landing/Companies/zavie.webp",
  "/Landing/Companies/hamava.webp",
  "/Landing/Companies/digify.webp",
  "/Landing/Companies/asmari.webp",
  "/Landing/Companies/wishwork.webp",
  "/Landing/Companies/karkhane.webp",
];
type CompaniesProps = { className?: string };
const Companies = ({ className }: CompaniesProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex overflow-hidden relative justify-center items-center w-full bg flex-col ${className}`}
    >
      <InfiniteScroll images={images} itemSize={80} duration={10} />
      <span className="mt-4 font-bold text-center text-sm md:text-base text-light-1">
        افتخار همکاری با سازمان‌های فوق
      </span>
    </motion.div>
  );
};

export default Companies;
