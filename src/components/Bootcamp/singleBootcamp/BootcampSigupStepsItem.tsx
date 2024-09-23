"use client";
//BootcampSigupStepsItem component
type BootcampSigupStepsItemProps = {
  className?: string;
  number: number;
  children: React.ReactNode;
  title: string;
  left?: boolean;
};
const BootcampSigupStepsItem = ({
  children,
  title,
  left = false,
  number,
  className,
}: BootcampSigupStepsItemProps) => {
  if (false)
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
    <>
      <div
        className={`overflow-hidden hidden md:grid items-center grid-rows-[200px_360px_200px] grow basis-0 flex-1 ${className}`}
      >
        <div
          className={` flex text-black col-start-1 ${left ? "text-black self-end row-start-1" : " self-start row-start-3"}`}
        >
          <p className="text-center">{children}</p>
        </div>
        <div
          className={` flex text-black justify-center col-start-1 relative text-center  ${left ? "text-black bottom-[150px]  self-start row-start-3" : " top-[150px] self-end row-start-1"}`}
        >
          <div className="text-2xl font-bold">{title}</div>
        </div>
        <div className="col-start-1 row-start-2 relative">
          <div className={`absolute text-white text-2xl font-bold left-[60px] z-10 ${left?"top-[-16px]":"bottom-[-20px]"}`}>{number}</div>
          <svg
            className={`-rotate-90 w-[110%] relative ${left ? "-scale-x-100 " : ""}`}
            width="100%"
            height="auto"
            viewBox="0 0 258 198"
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
            <path d="M53 61H114" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div
        className={`md:hidden overflow-hidden grid items-center grid-cols-[1fr_160px_1fr] ${className}`}
      >
        <p
          className={`row-start-1 w-[120%] text-[12px] relative text-black font-semibold ${
            left ? "col-start-3 left-[40px]" : "right-[40px] text-left"
          }`}
        >
          {children}
        </p>
        <div className="flex relative flex-col col-start-2 row-start-1">
          <div
            className={`absolute z-10 text-xl font-semibold text-white ${
              left ? "left-[82%]" : "left-[12%]"
            }  top-[22%]`}
          >
            {number}
          </div>
          <svg
            className={`relative ${left ? "-scale-x-100 self-start right-[5%]" : "self-end left-[5%]"}`}
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
            <path d="M53 61H114" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>
        <div className="relative">
          <div
            className={`absolute text-black  font-bold w-[200%] ${left ? "right-[-35%] text-end" : "left-[-35%]"} top-[10%]`}
          >
            {title}
          </div>
        </div>
      </div>
    </>
  );
};

export default BootcampSigupStepsItem;
