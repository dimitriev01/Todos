import React from 'react';
import { ITodo } from '../interfaces';

interface TodoIdProps {
    todo: ITodo
    onToggle: (id: number) => void
}

export const TodoId: React.FC<TodoIdProps> = ({ onToggle, todo }) => {

    return (
        <>
            {
                todo &&
                <>
                    <div className='field'>Страница задачи c id : <b>{todo.id}</b></div>
                    <div className='field'>Название задачи: {todo.title}</div>
                    <div className='field'>Описание задачи: {todo.body}</div>
                    <div className='field'>Тег задачи: {todo.tag}</div>
                    <div className='field'>
                        Статус задачи: {todo.completed.toString()}
                        <input
                            id={`field__checkbox${todo.id}`}
                            className='field__checkbox'
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
