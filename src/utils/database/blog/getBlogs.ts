import { blog, blogCategory } from "../blog";
import pool from "../db";

export async function getBlogsByCategory(
  category?: blogCategory,
): Promise<{ view: blog[]; date: blog[] }> {
  const connection = await pool.getConnection();
  const [date] = await connection.query(
    `SELECT * from blogs where category = '${category}' order by created_at desc`,
  );
  const [view] = await connection.query(
    `SELECT * from blogs where category = '${category} order by view desc'`,
  );
  connection.end();
  return { view, date } as { view: blog[]; date: blog[] };
}
export async function getBlogs(): Promise<blog[]> {
  const connection = await pool.getConnection();
  const [rows] = await connection.query("SELECT * from blogs");
  connection.end();
  return rows as blog[];
}
export async function getBlog(slug: string): Promise<blog[]> {
  const connection = await pool.getConnection();
  connection.query(`UPDATE blogs SET view = view + 1 WHERE slug = '${slug}'`);
  const [rows] = await connection.query(
    `SELECT * from blogs where slug = '${slug}'`,
  );
  connection.end();
  return rows as blog[];
}
