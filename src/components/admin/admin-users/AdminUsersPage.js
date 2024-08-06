"use client";
import SearchBar from "@/components/shared/admin/searchBar/SearchBar";
import styles from "./AdminUsersPage.module.css";
import UserItem from "./user-item/UserItem";
import { useState } from "react";
import Paginate from "@/components/shared/paginate/Paginate";

const titles = [
  "شناسه",
  "نام",
  "نام خانوادگی",
  "تاریخ",
  "شماره موبایل",
  "ایمیل",
  "مرحله",
  "کنترل ها",
];

const AdminUsersPage = ({ userData, totalUsers, hashed_id }) => {
  const [users, setUsers] = useState(userData);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(
    Math.ceil(totalUsers / itemsPerPage)
  );

  // const startIndex = currentPage * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;

  const handlePageChange = async (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    const fetchUsers = async () => {
      const res = await fetch(`${process.env.BASE_URL}/admin/users.php`, {
        method: "POST",
        body: JSON.stringify({
          Content_Type: process.env.Content_Type,
          API_KEY: process.env.API_KEY,
          page: currentPage + 1,
          hashed_id,
        }),
      });
      const data = await res.json();

      setUsers(data.users);
    };

    fetchUsers();
  };

  return (
    <>
      <SearchBar />
      <div className={styles.container}>
        <div className={styles.titles}>
          {titles.map((t, i) => (
            <div key={i}>
              <h6>{t}</h6>
            </div>
          ))}
        </div>
        <div className={styles.items}>
          {!users.length ? (
            <h3>هیج کاربری وجود ندارد</h3>
          ) : (
            users.map((user) => <UserItem key={user.id} userInfo={user} />)
          )}
          <Paginate
            total={totalPages}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default AdminUsersPage;
