const { spliter } = require("./separateByComma");

export const contentDestructure = (str) => {
  const items = spliter(str, ";");
  const structuredItems = items.map((item) => {
    const splited = spliter(item, "(");
    const removeJunk = splited.map((ind) =>
      ind.replaceAll("\n", "").replaceAll(")", "")
    );
    return removeJunk;
  });
  structuredItems.pop();
  const final = structuredItems.map((item) => {
    return {
      course: item[0],
      subCourse: item[1].includes(",")
        ? spliter(item[1], ",")
        : spliter(item[1], "،"),
    };
  });
  return final;
};

export const bootcampCleaner = (bc) => {
  const {
    pictures,
    tech_logo,
    contents,
    prices,
    price,
    part1,
    part2,
    part3,
    unix_date,
  } = bc;
  const pricesArr = spliter(prices, ",");
  const part1Arr = spliter(part1, ";");
  const part2Arr = spliter(part2, ";");
  const part3Arr = spliter(part3, ";");
  const bootcamp = {
    ...bc,
    pictures: spliter(pictures, ","),
    tech_logo: spliter(tech_logo, ","),
    contents: contentDestructure(contents),
    full_price: pricesArr[0],
    min_price: pricesArr[1],
    full_parts: [part1Arr[0], part2Arr[0], part3Arr[0]],
    min_parts: [part1Arr[1], part2Arr[1], part3Arr[1]],
    price: spliter(price, ";"),
    unix_date: unix_date * 1000,
  };
  delete bootcamp.prices;
  delete bootcamp.part1;
  delete bootcamp.part2;
  delete bootcamp.part3;
  return bootcamp;
};

export const courseCleaner = (course) => {
  const {
    name,
    length,
    cost,
    details,
    status,
    persian_name,
    teachers_names,
    teachers_pictures,
    teachers_resume,
    sub_courses,
    teachers_videos,
  } = course;
  const detailsArr = details.split("،");
  const sub_coursesArr = sub_courses.split(",");
  const teachers_nameArr = teachers_names.split(",");
  const teachers_picturesArr = teachers_pictures.split(",");
  const teachers_resumeArr = teachers_resume.split(",");
  const teachers_videosArr = teachers_videos.split(",");

  const cleanTeachersResumeArr = teachers_resumeArr.map((r) => {
    const cleanResume = r.replaceAll("(", "").replaceAll(")", "");
    // .replaceAll("\n", "");
    const [title, resumeItemsStr] = cleanResume.split("-");
    const resumeItemsArr = resumeItemsStr.split(";");
    return {
      title,
      resumeItems: resumeItemsArr,
    };
  });

  const subCourses = [];

  sub_coursesArr.forEach((sc) => subCourses.push({ name: sc }));
  teachers_nameArr.forEach((tn, i) => (subCourses[i].teacherName = tn));
  teachers_picturesArr.forEach((tp, i) => (subCourses[i].teacherPicture = tp));
  cleanTeachersResumeArr.forEach((tr, i) => (subCourses[i].teacherResume = tr));
  teachers_videosArr.forEach((tv, i) => (subCourses[i].teacherVideo = tv));

  return {
    name,
    length,
    cost,
    details: detailsArr,
    status,
    persian_name,
    subCourses,
  };
};
