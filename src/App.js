import "./App.css";
import Todos from "./components/todos/Todos";
import AddTodo from "./components/addTodo/AddTodo";
import { useTodos } from "./components/hooks/useTodos";

function App() {
  const [todos] = useTodos();
  return (
    <div className="container">
      <h1 className="title">Task Manager</h1>
      {todos.length === 0 && (
        <h2 className="content-insription">You don`t have any tasks right now!</h2>
      )}
      <Todos status="0" />
      <Todos status="1" />
      <Todos status="2" />
      <AddTodo />
      {/* {console.log(Todos)} */}
    </div>
  );
}

export default App;
