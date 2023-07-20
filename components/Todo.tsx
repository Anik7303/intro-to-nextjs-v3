'use client'

import { setTodoStatus } from '@/utils/actions'
import { useTransition } from 'react'

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
  const [_isPending, startTransition] = useTransition()
  return (
    <div
      className={`cursor-pointer mb-2 transition-colors ${
        todo.completed
          ? 'text-gray-500 line-through hover:text-black'
          : 'hover:text-sky-400'
      }`}
      onClick={() =>
        startTransition(() => setTodoStatus(todo.id, !todo.completed))
      }
    >
      {todo.content}
    </div>
  )
}

export default Todo
