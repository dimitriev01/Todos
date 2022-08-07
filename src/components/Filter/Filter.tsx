import React from "react";
import { IFilter } from "../../interfaces";
import Input from "../Input/Input";
import Select from "../Select/Select";
import cl from './Filter.module.scss'

interface FilterTodosProps {
    filter: IFilter,
    setFilter(filter: IFilter): void
}

const FilterTodos: React.FC<FilterTodosProps> = ({ filter, setFilter }) => {

    const sortOptions = [
        { value: 'title', label: 'По названию' },
        { value: 'date', label: 'По дате' }
    ]

    return (
        <div className={cl.filter}>
            <Input
                className={cl.search}
                placeholder="Фильтр по тегу"
                value={filter.query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter({ ...filter, query: e.currentTarget.value })}
            />

            <Select
                className={cl.sort}
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                options={sortOptions}
                defaultValue='Сортировка'
            />

        </div>
    );
}

export default FilterTodos;