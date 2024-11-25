export type checkoutRespones = {
  success: boolean;
  message: string;
};

export const checkoutAdvance = async (
  id: string | undefined,
  title: string,
  advanceId: number,
  file: File | null
): Promise<checkoutRespones> => {
  const data = new FormData();
  data.append("id", id!!);
  data.append("title", title);
  data.append("advanceId", advanceId.toString());
  data.append("file", file!!);

  const response = await fetch(
    `${process.env.BASE_URL}/profile/uploadPayment.php`,
    {
      method: "POST",
      body: data,
    }
  );

  const result = await response.json();
  if (result.statusCode === 200) {
    return {
      success: true,
      message: "رسید شما با موفقیت ارسال شد.!",
    };
  } else if (result.statusCode === 101) {
    return {
      success: false,
      message: "ارسال رسید با خطا مواجه شد.",
    };
  } else if (result.statusCode === 102) {
    return {
      success: false,
      message: "فرمت فایل اشتباه است.! (jpeg , jpg , png)",
    };
  } else {
    return {
      success: false,
      message: "رسید شما ارسال شده است اما در دیتابیش ذخیره نشده است.",
    };
  }
};
