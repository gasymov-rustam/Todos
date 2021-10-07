import { useMemo, useReducer, useContext, createContext, useEffect } from "react";
import { getTodos } from "../api/todos";

const initTodos = [];
const TodosContext = createContext(initTodos);
export function useTodos() {
  return useContext(TodosContext);
}
export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initTodos);
  const memoValue = useMemo(() => [state, dispatch], [state]);
  useEffect(() => {
    (async function () {
      const [todosData, todosDataError] = await getTodos();
      if (!todosDataError) dispatch({ type: "INIT", payload: todosData });
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
      // const newState = [...state]
      // const todoIdx = newState.findIndex(todo => todo.id === action.payload.id)
      // newState.splice(todoIdx, 1, action.payload)
      // return newState
      const newState = [...state];
      const todoIdx = newState.findIndex((todo) => todo.id === action.payload);
      newState.splice(todoIdx, 1, action.payload);
      return newState;
    }
    default:
      throw new Error(`Unknon command - ${action.type}`);
  }
}
