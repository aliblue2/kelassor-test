import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-dvh items-center justify-center gap-5 flex-col">
      <Image src="/logo.png" alt="logo" width={100} height={60} />
      <h1>صفحه مورد نظر پیدا نشد</h1>
      <h2>۴۰۴</h2>
      <Link className="hover:text-primary-base" href={"/"}>
        بازگشت به صفحه‌اصلی
      </Link>
    </div>
  );
}
