"use client";

import { getPanelBootcampsOutput } from "@/requests/user-panel/getPanelBootcamps";

//PanelBootcampCancel component
type PanelBootcampCancelProps = { data: getPanelBootcampsOutput };
const PanelBootcampCancel = ({ data }: PanelBootcampCancelProps) => {
  return (
    <div>
      <a
        href={
          process.env.BASE_URL +
          "/profile/snapCancel.php?transactionId=" +
          data.tid
        }
        target="_blank"
        className="text-error"
      >
        لغو پرداخت قسطی
      </a>
    </div>
  );
};

export default PanelBootcampCancel;
