import React, { useState } from 'react';
import { ITodo } from '../../interfaces';
import cl from './TodoId.module.scss'

interface TodoIdProps {
    todo: ITodo
    onToggle: (id: number) => void
}

export const TodoId: React.FC<TodoIdProps> = ({ onToggle, todo }) => {
    // const [statusSoon, setStatusSoon] = useState<boolean>(false)

    function checkColorCircle() {
        // setStatusSoon(Date.parse(new Date(todo.period).toISOString()) - Date.parse(new Date(todo.date).toISOString()) <= 259200000)
        return (Date.parse(new Date(todo.period).toISOString()) - Date.parse(new Date(todo.date).toISOString()) <= 259200000);
    }

    return (
        <>
            {
                todo &&
                <>
                    <div className={cl.id}>Страница задачи c id: <b>{todo.id}</b> </div>
                    <div className={cl.status}>
                        Приортитет: <div className={[cl.status__circle, checkColorCircle() ? cl.status__circle_soon : cl.status__circle_late].join(' ')}></div>
                    </div>
                    <div className={cl.field}>Название задачи: {todo.title}</div>
                    <div className={cl.field}>Описание задачи: {todo.body}</div>
                    <div className={cl.field}>Тег задачи: {todo.tag}</div>
                    <div className={cl.field}>Дата создания задачи: {new Date(todo.date).toLocaleDateString()}</div>
                    <div className={cl.field}>Срок задачи: {new Date(todo.period).toLocaleDateString()}</div>
                    <div className={cl.field}>
                        Статус задачи: {todo.completed.toString()}
                        <input
                            value={todo.completed ? 'Завершена' : 'Новая'}
                            id={`field__checkbox${todo.id}`}
                            className={cl.field__checkbox}
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggle(todo.id)}
                        />
                        <label htmlFor={`field__checkbox${todo.id}`} />
                    </div>
                </>
            }
        </>
    );
};
