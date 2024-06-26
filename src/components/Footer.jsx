import styles from "../styles/Footer.module.css";
export default function Footer({ completedTodos, todosCount }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completedTodos}</span>
      <span className={styles.item}>Todo Count: {todosCount}</span>
    </div>
  );
}
