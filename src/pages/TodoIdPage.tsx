import React from 'react';
import { ITodo } from '../interfaces';

interface TodoIdPageProps {
    todo: ITodo
}

export const TodoIdPage: React.FC<TodoIdPageProps> = ({ todo }) => {

    return (
        <>
            {
                todo &&
                <>
                    <div>Страница задачи c id : <b>{todo.id}</b></div>
                    <div>Название задачи: {todo.title}</div>
                    <div>Описание задачи: {todo.body}</div>
                    <div>Статус задачи: {todo.completed.toString()}</div>
                </>
            }
        </>
    );
};
