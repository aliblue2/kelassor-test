export type syllabus = { course: string; subCourse: string[] };
export type bootcampSimple = {
  header_title: string;
  logo: string;
  status: "active" | "notactive" | "expired";
  url: string;
  logo_banner: string;
};
export type bootcamp = {
  capacity: number;
  contents: syllabus[];
  features: string;
  full_capacity: number;
  guarantee: number;
  header_title: string;
  id: number;
  intro: string;
  length: string;
  logo: string;
  logo_banner: string;
  main_title: string;
  not_appropriate: string;
  num_price: number;
  part1: string;
  part2: string;
  part3: string;
  pictures: string[];
  price: string[];
  prices: string;
  second_title: string;
  start: string;
  status: "active" | "notactive" | "expired";
  teachers: teacher[];
  teachers_id: string;
  tech_logo: string[];
  unix_date: number;
  url: string;
};
