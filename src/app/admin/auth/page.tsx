import Login from "@/components/Admin/Login";
import { NextPage } from "next";
import Image from "next/image";
import kelaasorImage from "@/../public/aboutUs/1.jpg";
import kelaasorLogo from "@/../public/logo.png";
interface Props {}

const Page: NextPage<Props> = async ({}) => {
  return (
    <div className="flex items-center justify-between h-full">
      <div className="hidden w-8/12 h-full min-h-screen md:block">
        <Image
          priority
          src={kelaasorImage}
          alt="kelaasor"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-5 p-5 md:w-4/12">
        <Image
          priority
          src={kelaasorLogo}
          alt="kelaasor-logo"
          className="max-w-32"
        />
        <Login />
      </div>
    </div>
  );
};

export default Page;
