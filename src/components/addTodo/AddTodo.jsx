import styles from "./AddTodo.module.css";
import { useState } from "react";
import { addTodo } from "../api/todos";
import { useTodos } from "../hooks/useTodos";

export default function AddTodo() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [, dispatchTodos] = useTodos();

  async function createNewTodo(e) {
    e.preventDefault();
    setOpen(false);
    const newTodo = {
      createdAt: Date.now(),
      title,
      body,
      updatedAt: null,
      status: 0,
    };

    const [createdTodo, createdTodoError] = await addTodo(newTodo);
    if (!createdTodoError) {
      dispatchTodos({ type: "ADD", payload: createdTodo });
      setTitle("");
      setBody("");
    }
  }

  return (
    <>
      <div className={styles.wrapperBtn}>
        <button className={styles.btn} onClick={() => setOpen(true)}>
          Add Task
        </button>
      </div>
      {open && (
        <div onClick={() => setOpen(false)} className={styles.containerForm}>
          <form
            onSubmit={createNewTodo}
            onClick={(e) => e.stopPropagation()}
            className={styles.wrapper}
          >
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              name="title"
              className={styles.title}
              placeholder="Please enter title Todo"
              required
            />
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              name="body"
              placeholder="text of Todo"
              className={styles.body}
            ></textarea>
            <button type="submit" className={styles.btnForm}>
              Add todo
            </button>
          </form>
        </div>
      )}
    </>
  );
}
