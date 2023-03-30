import {Link} from "react-router-dom";
import {CartItems} from "../DB/CartItems.js";
import Cart from "../components/Cart.jsx";
import {useContext, useEffect} from "react";
import {useSelector} from "react-redux";


export const CartPage = () => {

    return(
        <div>
            CartPage!

            <Cart/>

        </div>
        )

}