export const getWorkShopsHeader = async () => {
  const response = await fetch(`${process.env.BASE_URL}/header/advance.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
    }),
    cache: "no-store",
  });

  if (response.status >= 400 || response.status >= 500) {
    throw new Error("!.خطا در سرور برای دریافت اطلاعات کارگاه‌ها");
  }
  if (!response.ok) {
    throw new Error("!.خطا در دریافت اطلاعات کارگاه‌ها");
  }

  const result = await response.json();

  return result;
};

export const getWorkShops = async () => {
  const response = await fetch(
    `${process.env.BASE_URL}/advance/allAdvance.php`,
    {
      method: "POST",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
      }),
      cache: "no-store",
    }
  );

  if (response.status >= 400 || response.status >= 500) {
    throw new Error("!.خطا در سرور برای دریافت اطلاعات کارگاه‌ها");
  }
  if (!response.ok) {
    throw new Error("!.خطا در دریافت اطلاعات کارگاه‌ها");
  }

  const result = await response.json();

  return result;
};
