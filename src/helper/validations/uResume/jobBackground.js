export const validate = (data) => {
  const errors = {};
  if (!data.companyName) {
    errors.companyName = "";
  } else {
    delete errors.companyName;
  }
  if (!data.position) {
    errors.position = "";
  } else {
    delete errors.position;
  }
  if (!data.duration) {
    errors.duration = "";
  } else {
    delete errors.duration;
  }
  return errors;
};
