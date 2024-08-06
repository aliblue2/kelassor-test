"use client";
//BootcampSigupStepsItem component
type BootcampSigupStepsItemProps = {
  className?: string;
  number: number;
  children: React.ReactNode;
  title:string;
  left?: boolean;
};
const BootcampSigupStepsItem = ({
  children,
  title,
  left = false,
  number,
  className,
}: BootcampSigupStepsItemProps) => {
  return (
    <div className={`flex gap-5 ${className} items-center`}>
      <svg
        width="30"
        height="198"
        viewBox="0 0 30 198"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M29.5 178.114L29.5 0.864629L15.1 18.1572L0.700008 -1.30911e-06L1.32609 178.978L15.1 198L29.5 178.114Z"
          fill="currentColor"
        />
      </svg>
      <div className="flex flex-col">
      <h3>{title}</h3>
      <p className="font-semibold text-black">{children}</p>
      </div>
    </div>
  );
  return (
    <div className={`grid items-center grid-cols-[1fr_160px_1fr] ${className}`}>
      <p
        className={`row-start-1 relative text-black font-semibold ${
          left ? "col-start-3 left-[100px]" : "right-[100px] text-left"
        }`}
      >
        {children}
      </p>
      <div className="flex relative flex-col col-start-2 row-start-1">
        <div
          className={`absolute z-10 text-4xl font-bold text-white ${
            left ? "left-[312px]" : "left-[30px]"
          }  top-[70px]`}
        >
          {number}
        </div>
        <svg
          className={`${left ? "-scale-x-100 self-start" : "self-end"}`}
          width="50%"
          height="auto"
          viewBox="0 0 143 198"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M142.5 178.114L142.5 0.864629L128.1 18.1572L113.7 -1.30911e-06L114.326 178.978L128.1 198L142.5 178.114Z"
            fill="currentColor"
          />
          <rect
            x="0.699219"
            y="34"
            width="54"
            height="54"
            rx="27"
            fill="currentColor"
          />
          <path d="M53 61H114" stroke="currentColor" stroke-width="3" />
        </svg>
      </div>
    </div>
  );
};

export default BootcampSigupStepsItem;
