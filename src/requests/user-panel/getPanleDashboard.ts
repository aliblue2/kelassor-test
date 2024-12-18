export const getPanleDashboard = async (session_id: string | null|undefined) => {
  if (!session_id) throw new TypeError("no cookie")
  return fetch(`${process.env.BASE_URL}/user/userDashboard.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      id: session_id,
    }),
    cache: "no-store",
  }).then((res) => res.json());
};
