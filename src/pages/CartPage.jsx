import {Link} from "react-router-dom";
import {CartItems} from "../DB/CartItems.js";
import Cart from "../components/Cart.jsx";
import {useContext, useEffect} from "react";
import {useSelector} from "react-redux";
import styles from './styles/CartPage.module.css'

export const CartPage = () => {

    return(
        <div className={styles.cartPage}>
            <Cart/>

        </div>
        )

}