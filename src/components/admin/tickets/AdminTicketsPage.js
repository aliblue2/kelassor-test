"use client";
import { useState } from "react";
import styles from "./AdminTicketsPage.module.css";
import AdminTicketItem from "./ticket-item/AdminTicketItem";
import Paginate from "@/components/shared/paginate/Paginate";
import { useRouter } from "next/navigation";

const fields = [
  "شناسه",
  "نام و نام‌خانوادگی",
  "شماره‌تلفن",
  "تاریخ",
  "موضوع",
  "وضعیت",
  "مشاهده پیام",
];

const AdminTicketsPage = ({ tickets, totalPage }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    // console.log(currentPage);
    router.push(`/admin/tickets?status=&page=${selectedPage.selected + 1}`);
  };
  return (
    <div className={styles.container}>
      <div className={styles.fields}>
        <ul>
          {fields.map((f, index) => (
            <li key={index}>{f}</li>
          ))}
        </ul>
      </div>

      {!tickets.length ? (
        <h2>هیچ تیکتی یافت نشد</h2>
      ) : (
        <div className={styles.tickets}>
          {tickets.map((t) => (
            <AdminTicketItem key={t.id} ticket={t} />
          ))}
        </div>
      )}
      <Paginate
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        total={totalPage}
        load={false}
      />
    </div>
  );
};

export default AdminTicketsPage;
