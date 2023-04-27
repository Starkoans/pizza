import {configureStore} from '@reduxjs/toolkit'
import cartItemReducer from "./CartItemSlice";

//тут будет стор (хранилище)

//configureStore возвращает хранилище

export const store = configureStore({
    //тут хранятся редьюсеры (слайсы)

    reducer:{
        cartItems : cartItemReducer
        
    },
    devTools: true

})

