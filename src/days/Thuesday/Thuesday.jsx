import React from 'react'
import Form from '../../components/Form/Form'
import TodoList from '../../components/TodoList/TodoList'
import { useState , useEffect } from 'react';
import '../../components/Styles/style.scss'



const Thuesday = () => {
  const initialState = JSON.parse(localStorage.getItem("Thuesday")) || [];
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState(initialState)
  const [editTodo, setEditTodo] = useState(null)
  const [completedCount , setCompletedCount] = useState(0);

  useEffect(() => {
    localStorage.setItem("Thuesday" , JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    localStorage.setItem("ThuesdayCompleted" , JSON.stringify(completedCount));
  }, [completedCount]);


  return (
    <div className='backTodo'>
      <h1>Thuesday</h1>
      <h2>todos:{todos.length}</h2>
      <div>
        <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      </div>
      <div>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          completedCount={completedCount}
          setCompletedCount={setCompletedCount}
        />
      </div>
    </div>
  )
}

export default Thuesday