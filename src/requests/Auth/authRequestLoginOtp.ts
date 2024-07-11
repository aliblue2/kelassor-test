type authRequestLoginOtpOutput = { statusCode: 100 | 200; message: string };
export const authRequestLoginOtp: (input: {
  number: string;
}) => Promise<authRequestLoginOtpOutput> = async (input) => {
  return fetch(`${process.env.BASE_URL}/loginSignup/loginOTP.php`, {
    method: "POST",
    cache: "no-cache",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      phone: input.number,
    }),
  }).then((res) => res.json());
};
