import {configureStore} from '@reduxjs/toolkit'
import cartItemReducer from "./CartItemSlice";

//тут будет стор
export const store = configureStore({
    //тут хранятся редьюсеры (слайсы)

    reducer:{
        cartItems : cartItemReducer,

        
    },
    devTools: true

})

