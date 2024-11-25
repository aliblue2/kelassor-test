import { env } from "process";

export async function getUsersBootcamp(
  hashedID: string,
  bootcampName?: string | string[],
  page?: number,
  callResult?: string
) {
  const response = await fetch(
    `${process.env.BASE_URL}/admin/bootcamp_users.php`,
    {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
        id: hashedID,
        page,
        itemsPerPage: "20",
        search: "",
        bcName: bootcampName,
        result: "",
        callResult,
      }),
    }
  );

  if (response.status >= 400 || response.status >= 500) {
    throw new Error("cant fetch all users. server error");
  }

  if (!response.ok) {
    throw new Error("cant fetch all users ");
  }

  const result = await response.json();
  return result;
}
