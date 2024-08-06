export const validate = (data) => {
  const errors = {};

  if (!data.companyName.trim()) {
    errors.companyName = "نام شرکت خود را وارد کنید";
  } else {
    delete errors.companyName;
  }
  if (!data.website.trim()) {
    errors.website = "نام شرکت خود را وارد کنید";
  } else if (
    !/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(
      data.website
    )
  ) {
    errors.website = "آدرس معتبر وارد کنید";
  } else {
    delete errors.website;
  }
  if (!data.phone) {
    errors.phone = "شماره موبایل خود را وارد کنید";
  } else if (!/^0[0-9]{2,}[0-9]{7,}$/gi.test(data.phone)) {
    errors.phone = "شماره موبایل معتبر وارد کنید";
  } else {
    delete errors.phone;
  }
  if (!data.state) {
    errors.state = "شهر خود را وارد کنید";
  } else {
    delete errors.state;
  }
  if (!data.address) {
    errors.address = "آدرس خود را وارد کنید";
  } else {
    delete errors.address;
  }

  return errors;
};
