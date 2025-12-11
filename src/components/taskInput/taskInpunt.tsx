import styles from "./taskInput.module.css";
export const TaskInput = () => {
  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>🎯 Ajoute ta prochaine tache</h2>
      <form className={styles.container}>
        <input
          type="text"
          className={styles.input}
          placeholder="Indiquez un titre de tache explicite..."
        />
        <button className="button-primary" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};
