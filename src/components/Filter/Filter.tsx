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
            <Select
                className={cl.filter__sort}
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                options={sortOptions}
                defaultValue='Сортировка'
            />
            
            <Input
                className={cl.filter__search}
                placeholder="Фильтр по тегу и статусу"
                value={filter.query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter({ ...filter, query: e.currentTarget.value })}
            />

        </div>
    );
}

export default FilterTodos;