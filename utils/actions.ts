'use server'

import { revalidatePath } from 'next/cache'
import db from './db'

export const createTodo = async (formData: FormData) => {
  const content = formData.get('todo')
  if (!content) return

  await db.todo.create({
    data: {
      content: content.toString(),
    },
  })

  revalidatePath('/todos')
}

export const setTodoStatus = async (id: string, completed: boolean = true) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: completed,
    },
  })

  revalidatePath('/todos')
}
