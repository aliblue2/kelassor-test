type getPaymentStatusOutput = {
  errorData: { errorCode: number; message: string };
  successful: boolean;
};
export const getPaymentStatus: (
  session_id: string | undefined,
  tid: string,
) => Promise<getPaymentStatusOutput> = (session_id, tid) =>
  fetch(`${process.env.BASE_URL}/profile/getPaymentStatus.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      id: session_id,
      transactionId: tid,
    }),
    cache: "no-store",
  }).then((res) => res.json());
