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
    ref?: React.ForwardedRef<HTMLSelectElement>
}

const Select: React.FC<SelectProps> = React.forwardRef(({ options, defaultValue, value, onChange, className, disabled, id }, ref) => {

    return (
        <select
            ref={ref}
            id={id}
            disabled={disabled}
            className={[cl.select, className].join(' ')}
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
        >
            <option disabled value=''>{defaultValue}</option>
            {options.map(option => {
                return (
                    <option key={option.value} value={option.value === 'date' || option.value === 'title' ? option.value : option.label}>
                        {option.label}
                    </option>
                )
            })}
        </select>
    )
})

export default Select;