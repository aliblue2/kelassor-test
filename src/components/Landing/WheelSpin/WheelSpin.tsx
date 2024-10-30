"use client";

import React, { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import "react-toastify/dist/ReactToastify.css";
import WiningModal from "./WiningModal";
import { AnimatePresence } from "framer-motion";

const Wheel = dynamic(
  () => import("react-custom-roulette").then((mod) => mod.Wheel),
  {
    ssr: false,
  }
);

const data = [
  {
    option: "۱,۰۰۰,۰۰۰",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "۱,۱۰۰,۰۰۰",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "۱,۲۰۰,۰۰۰",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "۱,۳۰۰,۰۰۰",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "۱,۴۰۰,۰۰۰",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "۱,۵۰۰,۰۰۰",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "۱,۶۰۰,۰۰۰",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "۱,۷۰۰,۰۰۰",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "۱,۸۰۰,۰۰۰",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "۱,۹۰۰,۰۰۰",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "۲,۰۰۰,۰۰۰",
    style: {
      fontSize: 24,
    },
  },
];

export const WheelSpin: React.FC<{ discount: string | undefined }> = ({
  discount,
}) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [winingModal, setWiningModal] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(2);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    const winningOption = data[prizeNumber].option;
    setWiningModal(true);
  };

  const closeModalHandler = useCallback(() => {
    setWiningModal(false);
  }, []);

  return (
    <div className="flex flex-col items-center justify-start gap-5 my-12 p-5">
      <AnimatePresence>
        {winingModal && (
          <WiningModal discount={discount} onClose={closeModalHandler} />
        )}
      </AnimatePresence>

        <Wheel
          data={data}
          fontFamily="vazir"
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          onStopSpinning={handleStopSpinning}
          outerBorderColor={"#ccc"}
          outerBorderWidth={5}
          innerBorderColor={"#f2f2f2"}
          radiusLineColor={"tranparent"}
          radiusLineWidth={1}
          textColors={["#f5f5f5"]}
          textDistance={170}
          fontSize={10}
          backgroundColors={[
            "#3f297e",
            "#175fa9",
            "#169ed8",
            "#239b63",
            "#64b031",
            "#efe61f",
            "#f7a416",
            "#e6471d",
            "#dc0936",
            "#e5177b",
            "#be1180",
            "#871f7f",
          ]} 
        />

      <button
        className="p-2 bg-primary-base hover:bg-primary-40 transition-colors duration-300 w-full rounded-md text-white text-lg"
        onClick={handleSpinClick}
      >
        چرخاندن و گرفتن جایزه 🎁
      </button>
    </div>
  );
};

export default WheelSpin;
