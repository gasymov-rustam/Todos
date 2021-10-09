import { updateTodo } from "../api/todos";
import { useTodos } from "../hooks/useTodos"


export default function Todo({todo}) {
    const [, dispatchTodos] = useTodos();

    async function setNextStatus() {
        const [updatedTodo, updatedTodoError] = await updateTodo(todo.id, {
            status: todo.status + 1,
            updatedAt: Date.now()
        })
        if (!updatedTodoError) {
            dispatchTodos({type: 'NEXT_STATUS', payload: updatedTodo})
        }
        
    }
    return (
        <div>
            <h2>{todo.title}</h2>
            <h3>{todo.body}</h3>
            <h3>status is: {todo.status}</h3>
            {todo.status < 2 && <button onClick={setNextStatus}>Next status</button>}
        </div>
    )
}
