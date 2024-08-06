type checkNumberOutput = { active: undefined | number; statusCode: 100 | 200 };
export const authCheckNumber: (input: {
  number: string;
}) => Promise<checkNumberOutput> = async (input) => {
  return fetch(`${process.env.BASE_URL}/loginSignup/checkPhoneNumber.php`, {
    cache: "no-store",
    method: "POST",
    body: JSON.stringify({
      phone: input.number,
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
    }),
  }).then((res) => res.json());
};
