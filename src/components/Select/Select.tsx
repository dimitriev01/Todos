import React from 'react'
import { IOption } from '../../interfaces'
import cl from '../Select/Select.module.scss'

interface SelectProps {
    options: IOption[],
    className?: string;
    defaultValue?: string,
    onChange?: (value: string) => void,
    value?: string
}

const Select: React.FC<SelectProps> = ({ options, defaultValue, value, onChange, className }) => {
    return (
        <select
            className={cl.select}
            value={value}
            onChange={e => onChange && onChange(e.currentTarget.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                )
            })}
        </select>
    )
}

export default Select;