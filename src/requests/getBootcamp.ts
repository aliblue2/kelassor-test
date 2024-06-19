import { bootcamp } from "@/types/bootcamp";

type getBootcampInput = { bootcamp: string }; //bootcamp name
type getBootcampOutput = bootcamp;

export const contentDestructure = (str: string) => {
  const items = str.split(";");
  const structuredItems = items.map((item) => {
    const splited = item.split("(");
    const removeJunk = splited.map((ind) =>
      ind.replaceAll("\n", "").replaceAll(")", "")
    );
    return removeJunk;
  });
  structuredItems.pop();
  const final = structuredItems.map((item) => {
    return {
      course: item[0],
      subCourse: item[1].includes(",")
        ? item[1].split(",")
        : item[1].split("،"),
    };
  });
  return final;
};
const bootcampCleaner: (bc: any) => bootcamp = (bc) => {
  const {
    pictures,
    tech_logo,
    contents,
    prices,
    price,
    part1,
    part2,
    part3,
    unix_date,
  } = bc;
  const pricesArr = prices.split(",");
  const part1Arr = part1.split(";");
  const part2Arr = part2.split(";");
  const part3Arr = part3.split(";");
  const bootcamp = {
    ...bc,
    pictures: pictures.split(","),
    tech_logo: tech_logo.split(","),
    contents: contentDestructure(contents),
    full_price: pricesArr[0],
    min_price: pricesArr[1],
    full_parts: [part1Arr[0], part2Arr[0], part3Arr[0]],
    min_parts: [part1Arr[1], part2Arr[1], part3Arr[1]],
    price: price.split(";"),
    unix_date: unix_date * 1000,
  };
  delete bootcamp.prices;
  delete bootcamp.part1;
  delete bootcamp.part2;
  delete bootcamp.part3;
  return bootcamp;
};

export const getBootcamp: (
  input: getBootcampInput
) => Promise<getBootcampOutput> = async (input) => {
  const data = await fetch(
    `${process.env.BASE_URL}/bootcamp/bootcampInfo.php`,
    {
      method: "POST",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
        main_title: input.bootcamp,
      }),
      cache: "no-store",
    }
  ).then((res) => {
    return res.json();
  });
  return bootcampCleaner(data);
};
