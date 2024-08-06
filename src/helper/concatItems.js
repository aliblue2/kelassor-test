export const concatItems = (arr) => {
  const result = arr.reduce((acc, crr) => {
    return acc + crr + ",";
  }, "");
  return result;
};
