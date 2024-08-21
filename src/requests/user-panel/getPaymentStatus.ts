type getPaymentStatusOutput = {
  errorData: { errorCode: number; message: string };
  successful: "false" | "true";
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
      //id: "f4388bfc74be348e4dfdda021ce7576e",
      transactionId: tid,
    }),
    cache: "no-store",
  }).then((res) => res.json());
