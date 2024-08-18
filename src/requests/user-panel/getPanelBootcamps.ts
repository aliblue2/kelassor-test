export type getPanelBootcampsOutput = {
  id: number;
  isPaid: 0 | 1 | 2;
  eligible: boolean;
  name: string;
  phone: string;
  bootcampTitle: string;
  start: string;
  length: string;
  price: string;
  transactionId: string;
  link: string;
  tid: string;
};
export const getPanelBootcamps: (
  session_id: string | undefined,
) => Promise<getPanelBootcampsOutput[]> = async (session_id) => {
  if (!session_id) throw new TypeError("cookie");
  return fetch(`${process.env.BASE_URL}/profile/bootcampPay.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      hashed_id: session_id,
    }),
    cache: "no-store",
  }).then((res) => res.json());
};
