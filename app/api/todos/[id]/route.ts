import { ITodo } from '@/components/Todo'
import { NextResponse } from 'next/server'
import db from '@/utils/db'

interface Props {
  params: {
    id: string
  }
}

export async function GET(_request: Request, { params }: Props) {
  const todo = await db.todo.findFirstOrThrow({
    where: {
      id: params.id,
    },
  })
  return NextResponse.json(todo)
}

export async function PATCH(request: Request, { params }: Props) {
  const todo: Omit<ITodo, 'id'> = await request.json()
  const data = await db.todo.update({
    where: { id: params.id },
    data: {
      ...todo,
    },
  })
  return NextResponse.json(data)
}

export async function DELETE(_request: Request, { params }: Props) {
  const todo = await db.todo.delete({
    where: {
      id: params.id,
    },
  })
  return NextResponse.json(todo)
}
