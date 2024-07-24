export type userInfo = {
  id: number;
  name: string;
  lastname: string;
  nationalCode: string;
  gender: string;
  maritalStatus: string;
  birthdate: string;
  email: string;
  city: string;
  district: number;
  aboutMe: string;
};
type getUserInfoOutput = { statusCode: number; profileInfo: userInfo };
export const getUserInfo: (
  session_id: string | null
) => Promise<getUserInfoOutput> = async (session_id) => {
  if (!session_id) return undefined;
  return fetch(`${process.env.BASE_URL}/profile/getProfileInfo.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      hashedId: session_id,
    }),
    cache: "no-store",
  }).then((res) => res.json());
};
