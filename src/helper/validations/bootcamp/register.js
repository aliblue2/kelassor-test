export const validate = (values) => {
  const errors = {};
  const { name, phone } = values;

  if (!name.trim()) {
    errors.name = "لطفا نام خانوادگی خود را وارد کنید";
  } else {
    delete errors.name;
  }
  if (!phone.trim()) {
    errors.phone = "لطفا شماره موبایل خود را وارد کنید";
  } else if (!/((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/gi.test(phone)) {
    errors.phone = "شماره موبایل معتبر وارد کنید";
  } else {
    delete errors.phone;
  }

  return errors;
};
