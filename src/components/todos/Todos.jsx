import cn from "./Todos.module.css";
import Todo from "../todo/Todo";
import { useTodos } from "../../hooks/useTodos";

export default function Todos({ status }) {
  const [todos] = useTodos();
  status = +status;
  if (todos.filter((todo) => todo.status === status).length > 0) {
    return (
      <div className={cn.wrapper}>
        <h2 className={cn.partName}>
          {status === 0 ? "New Tasks" : status === 1 ? "Tasks in Progress" : "Completed Tasks"}
        </h2>
        {todos
          .filter((todo) => todo.status === status)
          .sort((a, b) => a.title.localeCompare(b.title) || b.createdAt - a.createdAt)
          .map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </div>
    );
  } else {
    return <></>;
  }
}
