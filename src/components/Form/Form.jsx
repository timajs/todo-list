import React, { useEffect } from 'react'
import { v4 as uuidv4 } from "uuid"
import './Form.scss'


const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        )
        setTodos(newTodo);
        setEditTodo("")
    };


    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.title);
        } else {
            setInput("")
        }
    }, [setInput, editTodo])

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (!editTodo) {
            setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
            setInput("")
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    };

    return (
        <form onSubmit={onFormSubmit} className='form'>
            <input
                type="text"
                placeholder="Enter task"
                value={input}
                required
                onChange={onInputChange}
                className='input'
            />
            <button type="submit" className='btn'>Add</button>
        </form>
    )
}

export default Form