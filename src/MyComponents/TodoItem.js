import React from 'react'
import Todos from './Todos'

const TodoItem = ({todo, onDelete}) => {
  return (
    <>
    <div>
     <h6>{todo.title}</h6>
     <p>{todo.desc}</p>
    <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>

    </div>
     <hr/>
     </>
  )
}

export default TodoItem
