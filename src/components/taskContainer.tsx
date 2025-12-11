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
      id: taskList.length + 1,
      title,
      completed: false,
    };
    setTaskList([...taskList, newTask]);
  };

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList />
      <Footer />
    </main>
  );
}
