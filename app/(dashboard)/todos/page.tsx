import TodoList from '@/components/TodoList'
import db from '@/utils/db'

async function getData() {
  return await db.todo.findMany()
}

async function TodosPage() {
  const todos = await getData()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
