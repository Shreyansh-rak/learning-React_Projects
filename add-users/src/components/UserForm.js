import React, { useState, useRef } from "react";

import styles from './UserForm.module.css';
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from '../Helper/Wrapper';

function UserForm(props) {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const formSubmitHandler = event => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if ((enteredName.trim().length === 0) || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid Age!'
            });
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };

    const errorHandler = () => {
        setError(null);
    };


    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={formSubmitHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id='username'
                        type='text'
                        ref={nameInputRef}
                    />
                    <label htmlFor="Age">Age</label>
                    <input
                        id="Age"
                        type='number'
                        ref={ageInputRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>

            </Card>
        </Wrapper>
    )
}

export default UserForm;