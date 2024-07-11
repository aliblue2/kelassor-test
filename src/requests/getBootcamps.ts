import { bootcampSimple } from "@/types/bootcamp";
import { course } from "@/types/course";

type getBootcampsOutput = { bootcamps: bootcampSimple[]; courses: course[] };

export const getBootcamps: () => Promise<getBootcampsOutput> = async () => {
  return fetch(`${process.env.BASE_URL}/header/header_sections.php`, {
    next: { revalidate: 3600 * 24 },
    method: "POST",
    body: JSON.stringify({
      API_KEY: process.env.API_KEY,
      Content_Type: process.env.Content_Type,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      res.bootcamps = res.bootcamps.filter(
        (item: bootcampSimple) => item.status !== "notactive"
      );
      return res;
    });
};
