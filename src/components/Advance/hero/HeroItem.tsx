"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImage from "../../../../public/Landing/Hero/advance.png";
import { useRef } from "react";
import Footstep from "@/components/Ui/Footstep";
import AnimatedPath, {
  AnimatedPathHandles,
} from "@/components/Landing/AnimatedPath/AnimatedPath";

//HeroItem component
const HeroItem = () => {
  const pathRef1 = useRef<AnimatedPathHandles>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onViewportEnter={() => {
        if (pathRef1.current) {
          pathRef1.current.animate();
        }
      }}
      transition={{ type: "keyframes", duration: 0.3, ease: "easeInOut" }}
      className="col-span-2 order-first md:order-last w-full min-h-[450px] max-h-[450px] bg-primary-50 p-5 relative rounded-[50px]"
    >
      <div className="absolute bottom-0 left-0 flex items-center justify-center w-full">
        <Image
          src={heroImage}
          alt="heroImage"
          width={300}
          height={300}
          className="z-30 md:w-5/12 w-8/12"
        />
      </div>
      <motion.span className="absolute z-30 w-full px-4 py-2 text-sm font-bold text-center text-red-500 bg-white rounded-full md:text-base shadow3 max-w-56 bottom-3 -right-6 ">
        دوره های مختلفی رو گذروندی ولی نیاز به تخصص بیشتر داری؟
      </motion.span>
      <motion.span className="absolute z-30 w-full px-4 py-2 text-sm font-bold text-center text-red-500 bg-white rounded-full md:text-base shadow3 max-w-56 top-28 right-2 ">
        دنبال رفع اشکال تخصصی با مدرسین مطرح هستی؟
      </motion.span>
      <motion.span className="absolute z-30 w-full px-4 py-2 text-sm font-bold text-center text-red-500 bg-white rounded-full md:text-base shadow3 max-w-56 top-3 left-12 ">
        دوره های مختلفی رو گذروندی ولی نیاز به تخصص بیشتر داری؟
      </motion.span>
      <motion.span className="absolute z-30 w-full px-4 py-2 text-sm font-bold text-center text-red-500 bg-white rounded-full md:text-base shadow3 max-w-56 bottom-28 left-2 ">
        دوره های مختلفی رو گذروندی ولی نیاز به تخصص بیشتر داری؟
      </motion.span>
      <AnimatedPath
        ref={pathRef1}
        id="phone-path-1"
        duration={20}
        viewBox="0 0 371 394"
        path="M366.501 326.5C366.501 326.5 368.5 309.5 368.5 295.5C368.5 247.5 323.501 206.5 323.501 156C323.501 113.453 342.001 117 342.001 65C342.001 39.5 319.501 12.5 288 12.5C266.001 12.5 246.001 17.4999 216.001 17.5C148.001 17.5001 124.501 2 65.5 2C23.5008 2 1.99923 37.5 2 71.5C2.00116 122.5 41.5 130 41.5 223.5C41.5 271 26.5008 290 26.5008 334.5C26.5008 360.5 36.5 385 39.5 393"
        className="absolute z-20 w-full text-white left-1 "
      />
      <Footstep />
    </motion.div>
  );
};

export default HeroItem;
