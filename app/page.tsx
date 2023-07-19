import NewTodoForm from '@/components/NewTodoForm'

const getData = async () => {
  await new Promise((resolve) => setTimeout(() => resolve(null), 2000))
  return [1, 3, 6, 8]
}

export default async function Home() {
  const data = await getData()

  return (
    <div>
      <h2>Home</h2>
      <div>{data.join(', ')}</div>
      <NewTodoForm />
    </div>
  )
}
