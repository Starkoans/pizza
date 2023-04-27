import React, {useContext, useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {addCartItem} from "../store/CartItemSlice.js";
import styles from './styles/PizzaItem.module.css'


function SizeRadio(props) {

    return(
        <div className={styles.sizeRadio}>
            {
                props.sizesArr.map((size, index)=>(
                    <input className={ props.pizzaSize === size ?  styles.sizeRadioBtnSelected :styles.sizeRadioBtn}
                        key={index}
                        type={"button"}
                        name="sizeType"
                        value={size}
                        // style={props.pizzaSize === size ?  {className}:{color:"grey"}}
                        onClick={(e) => props.selectSize(e.target.value)}
                    />)
                )
            }
        </div >
    )
}
export default function PizzaItem (props){

    const sizesArr = ["25см","30см","40см"];

    const [selectedSizeType, setSizeType ]= useState(sizesArr[0]);
    const handleClickSizeType = (data) => {
        setSizeType( data);
    }
    const [price, setPrice] = useState(props.pizza.price[0]);


    useEffect(()=>{

            switch (selectedSizeType) {
                case sizesArr[0] :
                    setPrice(props.pizza.price[0]);
                    break;
                case sizesArr[1] :
                    setPrice(props.pizza.price[1]);
                    break;
                case sizesArr[2] :
                    setPrice( props.pizza.price[2]);
                    break;
            }
        }
        ,[selectedSizeType]
    )

    const dispatch = useDispatch();


    const handleClickAddItem = (data)=>{

        dispatch(addCartItem({
            id: props.pizza.id,
            name:props.pizza.name,
            img : props.pizza.img,
            size: selectedSizeType,
            price_of_one: price,
            countValue: 1
        }))
    }
    const items = useSelector((state) => state.cartItems.cartItems);

    const inCart = items.some( (itm) => itm.id === props.pizza.name+selectedSizeType);

    useEffect(()=>{
        console.log(items)
        console.log(props.pizza.id + ': ' + inCart)
    },[items])

    return(
        <div className={styles.pizzaItem}>
            <img className={styles.pizzaImg}
                 alt={'Pizza_'+props.pizza.name}
                 src={props.pizza.img}/>
            <h2>{props.pizza.name}</h2>
            <p className={styles.typeTag}>{'#' + props.pizza.type}</p>
            <p className={styles.pizzaItemDescription}>{props.pizza.description}</p>

            <SizeRadio pizzaSize={selectedSizeType}
                       sizesArr={sizesArr}
                       selectSize={handleClickSizeType} />

            <h2>{price} руб.</h2>
            <input type={"button"}
                   value={"Добавить"}
                   onClick={handleClickAddItem}
                   className={styles.addItemBtn}

            />
            {inCart? <p style={{display: "inline", padding: "10px"}}>В корзине</p> : null}
        </div>
    )
}