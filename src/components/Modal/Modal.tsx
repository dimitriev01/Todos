import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import cl from  './Modal.module.scss'

interface ModalProps {
    visible: boolean,
    setVisible(visible: boolean): void
}

const Modal: React.FC<ModalProps> = ({ children, visible, setVisible }) => {

    const rootClass = [cl['modal']]
    if (visible){
       rootClass.push(cl['modal_active'])
    }


    return (
        <div className={rootClass.join(' ')} >
            <div className={cl.modal__content} onClick={(e) => e.stopPropagation()}>
                <FontAwesomeIcon className='close' onClick={() => setVisible(false)} icon={faClose} />
                {children}
            </div>
        </div>
    );
};

export default Modal;