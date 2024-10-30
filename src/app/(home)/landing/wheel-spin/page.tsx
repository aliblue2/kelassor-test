import { NextPage } from "next";

import WheelSpin from "@/components/Landing/WheelSpin/WheelSpin";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const discount = cookies().get("complete-otp")?.value;

  if (!discount) {
    return redirect("/landing");
  }

  return (
    <div>
      <WheelSpin discount={discount} />
    </div>
  );
};

export default Page;
