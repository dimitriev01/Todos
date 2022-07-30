import React, { useEffect, useState } from 'react';
import { ITodo } from '../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faBookOpen } from '@fortawesome/free-solid-svg-icons'

interface TodoItemProps {
    todo: ITodo
    onToggle: (id: number) => void
    onRemove: (id: number) => void
    sendOpened: (opened: boolean) => void
    setOpenedTodo: (todo: ITodo) => void
    onUpdate: (todos: ITodo) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove, sendOpened, setOpenedTodo, onUpdate }) => {

    const [todoEdit, setTodoEdit] = useState<ITodo>(todo)

    const classes = ['todo']
    if (todo.completed) {
        classes.push('todo_completed')
    }

    useEffect(() => {
        onUpdate({ ...todo, ...todoEdit })
    }, [todoEdit])

    return (
        <li className={classes.join(' ')} key={todo.id}>
            <input
                id={`item-checkbox${todo.id}`}
                className='item-checkbox'
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <label htmlFor={`item-checkbox${todo.id}`} />


            <div className='item-inputs'>
                <span>Название:</span>
                <input
                    className='item-input'
                    value={todoEdit.title.trim()}
                    onChange={e => setTodoEdit({ ...todoEdit, title: e.target.value })}
                />

                <span> Описание:</span>
                <input
                    className='item-input'
                    value={todoEdit.body.trim()}
                    onChange={e => setTodoEdit({ ...todoEdit, body: e.target.value })}
                />
            </div>

            <span
                className='open'
                onClick={() => {
                    sendOpened(true)
                    setOpenedTodo(todo)
                }}
            >
                <FontAwesomeIcon icon={faBookOpen} />
            </span>

            <span
                className='delete'
                onClick={e => onRemove(todo.id)}
            >
                <FontAwesomeIcon icon={faTrash} />
            </span>


        </li>
    );
};

export default TodoItem;