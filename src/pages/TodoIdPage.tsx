import React from 'react';
import { useParams } from 'react-router-dom';
import { ITodo } from '../interfaces';

interface TodoIdPageProps {
    todo: ITodo
}

export const TodoIdPage: React.FC<TodoIdPageProps> = ({ todo }) => {
    
    const params = useParams();

    return (
        <div>
            <div>Страница задачи c id : <b>{params.id}</b></div>
            {
                todo !== null ?
                    <>
                        <div>Название задачи: {todo.title}</div>
                        <div>Описание задачи: {todo.body}</div>
                        <div>Статус задачи: {todo.completed.toString()}</div>
                    </>
                    : <div className='todo-id-empty'>Нет данных о задаче</div>
            }
        </div>
    );
};
