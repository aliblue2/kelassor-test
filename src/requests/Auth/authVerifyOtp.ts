type authVerifyOtpOutput = {
  statusCode: 200 | 100 | 500 | 101;
  message: string;
  id: string;
};
export const authVerifyOtp: (input: {
  number: string;
  otp: string;
}) => Promise<authVerifyOtpOutput> = async (input) => {
  return fetch(`${process.env.BASE_URL}/loginSignup/otpVerification.php`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      phone: input.number,
      otp: input.otp,
    }),
  }).then((res) => res.json());
};
