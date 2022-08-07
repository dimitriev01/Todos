import React from 'react'
import { IOption } from '../../interfaces'
import cl from '../Select/Select.module.scss'

interface SelectProps {
    options: IOption[],
    className?: string;
    defaultValue?: string,
    onChange: (value: string) => void,
    value: string
    disabled?: boolean
    id?: string
}

const Select: React.FC<SelectProps> = ({ options, defaultValue, value, onChange, className, disabled, id }) => {
    return (
        <select
            id={id}
            disabled={disabled}
            className={[cl.select, className].join(' ')}
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
        >
            <option disabled value=''>{defaultValue}</option>
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