type getPanelPaymentsOutput = {
  amount: number;
  course: string;
  date: string;
  key: string;
  status: string;
};
export const getPanelPayments: ( session_id: string | undefined) => Promise<getPanelPaymentsOutput []>
= async (session_id) => {
  if (!session_id) throw new TypeError("cookie");
  return fetch(`${process.env.BASE_URL}/user/paymentHistory.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      id: session_id,
    }),
    cache: "no-store",
  }).then((res) => res.json());
};
