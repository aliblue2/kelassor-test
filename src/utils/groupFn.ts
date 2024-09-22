import { blog } from "./database/blog";

export const groupFn = (input: any[]): blog[][] => {
  let res = [];
  let j = 0;
  while (j < input.length) {
    let temp = [];
    for (let i = 0; i < 3; i++, j++) {
      if (j >= input.length) break;
      temp.push(input[j]);
    }
    res.push(temp);
  }
  return res;
};
