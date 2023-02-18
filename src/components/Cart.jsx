import {useEffect, useState} from "react";


// const CartItems =
//     {
//         id: "11",
//         name: "Маргарита",
//         price_of_one: 259,
//         img: "https://dodopizza-a.akamaihd.net/static/Img/Products/748949429e25404ea10aab002c910d84_366x366.webp",
//         countValue:1
//     }


function CartItem (props){

    const [count, setCount] = useState(props.cartItemCount);
    const [price, setPrice] = useState(props.cartItemPriceOfOne*props.cartItemCount);
    const [visible, setVisible] = useState(props.cartItemCount ? true : false);

    const handleClickCount = (value)=>{

        switch (value) {
            case "-" :
                setCount(count-1);
                setPrice(price-props.cartItemPriceOfOne);
                props.totalChangeHandler(props.cartItemPriceOfOne , value);
                break;
            case "+" :
                setCount(count+1);
                setPrice(price+props.cartItemPriceOfOne);
                props.totalChangeHandler(props.cartItemPriceOfOne , value);
                break;

        }
    }

    useEffect(()=>{
            //условное удаление конпонента из корзины
            count >0 ? setVisible(true) : setVisible(false);
            //при изменении count
        }, [count]
    )

    return(
        <>
            { visible ?
                <div>
                    <img style={{height:'100px',weight: '100px'} } alt={'Pizza_img'} src={props.cartItemImg}/>
                    <h3>{props.cartItemName}</h3>
                    <h3>{price} руб.</h3>
                    <p>{count}</p>
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


                </div> : null
            }

        </>

    )
}


export default function Cart (props){
    let total = 0;
    for (let i in props.CartItems){
        total= total + props.CartItems[i].price_of_one * props.CartItems[i].countValue;

    }
    const [inTotal, setInTotal] = useState(total);

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

    return(
        <div>
            { inTotal ? <div>
                {
                    props.CartItems.map((item,index)=>{
                        return(
                            <CartItem key={index}
                                      cartItemImg={item.img}
                                      cartItemName={item.name}
                                      totalChangeHandler={totalChangeHandler}
                                      cartItemCount={item.countValue}
                                      cartItemPriceOfOne={item.price_of_one}
                            />
                        )
                    })
                }
                <h3>Сумма заказа: {inTotal}</h3>
                <button>Оформить заказ</button>

            </div> : <p>Корзина пуста.</p>

            }

        </div>

    )
}
