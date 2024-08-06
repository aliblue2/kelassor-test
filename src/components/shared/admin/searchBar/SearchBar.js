"use client";
import { useState } from "react";
import styles from "./SearchBar.module.css";
import { usePathname, useRouter } from "next/navigation";

const SearchBar = () => {
  const pathName = usePathname();
  const router = useRouter();
  //   //   // console.log(pathName);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState({
    search: "",
    filter: { type: "", except: "", include: "" },
  });
  const searchHandler = (e) => {
    setQuery({ ...query, search: e.target.value });
  };
  const filterHandler = (e) => {
    const { name, value } = e.target;
    setQuery({ ...query, filter: { ...query.filter, [name]: value } });
  };
  const applySearch = (e) => {
    if (e.code === "Enter") {
      router.push(pathName + `?search=${query.search}`);
    }
  };
  const applyFilter = () => {
    const { type, except, include } = query.filter;
    router.push(pathName + `?type=${type}&except=${except}&include=${include}`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="...جستجو کنید"
            name="search"
            value={query.search}
            onChange={searchHandler}
            onKeyDown={applySearch}
          />
        </div>
        <div className={styles.icon}>
          <img src="/icons/admin/search.png" alt="search" />
        </div>
      </div>
      <div className={styles.filter}>
        <div onClick={() => setShow(!show)}>
          <div className={styles.input}></div>
          <div className={styles.icon}>
            <img src="/icons/admin/filter.png" alt="filter" />
          </div>
        </div>
        <div
          className={styles.dropDown}
          style={{ display: show ? "block" : "none" }}
        >
          <div>
            <div className={styles.type}>
              <select
                name="type"
                value={query.filter.type}
                onChange={filterHandler}
              >
                <option>انتخاب کنید</option>
              </select>
            </div>
            <div className={styles.except}>
              <select
                name="except"
                value={query.filter.except}
                onChange={filterHandler}
              >
                <option>انتخاب کنید</option>
              </select>
            </div>
            <div className={styles.include}>
              <select
                name="include"
                value={query.filter.include}
                onChange={filterHandler}
              >
                <option>انتخاب کنید</option>
              </select>
            </div>
            <div className={styles.delete}>
              <img src="/icons/admin/trash.png" alt="trash" />
            </div>
          </div>
          <div className={styles.buttons}>
            <button onClick={applyFilter}>اعمال فیلترها</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
