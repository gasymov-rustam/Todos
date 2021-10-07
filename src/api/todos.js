import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1234",
  headers: { "Content-type": "application/json, charset=utf-8" },
});

api.interceptors.response.use(
  (response) => [response.data, null],
  (error) => [null, error]
);

export function getTodos() {
  return api.get("/todos");
}

export function addTodo(newTodo) {
  return api.post("/todos", newTodo);
}

export function updateTodo(id, updateTodoData) {
  return api.patch(`/todos/${id}`, updateTodoData);
}

export function deleteTodo(id) {
  return api.delete(`/todos/${id}`);
}
