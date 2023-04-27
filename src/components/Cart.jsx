import {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addSameCartItem, deleteSameCartItem} from "../store/CartItemSlice.js";
import {useForm} from "react-hook-form";
import OrderForm from "./OderForm.jsx";
import CartItem from "./CartItem.jsx";
import styles from './styles/Cart.module.css'


export default function Cart (){

    const items = useSelector((state) => state.cartItems.cartItems);
    const [showOrderForm, setShowOrderForm] = useState(false);

    const handleShowForm = (data) => {
        console.log(showOrderForm)
        setShowOrderForm(!showOrderForm);
    }
    useEffect(()=>{},[showOrderForm]);


    let total = 0;
    for (let i in items){
        total= total + items[i].price_of_one * items[i].countValue;
    }
    const [inTotal, setInTotal] = useState(total);
    useEffect(()=>{},[total])
    const totalChangeHandler =(price, value)=>{
        switch (value){
            case "+":
                setInTotal(inTotal+price);
                break;
            case "-":
                setInTotal(inTotal-price);
                break;
        }

    }

    useEffect(()=>{
        console.log(items)
    },[items])

    return(


        <div >
            { (items.length!==0) ?
                <div className={styles.cart}>
                {
                    items.map((item,index)=>{
                        return(
                            <CartItem key={index}
                                      cartItemId={item.id}
                                      cartItemImg={item.img}
                                      cartItemName={item.name + ' ' + item.size}
                                      totalChangeHandler={totalChangeHandler}
                                      cartItemCount={item.countValue}
                                      cartItemPriceOfOne={item.price_of_one}
                            />
                        )
                    })
                }
                <div classNamse={styles.cartSummary}>
                    <div className={styles.cartSummaryValue}>
                        <p>Сумма заказа: </p>
                        <h3>{inTotal}</h3>

                    </div>
                    <button
                        className={styles.cartGoToFormBtn}
                        onClick={handleShowForm}>
                        Оформить заказ
                    </button>
                </div>

            </div>
                : <p>Корзина пуста.</p>

            }
            {  showOrderForm ? <OrderForm/> : null}
        </div>

    )
}
