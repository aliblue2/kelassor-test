export const emailValidation = (data) => {
  if (!data.length.trim()) {
    return "لطفا ایمیل خود را وارد کنید";
  } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
    return true;
  } else {
    return "ایمیل معتبر نیست";
  }
};

export const phoneValidation = (data) => {
  if (!data.length) {
    return "لطفا شماره موبایل خود را وارد کنید";
  } else if (
    /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi.test(
      data
    )
  ) {
    return true;
  } else {
    return "شماره موبایل معتبر نیست";
  }
};

export const passwordValidation = (data) => {
  if (!data.length) {
    return "رمز عبور خود را وارد کنید";
  } else if (/^.{6,}$/.test(data)) {
    return true;
  } else {
    return "رمز عبور معتبر وارد کنید";
  }
};
