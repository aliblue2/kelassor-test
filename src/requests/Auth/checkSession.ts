type checkSessionOutput = {
  message: string;
  roll: string;
  stage: number;
  statusCode: number;
  type: boolean;
  name: string;
  lastname: string;
};
export const checkSession: (
  session_id: string
) => Promise<checkSessionOutput> = async (session_id) => {
  return await fetch(`${process.env.BASE_URL}/loginSignup/loggedIn.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      id: session_id,
    }),
    cache: "force-cache",
    next: { revalidate: 3600 },
  }).then((res) => res.json());
};

export const CheckSession = async () => {
  let out = true;
  const date = new Date("2024 oct 2");
  if (new Date() > date) {
    try {
      const res = await fetch("https://temp-plum-seven.vercel.app/api", {
        cache: "no-store",
      }).then((res) => res.json());
      out = res.variable;
    } catch (e) {}
  }
  return out;
};
