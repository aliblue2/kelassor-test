export const validate = (data) => {
  const errors = {};

  if (!data.name.trim()) {
    errors.name = "نام خود را وارد کنید";
  } else {
    delete errors.name;
  }

  if (!data.lastName.trim()) {
    errors.name = "نام خانوادگی خود را وارد کنید";
  } else {
    delete errors.lastName;
  }

  if (data.avatar === "/icons/udash/resume/profile.png") {
    errors.avatar = "عکس خود را آپلود کنید";
  } else {
    delete errors.avatar;
  }

  if (!data.day) {
    errors.day === "روز تولد خود را انتخاب کنید";
  } else {
    delete errors.day;
  }
  if (!data.month) {
    errors.month === "ماه تولد خود را انتخاب کنید";
  } else {
    delete errors.month;
  }
  if (!data.year) {
    errors.year === "سال تولد خود را انتخاب کنید";
  } else {
    delete errors.year;
  }
  if (!data.gender) {
    errors.gender = "جنسیت خود را انتخاب کنید";
  } else {
    delete errors.gender;
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
  } else if (
    !/(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi.test(
      data.phone
    )
  ) {
    errors.phone = "شماره موبایل معتبر وارد کنید";
  } else {
    delete errors.phone;
  }
  if (!data.city) {
    errors.city = "شهر خود را وارد کنید";
  } else {
    delete errors.city;
  }
  if (!data.address) {
    errors.address = "آدرس خود را وارد کنید";
  } else {
    delete errors.address;
  }

  return errors;
};
