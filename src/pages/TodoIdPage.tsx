import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ITodo } from '../interfaces';

interface TodoIdPageProps {
    // todo: ITodo
    todos: ITodo[]
}

export const TodoIdPage: React.FC<TodoIdPageProps> = ({ /*todo*/ todos }) => {

    const params = useParams();
    const [currentTodo, setCurrentTodo] = useState<ITodo>()

    useEffect(() => {
        const currentTodo = todos.find(todo => {
            return todo.id === Number(params.id)
        })
        if (currentTodo)
            setCurrentTodo(currentTodo)
    }, [])

    return (
        <div>
            <div>Страница задачи c id : <b>{params.id}</b></div>
            {
                // todo !== null ?
                currentTodo &&
                    <>
                        {/* <div>Название задачи: {todo.title}</div>
                        <div>Описание задачи: {todo.body}</div>
                        <div>Статус задачи: {todo.completed.toString()}</div> */}
                        <div>Название задачи: {currentTodo.title}</div>
                        <div>Описание задачи: {currentTodo.body}</div>
                        <div>Статус задачи: {currentTodo.completed.toString()}</div>
                    </>
                    // : <div className='todo-id-empty'>Нет данных о задаче</div>
            }
        </div>
    );
};
