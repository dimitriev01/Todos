import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutPage } from '../pages/AboutPage';
import { TodosPage } from '../pages/TodosPage';


export const Router: React.FC = () => {

    return (
        <Routes>
            <Route element={<TodosPage  />} path="/" />
            <Route element={<AboutPage />} path="/about" />
        </Routes>
    );
};
