export const validate = (data) => {
  const errors = {};
  if (!data.name) {
    errors.name = "";
  } else {
    delete errors.name;
  }
  if (!data.speaking) {
    errors.speaking = "";
  } else {
    delete errors.speaking;
  }
  if (!data.writing) {
    errors.writing = "";
  } else {
    delete errors.writing;
  }
  if (!data.listening) {
    errors.listening = "";
  } else {
    delete errors.listening;
  }
  if (!data.reading) {
    errors.reading = "";
  } else {
    delete errors.reading;
  }

  return errors;
};
