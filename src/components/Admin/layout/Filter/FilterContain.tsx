import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

const FilterContain = () => {
  const searchParams = useSearchParams();
  const contain = searchParams.get("contain") || "true";
  const pathName = usePathname();

  return (
    <div className="flex flex-col col-span-1 items-center justify-start gap-3">
      <div className="flex w-full text-sm items-center justify-between bg-white shadow-md rounded-lg p-2">
        {contain === "true" ? "شامل" : "به جز"}
        <ChevronDown size={18} />
      </div>
      <div className="bg-white w-full shadow-md rounded-lg p-2 flex items-start justify-start gap-3 flex-col">
        <Link
          href={pathName + "?contain=true"}
          className={`${contain === "true" && "text-primary-base font-bold text-sm"} text-xs font-medium`}
        >
          شامل
        </Link>
        <Link
          href={pathName + "?contain=false"}
          className={`${contain !== "true" && "text-primary-base font-bold text-sm"} text-xs font-medium`}
        >
          به جز
        </Link>
      </div>
    </div>
  );
};

export default FilterContain;
