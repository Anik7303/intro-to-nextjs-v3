import Todo, { ITodo } from './Todo'

interface Props {
  todos: ITodo[]
}

function TodoList({ todos }: Props) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
