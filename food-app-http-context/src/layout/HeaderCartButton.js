import React, { useContext, useEffect, useState } from "react";

import styles from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import CartContext from "../store/cart-context";

const HaederCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [btnHighlight, setBtnHighlight] = useState(false);

    const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

    const { items } = cartCtx;

    const btnStyles = `${styles.button} ${btnHighlight ? styles.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnHighlight(true);

        const timer = setTimeout(() => {
            setBtnHighlight(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnStyles}
            onClick={props.onClick}
            type={props.type}
        >
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>

            {props.children}
        </button>
    );
}

export default HaederCartButton;