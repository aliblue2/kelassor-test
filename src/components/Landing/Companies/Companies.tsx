"use client";
import { motion } from "framer-motion";
import InfiniteScroll from "./InfiniteScroll";

//InfiniteScroll component
//data below can be props
//todo remove background
const images = [
  "/Landing/Companies/company1.webp",
  "/Landing/Companies/company2.webp",
  "/Landing/Companies/company3.webp",
  "/Landing/Companies/company4.webp",
  "/Landing/Companies/company5.webp",
  "/Landing/Companies/company6.webp",
  "/Landing/Companies/company7.webp",
  "/Landing/Companies/company8.webp",
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
