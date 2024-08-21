import { getPaymentStatus } from "@/requests/user-panel/getPaymentStatus";
import { cookies } from "next/headers";
import Link from "next/link";

const messages = {
  paymentFailed: "پرداخت ناموفق. دوباره تلاش کنید!",
  paymentUrlError: "خطا در دریافت اطلاعات، چند دقیقه بعد تلاش کنید!",
  paymentReverted:
    "تراکنش شما ثبت نگردید. مبلغ کسر شده به حساب شما باز خواهد گشت!",
};
//page component
const page = async ({
  searchParams,
}: {
  searchParams: {
    transactionId: string | undefined;
    message:
      | "paymentFailed"
      | "paymentUrlError"
      | "paymentReverted"
      | undefined;
  };
}) => {
  let res;
  if (!searchParams.transactionId) {
    res = { successful: false };
  } else {
    res = await getPaymentStatus(
      cookies().get("session_id")?.value,
      searchParams.transactionId,
    );
    console.log(453222, res);
  }
  return (
    <div className="flex gap-10 items-center flex-col grow justify-center">
      {res.successful === "true" ? (
        <>
          <h1 className="text-primary-base">پرداخت با موفقیت انجام شد</h1>
          <div>شناسه تراکنش : {searchParams.transactionId}</div>
        </>
      ) : (
        <>
          <h1 className="text-error">مشکلی پیش آمد</h1>
          {searchParams.message && <div>messages[searchParams.message]</div>}
        </>
      )}
      <Link href={"/user-panel"}>بازگشت به پنل کاربری</Link>
    </div>
  );
};

export default page;
