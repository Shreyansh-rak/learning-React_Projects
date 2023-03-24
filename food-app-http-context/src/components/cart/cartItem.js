import React from "react";

import styles from './cartItem.module.css';

const CartItem = (props) => {
    const price = `₹${props.price.toFixed(2)}`
    return (
        <li className={styles['cart-item']}>
            <div>
                <h2>{props.dishName}</h2>
                <div className={styles.summary}>
                    <span className={styles.price}>
                        {price}
                    </span>
                    <span className={styles.amount}>
                        x {props.amount}
                    </span>
                </div>
            </div>
            <div className={styles.actions}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;