import { bootcampSimple } from "@/types/bootcamp";
import { course } from "@/types/course";

type getBootcampsOutput = { bootcamps: bootcampSimple[]; courses: course[] };

export const getBootcamps: () => Promise<getBootcampsOutput>
= async () =>
  fetch(`${process.env.BASE_URL}/header/header_sections.php`, {
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
    }),
    cache: "no-store",
  }).then((res) => res.json());
