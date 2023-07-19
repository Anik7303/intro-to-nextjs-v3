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
