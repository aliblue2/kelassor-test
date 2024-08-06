export const authLogout = async (session_id: string) =>
  fetch(`${process.env.BASE_URL}/loginSignup/logout.php`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      id: session_id,
    }),
  });
