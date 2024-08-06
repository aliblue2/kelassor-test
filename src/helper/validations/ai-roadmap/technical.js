export const validate = (values) => {
  const errors = {};
  const { techs, hours } = values;

  if (!techs.length) {
    errors.techs = "مهارت های خود را وارد کنید";
  } else {
    delete errors.techs;
  }

  if (!hours) {
    errors.hours = "حداقل ساعت آموزشی را مشخص کنید";
  } else {
    delete errors.hours;
  }

  return errors;
};
