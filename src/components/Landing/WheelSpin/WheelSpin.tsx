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
    option: "کلاسور 🎁",
    style: {
      backgroundColor: "#197265",
      fontSize: 24,
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  {
    option: "کلاسور 🎁",
    style: {
      backgroundColor: "#7ECABF",
      fontSize: 24,
      display: "flex",
      width: "100%",
    },
  },
  {
    option: "کلاسور 🎁",
    style: {
      backgroundColor: "#197265",
      fontSize: 24,
      display: "flex",
      width: "100%",
    },
  },
  {
    option: "کلاسور 🎁",
    style: {
      backgroundColor: "#8CB8B2",
      fontSize: 24,
      display: "flex",
      width: "100%",
    },
  },
  {
    option: "کلاسور 🎁",
    style: {
      backgroundColor: "#197265",
      fontSize: 24,
      display: "flex",
      width: "100%",
    },
  },
  {
    option: "کلاسور 🎁",
    style: {
      backgroundColor: "#7ECABF",
      fontSize: 24,
      display: "flex",
      width: "100%",
    },
  },
  {
    option: "کلاسور 🎁",
    style: {
      backgroundColor: "#197265",
      fontSize: 24,
      display: "flex",
      width: "100%",
    },
  },
  {
    option: "کلاسور 🎁",
    style: {
      backgroundColor: "#8CB8B2",
      fontSize: 24,
      display: "flex",
      width: "100%",
    },
  },
];

export const WheelSpin: React.FC<{ discount: string }> = ({ discount }) => {
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
    <>
      <AnimatePresence>
        {winingModal && (
          <WiningModal discount={discount} onClose={closeModalHandler} />
        )}
      </AnimatePresence>
      <div className="w-full flex-col h-full min-h-screen flex items-center justify-center gap-5">
        <div className="rounded-full bg-white shadow-xl p-2 border-2 border-primary-20">
          <Wheel
            data={data}
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            onStopSpinning={handleStopSpinning}
            radiusLineColor="#0C3933"
            outerBorderColor="#0C3933"
            radiusLineWidth={4}
            textColors={["#FFFFFF"]}
            textDistance={170}
          />
        </div>
        <button
          className="p-2 bg-primary-base hover:bg-primary-40 transition-colors duration-300 w-full rounded-md text-white text-lg"
          onClick={handleSpinClick}
        >
          چرخاندن و گرفتن جایزه 🎁
        </button>
      </div>
    </>
  );
};

export default WheelSpin;
