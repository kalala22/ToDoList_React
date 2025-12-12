import styles from "./taskItem.module.css";
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const TaskItem = ({
  task,
  editTask,
  deleteTask,
}: {
  task: Task;
  editTask: (id: number, completedValue: boolean) => void;
  deleteTask: (id: number) => void;
}) => {
  return (
    <li
      onClick={() => editTask(task.id, !task.completed)}
      className={`${styles.container} ${
        task.completed ? styles.success : styles.default
      }`}
    >
      <div className={styles.item}>
        <div
          className={`${styles.id} ${
            task.completed ? styles.idSuccess : styles.idDefault
          }`}
        >
          {task.id}
        </div>
        <div
          className={
            task.completed ? styles.contentSuccess : styles.contentDefault
          }
        >
          {task.title}
        </div>
      </div>
      <button
        className="button-primary"
        onClick={(e) => {
          e.stopPropagation();
          deleteTask(task.id);
        }}
      >
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ width: "20px", height: "20px" }}
          >
            <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
            <path
              fillRule="evenodd"
              d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.133 2.845a.75.75 0 0 1 1.06 0l1.72 1.72 1.72-1.72a.75.75 0 1 1 1.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 1 1-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 1 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </>
      </button>
    </li>
  );
};
