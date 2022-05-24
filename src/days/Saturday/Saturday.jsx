import React from 'react'
import Form from '../../components/Form/Form'
import TodoList from '../../components/TodoList/TodoList'
import { useState , useEffect } from 'react';
import '../../components/Styles/style.scss'


export const Saturday = () => {
  const initialState = JSON.parse(localStorage.getItem("Saturday")) || [];
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState(initialState)
  const [editTodo, setEditTodo] = useState(null)
  const [completedCount , setCompletedCount] = useState(0);


  useEffect(() => {
    localStorage.setItem("Saturday" , JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    localStorage.setItem("SaturdayCompleted" , JSON.stringify(completedCount));
  }, [completedCount]);

  return (
    <div className='backTodo'>
      <h1>Saturday</h1>
      <h2>Todos:{todos.length}</h2>
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

export default Saturday

