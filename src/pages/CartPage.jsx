import Cart from "../components/Cart.jsx";
import {useSelector} from "react-redux";
import styles from './styles/CartPage.module.css'

export const CartPage = () => {

    return(
        <div className={styles.cartPage}>
            <Cart/>

        </div>
        )

}