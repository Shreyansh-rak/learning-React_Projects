import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import styles from './ErrorModal.module.css'

const BackDrop = props => {
    return <div className={styles.backdrop} onClick={props.onConfirm} />;
};
const ModalOverlay = props => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onConfirm} type='submit'>Okay</Button>
            </footer>
        </Card>
    );
};

function ErrorModal(props) {
    return (
        <>
            {ReactDOM.createPortal(
                <BackDrop
                    onConfirm={props.onConfirm}
                />,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    onConfirm={props.onConfirm}
                    title={props.title}
                    message={props.message}
                />,
                document.getElementById('modal-root')
            )}
        </>
    );
}

export default ErrorModal;