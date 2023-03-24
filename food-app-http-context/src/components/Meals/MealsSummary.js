import React from "react";

import styles from "./MealsSummary.module.css";
import Card from "../UI/Card";

const MealsSummary = () => {
    return (
        <Card className={styles.summary}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Choose the Best food in your city at the best price and never doubt on the quality and hygine.
            </p>
            <p>
                So what are you wating for, order now for lunch or dinner.
            </p>
        </Card>
    );
}

export default MealsSummary;