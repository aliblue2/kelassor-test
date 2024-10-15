"use client";
import { useState } from "react";
import styles from "./AdminBootcampUsersPage.module.css";
import BootcampUser from "./bootcamp-user/BootcampUser";
import Filters from "./bootcamp-user/filters/Filters";
import Paginate from "@/components/shared/paginate/Paginate";
import { useRouter } from "next/navigation";

const AdminBootcampUsersPage = ({
  users,
  totalUsers,
  bootcamps,
  hashed_id,
}) => {
  const router = useRouter();
  const titles = [
    "شناسه",
    "نام",
    "شماره تلفن",
    "تاریخ",
    "تخفیف",
    "بوت‌کمپ",
    "از",
    "نتیجه تماس",
    "tid",
    "مجوز پرداخت",
    "لغو اسنپ پی",
  ];

  // const [users, setUsers] = useState(initialUsers);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(
    Math.ceil(totalUsers / itemsPerPage)
  );
  const [pageLoader, setPageLoader] = useState(false);
  const [filters, setFilters] = useState({
    search: "",
    bcName: "",
    result: "",
  });

  const handlePageChange = async (selectedPage) => {
    setCurrentPage(selectedPage.selected);

    setPageLoader(true);
    router.push(
      `/admin/users/bootcamps?page=${selectedPage.selected + 1}${
        filters.search ? "&search=" + filters.search : ""
      }${filters.bcName ? "&bcName=" + filters.bcName : ""}${
        filters.result ? "&result=" + filters.result : ""
      } `
    );
    setPageLoader(false);
  };

  return (
    <div className={styles.container}>
      <Filters
        bootcamps={bootcamps}
        filters={filters}
        setFilters={setFilters}
        setCurrentPage={setCurrentPage}
      />
      <div className="w-full flex items-center justify-between py-2 px-4 border-b-2 border-primary-20 rounded-md ">
        {titles.map((t, i) => (
          <h6
            key={t + i}
            className={`${t === "tid" ? "w-2/12 text-center" : t === "شناسه" ? "w-fit" : "w-1/12"} font-bold`}
          >
            {t}
          </h6>
        ))}
      </div>
      <div className={styles.items}>
        {/* {pageLoader ? <Image src={} alt={"loader"}/>} */}
        {!users.length ? (
          <h5>هیچ کاربری ثبت نشده است</h5>
        ) : (
          users.map((u) => (
            <BootcampUser key={u.id} user={u} hashed_id={hashed_id} />
          ))
        )}
        {/*todo:
        <Paginate
          load={pageLoader}
          total={totalPages}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      */}
      </div>
    </div>
  );
};

export default AdminBootcampUsersPage;
