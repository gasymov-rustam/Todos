import "./App.css";
import Todos from "./components/todos/Todos";
import AddTodo from "./components/addTodo/AddTodo";

function App() {
  return (
    <div className="container">
      <h1 className="title">Task Manager</h1>
      <Todos status="0" />
      <Todos status="1" />
      <Todos status="2" />
      <AddTodo />
      {/* {console.log(Todos)} */}
    </div>
  );
}

export default App;
