import { NextPage } from "next";
import Image from "next/image";
import logoImage from "@/../public/logo.png";
import HeroMainTitle from "@/components/Landing/Hero/HeroMainTitle";
import WheelForm from "@/components/Landing/WheelSpin/WheelForm";
import { cookies } from "next/headers";
import WheelOtp from "@/components/Landing/WheelSpin/WheelOtp";
interface Props {}

const Page: NextPage<Props> = ({}) => {
  const discount = cookies().get("discountCode");

  return (
    <div className="w-full max-w-[600px] mx-auto h-full flex flex-col items-center justify-start gap-12">
      <Image
        className="max-w-28 mx-auto"
        src={logoImage}
        priority
        alt="kelaasor"
      />
      {!discount ? <WheelForm /> : <WheelOtp />}
      <HeroMainTitle />
    </div>
  );
};

export default Page;
