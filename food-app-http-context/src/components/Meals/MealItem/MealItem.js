import React, { useContext } from "react";

import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = props => {
    const cartCtx = useContext(CartContext);
    const price = `₹${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            dishName: props.dishName,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.dishName}</h3>
                <div className={styles.description}>{props.desc}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    );
};

export default MealItem;