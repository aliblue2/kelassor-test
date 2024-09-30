"use server";
import { blog} from "../blog";
import pool from "../db";


export async function getBlogs({
  justActive = false,
  category,
}: {
  justActive?: boolean;
  category?: string;
}): Promise<blog[]> {
  let res;
  const allQ =
    "SELECT id, title, slug, banner, description, active from blogs " +
    (category ? " where category = ?" : "") +
    " order by created_at desc";
  const justActiveQ =
    "SELECT id, title, slug, banner, description, active from blogs where active = 1 " +
    (category ? " and category = ?" : "") +
    " order by created_at desc";
  const [rows] = await pool.query(
    justActive ? justActiveQ : allQ,
    category ? [category] : undefined,
  );
  res = rows;
  return res as blog[];
}
  


export async function getBlogsByView({
  justActive = false,
  category,
}: {
  justActive: boolean;
  category?: string;
}): Promise<blog[]> {
  let res;
  const allQ =
    "SELECT id, title, slug, banner, description, active from blogs " +
    (category ? " where category = ?" : "") +
    " order by view_count desc";
  const justActiveQ =
    "SELECT id, title, slug, banner, description, active from blogs where active = 1 " +
    (category ? " and category = ?" : "") +
    " order by view_count desc";
  const [rows] = await pool.query(
    justActive ? justActiveQ : allQ,
    category ? [category] : undefined,
  );
  res = rows;
  return res as blog[];
}

export async function getBlog(slug: string): Promise<blog[]> {
  let res;
  pool.query(`UPDATE blogs SET view_count = view_count + 1 WHERE slug = ? `, [
    slug,
  ]);
  const [rows] = await pool.query(`SELECT * from blogs where slug = ?`, [slug]);
  res = rows;
  return res as blog[];
}
