import { syllabus } from "./bootcamp";

export interface WorkShopMain {
  url: string;
  status: "active" | "notactive" | "expired" | "reserve";
  logo: string;
  header_title: string;
  capacity: number;
  logo_banner: string;
}

export interface workShopTeacher {
  id: number;
  name: string;
  company: string;
  position: string;
  logo: string;
  picture: string;
  linkedin: string;
}

export interface WorkShopFeedBack {
  id: number;
  name: string;
  content: string;
}

export interface WorkShopSponser {
  sponser_link: string;
}

export interface WorkShop {
  id: number;
  main_title: string;
  second_title: string;
  date: Date;
  teachers: workShopTeacher[];
  price: number;
  level: string;
  description: string;
  status: "active" | "notactive" | "expired" | "reserve";
  feedbacks: WorkShopFeedBack[];
  logo: string;
  intro: string;
  features: string;
  pictures: string;
  start: string;
  contents: string;
  length: string;
  header_title: string;
  url: string;
  logo_banner: string;
  capacity: 20;
  full_capacity: 20;
  sponsers: WorkShopSponser[];
}
