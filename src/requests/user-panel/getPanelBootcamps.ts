import { cookies } from "next/headers";

export const getPanelBootcamps = async (session_id: string|null) => {
  // const token = cookies().get("session_id");
  // if (!token) return undefined;
  const res = await fetch(
    `${process.env.BASE_URL}/profile/profileBootcamp.php`,
    {
      method: "POST",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
        hashed_id: session_id,
      }),
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data;
};
