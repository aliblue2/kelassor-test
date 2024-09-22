"use server";
import pool from "../db";

export async function postBlog(data: {
  title: string;
  content: string;
  category: string;
  slug: string;
  author: string;
  description: string;
  metadescription: string;
  bannerUrl: string;
}) {
  try {
    await pool.query(
      `INSERT INTO blogs
    (title, content, category, slug, author, description, meta_description,  banner) VALUES (  ? , ? , ? , ? , ? , ? , ? , ? )`,
      [
        data.title,
        data.content,
        data.category,
        data.slug,
        data.author,
        data.description,
        data.metadescription,
        // new Date().toISOString().slice(0, 19).replace("T", " "),
        // new Date().toISOString().slice(0, 19).replace("T", " "),
        data.bannerUrl,
      ],
    );
    return { message: "ok" };
  } catch (e:any) {
    // throw e;
    return { message: e.code};

  }
}
