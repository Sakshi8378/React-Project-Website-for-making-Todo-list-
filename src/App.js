import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import AddTodo from "./MyComponents/AddTodo";
import { useEffect, useState } from 'react';
import  About  from './MyComponents/About';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { Routes } from 'react-router-dom';


// import TodoItem from "./MyComponents/TodoItem";
function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null)
  {
      initTodo = [];

  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete =(todo)=>{
    console.log("I am ondelete todo","todo");
   
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

      setTodos(todos.filter((e)=>{
        return e!== todo;
      }));
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if(todos.length=== 0)
    {
      sno=0;
    }
    else{
      let sno = todos[todos.length-1].sno +1;
    }
   
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
      
    
     
    
   
  }
  
  let myVariable=0;
  // let todos =[
    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));     
    }, [todos])
  return (
    <>
    
    <Router>
          <Header title="My Todos List" searchBar={true}/>
          <Routes>
          <Route exact path="/" element={<>
               <AddTodo addTodo={addTodo}/>
              <Todos todos={todos} onDelete={onDelete}/>
              </>} >
          </Route>
          <Route exact path="/about" element={<About/>}>
            {/* <About/> */}
          </Route>
        </Routes>
          
          <Footer/>
      </Router>
    
    </>
  );
}



export default App;
