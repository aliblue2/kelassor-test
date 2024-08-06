"use client";
import Link from "next/link";
import styles from "./TasksPage.module.css";
import TaskItem from "./task-item/TaskItem";
import Paginate from "@/components/shared/paginate/Paginate";
import { useState } from "react";
import { useRouter } from "next/navigation";

const TasksPage = ({ tasks, totalPage, hashed_id, urlFilter, urlStatus }) => {
  const router = useRouter();
  const [filter, setFilter] = useState({
    status: urlFilter || "",
    filter: urlStatus || "",
  });
  // const [tasksState, setTasksState] = useState(tasks);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
    router.push(
      `/admin/tasks?filter=${filter.filter}&status=${filter.status}&page=${
        currentPage + 1
      }`
    );
  };
  const changeFilter = async (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
    console.log(filter);
    setCurrentPage(0);
  };
  // useEffect(() => {
  //   router.push(`/admin/tasks/${filter.filter}/${1}/${filter.status}`);
  // }, [filter]);
  return (
    <div className={styles.container}>
      <div className={styles.filter}>
        <div>
          <div>
            <label>وضعیت: </label>
            <select name="status" value={filter.status} onChange={changeFilter}>
              <option value={""}>همه</option>
              <option value={"done"}>انجام شده</option>
              <option value={"notdone"}>انجام نشده</option>
            </select>
          </div>
          <div>
            <label>نوع: </label>
            <select name="filter" value={filter.filter} onChange={changeFilter}>
              <option value={""}>همه</option>
              <option value={"newUser"}>new user</option>
              <option value={"newpractice"}>new practice</option>
              <option value={"newticket"}>new ticket</option>
              <option value={"newemp"}>new employer</option>
              <option value={"newpayment"}>new payment</option>
              <option value={"newInterview"}>new interview</option>
              <option value={"payDead"}>pay dead</option>
              <option value={"1week"}>one week</option>
            </select>
          </div>
          <div>
            <Link
              href={`/admin/tasks?filter=${filter.filter}&status=${filter.status}`}
            >
              جستوجو
            </Link>
          </div>
        </div>
        <div>
          <Link href={"/admin/tasks/create-task"}>اضافه کردن تسک جدید +</Link>
        </div>
      </div>

      <div className={styles.titles}>
        <h4>شناسه کاربر</h4>
        <h4>وضعیت</h4>
        <h4>موضوع</h4>
        <h4>شماره تلفن</h4>
        <h4>نام و نام‌خانوادگی</h4>
        <h4>تاریخ ثبت</h4>
        <h4>مسئول</h4>
      </div>
      <div className={styles.info}>
        {!tasks.length ? (
          <h6>هیچ تسکی وجود ندارد</h6>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              // setTasksState={setTasksState}
              hashed_id={hashed_id}
            />
          ))
        )}
      </div>

      <Paginate
        total={+totalPage}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        load={false}
      />
    </div>
  );
};

export default TasksPage;
