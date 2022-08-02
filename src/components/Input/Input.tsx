import React, { InputHTMLAttributes } from 'react';
import cl from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className: string;
    ref: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...otherProps }, ref) => {
    return (
        <input
            className={[cl.input, className].join(" ")}
            {...otherProps}
            ref={ref}
        />
    );
});

export default Input;