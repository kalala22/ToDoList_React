/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
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

  useEffect(() => {
    const storedTasks = localStorage.getItem("taskList");
    if (storedTasks) {
      setTaskList(JSON.parse(storedTasks));
    }
  }, []);

  const saveTasksToLocalStorage = (tasks: Task[]) => {
    localStorage.setItem("taskList", JSON.stringify(tasks));
  };

  const addTask = (title: string) => {
    const newTask: Task = {
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1,
      title,
      completed: false,
    };
    const udatedTasks = [...taskList, newTask];
    setTaskList(udatedTasks);
    saveTasksToLocalStorage(udatedTasks);
  };

  const editTask = (id: number, completedValue: boolean) => {
    const updatedTasks = taskList.map((task) =>
      task.id === id ? { ...task, completed: completedValue } : task
    );
    setTaskList(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
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
