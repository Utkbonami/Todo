import React from 'react'

function Todo({text, deleteHandler , id}) {
  return (
    <div>
      <span>{text}</span>
        <button onClick={() => deleteHandler(id)}>Delete</button>
    </div>
  )
}

export default Todo
