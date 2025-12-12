import styles from "./taskList.module.css";
import { TaskItem } from "../taskItem/taskItem";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}
interface TaskListProps {
  taskList: Task[];
  editTask: (id: number, completedValue: boolean) => void;
  deleteTask: (id: number) => void;
  incompleteTasks: number;
}

export const TaskList = ({
  taskList,
  editTask,
  deleteTask,
  incompleteTasks,
}: TaskListProps) => {
  const taskListMap = taskList.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      editTask={editTask}
      deleteTask={deleteTask}
    />
  ));
  if (taskList && taskList.length > 0) {
    return (
      <div className="box">
        {incompleteTasks > 0 && (
          <h2 className={styles.title}>
            📰 Il te reste encore{" "}
            <span className="important">{incompleteTasks}</span> des taches a
            faire !
          </h2>
        )}

        {incompleteTasks === 0 && (
          <h2 className={styles.titleSuccess}>
            🎉 Félicitations! Tu as terminé toutes tes tâches !
          </h2>
        )}

        {taskList && taskList.length > 0 && (
          <ul className={styles.container}>{taskListMap}</ul>
        )}
      </div>
    );
  }
  return (
    <div className="box">
      <h2 className={styles.emptyState}>
        👋 Salut, Tu n'as pas a faire! Profite de ton temps libre !
      </h2>
    </div>
  );
};
