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
  { option: 1000000, style: { fontSize: 24 } },
  { option: 1100000, style: { fontSize: 24 } },
  { option: 1200000, style: { fontSize: 24 } },
  { option: 1300000, style: { fontSize: 24 } },
  { option: 1400000, style: { fontSize: 24 } },
  { option: 1500000, style: { fontSize: 24 } },
  { option: 1600000, style: { fontSize: 24 } },
  { option: 1700000, style: { fontSize: 24 } },
  { option: 1800000, style: { fontSize: 24 } },
  { option: 1900000, style: { fontSize: 24 } },
  { option: 2000000, style: { fontSize: 24 } },
];

export const WheelSpin: React.FC<{ discount: string | undefined }> = ({
  discount,
}) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [winingModal, setWiningModal] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(2);

  console.log(discount);

  const handleSpinClick = () => {
    setMustSpin(true);
    const targetPrize = data.findIndex((item) => {
      return item.option.toString() === discount;
    });
    if (targetPrize !== -1) {
      setPrizeNumber(targetPrize);
    } else {
      const randomPrize = Math.floor(Math.random() * data.length);
      setPrizeNumber(randomPrize);
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
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
        data={data.map((item) => {
          return {
            ...item,
            option: item.option.toLocaleString("fa-IR"),
          };
        })}
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
