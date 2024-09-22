"use server";
import pool from "../db";

export async function activateBlog(id: number, active: number) {
  console.log(id, active);
  try {
    pool.query(`UPDATE blogs SET active = ? WHERE id = ? `, [active, id]);
    return { statusCode: 200 };
  } catch (e) {
    console.log("db ", e);
    return { statusCode: 500 };
  }
}
