type getPaymentStatusOutput = {
  errorData: { errorCode: number; message: string };
  successful: boolean;
};
export const getPaymentStatus: (
  session_id: string | undefined,
) => Promise<getPaymentStatusOutput> = (session_id) =>
  fetch(`${process.env.BASE_URL}/profile/getPaymentStatus.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      // id: "f4388bfc74be348e4dfdda021ce7576e",
      id: session_id,
    }),
    cache: "no-store",
  }).then((res) => res.json());
