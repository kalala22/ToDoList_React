import { useState } from "react";
import React from "react";
import styles from "./taskInput.module.css";

type TaskInputProps = {
  addTask: (title: string) => void;
};
export const TaskInput = ({ addTask }: TaskInputProps) => {
  const [taskTitle, setTaskTitle] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>🎯 Ajoute ta prochaine tache</h2>
      <form className={styles.container} onSubmit={handleAddTask}>
        <input
          type="text"
          className={styles.input}
          value={taskTitle}
          onChange={handleInputChange}
          placeholder="Indiquez un titre de tache explicite..."
        />
        <button className="button-primary" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};
