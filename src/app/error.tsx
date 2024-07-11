"use client"; // Error components must be Client Components

import Image from "next/image";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // console.error(error);
  }, [error]);

  return (
    <div className="flex h-dvh items-center justify-center gap-5 flex-col">
      <Image src="/logo.png" alt="logo" width={100} height={60} />
      <h1>مشکلی پیش آمد</h1>
      <button
        className="hover:text-primary-base"
        onClick={
          () => reset()
        }
      >
        تلاش مجدد
      </button>
    </div>
  );
}
