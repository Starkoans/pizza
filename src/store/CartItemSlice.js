import {createSlice} from "@reduxjs/toolkit";
import {useEffect} from "react";


const CartItemSlice = createSlice({
        name: 'cartItem',

        //начальное состояние - пусой массив
        initialState: {
            cartItems: []
        },

        reducers: {

            addCartItem(state, action) {

                const newItemID = action.payload.name + action.payload.size;

                const selectedItem = state.cartItems.find(
                    (item) => item.id === newItemID);

                if (selectedItem === undefined) {
                    state.cartItems.push({
                        id: newItemID,
                        name: action.payload.name,
                        price_of_one: action.payload.price_of_one,
                        size: action.payload.size,
                        img: action.payload.img,
                        countValue: action.payload.countValue
                    })
                } else {
                    selectedItem.countValue += 1;
                }

            },

            addSameCartItem(state, action) {

                const selectedItem = state.cartItems.find(
                    (item) => item.id === action.payload.id);

                selectedItem.countValue += 1;

            },

            deleteSameCartItem(state, action) {

                const selectedItem = state.cartItems.find(
                    (item) => item.id === action.payload.id);

                // if (selectedItem.countValue === 1) {
                //     state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
                // } else
                if (selectedItem.countValue > 1){
                    selectedItem.countValue -= 1;
                }


            },


            deleteCartItem(state, action) {
                const selectedItem = state.cartItems.find(
                    (item) => item.id === action.payload.id);
                state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id)
            }

        }
    }
)

export const {addCartItem, deleteSameCartItem, addSameCartItem, deleteCartItem} = CartItemSlice.actions;

export default CartItemSlice.reducer;