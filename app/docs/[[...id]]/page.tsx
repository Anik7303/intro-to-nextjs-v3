interface Props {
  params: {
    id?: string | string[]
  }
}

function DocsPage({ params }: Props) {
  console.log({ params })
  return <div>Docs</div>
}

export default DocsPage
