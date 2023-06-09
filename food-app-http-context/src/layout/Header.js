import React from "react";

import mealsImage from '../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

import styles from './Header.module.css';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <h1>Food App</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="Delicious Food" />
            </div>
        </React.Fragment>
    );
}

export default Header;