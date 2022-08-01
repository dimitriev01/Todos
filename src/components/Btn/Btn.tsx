import React from 'react';
import cl from './Btn.module.scss'

interface BtnProps {
    children: React.ReactNode;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Btn: React.FC<BtnProps> = (props) => {

    return (
        <button onClick={props.onClick} className={[cl.btn].join(' ')}>
            {props.children}
        </button >
    );
};

export default Btn;