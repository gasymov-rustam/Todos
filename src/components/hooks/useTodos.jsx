import { useReducer, useContext, createContext, useMemo, useEffect } from "react";
import { getTodos } from "../api/todos";

const initialState = [];

const TodosContext = createContext(initialState);

export function useTodos() {
  return useContext(TodosContext);
}

export function TodosProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const memoValue = useMemo(() => [state, dispatch], [state]);
  useEffect(() => {
    (async function () {
      const [todos, todosError] = await getTodos();
      if (!todosError) {
        dispatch({ type: "INIT", payload: todos });
      }
    })();
  }, []);
  return <TodosContext.Provider value={memoValue}>{children}</TodosContext.Provider>;
}

function reducer(state, action) {
  switch (action.type) {
    case "INIT": {
      return action.payload;
    }
    case "ADD": {
      return [...state, action.payload];
    }
    case "NEXT_STATUS": {
      const newState = [...state];
      const todoIdx = newState.findIndex((todo) => todo.id === action.payload.id);
      newState.splice(todoIdx, 1, action.payload);
      return newState;
    }
    case "DELETE": {
      const newState = [...state];
      const todoIdx = newState.findIndex((todo) => todo.id === action.payload);
      newState.splice(todoIdx, 1);
      return newState;
    }
    case "FILTER": {
      return action.payload;
    }
    default: {
      throw new Error(`Wrong action.type! Received type is-->> ${action.type}`);
    }
  }
}
