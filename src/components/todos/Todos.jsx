import styles from "./Todos.module.css";
import Todo from "../todo/Todo";
import { useTodos } from "../hooks/useTodos";

function Todos({ status }) {
  status = parseInt(status);
  const [todos, dispatchTodos] = useTodos();
  // (function () {
  //   const filteredTodo = todos.filter((todo) => todo.status === status);
  //   dispatchTodos({ type: "FILTER", payload: filteredTodo });
  // })();
  return (
    <div className={styles.wrapper}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      {/* {todos.filter((todo) => todo.status === status && <p>11111111</p>)} */}
      {/* {todos.filter((todo) => todo.status === status && <Todo key={todo.id} todo={todo} />)} */}
    </div>
  );
}

export default Todos;
