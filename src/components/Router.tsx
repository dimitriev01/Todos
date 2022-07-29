import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ITodo } from '../interfaces';
import { AboutPage } from '../pages/AboutPage';
import { TodoIdPage } from '../pages/TodoIdPage';
import { TodosPage } from '../pages/TodosPage';


export const Router: React.FC = () => {

    const [todoForIdPage, setTodoForIdPage] = useState<ITodo>(null!)

    let getTodo = (todo: ITodo) => {
        setTodoForIdPage(todo)
    }

    return (
        <Routes>
            <Route element={<TodosPage todoForIdPage={getTodo} />} path="/" />
            <Route element={<AboutPage />} path="/about" />
            <Route element={<TodoIdPage todo={todoForIdPage} />} path="/todo/:id" />
        </Routes>
    );
};
