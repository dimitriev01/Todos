import React, { ChangeEvent } from "react";
import { IFilter } from "../../interfaces";
import Select from "../Select/Select";
import cl from './Filter.module.scss'
// import Select from 'react-select'

interface FilterTodosProps {
    filter: IFilter,
    setFilter(filter: IFilter): void
}

const FilterTodos: React.FC<FilterTodosProps> = ({ filter, setFilter }) => {

    const sortOptions = [
        { value: 'title', name: 'По названию' },
        { value: 'date', name: 'По дате' }
    ]

    return (
        <div className={cl.filter}>
            <input
                className={cl['filter__search']}
                placeholder="Фильтр по тегу"
                value={filter.query}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFilter({ ...filter, query: e.currentTarget.value })}
            />

            <Select
                value={filter.sort}
                onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
                options={sortOptions}
                defaultValue='Сортировка'
            />

        </div>
    );
}

export default FilterTodos;