import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1234",
  headers: {
    "Content-type": "application/json;charset=utf-8",
  },
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
export function updateTodo(todoId, updatedTodo) {
  return api.patch(`/todos/${todoId}`, updatedTodo);
}
export function deleteTodo(todoId) {
  return api.delete(`/todos/${todoId}`);
}
