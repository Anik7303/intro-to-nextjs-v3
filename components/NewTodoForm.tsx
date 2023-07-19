'use client'

import { useState } from 'react'

function NewTodoForm() {
  const [state, setState] = useState<string>('')

  return (
    <form>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="todo"
      />
    </form>
  )
}

export default NewTodoForm
