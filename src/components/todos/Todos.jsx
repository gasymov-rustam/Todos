import styles from "./Todos.module.css";
import Todo from "../todo/Todo";
import { useTodos } from "../../hooks/useTodos";

function Todos({ status }) {
  const [todos] = useTodos();
  return (
    <div className={styles.wrapper}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default Todos;
