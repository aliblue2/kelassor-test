export const validate = (data) => {
  const { fullName, phone, email, address, payType } = data;
  const errors = {};

  if (!fullName.trim()) {
    errors.fullName = "نام و نام‌خانوادگی خود را وارد کنید";
  } else {
    delete errors.fullName;
  }

  if (!phone.trim()) {
    errors.phone = "شماره تلفن خود را وارد کنید";
  } else if (!/((0?9)|(\+?989))\d{9}/g.test(phone)) {
    errors.phone = "شماره تلفن معتبر وارد کنید";
  } else {
    delete errors.phone;
  }

  if (!email.trim()) {
    errors.email = "ایمیل خود را وارد کنید";
  } else if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  ) {
    errors.email = "ایمیل معتبر وارد کنید";
  } else {
    delete errors.email;
  }

  if (!address.trim()) {
    errors.address = "لطفا آدرس خود را وارد کنید";
  } else {
    delete errors.address;
  }

  if (!payType) {
    errors.payType = "لطفا نوع پرداخت خود را انتخاب کنید";
  } else {
    delete errors.payType;
  }

  return errors;
};
