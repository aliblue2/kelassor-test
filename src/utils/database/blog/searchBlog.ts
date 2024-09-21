"use server";
import { revalidatePath } from "next/cache";
import pool from "../db";
import { blog } from "../blog";

export async function searchBlogs(query: string): Promise<blog[]> {
  if (!query) return [];

  const keywords = query.split(" ");
  const whereClause = keywords
    .map(() => `(title LIKE ? OR description LIKE ?)`)
    .join(" AND ");

  const values = keywords.flatMap((word) => [`%${word}%`, `%${word}%`]);

  const [rows] = await pool.query(
    `SELECT * FROM blogs WHERE ${whereClause}`,
    values,
  );

  // Optional: Revalidate path if needed to refresh data on the client side
  revalidatePath("/");
  console.log(2345999300000, rows);

  return rows as blog[];
}
