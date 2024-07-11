"use client";

import { Loader2Icon } from "lucide-react";

//LoadingComponent component
const LoadingComponent = () => {
  return (
    <div className="flex grow items-center justify-center text-primary-base h-dvh">
      <Loader2Icon className="animate-spin" size={48} />
    </div>
  );
};

export default LoadingComponent;
