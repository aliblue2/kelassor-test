import styles from "./DashTasks.module.css";
import TaskItem from "./task-item/TaskItem";
const data = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];
const DashTasks = () => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <TaskItem key={index} />
      ))}
    </div>
  );
};

export default DashTasks;
