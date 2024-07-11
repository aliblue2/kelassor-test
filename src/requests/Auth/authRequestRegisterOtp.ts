type authRequestRegisterOtpOutput = { statusCode: 100 | 200; message: string };
export const authRequestRegisterOtp: (input: {
  number: string;
}) => Promise<authRequestRegisterOtpOutput> = async (input) => {
  return fetch(`${process.env.BASE_URL}/loginSignup/registerOTP.php`, {
    method: "POST",
    cache: "no-cache",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      phone: input.number,
    }),
  }).then((res) => res.json());
};
