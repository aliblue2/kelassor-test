export type postUserInfoInput = {
  name: string;
  lastname: string;
  city: string;
  nationalCode: string;
  gender: string;
  maritalStatus: string;
  birthDate: number;
  email: string;
  district: string;
  aboutMe: string;
  hashedId: string;
};
export const postUserInfoFront = async (input: postUserInfoInput) => {
  return fetch(`/api/account`, {
    method: "POST",
    body: JSON.stringify({
      ...input,
    }),
    cache: "no-store",
  }).then((res) => res.json());
};
export const postUserInfo = async (input: postUserInfoInput) => {
  return fetch(`https://kelaasor.ir/API/test/profileInfo.php`, {
    method: "POST",
    headers: {
      Authorization: "Bearer 123",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...input,
    }),
    cache: "no-store",
  }).then((res) => res.json());
};
