import styles from "./footer.module.css";

interface FooterProps {
  completedTasks: number;
}

export const Footer = ({ completedTasks }: FooterProps) => {
  if (completedTasks) {
    return (
      <footer>
        <code className={styles.footer}>
          Avec TaskFlow tu as éliminé {completedTasks} tâche
          {completedTasks > 1 ? "s" : ""} ! 🚀
        </code>
      </footer>
    );
  }
  return null;
};
