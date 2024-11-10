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
    option: "1,000,000",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "1,100,000",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "1,200,000",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "1,300,000",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "1,400,000",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "1,500,000",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "1,600,000",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "1,700,000",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "1,800,000",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "1,900,000",
    style: {
      fontSize: 24,
    },
  },
  {
    option: "2,000,000",
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
    setMustSpin(true);
    const targetPrize = data.findIndex((item) => {
      return item.option === discount;
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
