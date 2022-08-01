import { useMemo } from "react";
import { ITodo } from "../interfaces";
import { sortBy } from 'sort-by-typescript';

export const useSortedTodos = (todos: ITodo[], sort: string) => {
    const sortedTodos = useMemo(() => {
        if (sort)
            return [...todos].sort(sortBy(sort));
        // return [...todos].sort((a, b) => a[sort].localeCompare(b[sort]));
        return todos;
    }, [sort, todos]);

    return sortedTodos;
}

export const useSortedAndSearchedTodos = (todos: ITodo[], sort: string, query: string) => {
    const sortedTodos = useSortedTodos(todos, sort);
    const sortedAndSearchedTodos = useMemo(() => {
        return sortedTodos.filter(p =>
            p.tag.toLowerCase().includes(query.toLowerCase()) 
        )
    }, [query, sortedTodos]);

    return sortedAndSearchedTodos;
}

export const today = new Date().toLocaleDateString().split('.').reverse().join('-')

