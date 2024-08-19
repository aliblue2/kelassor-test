import { getPaymentStatus } from "@/requests/user-panel/getPaymentStatus";
import { cookies } from "next/headers";
import Link from "next/link";

//page component
const page = async ({
  searchParams,
}: {
  searchParams: { transactionId: string | undefined };
}) => {
  let res;
  if (!searchParams.transactionId) {
    res = { successful: false };
  } else {
    res = await getPaymentStatus(
      cookies().get("session_id")?.value,
      searchParams.transactionId,
    );
  }
  return (
    <div className="flex gap-10 items-center flex-col grow justify-center">
      {res.successful ? (
        <>
          <h1 className="text-primary-base">پرداخت با موفقیت انجام شد</h1>
          <div>شناسه تراکنش : {searchParams.transactionId}</div>
        </>
      ) : (
        <h1 className="text-error">مشکلی پیش آمد</h1>
      )}
      <Link href={"/user-panel"}>بازگشت به پنل کاربری </Link>
    </div>
  );
};

export default page;
