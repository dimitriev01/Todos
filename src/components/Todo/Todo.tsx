import React, { useEffect, useState } from 'react';
import { ITodo } from '../../interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import cl from './Todo.module.scss'
import { today } from '../../hooks/UseTodos';
import Input from '../Input/Input';


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


    const classes = [cl['todo']]
    if (todo.completed) {
        classes.push(cl['todo_completed'])
    }

    useEffect(() => {
        onUpdate(todoEdit)
    }, [todoEdit])

    return (
        <li className={classes.join(' ')} key={todo.id}>

            <span>Название:</span>
            <Input
                className={cl.todo__input}
                value={todoEdit.title.trim()}
                onChange={e => setTodoEdit({ ...todoEdit, title: e.target.value })}
            />

            <span> Описание:</span>
            <Input
                className={cl.todo__input}
                value={todoEdit.body.trim()}
                onChange={e => setTodoEdit({ ...todoEdit, body: e.target.value })}
            />

            <span> Тег:</span>
            <Input
                className={cl.todo__input}
                value={todoEdit.tag.trim()}
                onChange={e => setTodoEdit({ ...todoEdit, tag: e.target.value })}
            />


            <span> Срок:</span>
            <Input
                min={today}
                type='date'
                className={cl.todo__input}
                value={new Date(todoEdit.period).toLocaleDateString().split('.').reverse().join('-')}
                onChange={e => setTodoEdit({ ...todoEdit, period: new Date(e.target.value) })}
            />

            <span> Дата добавления:</span>
            <Input
                disabled
                className={cl.todo__input}
                value={new Date(todoEdit.date).toLocaleDateString()}
            />

            <div className={cl.todo__tools}>
                <span
                    className={cl.todo__open}
                    onClick={() => {
                        isOpenedTodo(true)
                        setOpenedTodo(todo)
                    }}
                >
                    <FontAwesomeIcon icon={faBookOpen} />
                </span>

                <input
                    value={todo.completed ? 'Завершена' : 'Новая'}
                    id={`status${todo.id}`}
                    className={cl.todo__status}
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <label htmlFor={`status${todo.id}`} />

                <span
                    className={cl.todo__delete}
                    onClick={e => onRemove(todo.id)}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </span>
            </div>

        </li>
    );
};

export default TodoItem;