export type loginInput = { username: string; password: string };
export const loginRequest = (input: loginInput) =>
  fetch(`${process.env.BASE_URL}/loginSignup/login.php`, {
    cache:"no-store",
    method: "POST",
    body: JSON.stringify({
      userName: input.username,
      password: input.password,
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
    }),
  });
