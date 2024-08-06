export const removeComma = (str) => {
  if (str.charAt(str.length - 1) === ",") {
    return str.slice(0, -1);
  }
  return str;
};
