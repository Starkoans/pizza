import {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addSameCartItem, deleteSameCartItem} from "../store/CartItemSlice.js";
import {useForm} from "react-hook-form";
import OrderForm from "./OderForm.jsx";

function CartItem (props){

    const dispatch = useDispatch();
    const handleClickCount = (value)=>{


        switch (value) {
            case "-" :
                dispatch( deleteSameCartItem( {
                    id: props.cartItemId,
                    countValue: props.cartItemCount,

                }) )
                break;
            case "+" :

                dispatch( addSameCartItem( {
                    id: props.cartItemId,
                    countValue: props.cartItemCount,

                }) )

                break;

        }
    }


    return(
        <>
            {
                <div>
                    <img style={{height:'100px',weight: '100px'} } alt={'Pizza_img'} src={props.cartItemImg}/>
                    <h3>{props.cartItemName}</h3>
                    <h3>{props.cartItemPriceOfOne } руб.</h3>
                    <p>{props.cartItemCount}</p>
                    <input type={"button"}
                           value={"-"}
                           onClick={(e)=>{
                               handleClickCount(e.target.value);
                           }}
                    />
                    <input type={"button"}
                           value={"+"}
                           onClick={(e)=>{
                               handleClickCount(e.target.value);
                           }}
                    />


                </div>
            }

        </>

    )
}





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
        <div>
            { (items.length!==0) ? <div>
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
                <h3>Сумма заказа: {inTotal}</h3>
                <button onClick={handleShowForm}>Оформить заказ</button>
                {  showOrderForm ? <OrderForm/> : null}
            </div> : <p>Корзина пуста.</p>

            }

        </div>

    )
}
