export const validate = (data) => {
  const errors = {};
  if (!data.name.trim()) {
    errors.name = "نام خود را وارد کنید";
  } else {
    delete errors.name;
  }

  if (!data.lastName.trim()) {
    errors.lastName = "نام خانوادگی خود را وارد کنید";
  } else {
    delete errors.lastName;
  }

  if (!data.email) {
    errors.email = "ایمیل خود را وارد کنید";
  } else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)
  ) {
    errors.email = "ایمیل معتبر وارد کنید";
  } else {
    delete errors.email;
  }

  if (!data.phone) {
    errors.phone = "شماره موبایل خود را وارد کنید";
  } else if (!/((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/gi.test(data.phone)) {
    errors.phone = "شماره موبایل معتبر وارد کنید";
  } else {
    delete errors.phone;
  }

  if (!data.password) {
    errors.password = "رمز عبور خود را وارد کنید";
  } else if (!/^.{6,}$/.test(data.password)) {
    errors.password = "رمز عبور باید حداقل ۶ کارکتر باشد";
  } else {
    delete errors.password;
  }

  if (!data.rePassword) {
    errors.rePassword = "تکرار رمز عبور خود را وارد کنید";
  } else if (data.password !== data.rePassword) {
    errors.rePassword = "تکرار رمز عبور صحیح نیست";
  } else {
    delete errors.rePassword;
  }

  return errors;
};
