import React, { useContext, useState } from "react";

import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from "../../store/cart-context";
import CartItem from "./cartItem";
import Checkout from "./Checkout";

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = item => {
        cartCtx.addItem(item);
    };
    const orderHandler = () => {
        setIsCheckout(true);
    };

    async function addCartData(userData) {
        setIsSubmitting(true);
        const response = await fetch('https://react-learn-94d03-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
            {
                method: 'POST',
                body: JSON.stringify({
                    user: userData,
                    oderedItems: cartCtx.items
                }),
                headers: {
                    'Context-Type': 'application/json'
                }
            }
        );
        const data = await response.json();
        console.log(data);
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();
    }

    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    dishName={item.dishName}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const modalActions = (
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onHideCart}>
                Close
            </button>
            {hasItems && (
                <button className={styles.button} onClick={orderHandler}>
                    Order
                </button>
            )}
        </div>
    );

    const cartModalContent = (
        <React.Fragment>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout && (
                <Checkout onConfirm={addCartData} onCancel={props.onHideCart} />
            )}
            {!isCheckout && modalActions}
        </React.Fragment>
    );

    const isSubmittingModalContent = <p>Sending order data...</p>;

    const didSubmitModalContent = <React.Fragment>
        <p>Ordered Successfully!</p>
        <div className={styles.actions}>
            <button className={styles.button} onClick={props.onHideCart}>
                Close
            </button>
        </div>
    </React.Fragment>;

    return (
        <Modal onHideCart={props.onHideCart}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );
};

export default Cart;