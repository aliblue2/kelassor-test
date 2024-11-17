
export async function getBootcamps() {
  const response = await fetch(
    `${process.env.BASE_URL}/header/header_sections.php`,
    {
      method: "POST",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
      }),
      cache : "no-store"
    }
  );

   if (response.status >= 400 || response.status >= 500) {
    throw new Error("!.خطا در سرور برای دریافت اطلاعات بوتکمپ ها");
  }
  if (!response.ok) {
    throw new Error("!.خطا در دریافت اطلاعات بوتکمپ ها");
  }

  const {bootcamps}  = await response.json()
  return bootcamps



}
