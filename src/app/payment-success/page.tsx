import { getPaymentStatus } from "@/requests/user-panel/getPaymentStatus";
import { cookies } from "next/headers";
import Link from "next/link";

//page component
const page = async () => {
  const res = await getPaymentStatus(cookies().get("session_id")?.value);
  return (
    <div className="flex gap-10 items-center flex-col grow justify-center">
        {res.successful ? (
          <>
            <h1 className="text-primary-base">پرداخت با موفقیت انجام شد</h1>
          </>
        ) : (
          <h1 className="text-error">مشکلی پیش آمد</h1>
        )}
        <Link href={"/user-panel"}>بازگشت به پنل کاربری </Link>
      </div>
  );
};

export default page;
