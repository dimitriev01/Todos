import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

interface ModalProps {
    visible: boolean,
    setVisible(visible: boolean): void
}

const Modal: React.FC<ModalProps> = ({ children, visible, setVisible }) => {

    const rootClass = ['modal'];
    if (visible) {
        rootClass.push('modal_active')
    }

    return (
        <div className={rootClass.join(' ')} >
            <div className='modal__content' onClick={(e) => e.stopPropagation()}>
                <FontAwesomeIcon className='close' onClick={() => setVisible(false)} icon={faClose} />
                {children}
            </div>
        </div>
    );
};

export default Modal;