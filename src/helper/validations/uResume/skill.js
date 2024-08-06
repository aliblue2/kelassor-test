export const validate = (data) => {
  const errors = {};
  if (!data.name) {
    errors.name = "";
  } else {
    delete errors.name;
  }

  if (!data.level) {
    errors.level = "";
  } else {
    delete errors.level;
  }

  return errors;
};
