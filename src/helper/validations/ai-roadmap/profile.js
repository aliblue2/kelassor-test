export const validate = (values) => {
  const errors = {};
  const {
    city,
    currentProfession,
    experience,
    isStudent,
    currentWork,
    isEmployed,
  } = values;
  if (!city.trim()) {
    errors.city = "لطفا نام شهر خود را وارد کنید";
  } else {
    delete errors.city;
  }
  if (!currentProfession.trim()) {
    errors.currentProfession = "لطفا تخصص فعلی خود را وارد کنید";
  } else {
    delete errors.currentProfession;
  }
  if (!experience) {
    errors.experience = "لطفا سابقه کاری خود را وارد کنید";
  } else {
    delete errors.experience;
  }

  if (!isStudent) {
    errors.isStudent = "لطفا وضعیت تحصیل خود را مشخص کنید";
  } else {
    delete errors.isStudent;
  }
  if (
    !isEmployed &&
    (!currentWork.title.trim() || !currentWork.company.trim())
  ) {
    errors.currentWork = "لطفا موقعیت شغلی خود را وارد کنید";
  } else {
    delete errors.currentWork;
  }

  return errors;
};
