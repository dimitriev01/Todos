import React, { ChangeEvent } from "react";
import { IFilter } from "../interfaces";
import Select from "./Select/Select";

interface FilterTodosProps {
    filter: IFilter,
    setFilter(filter: IFilter): void
}

const FilterTodos: React.FC<FilterTodosProps> = ({ filter, setFilter }) => {
    return (
        <div className="filter">
            <input
                className="input-search"
                placeholder="Поиск по названию, описанию и тегу"
                value={filter.query}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setFilter({ ...filter, query: e.currentTarget.value })}
            />

            <Select
                value={filter.sort}
                onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' },
                    { value: 'tag', name: 'По тегу' }
                ]}
                defaultValue='Сортировка'
            />

        </div>
    );
}

export default FilterTodos;