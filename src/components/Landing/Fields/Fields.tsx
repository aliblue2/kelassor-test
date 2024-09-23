"use client";

import CustomHeading from "@/components/Ui/CustomHeading";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CustomButton from "@/components/Ui/CustomButton";
import FieldCard from "./FieldCard";
import { bootcampSimple } from "@/types/bootcamp";
import Link from "next/link";

//Fields component
type FieldsProps = { bootcamps: bootcampSimple[] };
const Fields = ({ bootcamps }: FieldsProps) => {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(triggerRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
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
        className="grid px-10 md:p-0 gap-10 md:gap-5 w-full mt-10 grid-cols-1 md:grid-cols-4"
      >
        {bootcamps.map((item) => (
          <FieldCard key={item.header_title} data={item} />
        ))}
      </motion.div>

      <CustomButton className="mt-5 self-center">
        <Link href={"/bootcamp/"}>مشاهده همه</Link>
      </CustomButton>
    </div>
  );
};

export default Fields;
