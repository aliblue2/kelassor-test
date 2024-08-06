export const validate = (data) => {
  const errors = {};
  if (!data.userName) {
    errors.userName = "لطفا شماره موبایل خود را وارد کنید";
  } else if (!/((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/gi.test(data.userName)) {
    errors.userName = "شماره موبایل معتبر وارد کنید";
  } else {
    delete errors.userName;
  }

  if (!data.password) {
    errors.password = "لطفا رمز عبور خود را وارد کنید";
  } else if (!/^.{6,}$/.test(data.password)) {
    errors.password = "رمز عبور باید حداقل ۶ کارکتر باشد";
  } else {
    delete errors.password;
  }
  return errors;
};
