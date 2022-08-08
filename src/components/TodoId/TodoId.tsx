import React, { useEffect, useState } from 'react';
import { ITodo } from '../../interfaces';
import Select from '../Select/Select';
import cl from './TodoId.module.scss'

interface TodoIdProps {
    todo: ITodo
    onUpdate: (todo: ITodo) => void
}

export const TodoId: React.FC<TodoIdProps> = ({ onUpdate, todo }) => {
    // const [statusSoon, setStatusSoon] = useState<boolean>(false)

    function checkColorCircle() {
        // setStatusSoon(Date.parse(new Date(todo.period).toISOString()) - Date.parse(new Date(todo.date).toISOString()) <= 259200000)
        return (Date.parse(new Date(todo.period).toISOString()) - Date.parse(new Date(todo.date).toISOString()) <= 259200000);
    }

    return (
        todo &&
        <>
            <div className={cl.id}>Страница задачи c id: <b>{todo.id}</b> </div>
            <div className={cl.prioritet}>
                Приортитет: <div className={[cl.prioritet__circle, checkColorCircle() ? cl.prioritet__circle_soon : cl.prioritet__circle_late].join(' ')}></div>
            </div>
            <div className={cl.field}>Название задачи: {todo.title}</div>
            <div className={cl.field}>Описание задачи: {todo.body}</div>
            <div className={cl.field}>Тег задачи: {todo.tag}</div>
            <div className={cl.field}>Дата создания задачи: {new Date(todo.date).toLocaleDateString()}</div>
            <div className={cl.field}>Срок задачи: {new Date(todo.period).toLocaleDateString()}</div>
            <div className={cl.field}>Редактирование: {String(!todo.disabled)}</div>            
            <div className={[cl.field, cl['field-status']].join(' ')}>
                Статус задачи:
                <Select
                    id={`status${todo.id}`}
                    className={cl['field-status__select']}
                    value={todo.status}
                    onChange={selectedStatus => onUpdate({ ...todo, status: selectedStatus })}
                    options={[
                        { value: 'new', label: "Новая" },
                        { value: 'inWork', label: "В работе" },
                        { value: 'done', label: "Завершена" },
                    ]}
                />
            </div>
        </>
    );
};
