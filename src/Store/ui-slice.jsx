import { createSlice } from '@reduxjs/toolkit';

const initialUiState = { cartIsVisible : false };

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUiState,
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible//toggles the view of the cart
        }
    }
});

export const uiActions = uiSlice.actions;
export default uiSlice;