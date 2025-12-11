import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInpunt";
import { TaskList } from "./taskList/taskList";
export default function TaskContainer() {
  return (
    <main>
      <Header />
      <TaskInput />
      <TaskList />
      <Footer />
    </main>
  );
}
