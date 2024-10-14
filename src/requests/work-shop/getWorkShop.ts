export const getWorkShopInfo = async (title: string) => {
  const response = await fetch(
    `${process.env.BASE_URL}/advance/advanceInfo.php`,
    {
      method: "POST",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
        main_title: title,
      }),
      cache: "no-store",
    }
  );

  if (response.status >= 400 || response.status >= 500) {
    throw new Error("!.خطا در سرور برای دریافت اطلاعات کارگاه‌");
  }
  if (!response.ok) {
    throw new Error("!.خطا در دریافت اطلاعات کارگاه‌");
  }

  const result = await response.json();

  return result;
};
