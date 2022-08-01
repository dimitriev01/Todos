import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageQuote from '../../pages/PageQuote';
import { TodosPage } from '../../pages/TodosPage';

export const Router: React.FC = () => {

    return (
        <Routes>
            <Route path='/' element={<PageQuote />} />
            <Route path="/todos" element={<TodosPage />} />
        </Routes>
    );
};
