import styles from "./Todos.module.css";
import Todo from "../todo/Todo";
import { useTodos } from "../hooks/useTodos";

function Todos({ status }) {
  status = parseInt(status);
  const [todos, dispatchTodos] = useTodos();
  return (
    <>
      {todos.filter((todo) => todo.status === status).length !== 0 && (
        <h2 className={styles.partName}>
          {status === 0 ? "New Tasks" : status === 1 ? "Tasks in Progress" : "Completed Tasks"}
        </h2>
      )}
      <div className={styles.wrapper}>
        {todos
          .filter((todo) => todo.status === status)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </div>
      {/* <h2 className={styles.partName}>Tasks in Progress</h2>
      <div className={styles.wrapper}>
        {todos
          .filter((todo) => todo.status === 1)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </div>
      <h2 className={styles.partName}>Completed Tasks</h2>
      <div className={styles.wrapper}>
        {todos
          .filter((todo) => todo.status === 2)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </div> */}
    </>
  );
}

export default Todos;
