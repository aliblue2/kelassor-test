"use server";
import pool from "../db";

export const getComments = async (blogId: number) => {
  const [rows] = await pool.query(
    "select * from comments where blogId = ? order by id desc",
    [blogId],
  );
  let comments = rows as comment[];
  return comments
    .map((item) => {
      item.replies = [];
      return item;
    })
    .map((item) => {
      if (item.replyId) {
        comments.find((item2) => item2.id === item.replyId)?.replies.push(item);
      }
      return item;
    })
    .filter((item) => !item.replyId);
};
export const postComment = async (
  name: string,
  email: string,
  content: string,
  blogId: number,
) => {
  pool.query(
    "insert into comments(author, content, blogId, email) values(?,?,?,?)",
    [name, content, blogId, email ? email : null],
  );
};
