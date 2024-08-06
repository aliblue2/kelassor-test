export const validate = (data) => {
  const errors = {};
  if (!data.grade) {
    errors.grade = "";
  } else {
    delete errors.grade;
  }
  if (!data.field) {
    errors.field = "";
  } else {
    delete errors.field;
  }
  if (!data.institutionType) {
    errors.institutionType = "";
  } else {
    delete errors.institutionType;
  }
  if (!data.startYear) {
    errors.startYear = "";
  } else {
    delete errors.startYear;
  }
  if (!data.endYear) {
    errors.endYear = "";
  } else {
    delete errors.endYear;
  }

  return errors;
};
