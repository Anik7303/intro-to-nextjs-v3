import NewTodoForm from '@/components/NewTodoForm'

interface Props {
  children: React.ReactNode
}

function DashboardLayout({ children }: Props) {
  return (
    <div>
      <h2>dashboard</h2>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
