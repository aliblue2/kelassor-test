"use client";

import { Loader2Icon } from "lucide-react";
import logoImage from "../../../public/logo.png";
import Image from "next/image";

//LoadingComponent component
const LoadingComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 grow text-primary-base h-dvh">
      <Image
        src={logoImage}
        alt="kelaasor logo image"
        width={200}
        height={150}
      />
      <Loader2Icon className="animate-spin" size={48} />
    </div>
  );
};

export default LoadingComponent;
