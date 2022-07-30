import React, { useEffect, useState } from 'react';
import { ITodo } from '../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import Select from './Select/Select';

interface TodoItemProps {
    todo: ITodo
    onToggle: (id: number) => void
    onRemove: (id: number) => void
    isOpenedTodo: (opened: boolean) => void
    setOpenedTodo: (todo: ITodo) => void
    onUpdate: (todos: ITodo) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove, isOpenedTodo, setOpenedTodo, onUpdate }) => {

    const [todoEdit, setTodoEdit] = useState<ITodo>(todo)

    const classes = ['todo']
    if (todo.completed) {
        classes.push('todo_completed')
    }

    useEffect(() => {
        onUpdate(todoEdit)
    }, [todoEdit])

    return (
        <li className={classes.join(' ')} key={todo.id}>

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

            <span> Тег:</span>
            <input
                className='item-input'
                value={todoEdit.tag.trim()}
                onChange={e => setTodoEdit({ ...todoEdit, tag: e.target.value })}
            />

            <div className="tools">
                <span
                    className='open'
                    onClick={() => {
                        isOpenedTodo(true)
                        setOpenedTodo(todo)
                    }}
                >
                    <FontAwesomeIcon icon={faBookOpen} />
                </span>

                <input
                    id={`item-checkbox${todo.id}`}
                    className='item-checkbox'
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <label htmlFor={`item-checkbox${todo.id}`} />

                <span
                    className='delete'
                    onClick={e => onRemove(todo.id)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </span>
            </div>

        </li>
    );
};

export default TodoItem;