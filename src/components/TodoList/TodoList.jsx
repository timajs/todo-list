import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import './TodoList.scss'


const TodoList = ({ todos, setTodos, setEditTodo, completedCount, setCompletedCount}) => {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        );
    };

    
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    const getFinishedTodosCount = (todos) => todos.reduce((acc, curr) => {
        acc.total = todos.length;

        if(curr.completed){
            acc.finished = acc.finished + 1;
        }

        return acc;

    }, { total: 0, finished: 0})

    const totalCount = getFinishedTodosCount(todos);
    setCompletedCount(totalCount.finished)

    return (
        <div className='todo'>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        disabled
                        className={`list${todo.completed ? "complete" : ""}`}
                        
                        onChange={(event) => event.preventDefault()}
                    />
                    <button>
                        <FontAwesomeIcon icon={faCheckSquare} className='icon' onClick={() => handleComplete(todo)} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faEdit} className='icon' onClick={() => handleEdit(todo)} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faTrash} className='icon' onClick={() => handleDelete(todo)} />
                    </button>
                </li>
            ))}
        </div>
    )
}

export default TodoList