export const validate = (values) => {
  const errors = {};
  const { workSearchStage, workType, minWage, field } = values;

  if (!workSearchStage) {
    errors.workSearchStage = "وضعیت جستجوی کار خود را مشخص کنید";
  } else {
    delete errors.workSearchStage;
  }

  if (!workType) {
    errors.workType = "نوع کار شغل مورد علاقه خود را مشخص کنید";
  } else {
    delete errors.workType;
  }
  if (!minWage) {
    errors.minWage = "حداقل حقوق خود را مشخص کنید";
  } else {
    delete errors.min;
  }
  if (!field) {
    errors.field = "حوزه تخصصی مورد علاقه خود را مشخص کنید";
  } else {
    delete errors.field;
  }

  return errors;
};
