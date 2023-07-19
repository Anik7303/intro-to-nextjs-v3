interface Props {
  params: {
    id: string
  }
}

function DocsIdPage({ params }: Props) {
  console.log({ params })
  return <div>Docs &gt; id &rArr; {params.id}</div>
}

export default DocsIdPage
