import React from "react";
import ReactDom from "react-dom";

import styles from './Modal.module.css';

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onHideCart} />
};
const ModalOverlay = props => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
            {/* <Backdrop/>
            <ModalOverlay>{props.childern}</ModalOverlay> */}
        </React.Fragment>
    );
}

export default Modal;