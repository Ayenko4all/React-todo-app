import styles from "../styles/TodoList.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  const handDelete = (item) => {
    const todosItems = todos.filter((todo) => todo.title !== item);
    setTodos(todosItems);
  };

  const handleClick = (item) => {
    const newTodosArray = todos.map((todo) =>
      todo.title == item ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodosArray);
  };

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span
          className={item.done ? styles.completed : ""}
          onClick={() => handleClick(item.title)}
        >
          {item.title}
        </span>
        <span>
          <button
            onClick={() => handDelete(item.title)}
            className={styles.button}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
