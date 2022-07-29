import React from 'react'
import { IOption } from '../../interfaces'

interface SelectProps {
    options: IOption[],
    defaultValue: string,
    onChange(value: string): void,
    value: string
}

const Select: React.FC<SelectProps> = ({ options, defaultValue, value, onChange }) => {
    return (
        <select
            className='select-sort'
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )
            })}
        </select>
    )
}

export default Select;