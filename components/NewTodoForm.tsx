import { createTodo } from '@/utils/actions'

function NewTodoForm() {
  return (
    <form action={createTodo}>
      <input
        type="text"
        name="todo"
        placeholder="todo"
        className="border border-black/25 p-1 outline-none focus:border-sky-400"
      />
      <button
        type="submit"
        className="border-sky-400 border hover:bg-white hover:text-sky-400  bg-sky-400 text-white p-1"
      >
        Add Todo
      </button>
    </form>
  )
}

export default NewTodoForm
