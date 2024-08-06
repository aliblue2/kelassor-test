export const addCommaAtEnd = (str) => {
  if (str.charAt(str.length - 1) === ",") {
    return str;
  }
  return str + ",";
};
