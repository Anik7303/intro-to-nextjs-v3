export interface ITodo {
  id: string
  content: string
  createdAt: Date
  completed: boolean
}

interface Props {
  todo: ITodo
}

function Todo({ todo }: Props) {
  return <div>{todo.content}</div>
}

export default Todo
