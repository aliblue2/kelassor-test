import { useState } from "react";
import styles from "./Filters.module.css";
import { useRouter } from "next/navigation";

const Filters = ({ bootcamps, filters, setFilters, setCurrentPage }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const changeFitlerHandler = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const submit = async () => {
    setLoading(true);
    router.push(
      `/admin/users/bootcamps?${
        filters.search ? "&search=" + filters.search : ""
      }${filters.bcName ? "&bcName=" + filters.bcName : ""}${
        filters.result ? "&result=" + filters.result : ""
      } `
    );
    // const res = await fetch(
    //   `${process.env.BASE_URL}/admin/bootcamp_users.php`,
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       API_KEY: process.env.API_KEY,
    //       Content_Type: process.env.Content_Type,
    //       id: hashed_id,
    //       page: 1,
    //       itemsPerPage: 12,
    //       ...filters,
    //     }),
    //   }
    // );
    // const data = await res.json();
    // // console.log("res bootcamp_users when search: ", data);
    // const { users, total } = data;
    // setUsers(users);
    // setTotalPages(total);
    setCurrentPage(0);
    setLoading(false);
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          name="search"
          value={filters.search}
          onChange={changeFitlerHandler}
        />
      </div>
      <div>
        <select
          name="bcName"
          value={filters.bcName}
          onChange={changeFitlerHandler}
        >
          <option>بوت‌کمپ</option>
          {bootcamps.map((bc, i) => (
            <option key={i} value={bc.bootcampTitle}>
              {bc.bootcampTitle}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select
          name="result"
          value={filters.result}
          onChange={changeFitlerHandler}
        >
          <option>نتیجه تماس</option>
          <option value={"انصراف"}>انصراف</option>
          <option value={"نیاز به پیگیری"}>نیاز به پیگیری</option>
          <option value={"ثبت نام"}>ثبت نام</option>
          <option value={"بررسی نشده"}>بررسی نشده</option>
          <option value={"پرداخت نکرده"}>پرداخت نکرده</option>
          <option value={"بی پاسخ"}>بی پاسخ</option>
        </select>
      </div>
      <div>
        <button onClick={submit} className={loading ? styles.loading : ""}>
          {loading ? "منتظر بمانید" : "جستجو"}
        </button>
      </div>
    </div>
  );
};

export default Filters;
