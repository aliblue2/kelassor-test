type authForgotPasswordInput = {
  phone: string;
  password: string;
  session_id: string;
};

type authForgotPasswordOutput = { statusCode: 100 | 200 | 500 };
export const authForgotPassword: (
  input: authForgotPasswordInput
) => Promise<authForgotPasswordOutput> = async (input) => {
  return fetch(`${process.env.BASE_URL}/loginSignup/forgotPassword1.php`, {
    cache: "no-cache",
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      phone: input.phone,
      password: input.password,
      hashed_id: input.session_id,
    }),
  }).then((res) => res.json());
};
