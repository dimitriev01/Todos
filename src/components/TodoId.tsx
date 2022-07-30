import React from 'react';
import { ITodo } from '../interfaces';

interface TodoIdProps {
    todo: ITodo
}

export const TodoId: React.FC<TodoIdProps> = ({ todo }) => {

    return (
        <>
            {
                todo &&
                <>
                    <div className='field'>Страница задачи c id : <b>{todo.id}</b></div>
                    <div className='field'>Название задачи: {todo.title}</div>
                    <div className='field'>Описание задачи: {todo.body}</div>
                    <div className='field'>Статус задачи: {todo.completed.toString()}</div>
                </>
            }
        </>
    );
};
