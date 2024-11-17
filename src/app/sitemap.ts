import { getBootcamps } from "@/requests/getBootcamps";
import { bootcampSimple } from "@/types/bootcamp";

export default async function sitemap() {
  const  bootcamps : bootcampSimple[] = await getBootcamps();
  const baseUrl = "https://kelaasor.ir/";

  const bootcampMap = bootcamps.map((item) => {
    return { url: baseUrl + "bootcamp/" + item.url, lastModified: new Date() };
  });
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: baseUrl + "bootcamp",
      lastModified: new Date(),
    },
    ...bootcampMap,
    {
      url: baseUrl + "about-us",
      lastModified: new Date(),
    },
  ];
}
