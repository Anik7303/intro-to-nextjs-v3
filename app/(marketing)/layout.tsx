interface Props {
  children: React.ReactNode
}

function MarketingLayout({ children }: Props) {
  return (
    <div>
      <h2>marketing layout</h2>
      <div>{children}</div>
    </div>
  )
}

export default MarketingLayout
