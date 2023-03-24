import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounter = { counter: 0, showProduct: false };
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounter,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        toggle(state) {
            if (state.counter > 0) {
                state.showProduct = true;
            }
        }
    }
});

const initialCart = {
    cartIsOpen: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        toggleCart(state) {
            state.cartIsOpen = !state.cartIsOpen;
        }
    }
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        cart: cartSlice.reducer
    },
});

export const cartActions = cartSlice.actions;
export const counterActions = counterSlice.actions;

export default store;