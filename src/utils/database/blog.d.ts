export type blogCategory = "design" | "programming" | "hr" | "marketing";
export interface blog {
  id: number;
  active:number;
  slug: string;
  title: string;
  category: string;
  content: string;
  author: string;
  created_at: Date;
  updated_at: Date;
  banner: string;
  description: string;
  meta_description: string;
}
