import styles from "./taskList.module.css";
import { TaskItem } from "../taskItem/taskItem";
export const TaskList = () => {
  return (
    <div className="box">
      <h2 className={styles.title}>
        📰 Il te reste encore x des taches a faire !
      </h2>
      <ul className={styles.container}>
        <TaskItem />
      </ul>
    </div>
  );
};
