import {Link} from "react-router-dom";
import {CartItems} from "../DB/CartItems.js";
import Cart from "../components/Cart.jsx";

export const CartPage = () => {



    return(
        <div>
            CartPage!

            <Cart CartItems={CartItems}/>

        </div>
        )

}