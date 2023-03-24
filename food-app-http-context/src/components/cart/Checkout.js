import { useRef, useState } from 'react';

import styles from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 6;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        address: true,
        city: true,
        pin: true
    });

    const nameInputRef = useRef();
    const addressInputRef = useRef();
    const pinInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = event => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredPin = pinInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        setFormInputsValidity({
            name: true,
            address: true,
            city: true,
            pin: true
        })


        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredAddressIsValid = !isEmpty(enteredAddress);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPinIsValid = isFiveChars(enteredPin);

        setFormInputsValidity({
            name: enteredNameIsValid,
            address: enteredAddressIsValid,
            city: enteredCityIsValid,
            pin: enteredPinIsValid,
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredAddressIsValid &&
            enteredCityIsValid &&
            enteredPinIsValid;

        if (!formIsValid) {
            return;
        }
        props.onConfirm({
            name: enteredName,
            address: enteredAddress,
            city: enteredCity,
            pin: enteredPin,
        });
    };

    const nameControlstyles = `${styles.control} ${formInputsValidity.name ? '' : styles.invalid
        }`;
    const addressControlstyles = `${styles.control} ${formInputsValidity.address ? '' : styles.invalid
        }`;
    const pinControlstyles = `${styles.control} ${formInputsValidity.pin ? '' : styles.invalid
        }`;
    const cityControlstyles = `${styles.control} ${formInputsValidity.city ? '' : styles.invalid
        }`;

    return (
        <form className={styles.form} onSubmit={confirmHandler}>
            <div className={nameControlstyles}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameInputRef} />
            </div>
            <div className={addressControlstyles}>
                <label htmlFor='address'>Address</label>
                <input type='text' id='address' ref={addressInputRef} />
            </div>
            <div className={pinControlstyles}>
                <label htmlFor='pin'>Pin Code</label>
                <input type='text' id='pin' ref={pinInputRef} />
            </div>
            <div className={cityControlstyles}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityInputRef} />
            </div>
            <div className={styles.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button className={styles.submit}>Confirm</button>
            </div>
        </form>
    );
}

export default Checkout;