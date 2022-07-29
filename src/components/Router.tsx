import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ITodo } from '../interfaces';
import { AboutPage } from '../pages/AboutPage';
import { TodoIdPage } from '../pages/TodoIdPage';
import { TodosPage } from '../pages/TodosPage';


export const Router: React.FC = () => {

    const [todosForIdPage, setTodosForIdPage] = useState<ITodo[]>(null!)
    // const [todoForIdPage, setTodoForIdPage] = useState<ITodo>(null!)

    // let getTodo = (todo: ITodo) => {
    //     setTodoForIdPage(todo)
    // }

    let getTodos = (todos: ITodo[]) => {
        setTodosForIdPage(todos)
    }

    return (
        <Routes>
            <Route element={<TodosPage todosForIdPage={getTodos} /*todoForIdPage={getTodo}*/ />} path="/" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<TodoIdPage todos={todosForIdPage} /*todo={todoForIdPage}*/ />} path="/todo/:id" />
        </Routes>
    );
};
