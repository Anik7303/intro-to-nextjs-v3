interface Props {
  children: React.ReactNode
}

function DashboardLayout({ children }: Props) {
  return (
    <div>
      <h2>dashboard layout</h2>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
