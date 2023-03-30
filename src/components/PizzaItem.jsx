import React, {useContext, useEffect, useState} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {addCartItem} from "../store/CartItemSlice.js";


function SizeRadio(props) {

    return(
        <div className={'size-radio'}>
            {
                props.sizesArr.map((size, index)=>(
                    <input className={'size-radio-btn'}
                        key={index}
                        type={"button"}
                        name="sizeType"
                        value={size}
                        style={props.pizzaSize === size ?  {color:"green"}:{color:"grey"}}
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
    useEffect(()=>{
        console.log(items)
    },[items])

    return(
        <div className={'pizza-item'}>
            <img className={'pizza-img'}
                 alt={'Pizza_'+props.pizza.name}
                 src={props.pizza.img}/>
            <h3>{props.pizza.name}</h3>
            <p>{props.pizza.type}</p>
            <p>{props.pizza.description}</p>

            <SizeRadio pizzaSize={selectedSizeType}
                       sizesArr={sizesArr}
                       selectSize={handleClickSizeType} />

            <h3>{price} руб.</h3>
            <input type={"button"}
                   value={"Добавить"}
                   onClick={handleClickAddItem}

            />

        </div>
    )
}