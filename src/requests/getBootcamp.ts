import { bootcamp } from "@/types/bootcamp";

type getBootcampInput = { bootcamp: string }; //bootcamp name
type getBootcampOutput = bootcamp;

export const getBootcamp: (input: getBootcampInput) => Promise<getBootcampOutput>
= (input) =>
  fetch(`${process.env.BASE_URL}/bootcamp/bootcampInfo.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
      main_title: input.bootcamp,
    }),
    cache: "no-store",
  }).then((res) => res.json());
