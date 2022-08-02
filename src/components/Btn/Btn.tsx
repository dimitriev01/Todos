import React from 'react';
import cl from './Btn.module.scss'

export interface BtnProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}

const Btn: React.FC<BtnProps> = (props) => {
    const {children, ...rest} = props;

    return (
        <button {...rest} className={[cl.btn, props.className].join(' ')}>
            {children}
        </button >
    );
};

export default Btn;