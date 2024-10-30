import { NextPage } from "next";
import Image from "next/image";
import logoImage from "@/../public/logo.png";
import HeroMainTitle from "@/components/Landing/Hero/HeroMainTitle";
import WheelForm from "@/components/Landing/WheelSpin/WheelForm";
import { cookies } from "next/headers";
import WheelOtp from "@/components/Landing/WheelSpin/WheelOtp";
import WheelSpin from "@/components/Landing/WheelSpin/WheelSpin";
import WheelContainer from "@/components/Landing/WheelSpin/WheelContainer";
interface Props {}

const Page: NextPage<Props> = ({}) => {
  const discount = cookies().get("discountCode")?.value;
  const otp = cookies().get("complete-otp")?.value;

  return (
    <>
      <Image
        className="max-w-28 mx-auto overflow-hidden"
        src={logoImage}
        priority
        alt="kelaasor"
      />
      <WheelContainer ocompleteOtp={otp} discount={discount} />
      <HeroMainTitle />
    </>
  );
};

export default Page;
