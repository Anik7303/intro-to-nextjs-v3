import { ITodo } from '@/components/Todo'
import db from '@/utils/db'
import { NextResponse } from 'next/server'

interface GetResponse {
  count: number
  todos: ITodo[]
}

export async function GET(request: Request) {
  const todos = await db.todo.findMany()
  return NextResponse.json<GetResponse>({
    count: todos.length,
    todos,
  })
}

export async function POST(request: Request) {
  const todo: Omit<ITodo, 'id'> = await request.json()
  const data = await db.todo.create({
    data: {
      ...todo,
    },
  })
  return NextResponse.json(data, { status: 201 })
}
