type authRegisterInput = {
  name: string;
  lastname: string;
  password: string;
  session_id: string;
};
type authRegisterOutput = { statusCode: 100 | 200; message: string };
export const authRegister: (
  input: authRegisterInput
) => Promise<authRegisterOutput> = async (input) => {
  return fetch(`${process.env.BASE_URL}/loginSignup/userDataRegistration.php`, {
    cache: "no-cache",
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      name: input.name,
      lastname: input.lastname,
      password: input.password,
      hashed_id: input.session_id,
    }),
  }).then((res) => res.json());
};
