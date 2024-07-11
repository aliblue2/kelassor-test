type authSigninPasswordOutput = {
  statusCode: number;
  message: string;
  hashed_id: string;
};
export const authSigninPassword: (input: {
  phone: string;
  password: string;
}) => Promise<authSigninPasswordOutput> = (input) =>
  fetch(`${process.env.BASE_URL}/loginSignup/passwordLogin.php`, {
    method: "POST",
    cache: "no-cache",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      phone: input.phone,
      password: input.password,
    }),
  }).then((res) => res.json());
