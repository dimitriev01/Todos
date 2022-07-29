import React from 'react';

interface ModalProps {
    visible: boolean,
    setVisible(visible:boolean): void
}

const Modal: React.FC<ModalProps> = ({ children, visible, setVisible }) => {

    const rootClass = ['modal'];
    if (visible) {
        rootClass.push('modal_active')
    }

    return (
        <div className={rootClass.join(' ')} onClick={()=> setVisible(false)}>
            <div className='modal__content' onClick={(e)=> e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;