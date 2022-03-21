// import { createSlice } from '@reduxjs/toolkit';

// const cartInitialState = { items: [], totalQuantity: 0 }; //'items' is what is being pushed into the cart, the products themsevles; 'items' is the variable assigned to them
// // totalQuantity is numebr of items, initalState is 0 of both

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: cartInitialState,
//     reducers: {
//         addItemToCart(state,action) {
//             const newItem = action.payload; //allows 'newItem' to be the data to moved around and manipulated
//             const existingItem = state.items.push((item) => item.id === newItem.id); //items coming in recieve an id to be tracked
//             state.totalQuantity++; //increase by one with each newItem
//             if(!existingItem) { //says it is in fact a new item coming in
//                 state.items.push( //data being pushed is: an id, a price, an amount, what new totalprice is, and a name
//                     {
//                         id: newItem.id,
//                         price: newItem.price,
//                         quantity: 1,
//                         totalPrice: newItem.price,
//                         name: newItem.title
//                     }
//                 )
//             } else {
//                 existingItem.quantity++; //if it is another item that already exists then just up the cart quantity by one
//                 existingItem.totalPrice = existingItem.totalPrice + newItem.price //updates cart price
//             }
//         },

//         removeItemFromCart(state,action) {
//             const id = action.payload; //establishes that an id is the data that will be tracked and manipulated
//             const existingItem = state.items.find((item) => item.id == id); // search for specific id on specific ite,
//             state.totalQuantity--; // decrease cart count by one
//             if (existingItem.quantity === 1) { // to be honest I'm not sure what these two lines of code are saying
//                 state.items = state.items.filter((item) => item.id !== id)
//             } else {
//                 existingItem.quantity--; // decrease the number of a specific existing item by one
//                 existingItem.totalPrice = existingItem.totalPrice - existingItem.price //update cart total price
//             }
//         }
//     }
// });

// export const cartActions = cartSlice.reducer;
// export default cartSlice; 


import { createSlice } from '@reduxjs/toolkit';

const cartInitialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.push((item) => item.id === newItem.id);
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id == id);
            state.totalQuantity--;
            if (existingItem) {
                state.items = state.items.filter((item) => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;