export type getPanelDashboardOutput = {
  amount: number;
  course: string;
  date: string;
  key: string;
  length: string;
  logo_banner: string;
  status:string;
};
export const getPanelDashboard: (
  session_id: string | undefined
) => Promise<getPanelDashboardOutput[]> = async (session_id) => {
  if (!session_id) throw new TypeError("cookie");
  return fetch(`${process.env.BASE_URL}/profile/profileBootcamp.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      id: session_id,
    }),
    cache: "no-store",
  }).then((res) => res.json());
};
