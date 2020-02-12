import React, { useState } from 'react';
import ReactModal from 'react-modal';

import styles from './Legal.module.css'
import Privacy from './Privacy';
import Imprint from './Imprint';

interface ModalState {
    open: boolean,
    title: string,
    text: JSX.Element | string
}

const Legal = () => {
    let [modalState, setModalState] = useState<ModalState>({
        open: false,
        title: '',
        text: ''
    });

    const closeModal = () => {
        setModalState((oldState) => {
            return {
                ...oldState,
                open: false
            }
        })
    }

    return <div className={styles.Legal}>
        <div onClick={() => {
            setModalState({
                open: true,
                text: <Imprint />,
                title: 'Imprint'
            });
        }}>
            Imprint
        </div>
        <div onClick={() => {
            setModalState({
                open: true,
                text: <Privacy />,
                title: 'Privacy'
            })
        }}>
            Privacy
        </div>

        <ReactModal
            isOpen={modalState.open}
            contentLabel={modalState.title}
            onRequestClose={closeModal}
        >
            {modalState.text}
        </ReactModal>
    </div>
}

export default Legal;