import React, { useEffect, useState } from "react";

import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

// const DUMMY_MEALS = [
//     {
//         id: '1',
//         dishName: "Paneer Butter Masala",
//         desc: "Cottage Cheese",
//         price: 220
//     },
//     {
//         id: '2',
//         dishName: "Kadai Paneer",
//         desc: "Cottage Cheese",
//         price: 230
//     },
//     {
//         id: '3',
//         dishName: "Paneer Lababdar",
//         desc: "Cottage Cheese",
//         price: 240
//     },
//     {
//         id: '4',
//         dishName: "Special Paneer Gravy",
//         desc: "Cottage Cheese",
//         price: 250
//     },
// ];

const AvailableMeals = (props) => {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const fetchMeals = async () => {
            setError(null);
            setIsLoading(true);
            const response = await fetch('https://react-learn-94d03-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();

            const loadedFood = [];

            for (const key in data) {
                loadedFood.push({
                    id: key,
                    desc: data[key].desc,
                    dishName: data[key].dishName,
                    price: data[key].price,
                });
            }
            setMeals(loadedFood);
            setIsLoading(false);
        };

        fetchMeals().catch((error) => {
            setError(error.message);
            setIsLoading(false);
        });
    }, []);

    const mealsList = meals.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            dishName={meal.dishName}
            desc={meal.desc}
            price={meal.price}
        />
    ));

    let content = <p>{error}</p>

    if (mealsList.length > 0) {
        content = mealsList;
    }

    if (error) {
        content = <p>{error}</p>;
    }
    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <Card className={styles.meals}>
            <ul>
                {content}
            </ul>
        </Card>
    );
}
export default AvailableMeals;