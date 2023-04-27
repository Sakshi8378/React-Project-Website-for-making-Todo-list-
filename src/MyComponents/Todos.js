import React from 'react'
import TodoItem from "../MyComponents/TodoItem"
const Todos = (props) => {
  let myStyle = {
    minHeight:"70vh",
    margin: "40px auto"
  }
  return (
    <><div className='container' style={myStyle}>
    <h6 className="my-3">Todos List</h6>
    {props.todos.length===0? "No Todos to display" : 
   //  {/* {props.todos} */}
    props.todos.map((todo)=>{
       return(
       <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
    )
    })
    }
   </div></>
    
  )
}

export default Todos;