export const validate = (data) => {
  const errors = {};
  if (!data.code) {
    errors.code = "کد ارسال شده را وارد کنید";
  } else {
    delete errors.code;
  }

  if (!data.newPassword) {
    errors.newPassword = "رمز عبور جدید خود را وارد کنید";
  } else if (!/^.{6,}$/.test(data.newPassword)) {
    errors.newPassword = "رمز عبور باید حداقل ۶ کارکتر باشد";
  } else {
    delete errors.newPassword;
  }

  return errors;
};
