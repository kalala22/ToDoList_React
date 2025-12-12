import { useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInpunt";
import { TaskList } from "./taskList/taskList";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export default function TaskContainer() {
  const [taskList, setTaskList] = useState<Task[]>([]);

  const addTask = (title: string) => {
    const newTask: Task = {
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1,
      title,
      completed: false,
    };
    setTaskList([...taskList, newTask]);
  };

  const editTask = (id: number, completedValue: boolean) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, completed: completedValue } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const getTaskCount = () => {
    const completedTasks = taskList.filter((task) => task.completed).length;
    const incompleteTasks = taskList.length - completedTasks;
    return { completedTasks, incompleteTasks };
  };

  const { completedTasks, incompleteTasks } = getTaskCount();

  console.log(
    `Completed Tasks: ${completedTasks}, Incomplete Tasks: ${incompleteTasks}`
  );

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList
        taskList={taskList}
        editTask={editTask}
        deleteTask={deleteTask}
        incompleteTasks={incompleteTasks}
      />
      <Footer completedTasks={completedTasks} />
    </main>
  );
}
