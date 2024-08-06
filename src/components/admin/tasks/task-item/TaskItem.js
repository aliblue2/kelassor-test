"use client";
import { useState } from "react";
import Image from "next/image";
import editPic from "/public/icons/admin/edit.png";
import trashPic from "/public/icons/admin/trash.png";
import styles from "./TaskItem.module.css";
import { useRouter } from "next/navigation";

const TaskItem = ({ task, hashed_id }) => {
  // console.log(task.lastname, task.date, task.id);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editForm, setEditForm] = useState({
    ...task,
  });
  const editHandler = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };
  const editSubmit = async () => {
    const res = await fetch(`${process.env.BASE_URL}/admin/taskUpdate.php`, {
      method: "POST",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
        hashed_id,
        ...task,
        ...editForm,
      }),
    });
    const data = await res.json();
    console.log("put: ", data);
    if (data === 200) {
      setEditMode(false);
      router.refresh();
    }
  };
  const deleteTask = async () => {
    const res = await fetch(`${process.env.BASE_URL}/admin/taskDelete.php`, {
      method: "POST",
      body: JSON.stringify({
        API_KEY: process.env.API_KEY,
        Content_Type: process.env.Content_Type,
        hashed_id,
        id: task.id,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data === 200) {
      router.refresh();
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div onClick={() => (editMode ? null : setShowModal(true))}>
          <p>{editForm.user_id}</p>
        </div>
        <div
          onClick={() => (editMode ? null : setShowModal(true))}
          className={`${styles.badge} ${
            editForm.status === "notdone"
              ? styles.badgeNotDone
              : styles.badgeDone
          }`}
        >
          {editMode ? (
            <select
              name="status"
              value={editForm.status}
              onChange={editHandler}
            >
              <option value={"notdone"}>انجام نشده</option>
              <option value={"done"}>انجام شده</option>
            </select>
          ) : (
            <p>{editForm.status === "notdone" ? "انجام نشده" : "انجام شده"}</p>
          )}
        </div>
        <div
          className={styles.subject}
          onClick={() => (editMode ? null : setShowModal(true))}
        >
          {editMode ? (
            <select name="type" value={editForm.type} onChange={editHandler}>
              <option>انتخاب اولویت</option>
              <option value={"newuser"}>new user</option>
              <option value={"newticket"}>new ticket</option>
              <option value={"newpractice"}>new practice</option>
              <option value={"newemp"}>new employer</option>
              <option value={"payDead"}>pay dead</option>
              <option value={"newInterview"}>new interview</option>
              <option value={"1week"}>1 week</option>
            </select>
          ) : (
            <p>{editForm.type}</p>
          )}
        </div>
        <div
          className={styles.username}
          onClick={() => (editMode ? null : setShowModal(true))}
        >
          {editMode ? (
            <input
              type="text"
              name="phone"
              value={editForm.phone}
              onChange={editHandler}
            />
          ) : (
            <p>{editForm.phone}</p>
          )}
        </div>
        <div
          className={styles.lastName}
          onClick={() => (editMode ? null : setShowModal(true))}
        >
          <p>
            {editForm.name} {editForm.lastname}
          </p>
        </div>
        <div
          className={styles.date}
          onClick={() => (editMode ? null : setShowModal(true))}
        >
          <p>{new Date(+editForm.date).toLocaleDateString("fa-IR")}</p>
        </div>
        <div
          className={styles.admin}
          onClick={() => (editMode ? null : setShowModal(true))}
        >
          {editMode ? (
            <input
              type="text"
              name="person"
              value={editForm.person}
              onChange={editHandler}
            />
          ) : (
            <p>{editForm.person ? editForm.person : "نامشخص"}</p>
          )}
        </div>
        {editMode ? (
          <div className={styles.actions}>
            <button onClick={editSubmit}>submit</button>
            <button onClick={() => setEditMode(false)}>cancel</button>
          </div>
        ) : (
          <div className={styles.actions}>
            <button onClick={() => setEditMode(true)}>
              {editMode ? (
                "done"
              ) : (
                <Image src={editPic} alt="edit" width={20} height={20} />
              )}
            </button>

            <button onClick={deleteTask}>
              <Image src={trashPic} alt="trash" width={20} height={20} />
            </button>
          </div>
        )}
      </div>
      {editMode ? (
        <textarea
          name="description"
          value={editForm.description}
          onChange={editHandler}
          className={styles.textareaEdit}
        />
      ) : null}
      <div
        className={styles.modal}
        style={{ display: showModal ? "flex" : "none" }}
      >
        <div className={styles.subModal}>
          <div className={styles.close} onClick={() => setShowModal(false)}>
            <p>X</p>
          </div>
          <div>
            <h6>شرح تسک : </h6>
            <p>
              {editForm.description ? editForm.description : "شرح ثبت نشده است"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
