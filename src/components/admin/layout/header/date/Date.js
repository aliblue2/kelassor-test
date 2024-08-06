"use client";
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useState } from "react";

const Date = () => {
  const [dateInfo, setDateInfo] = useState(
    new DateObject({ calendar: persian, locale: persian_fa }).format(
      "dddd DD MMMM YYYY, ساعت HH:mm "
    )
  );
  setInterval(
    () =>
      setDateInfo(
        new DateObject({ calendar: persian, locale: persian_fa }).format(
          "dddd DD MMMM YYYY, ساعت HH:mm "
        )
      ),
    1000 * 30
  );
  return <p>{dateInfo}</p>;
};

export default Date;
