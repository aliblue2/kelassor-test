"use server";
import pool from "../db";

export type category = { name: string; tag: string };
export async function postCategory(data: { name: string; tag: string }) {
  await pool.query(`INSERT INTO categories (name, tag) VALUES (?,?) `, [
    data.name,
    data.tag,
  ]);
}
export async function getCategories(): Promise<category[]> {
  const [rows] = await pool.query(`SELECT * from categories `);
  return rows as category[];
}
