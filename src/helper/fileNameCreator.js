export const fileNameCreator = (fileName) => {
  const replacedInvalidChars = fileName
    .replaceAll(" ", "_")
    .replaceAll("\\", "_")
    .replaceAll("&", "_");
  return replacedInvalidChars;
};
