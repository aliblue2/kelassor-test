"use client";

import { AnimatePresence } from "framer-motion";
import React, { useCallback, useState } from "react";
import ModalFilter from "./ModalFilter";
import { ChevronDown, FilterIcon, X } from "lucide-react";

const Filter: React.FC<{
  bootcamps: { bootcampTitle: string }[];
  filters: string[];
}> = ({ bootcamps, filters }) => {
  const [filteModalVis, setFilterModalVis] = useState(false);
  console.log(filters);

  const openFilterHandler = useCallback(() => {
    setFilterModalVis((prevModalVis) => !prevModalVis);
  }, []);

  return (
    <>
      <div className="w-full bg-secondary-75 rounded-md p-2 my-3">
        <div
          onClick={openFilterHandler}
          className="w-10/12 bg-white rounded-sm px-4 py-1 flex items-center justify-between"
        >
          <div className="flex items-center justify-start gap-2">
            <ChevronDown size={18} />
            {filters.map((item, i) => {
              if (item.trim() !== "")
                return (
                  <span
                    className="bg-gray-400 p-2 rounded-full flex items-center justify-start gap-1 text-white font-medium text-xs"
                    key={item + i}
                  >
                    <X size={14} />
                    {item}
                  </span>
                );
            })}
          </div>
          <div className="flex items-center rounded-md w-10 h-10 justify-center bg-primary-base text-white">
            <FilterIcon size={18} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {filteModalVis && (
          <ModalFilter bootcapms={bootcamps} onClose={openFilterHandler} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Filter;
